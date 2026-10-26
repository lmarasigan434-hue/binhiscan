# BinhiScan

## Quick start (no install)
Open **BinhiScan.html** in Chrome or Edge, or host it on GitHub Pages. An internet connection is needed for TensorFlow.js and fonts.

Settings (gear icon, top right) has the Language switch (English / Tagalog) and Scan History. Farmers only scan: tap the center **Scan** button, take or upload a photo of the seed, and read the result and planting guide. There is no training step in the app.

## Training the AI model (developers only)
Training is done offline, not by the users:

1. Put seed photos in `training/dataset/<seed_id>/` (include a `not_seed` folder).
2. Run `python training/check_dataset.py`, then `python training/train.py`.
3. Copy the files from `training/out/tfjs/` (`model.json`, `*.bin`, `labels.json`) into the `model/` folder.
4. Commit and publish. The app loads the model from `model/` automatically.

Until a trained model is in `model/`, the app uses its built-in AI (downloads about 90 MB on the first scan).

## Source files (VS Code)
`index.html` + `style.css` + `seeds.js` + `app.js`. Open with Live Server. The seed list is in `seeds.js`. `BinhiScan.html` is the same app combined into one file.
