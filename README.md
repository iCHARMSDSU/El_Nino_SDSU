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
| `.github/workflows/deploy.yml` | Publishes the site and downloads the daily globe image |

## Preview locally
- **Codespaces:** open a Codespace and the preview starts on port 8000 automatically (set up in `.devcontainer/`).
- **Your own computer:** in this folder run `python3 -m http.server 8000`, then go to http://localhost:8000. Press `Ctrl+C` to stop.
- **Quickest:** double-click `index.html`.

All links are relative, so the same files work on localhost and on GitHub Pages without changes.

## Monthly update
The "Where things stand" box on `el-nino-2026-27.html` uses NOAA's official ENSO status, which changes monthly. After NOAA's ENSO update (2nd Thursday of each month), copy the new alert, outlook and Niño 3.4 value from the [CPC ENSO Discussion](https://www.cpc.ncep.noaa.gov/products/analysis_monitoring/enso_advisory/ensodisc.shtml) and update the dates.


## Home page globe (updates automatically)
The globe shows NOAA's latest sea surface temperature anomaly and updates itself every day. You don't need to do anything.

- **How it works:** `.github/workflows/deploy.yml` runs twice a day (about 7:17 am and 3:17 pm Pacific) and on every push to `main`. It downloads NOAA's newest final OISST v2.1 anomaly map (about two weeks behind real time), saves it as `images/sst-latest.png` with its date in `images/sst-latest.json`, and publishes the site. These two files are added when the site is published and are never committed to the repo.
- **Run it now:** on GitHub, open the **Actions** tab, then **Publish site**, then **Run workflow**.
- **Check that it worked:** open the latest run, click **publish**, and expand **"Download NOAA's latest sea surface temperature anomaly"**. It should say `Downloaded NOAA image for YYYY-MM-DD`.
- **Backup image:** if NOAA's server is down, or you're previewing on localhost, the globe uses the saved image set by `DATA_IMAGE` and `DATE_LABEL` in `js/globe.js` (currently `images/sst-anomaly-2026-10-23.png`). To replace the backup, download a newer map with the link below (change the date), save it in `images/`, and update those two lines.
  ```
  https://coastwatch.pfeg.noaa.gov/erddap/griddap/ncdcOisst21Agg.transparentPng?anom%5B(2026-10-23T12:00:00Z)%5D%5B(0.0)%5D%5B(-89.875):(89.875)%5D%5B(0.125):(359.875)%5D&.colorBar=BlackWhite%7CC%7CLinear%7C0%7C6%7C&.size=2880%7C1440
  ```
