# El Niño Resource Library

Animations, videos, and teaching materials on El Niño from the SDSU Climate Informatics Lab, built with plain HTML, CSS, and JavaScript (no build step).

## Files
| File | What it is |
|---|---|
| `index.html`, `el-nino-2026-27.html`, `southern-california.html`, `library.html`, `learn.html`, `about.html` | The site's pages |
| `resource.html` | One template page for every resource (`resource.html?id=...`) |
| `js/resources.js` | **All resource content — edit this to add or change resources** |
| `js/main.js` | Builds cards, filters, and resource pages from `resources.js` |
| `css/style.css` | All styling |
| `images/` | Put thumbnails, images, and small video files here |
| `.nojekyll` | Tells GitHub Pages to serve the files as-is |

## Preview locally
- **Codespaces:** open a Codespace and the preview starts on port 8000 automatically (set up in `.devcontainer/`).
- **Your own computer:** in this folder run `python3 -m http.server 8000`, then go to http://localhost:8000. Press `Ctrl+C` to stop.
- **Quickest:** double-click `index.html`.

All links are relative, so the same files work on localhost and on GitHub Pages without changes.

## Monthly update
The "Where things stand" box on `el-nino-2026-27.html` uses NOAA's official ENSO status, which changes monthly. After NOAA's ENSO update (2nd Thursday of each month), copy the new alert, outlook and Niño 3.4 value from the [CPC ENSO Discussion](https://www.cpc.ncep.noaa.gov/products/analysis_monitoring/enso_advisory/ensodisc.shtml) and update the dates.
