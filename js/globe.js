/* =========================================================
   Spinning 3D globe on the home page, styled after iCHARM.

   Layers (drawn into one map, then wrapped around a sphere):
     1. NASA Blue Marble satellite image (land + seafloor)
     2. NOAA sea surface temperature anomaly, shown only where
        the ocean is at least SHOW_FROM °C warmer than normal
     3. White coastlines (js/coastlines.js)

   Needs three.js (loaded in index.html). Preview with Live Server,
   not by double-clicking: browsers block reading image pixels
   from files opened directly.

   To update to a newer date: download a new NOAA image (see
   README), save it in images/, then change DATA_IMAGE and DATE_LABEL.
   ========================================================= */

const GLOBE = {
  BASE_IMAGE: "images/blue-marble-october.jpg",   // NASA Blue Marble, longitude -180 to 180
  DATA_IMAGE: "images/sst-anomaly-2026-10-09.png", // NOAA, grayscale, longitude 0 to 360
  DATE_LABEL: "October 9, 2026",

  // The grayscale NOAA image stores values from DATA_MIN (black) to DATA_MAX (white).
  // These must match the numbers in the download link.
  DATA_MIN: 0,
  DATA_MAX: 6,

  SHOW_FROM: 1.0,   // hide anything less than +1 °C above normal
  COLOR_MIN: 1.0,   // value shown as blue
  COLOR_MAX: 5.0,   // value shown as dark red

  START_LON: 210,      // longitude facing the viewer at start (210°E = 150°W)
  TILT: 0.25,          // tilt the north pole toward the viewer, in radians
  SPIN_SPEED: 0.0012,  // radians per frame; 0 = no spin
  MAP_WIDTH: 4096      // resolution of the combined map (4096 works on most phones)
};

// Rainbow ("jet") colors from blue to dark red, like iCHARM's color bar
function jet(t) {
  t = Math.min(1, Math.max(0, t));
  const stops = [[0, 0, 0, 160], [0.15, 0, 60, 255], [0.35, 0, 220, 255], [0.5, 120, 255, 120],
                 [0.65, 255, 235, 0], [0.85, 255, 40, 0], [1, 150, 0, 0]];
  for (let i = 1; i < stops.length; i++) {
    if (t <= stops[i][0]) {
      const a = stops[i - 1], b = stops[i], f = (t - a[0]) / (b[0] - a[0]);
      return [0, 1, 2].map(k => Math.round(a[k + 1] + f * (b[k + 1] - a[k + 1])));
    }
  }
  return stops[stops.length - 1].slice(1);
}

function loadImage(src) {
  return new Promise(resolve => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => { console.warn("Globe: could not load " + src); resolve(null); };
    img.src = src;
  });
}

// Build one flat map (longitude 0 to 360) from the three layers
async function buildMap() {
  const W = GLOBE.MAP_WIDTH, H = W / 2;
  const map = document.createElement("canvas");
  map.width = W; map.height = H;
  const ctx = map.getContext("2d");

  // 1. Blue Marble. Its left edge is 180°W, so draw it shifted by half a map.
  const base = await loadImage(GLOBE.BASE_IMAGE);
  if (base) {
    ctx.drawImage(base, W / 2, 0, W, H);
    ctx.drawImage(base, -W / 2, 0, W, H);
  } else {
    ctx.fillStyle = "#17324a";
    ctx.fillRect(0, 0, W, H);
  }

  // 2. NOAA anomaly: turn each gray pixel back into a temperature, then color it
  const data = await loadImage(GLOBE.DATA_IMAGE);
  if (data) {
    const layer = document.createElement("canvas");
    layer.width = data.naturalWidth; layer.height = data.naturalHeight;
    const lctx = layer.getContext("2d");
    lctx.drawImage(data, 0, 0);
    const px = lctx.getImageData(0, 0, layer.width, layer.height);
    const d = px.data;
    for (let i = 0; i < d.length; i += 4) {
      if (d[i + 3] === 0) continue;  // land or no data
      const value = GLOBE.DATA_MIN + (d[i] / 255) * (GLOBE.DATA_MAX - GLOBE.DATA_MIN);
      if (value < GLOBE.SHOW_FROM) { d[i + 3] = 0; continue; }
      const [r, g, b] = jet((value - GLOBE.COLOR_MIN) / (GLOBE.COLOR_MAX - GLOBE.COLOR_MIN));
      d[i] = r; d[i + 1] = g; d[i + 2] = b;
      d[i + 3] = Math.round(235 * Math.min(1, (value - GLOBE.SHOW_FROM) / 0.3 + 0.35));  // soft edge
    }
    lctx.putImageData(px, 0, 0);
    ctx.drawImage(layer, 0, 0, W, H);
  }

  // 3. Coastlines
  if (typeof COASTLINES !== "undefined") {
    ctx.strokeStyle = "rgba(255,255,255,0.95)";
    ctx.lineWidth = W / 1000;
    ctx.lineJoin = "round";
    for (const line of COASTLINES) {
      ctx.beginPath();
      let prevX = null;
      for (const [lon, lat] of line) {
        const x = (((lon % 360) + 360) % 360) / 360 * W, y = (90 - lat) / 180 * H;
        if (prevX === null || Math.abs(x - prevX) > W / 2) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        prevX = x;
      }
      ctx.stroke();
    }
  }
  return { map, hasData: !!data };
}

(function () {
  const box = document.querySelector(".hero-media");
  if (!box || !window.THREE) return;  // no globe area, or three.js didn't load: keep the CSS globe

  const canvas = document.createElement("canvas");
  canvas.className = "globe-canvas";
  box.appendChild(canvas);

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  if ("outputEncoding" in renderer) renderer.outputEncoding = THREE.sRGBEncoding;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100);
  camera.position.z = 4.1;

  scene.add(new THREE.AmbientLight(0xffffff, 0.85));
  const sun = new THREE.DirectionalLight(0xffffff, 0.35);
  sun.position.set(-3, 2, 4);
  scene.add(sun);

  const earth = new THREE.Group();
  earth.rotation.x = GLOBE.TILT;
  scene.add(earth);
  const spinner = new THREE.Group();
  spinner.rotation.y = THREE.MathUtils.degToRad(90 - GLOBE.START_LON);  // START_LON faces the viewer
  earth.add(spinner);

  buildMap().then(({ map, hasData }) => {
    const texture = new THREE.CanvasTexture(map);
    if ("encoding" in texture) texture.encoding = THREE.sRGBEncoding;
    texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
    spinner.add(new THREE.Mesh(new THREE.SphereGeometry(1, 128, 96),
                               new THREE.MeshLambertMaterial({ map: texture })));
    box.classList.add("globe-ready");  // hides the CSS placeholder globe
    const date = document.getElementById("globe-date");
    if (date && hasData) date.textContent = GLOBE.DATE_LABEL;
  });

  function resize() {
    const s = box.clientWidth;
    renderer.setSize(s, s, false);
  }
  resize();
  window.addEventListener("resize", resize);

  const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  (function frame() {
    if (!still) spinner.rotation.y += GLOBE.SPIN_SPEED;
    renderer.render(scene, camera);
    requestAnimationFrame(frame);
  })();
})();