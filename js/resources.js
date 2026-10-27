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
       hero: true       makes it the home page's featured animation
   ========================================================= */

const RESOURCE_TYPES = ["Animation", "Video", "Image", "Dataset", "Lesson"];
const TOPICS = ["ENSO Basics", "Ocean", "Below the Surface", "Kelvin Waves & Sea Level", "Atmosphere", "Impacts", "Southern California", "Forecasting", "Historical Events"];
const AUDIENCES = ["General Public", "Students", "Educators", "Researchers"];

const RESOURCES = [
  {
    id: "sst-anomalies-1997-98",
    title: "1997–98 El Niño: Sea Surface Temperature Anomalies",
    type: "Animation",
    topic: "Historical Events",
    audience: ["General Public", "Students", "Educators"],
    summary: "Monthly SST anomalies across the Pacific during one of the strongest El Niño events on record.",
    description: "<p><em>Sample resource. Replace these fields with the real description when the animation is added.</em></p>",
    whatItShows: "Month-by-month sea surface temperature anomalies across the Pacific from early 1997 through 1998.",
    howItRelates: "Watch the warm water spread east along the equator toward South America as the 1997–98 El Niño builds, peaks, and fades.",
    howToRead: "Red means warmer than the 1991–2020 average for that month and blue means cooler. The darker the color, the larger the difference.",
    data: "NOAA OISST v2.1 sea surface temperature.",
    duration: "0:45",
    period: "1997–1998",
    dataSource: "NOAA OISST v2.1",
    createdBy: "SDSU Climate Informatics Lab",
    citation: "SDSU Climate Informatics Lab (2026). 1997–98 El Niño: Sea Surface Temperature Anomalies. El Niño Resource Library.",
    featured: true,
    hero: true
  },
  {
    id: "enso-explained",
    title: "El Niño and La Niña Explained",
    type: "Video",
    topic: "ENSO Basics",
    audience: ["General Public", "Students"],
    summary: "A five-minute introduction to the ENSO cycle, trade winds, and the thermocline.",
    description: "<p><em>Sample resource. Replace this text with a full description: what the viewer is seeing, how to read the colors or axes, and suggested uses.</em></p>",
    duration: "5:12",
    createdBy: "SDSU Climate Informatics Lab",
    citation: "SDSU Climate Informatics Lab (2026). El Niño and La Niña Explained. El Niño Resource Library.",
    featured: true
  },
  {
    id: "ocean-temp-monitoring-2026-27",
    title: "Ocean Water Temperature Monitoring of the 2026/27 Super El Niño",
    type: "Video",
    topic: "Ocean",
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
  }
];
