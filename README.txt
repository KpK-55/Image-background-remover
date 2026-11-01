STUDY IMAGE EDITOR V7 — PWA INSTALL + TAB LOGO FIX

IMPORTANT: A PWA cannot be installed by opening index.html directly from Downloads/file manager.
It must be hosted on HTTPS (GitHub Pages is suitable) or localhost for development.

Upload the CONTENTS of this folder to the ROOT of your GitHub repository:
- index.html
- manifest.webmanifest
- service-worker.js
- icons/ (all files)

Then:
1. GitHub repository > Settings > Pages.
2. Build and deployment: Deploy from a branch.
3. Branch: main; folder: /(root); Save.
4. Wait until GitHub Pages reports the site is live.
5. Open the published HTTPS address in Chrome (not inside the ChatGPT preview or another in-app browser).
6. Visit once online and wait a few seconds for service-worker registration.
7. Chrome menu (⋮) > Install app. If available, the app also displays an Install app button in its header.
8. If Chrome still shows only Add to Home screen, choose it; menu labels vary by Chrome version/device.

TAB LOGO:
The package includes icons/favicon-32.png and app icons. The tab logo appears after uploading the whole package and refreshing the HTTPS page. A favicon may be cached; clear the site's cached data or open in a private tab to verify.

If install is unavailable:
- Check that the address begins https://
- Check these URLs load without 404:
  /study-image-editor/manifest.webmanifest
  /study-image-editor/service-worker.js
  /study-image-editor/icons/icon-192.png
- Do not upload the ZIP itself; extract it and upload the files/folders preserving the icons folder.
- Use Chrome or another browser with PWA installation support. Some in-app browsers do not support PWA install prompts.

The service worker caches the app shell after the first successful online visit. Image editing remains local to the device.
