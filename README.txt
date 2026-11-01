STUDY IMAGE EDITOR — UPDATED PWA PACKAGE

This version adds:
- Note background choice: light page (dark ink) or dark page (light ink)
- Selective neutral-ink conversion while retaining coloured regions
- Text Cleanup brush to flatten selected label lettering and remove grey halo/shadow pixels
- Zoom in/out, Fit and 100% controls
- Scrollable canvas viewport for inspecting every corner

Publish:
1. Extract this ZIP.
2. Create a GitHub repository and upload ALL package contents to its root.
3. GitHub repository Settings > Pages > Deploy from a branch > main > /(root) > Save.
4. Open the published HTTPS URL in Chrome on Android.
5. Load it once online, then Chrome menu > Install app / Add to Home screen.

Use with Star Note:
1. Open Study Image Editor and load the diagram.
2. Choose the intended note page background in the Colour panel.
3. Use Selective invert for neutral labels/lines, if needed.
4. Choose Text cleanup brush and paint only over label areas to flatten text and remove grey shadow pixels.
5. Zoom to inspect edges and export PNG.
6. Insert the PNG in Star Note using its image insertion control.

Text Cleanup brush is deliberately local: brush over labels only. It can also remove genuine thin strokes if painted over them, so use a small brush and Undo when needed.

The app processes images locally. A PWA needs HTTPS (or localhost) for installation and service-worker offline caching. After its first successful online load, the app shell is cached for offline launch.
