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

## Updating the home page globe
1. Download a new NOAA map, changing the date in the link (latest available dates are about 2 weeks old):
   ```
   https://coastwatch.pfeg.noaa.gov/erddap/griddap/ncdcOisst21Agg.transparentPng?anom%5B(2026-10-09T12:00:00Z)%5D%5B(0.0)%5D%5B(-89.875):(89.875)%5D%5B(0.125):(359.875)%5D&.colorBar=BlackWhite%7CC%7CLinear%7C0%7C6%7C&.size=2880%7C1440
   ```
2. Save it in `images/` (e.g. `sst-anomaly-2026-11-15.png`).
3. In `js/globe.js`, update `DATA_IMAGE` and `DATE_LABEL`.

Credits: base map from NASA Blue Marble Next Generation; sea surface temperature from NOAA OISST v2.1; coastlines from Natural Earth.
