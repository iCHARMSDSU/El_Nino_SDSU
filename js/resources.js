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
    citation: "Moody, W., SDSU Climate Informatics Lab (2026). Comparing Five Very Strong El Niño Events (1877–2026) [Video]. YouTube. https://youtu.be/yHuUhUuBMwE"
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
  },
  {
    id: "warm-water-layers-animation",
    title: "Layers of Warm Water Along the Equator",
    type: "Animation",
    topic: ["Below the Surface", "Historical Events"],
    audience: ["General Public", "Students", "Educators"],
    summary: "The hottest water has grown the most: the volume warmer than 28 °C is far above normal and above past strong El Niños at the same stage.",
    description: "<p>Animated vertical slices of the upper ocean along the equator, colored by temperature layer, from January of each El Niño's first year to December of the next, for 2026/2027 (to September 2026), 2023/2024, 2015/2016, 1997/1998, 1982/1983 and the 1991–2020 normal. Bars beside each slice show how much water sits in each layer. In September 2026, about 13.7 × 10<sup>14</sup> m³ of water along the equator (5°S–5°N) was warmer than 28 °C.</p>",
    imageUrl: "https://dylhahn.github.io/SCIL-ENSO/ocean/img/05_anim_warm_layers.webp",
    period: "1982–2026",
    dataSource: "NCEP GODAS (NOAA PSL)",
    createdBy: "Dylan Hahn, SDSU Climate Informatics Lab",
    whatItShows: "<p>Equatorial sections colored by temperature layer (20–24, 24–26, 26–28, 28–29 and above 29 °C) for 2026/2027, 2023/2024, 2015/2016, 1997/1998, 1982/1983 and the 1991–2020 normal, with the volume of water in each layer between 5°S and 5°N.</p>",
    howItRelates: "<p>Water above about 28 °C fuels the deep thunderstorms of the tropics. The more of it there is and the farther east it reaches, the farther the tropical rainfall belt shifts, which drives El Niño's effects on weather elsewhere.</p>",
    howToRead: "<p>Each slice runs along the equator from Asia (left) to South America (right) and from 5 m down to 200 m. Colors mark temperature layers, from below 20 °C (dark blue) to above 29 °C (dark red). Compare each year with the Normal panel at the bottom to see how much deeper and farther east the warm layers reach. The bar beside each slice adds up the volume in each layer, warmest on the left.</p>",
    data: "<p>NCEP GODAS ocean reanalysis, monthly temperature to 205 m, via NOAA PSL; sections 2°S–2°N, volumes 5°S–5°N, 120°E–80°W; normal = 1991–2020 mean temperature. <a href=\"https://psl.noaa.gov/data/gridded/data.godas.html\" target=\"_blank\" rel=\"noopener\">NCEP GODAS (NOAA PSL)</a></p>",
    citation: "Hahn, D., SDSU Climate Informatics Lab (2026). Layers of Warm Water Along the Equator [Animation]. https://dylhahn.github.io/SCIL-ENSO/ocean/img/05_anim_warm_layers.webp",
    featured: true
  },
  {
    id: "development-vs-past-el-ninos",
    title: "Development Compared with Every El Niño Since 1950",
    type: "Animation",
    topic: ["Historical Events", "Ocean"],
    audience: ["General Public", "Students", "Educators"],
    summary: "2026/2027 is warmer than every El Niño since 1950 at the same stage, both at the surface and in the upper ocean.",
    videoUrl: "https://dylhahn.github.io/SCIL-ENSO/downloads/anim_timeseries.mp4",
    thumbnail: "https://dylhahn.github.io/SCIL-ENSO/downloads/anim_timeseries.png",
    period: "1950–2026",
    dataSource: "NOAA ERSST v5; NCEP GODAS; NOAA CPC RONI",
    createdBy: "Dylan Hahn, SDSU Climate Informatics Lab",
    whatItShows: "Monthly Niño 3.4, Niño 1+2 and upper-ocean (0–200 m) temperature anomalies for every El Niño since 1950, aligned by onset year and drawn month by month. The box in each panel ranks the current event against all past events at the same stage.",
    howItRelates: "Comparing every event at the same time of year shows whether 2026/2027 is an ordinary strong El Niño or is developing faster and further than past events, which helps judge how strong its peak may become.",
    howToRead: "Each line is one El Niño. The horizontal axis runs from January of the year the event began to December of the following year; the vertical axis shows how much warmer than normal the water was. 2026/2027 is the red line; 2023/2024, 2015/2016, 1997/1998 and 1982/1983 are in color, and all other El Niños since 1950 are gray. A line above the others at a given month means that event was further developed at that point in the year.",
    data: "NOAA ERSST v5 (Niño 3.4 and Niño 1+2 sea surface temperature) and NCEP GODAS (upper-200 m temperature), anomalies from 1991–2020; El Niño events from NOAA CPC's Relative Oceanic Niño Index (RONI).",
    citation: "Hahn, D., SDSU Climate Informatics Lab (2026). Development Compared with Every El Niño Since 1950 [Animation]. https://dylhahn.github.io/SCIL-ENSO/"
  },
  {
    id: "tropical-pacific-3d",
    title: "The Tropical Pacific in 3D: A Normal Year and 2026/2027",
    type: "Animation",
    topic: ["Below the Surface", "Ocean"],
    audience: ["General Public", "Students", "Educators"],
    summary: "In 2026/2027 the warm layer has thickened near South America, so the cold water that normally cools the eastern Pacific stays far below the surface.",
    videoUrl: "https://dylhahn.github.io/SCIL-ENSO/downloads/anim_3d.mp4",
    thumbnail: "https://dylhahn.github.io/SCIL-ENSO/downloads/anim_3d.png",
    period: "2026–2027",
    dataSource: "NCEP GODAS (NOAA PSL)",
    createdBy: "Dylan Hahn, SDSU Climate Informatics Lab",
    whatItShows: "A rotating 3D view of the tropical Pacific in a normal year and in 2026/2027, from January 2026 to the latest month. The top surface is the temperature at 5 m; the lower surface is the base of the warm layer (the depth where the water is 20 °C).",
    howItRelates: "The trade winds normally hold the warm layer deep in the west and shallow in the east. When the winds weaken during El Niño, the warm layer flattens, so cold water no longer reaches the surface near South America and the eastern Pacific warms from below.",
    howToRead: "Each block is the tropical Pacific seen from the southeast, with Asia at the far left and South America at the right. The colored lower surface is the base of the warm layer: red where it lies deep, blue where it is close to the surface. The thin top sheet is the sea surface temperature.",
    data: "NCEP GODAS ocean reanalysis, monthly temperature in 10 m levels to 205 m, via NOAA PSL; normal = 1991–2020 mean temperature.",
    citation: "Hahn, D., SDSU Climate Informatics Lab (2026). The Tropical Pacific in 3D: A Normal Year and 2026/2027 [Animation]. https://dylhahn.github.io/SCIL-ENSO/ocean/"
  },
  {
    id: "kelvin-waves-animation",
    title: "Kelvin Waves Crossing the Pacific",
    type: "Animation",
    topic: ["Kelvin Waves & Sea Level", "Ocean"],
    audience: ["General Public", "Students", "Educators"],
    summary: "A series of Kelvin waves has carried warm water from the western Pacific to South America since late 2025, each one adding to the warm layer in the east.",
    videoUrl: "https://dylhahn.github.io/SCIL-ENSO/downloads/anim_kelvin.mp4",
    thumbnail: "https://dylhahn.github.io/SCIL-ENSO/downloads/anim_kelvin.png",
    period: "2025–2026",
    dataSource: "NOAA blended satellite altimetry (NOAA CoastWatch)",
    createdBy: "Dylan Hahn, SDSU Climate Informatics Lab",
    whatItShows: "Every Kelvin wave since October 2025, traced in daily satellite sea level along the equator. Each pulse raises sea level by a few centimeters as it crosses the Pacific.",
    howItRelates: "Kelvin waves carry warm water from the western to the eastern Pacific. Each one deepens the warm layer in the east and warms the surface there one to two months later, which helps forecasters anticipate further warming.",
    howToRead: "Top: sea level height along the equator on the day shown, rising in the east as warm water piles up. Bottom: the Kelvin-wave signal day by day, with time running down the page, so each wave is a red streak slanting down to the right. White dashed lines trace each wave once it has crossed the Pacific.",
    data: "NOAA blended satellite altimetry, daily sea surface height anomaly (0.25°), averaged over 1°S–1°N, via NOAA CoastWatch ERDDAP; anomalies from the 2017–2024 seasonal cycle.",
    citation: "Hahn, D., SDSU Climate Informatics Lab (2026). Kelvin Waves Crossing the Pacific [Animation]. https://dylhahn.github.io/SCIL-ENSO/kelvin/"
  },
  {
    id: "noaa-forecast-vs-past-events",
    title: "NOAA Forecast Compared with the Strongest Past El Niños",
    type: "Image",
    topic: ["Forecasting", "Historical Events"],
    audience: ["General Public", "Students", "Educators"],
    summary: "NOAA's official outlook places the peak of this event above the strongest El Niño since 1950.",
    imageUrl: "https://dylhahn.github.io/SCIL-ENSO/downloads/roni_vs_past_events.png",
    period: "1972–2027",
    dataSource: "NOAA CPC Relative Oceanic Niño Index (RONI) and official outlook",
    createdBy: "Dylan Hahn, SDSU Climate Informatics Lab",
    whatItShows: "Development of the 2026/2027 event in NOAA's Relative Oceanic Niño Index (RONI) alongside the four strongest El Niño events since 1950, with NOAA's official forecast.",
    howItRelates: "RONI is the index NOAA uses to declare an El Niño and its strength. The forecast shows how strong the event is likely to be at its winter peak, when its effects on North American weather are greatest.",
    howToRead: "The solid red line is 2026/2027 so far, and the dashed red line is NOAA's median forecast. The darker shading shows the middle half of NOAA's forecast range (25–75%), and the lighter shading the wider range (5–95%). Gray lines are the very strong El Niños of 1972/1973, 1982/1983, 1997/1998 and 2015/2016. Dashed horizontal lines mark the strength categories labeled on the right, and the dotted line marks the strongest peak since 1950.",
    data: "NOAA CPC Relative Oceanic Niño Index (RONI) and the official RONI outlook and strength probabilities.",
    citation: "Hahn, D., SDSU Climate Informatics Lab (2026). NOAA Forecast Compared with the Strongest Past El Niños [Image]. https://dylhahn.github.io/SCIL-ENSO/"
  }
];
