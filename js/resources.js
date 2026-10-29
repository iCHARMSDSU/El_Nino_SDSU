/* =========================================================
   RESOURCES — the only file you edit to add or change content.

   To add a resource: copy one { ... } block, paste it at the end
   of the list (before the closing ];), and change the values.
   Remember the comma between blocks.

   Fields
     id          short unique name, no spaces (used in the page link)
     title       shown on cards and the resource page
     type        one of RESOURCE_TYPES below
     topic       one of TOPICS below
     audience    list of one or more AUDIENCES below
     summary     one sentence for the card
     description longer text for the resource page (HTML allowed)
     Media — set ONE of:
       youtubeId   the part after youtu.be/  (e.g. "LUwBouKryt8")
       videoUrl    link to an .mp4 file (or "images/my-file.mp4")
       imageUrl    link to an image (or "images/my-file.png")
     Optional
       thumbnail   card image (YouTube videos get one automatically)
       duration    e.g. "0:45"
       period      e.g. "1997–1998"
       dataSource  e.g. "NOAA OISST v2.1"
      createdBy
       Figure explanation (each shows as its own labeled block):
         whatItShows   what the viewer is looking at
         howItRelates  how it connects to El Niño
         howToRead     colors, axes, units, what to look for
         data          the dataset(s) behind it
       downloadUrl, format  adds a Download button
       citation    adds a "How to cite" box with a copy button
       featured: true   shows it on the home page
   ========================================================= */

const RESOURCE_TYPES = ["Animation", "Video", "Image", "Interactive"];
const TOPICS = ["ENSO Basics", "Ocean", "Below the Surface", "Kelvin Waves & Sea Level", "Atmosphere", "Impacts", "Southern California", "Forecasting", "Historical Events"];
const AUDIENCES = ["General Public", "Students", "Educators", "Researchers"];

const RESOURCES = [
  {
    id: "ocean-temp-monitoring-2026-27",
    title: "Ocean Water Temperature Monitoring of the 2026/27 Super El Niño",
    type: "Video",
    topic: ["Ocean", "Below the Surface"],
    audience: ["General Public", "Students", "Educators"],
    summary: "Tracking Pacific ocean water temperatures as the 2026/27 super El Niño develops.",
    description: "<p>Monitoring of Pacific ocean water temperatures during the 2026/27 super El Niño, produced by SDSU's Climate Informatics Lab.</p>",
    youtubeId: "LUwBouKryt8",
    period: "2026–2027",
    createdBy: "SDSU Climate Informatics Lab",
    citation: "Moody, W., SDSU Climate Informatics Lab (2026). Ocean Water Temperature Monitoring of 2026/27 Super El Niño [Video]. YouTube. https://youtu.be/LUwBouKryt8",
    featured: true
  },
  {
    id: "sst-monitoring-2026-27",
    title: "Sea Surface Temperature Monitoring of the 2026/27 Super El Niño",
    type: "Video",
    topic: "Ocean",
    audience: ["General Public", "Students", "Educators"],
    summary: "Tracking sea surface temperatures across the Pacific as the 2026/27 super El Niño develops.",
    description: "<p>Monitoring of Pacific sea surface temperatures during the 2026/27 super El Niño, produced by SDSU's Climate Informatics Lab.</p>",
    youtubeId: "p6AdLhFutNU",
    period: "2026–2027",
    createdBy: "SDSU Climate Informatics Lab",
    citation: "Moody, W., SDSU Climate Informatics Lab (2026). Sea Surface Temperature Monitoring of 2026/27 Super El Niño [Video]. YouTube. https://youtu.be/p6AdLhFutNU",
    featured: true
  },
  {
    id: "five-strong-el-nino-1877-2026",
    title: "Comparing Five Very Strong El Niño Events (1877–2026)",
    type: "Video",
    topic: "Historical Events",
    audience: ["General Public", "Students", "Educators"],
    summary: "How the 2026 El Niño compares with four of the strongest events on record, from 1877 to the present.",
    description: "<p>This animation shows five very strong El Niño events side by side on a globe: 1877–78, 1982–83, 1997–98, 2015–16, and 2026. Each one shows monthly sea surface temperature anomalies across the Pacific. A chart of the regional average then puts all five years on one timeline. In early September 2026, the event was running more than a degree ahead of 2015–16 at the same point, and it set a new daily Niño 3.4 record on September 21.</p>",
    youtubeId: "yHuUhUuBMwE",
    period: "1877–2026",
    dataSource: "NOAA Global Surface Temperature (NOAAGlobalTemp)",
    createdBy: "SDSU Climate Informatics Lab",
    citation: "Moody, W., SDSU Climate Informatics Lab (2026). Comparing Five Very Strong El Niño Events (1877–2026) [Video]. YouTube. https://youtu.be/yHuUhUuBMwE",
    featured: true
  },
    {
    id: "wind-bursts-hovmoller",
    title: "Westerly wind bursts along the equator",
    type: "Image",
    topic: "Kelvin Waves & Sea Level",           
    audience: ["General Public", "Students", "Educators"],
    summary: "Daily equatorial wind anomalies show the westerly wind bursts that built the 2026/2027 El Niño, compared with 2023/2024, 2015/2016 and 1997/1998.",
    description: "<p>A Hovmöller diagram of daily surface wind along the equator, from October of the year before each El Niño to January after its first year. Red streaks are westerly wind bursts. From October 2025 to 30 September 2026 there were 7 bursts, compared with 6 in 2022/2023, 10 in 2014/2015 and 6 in 1996/1997 over the same part of the year.</p>",
    whatItShows: "Daily surface wind along the equator compared with normal, from October of the year before each El Niño to January after its first year, for 2026/2027, 2023/2024, 2015/2016 and 1997/1998: red streaks are westerly wind bursts.",
    howItRelates: "The trade winds normally pile warm water up in the western Pacific. Westerly wind bursts briefly reverse them, sending pulses of warm water east as Kelvin waves; repeated bursts, and the weakening of the trade winds as the ocean warms, are what turn a developing El Niño into a strong one.",
    howToRead: "Time runs down the page, one row per day, from October of the year before each El Niño; position runs left to right from the western Pacific to South America. Red streaks are westerly wind bursts: spells of wind blowing toward South America, against the usual trade winds. Each strong burst is followed by a Kelvin wave in the figures below.",
    data: "NOAA NCEI Blended Sea Winds v2, daily 10 m zonal wind (0.25°), averaged over 5°S–5°N; anomalies from the NCEI 1991–2020 monthly climatology; 5-day running means.",
    imageUrl: "https://dylhahn.github.io/SCIL-ENSO/kelvin/img/01_hovmoller_winds.png",
    createdBy: "Dylan Hahn, SDSU Climate Informatics Lab",
    citation: "Hahn, D., SDSU Climate Informatics Lab (2026). Westerly wind bursts along the equator before and during major El Niño events. Data: NOAA NCEI Blended Sea Winds v2.",
    featured: true
  },
  {
    id: "sst-animation-surface",
    title: "Sea Surface Temperature Animation",
    type: "Animation",
    topic: "Ocean",
    audience: ["General Public", "Students", "Educators"],
    summary: "Warm water, normally confined to the western Pacific, spreads farther east along the equator than in past very strong El Niño events.",
    description: "<p>Animated month-by-month sea surface temperature across the tropical Pacific, from January of each El Niño's first year to December of the next, for 2026/2027 (to September 2026), 2023/2024, 2015/2016, 1997/1998, 1982/1983 and the 1991–2020 normal. In September of the first year, the Niño 3.4 region averaged 29.7 °C in 2026/2027, 28.3 °C in 2023/2024, 28.5 °C in 2015/2016, 28.6 °C in 1997/1998, 28.0 °C in 1982/1983, and 26.7 °C normally.</p>",
    imageUrl: "https://dylhahn.github.io/SCIL-ENSO/surface/img/01_anim_sst.webp",
    period: "1982–2026",
    dataSource: "NOAA OISST v2.1",
    whatItShows: "Animated month-by-month sea surface temperature across the tropical Pacific, from January of each El Niño's first year to December of the next, for 2026/2027, 2023/2024, 2015/2016, 1997/1998, 1982/1983 and the 1991–2020 normal, with the Niño 3.4 average for each.",
    howItRelates: "El Niño is defined by unusually warm water in the central and eastern equatorial Pacific. As the warm water spreads east, the rising air and heavy rain that normally sit over the western Pacific move east with it, which shifts weather patterns around the world.",
    data: "NOAA OISST v2.1 monthly mean sea surface temperature (0.25°), via NOAA PSL; normal = OISST 1991–2020 monthly mean.",
    createdBy: "Dylan Hahn, SDSU Climate Informatics Lab",
    citation: "Hahn, D., SDSU Climate Informatics Lab (2026). Sea Surface Temperature Animation [Animation]. https://dylhahn.github.io/SCIL-ENSO/surface/img/01_anim_sst.webp"
  },
  {
    id: "august-sst-comparison-2026",
    title: "Tropical Pacific Sea Surface Temperature in August: 2026 and Past Strong Events",
    type: "Image",
    topic: ["Ocean", "Historical Events"],
    audience: ["General Public", "Students", "Educators"],
    summary: "August sea surface temperatures in 2026 compared with four past strong El Niño years.",
    description: "<p>August sea surface temperature maps of the tropical Pacific for 2026 and four past strong El Niño events: 2023, 2015, 1997, and 1982. In August 2026 the Niño 3.4 anomaly reached +2.1 °C, the highest of the five years at this stage. However, the whole tropics (20°S–20°N) were also +0.8 °C, warmer than in any previous event. Measured relative to the tropics, as NOAA's Relative Oceanic Niño Index (RONI) does, the 2026 anomaly is +1.3 °C. That compares with 2023 +0.6, 2015 +1.3, 1997 +1.6, and 1982 +0.9.</p>",
    imageUrl: "https://dylhahn.github.io/SCIL-ENSO/surface/img/02_surface_comparison.png",
    period: "1982–2026",
    dataSource: "NOAA ERSST v5; NOAAGlobalTemp v6",
    createdBy: "Dylan Hahn, SDSU Climate Informatics Lab",
    whatItShows: "<p>Five maps of actual sea surface temperature (not anomalies) across the tropical Pacific in August of each El Niño year, with 2026 outlined in red.</p>",
    howItRelates: "<p>El Niño is measured by how much warmer than normal the Niño 3.4 region is. Because the whole tropical ocean has warmed, comparing Niño 3.4 to the tropical average (RONI) gives a fairer comparison between recent and past events.</p>",
    howToRead: "<p>Colors show temperature from 18 °C (dark blue) to above 30 °C (dark red). The black box marks the Niño 3.4 region. The numbers above each map give the Niño 3.4 anomaly and the whole-tropics anomaly for that August, relative to the 1991–2020 normal.</p>",
    data: "<p>Maps: NOAA ERSST v5 monthly sea surface temperature (2° grid, smoothed for display). Anomaly values: NOAAGlobalTemp v6, relative to the 1991–2020 monthly normal.</p>",
    citation: "Hahn, D., SDSU Climate Informatics Lab (2026). Tropical Pacific Sea Surface Temperature in August: 2026 and Past Strong Events [Image]. https://dylhahn.github.io/SCIL-ENSO/surface/img/02_surface_comparison.png"
  },
  {
    id: "nino-regions-warming-2026",
    title: "Warming Across the Niño Regions",
    type: "Image",
    topic: ["Ocean", "Historical Events"],
    audience: ["General Public", "Students", "Educators"],
    summary: "Warming is strongest near South America and weakest in the western Pacific, a pattern closest to 1997/1998.",
    description: "<p>Monthly sea surface temperature anomalies in the four standard Niño regions, from the western–central Pacific to the coast of Peru and Ecuador, for 2026/2027 and three past strong El Niño events (1982/1983, 1997/1998, 2015/2016). In September 2026 the warming was concentrated in the east: +4.7 °C in Niño 1+2 versus +0.9 °C in Niño 4. This eastern-Pacific pattern is closest to 1997/1998 but larger in every region.</p>",
    imageUrl: "https://dylhahn.github.io/SCIL-ENSO/surface/img/03_nino_regions.png",
    period: "1982–2026",
    dataSource: "NOAA CPC monthly Niño indices (OISST v2.1)",
    createdBy: "Dylan Hahn, SDSU Climate Informatics Lab",
    whatItShows: "<p>Location of the four Niño regions and their monthly anomalies, showing where along the equator the warming is concentrated.</p>",
    howItRelates: "<p>Where the warming is strongest matters: El Niños that peak near South America and those that peak in the central Pacific affect weather in different ways.</p>",
    howToRead: "<p>The map shows the four standard boxes along the equator, from Niño 4 (the western–central equatorial Pacific, 5°S–5°N, 160°E–150°W) in the west to Niño 1+2 (off the coasts of Peru and Ecuador, 10°S–0°, 90°W–80°W). Each chart plots how much warmer than normal one box has been, month by month. The red line is 2026/2027, and the dashed line marks September of the onset year. The second “Jan” on each axis is January of the following year.</p>",
    data: "<p>NOAA CPC monthly Niño region indices (from OISST v2.1), anomalies from 1991–2020. <a href=\"https://www.cpc.ncep.noaa.gov/data/indices/sstoi.indices\" target=\"_blank\" rel=\"noopener\">Monthly Niño region indices (NOAA CPC)</a></p>",
    citation: "Hahn, D., SDSU Climate Informatics Lab (2026). Warming Across the Niño Regions [Image]. https://dylhahn.github.io/SCIL-ENSO/surface/img/03_nino_regions.png"
  }
];
