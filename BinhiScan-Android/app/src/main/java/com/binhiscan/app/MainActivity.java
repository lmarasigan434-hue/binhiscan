package com.binhiscan.app;

import android.Manifest;
import android.annotation.SuppressLint;
import android.content.Intent;
import android.content.pm.ApplicationInfo;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.provider.MediaStore;
import android.webkit.PermissionRequest;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import androidx.activity.OnBackPressedCallback;
import androidx.activity.result.ActivityResultLauncher;
import androidx.activity.result.contract.ActivityResultContracts;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.content.ContextCompat;
import androidx.core.content.FileProvider;
import androidx.core.splashscreen.SplashScreen;
import androidx.webkit.WebViewAssetLoader;

import java.io.File;

public class MainActivity extends AppCompatActivity {

    private static final String HOST = "appassets.androidplatform.net";
    private static final String START_URL = "https://" + HOST + "/assets/www/index.html";

    private WebView web;
    private boolean ready = false;
    private PermissionRequest pendingPerm;
    private ValueCallback<Uri[]> fileCb;
    private Uri camUri;

    private final ActivityResultLauncher<String> camPerm = registerForActivityResult(
            new ActivityResultContracts.RequestPermission(), granted -> {
                if (pendingPerm != null) {
                    if (granted) {
                        pendingPerm.grant(new String[]{PermissionRequest.RESOURCE_VIDEO_CAPTURE});
                    } else {
                        pendingPerm.deny();
                    }
                    pendingPerm = null;
                }
            });

    private final ActivityResultLauncher<Intent> fileLauncher = registerForActivityResult(
            new ActivityResultContracts.StartActivityForResult(), res -> {
                if (fileCb == null) return;
                Uri[] out = null;
                if (res.getResultCode() == RESULT_OK) {
                    Intent d = res.getData();
                    if (camUri != null && (d == null || d.getData() == null)) {
                        out = new Uri[]{camUri};
                    } else {
                        out = WebChromeClient.FileChooserParams.parseResult(res.getResultCode(), d);
                    }
                }
                fileCb.onReceiveValue(out);
                fileCb = null;
                camUri = null;
            });

    @SuppressLint("SetJavaScriptEnabled")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen splash = SplashScreen.installSplashScreen(this);
        super.onCreate(savedInstanceState);

        // Nakatigil ang splash hanggang lumabas ang system (may 3s safety limit)
        splash.setKeepOnScreenCondition(() -> !ready);
        new Handler(Looper.getMainLooper()).postDelayed(() -> ready = true, 3000);

        boolean debuggable = (getApplicationInfo().flags & ApplicationInfo.FLAG_DEBUGGABLE) != 0;
        WebView.setWebContentsDebuggingEnabled(debuggable);

        web = new WebView(this);
        web.setBackgroundColor(ContextCompat.getColor(this, R.color.app_bg));
        setContentView(web);

        WebSettings s = web.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);
        s.setMediaPlaybackRequiresUserGesture(false);
        s.setAllowFileAccess(false);
        s.setAllowContentAccess(true);
        s.setTextZoom(100);
        s.setUserAgentString(s.getUserAgentString() + " BinhiScanApp/1.0");

        final WebViewAssetLoader loader = new WebViewAssetLoader.Builder()
                .setDomain(HOST)
                .addPathHandler("/assets/", new WebViewAssetLoader.AssetsPathHandler(this))
                .build();

        web.setWebViewClient(new WebViewClient() {
            @Override
            public WebResourceResponse shouldInterceptRequest(WebView view, WebResourceRequest request) {
                return loader.shouldInterceptRequest(request.getUrl());
            }

            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                Uri u = request.getUrl();
                if (HOST.equals(u.getHost())) return false;
                try {
                    startActivity(new Intent(Intent.ACTION_VIEW, u));
                } catch (Exception ignored) {
                }
                return true;
            }

            @Override
            public void onPageFinished(WebView view, String url) {
                ready = true;
            }
        });

        web.setWebChromeClient(new WebChromeClient() {
            @Override
            public void onPermissionRequest(final PermissionRequest request) {
                runOnUiThread(() -> {
                    boolean wantsCam = false;
                    for (String r : request.getResources()) {
                        if (PermissionRequest.RESOURCE_VIDEO_CAPTURE.equals(r)) wantsCam = true;
                    }
                    if (!wantsCam || !HOST.equals(request.getOrigin().getHost())) {
                        request.deny();
                        return;
                    }
                    if (ContextCompat.checkSelfPermission(MainActivity.this, Manifest.permission.CAMERA)
                            == PackageManager.PERMISSION_GRANTED) {
                        request.grant(new String[]{PermissionRequest.RESOURCE_VIDEO_CAPTURE});
                    } else {
                        pendingPerm = request;
                        camPerm.launch(Manifest.permission.CAMERA);
                    }
                });
            }

            @Override
            public boolean onShowFileChooser(WebView view, ValueCallback<Uri[]> cb, FileChooserParams p) {
                if (fileCb != null) fileCb.onReceiveValue(null);
                fileCb = cb;
                camUri = null;
                try {
                    Intent intent;
                    boolean camOk = ContextCompat.checkSelfPermission(MainActivity.this,
                            Manifest.permission.CAMERA) == PackageManager.PERMISSION_GRANTED;
                    if (p.isCaptureEnabled() && camOk) {
                        File dir = new File(getCacheDir(), "cap");
                        //noinspection ResultOfMethodCallIgnored
                        dir.mkdirs();
                        File f = File.createTempFile("scan_", ".jpg", dir);
                        camUri = FileProvider.getUriForFile(MainActivity.this,
                                getPackageName() + ".fileprovider", f);
                        intent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
                        intent.putExtra(MediaStore.EXTRA_OUTPUT, camUri);
                    } else {
                        intent = p.createIntent();
                    }
                    fileLauncher.launch(intent);
                } catch (Exception e) {
                    fileCb = null;
                    camUri = null;
                    cb.onReceiveValue(null);
                    return false;
                }
                return true;
            }
        });

        getOnBackPressedDispatcher().addCallback(this, new OnBackPressedCallback(true) {
            @Override
            public void handleOnBackPressed() {
                web.evaluateJavascript(
                        "(function(){try{return window.__bsBack?window.__bsBack():false}catch(e){return false}})()",
                        value -> {
                            if (!"true".equals(value)) {
                                setEnabled(false);
                                getOnBackPressedDispatcher().onBackPressed();
                            }
                        });
            }
        });

        if (savedInstanceState == null) {
            web.loadUrl(START_URL);
        } else {
            web.restoreState(savedInstanceState);
        }
    }

    @Override
    protected void onSaveInstanceState(Bundle outState) {
        super.onSaveInstanceState(outState);
        if (web != null) web.saveState(outState);
    }

    @Override
    protected void onPause() {
        super.onPause();
        if (web != null) web.onPause();
    }

    @Override
    protected void onResume() {
        super.onResume();
        if (web != null) web.onResume();
    }

    @Override
    protected void onDestroy() {
        if (web != null) {
            web.destroy();
            web = null;
        }
        super.onDestroy();
    }
}
