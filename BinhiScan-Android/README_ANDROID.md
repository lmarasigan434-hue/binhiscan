# BinhiScan – Android Studio project

## Paano buksan at i-run
1. Buksan ang **Android Studio** > **Open** > piliin ang folder na `BinhiScan-Android` (ang may `settings.gradle`).
2. Hintayin ang **Gradle Sync** (kailangan ng internet sa unang sync). Kung may lumabas na "Update Android Gradle Plugin", pindutin ang **Update**.
3. Ikabit ang phone (USB debugging ON) o gumamit ng emulator, tapos pindutin ang ▶ **Run**.

## Ano ang nandito
- **Logo ng app**: ang orihinal na logo ng BinhiScan (nasa `app/src/main/res/mipmap-*`). Adaptive icon ito kaya bagay sa lahat ng hugis ng Android launcher.
- **Pagbukas ng app**: direkta nang system ng BinhiScan ang lalabas. Ang native splash ay dark-green na may logo at nawawala agad kapag handa na ang system. Wala nang default na splash o logo ng Capacitor.
- **Web code**: nasa `app/src/main/assets/www/`. Kapag may binago ka sa `index.html`, `app.js`, `style.css`, `seeds.js` o `model/`, doon mo i-edit/palitan, tapos i-Run ulit.
- Gumagana ang camera (live scan), upload photo, at ang Back button ng Android.

## DAPAT GAWIN BAGO I-RELEASE: tf.min.js
Wala ang `tf.min.js` sa project na ito. Kung wala ito, kukunin ng app ang TensorFlow.js sa internet.
Para gumana ang scan kahit offline: i-download ang
`https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@4.17.0/dist/tf.min.js`
at i-save sa `app/src/main/assets/www/lib/tf.min.js`.

## Kung gusto mong palitan ang dati mong na-install na app
Ang package name dito ay `com.binhiscan.app`. Kung iba ang gamit mo dati, palitan ang `applicationId` sa `app/build.gradle` (at i-uninstall muna ang luma kung iba ang signing key).

## Gumawa ng APK / AAB
- Test APK: **Build > Build Bundle(s) / APK(s) > Build APK(s)**
- Play Store: **Build > Generate Signed Bundle / APK** (gumawa ng keystore at itago ito nang ligtas).
- Para sa Play Store, nandito rin ang `ic_launcher-playstore.png` (512x512).

## Kung Capacitor pa rin ang gamit mo
Kopyahin ang laman ng `app/src/main/res/mipmap-*` at `drawable-nodpi/splash_logo.png` sa `android/app/src/main/res/` ng Capacitor project mo para mapalitan ang icon. Ilagay ang laman ng `assets/www` sa `www/` ng project mo.
