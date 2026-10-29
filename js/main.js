/* =========================================================
   Site behavior. You normally don't need to edit this file —
   content lives in js/resources.js.
   ========================================================= */

// ---------- Helpers ----------
function esc(s) {
  return String(s ?? "").replace(/[&<>"']/g, c =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
const typeClass = t => "thumb--" + String(t).toLowerCase();
const resourceLink = r => "resource.html?id=" + encodeURIComponent(r.id);
const topicsOf = r => [].concat(r.topic || []);

function cardHTML(r) {
  let img = "";
  if (r.thumbnail) img = `<img src="${esc(r.thumbnail)}" alt="" loading="lazy">`;
  else if (r.youtubeId) img = `<img src="https://i.ytimg.com/vi/${esc(r.youtubeId)}/hqdefault.jpg" alt="" loading="lazy">`;
  else if (r.imageUrl) img = `<img src="${esc(r.imageUrl)}" alt="" loading="lazy">`;
  else if (r.videoUrl) img = `<video src="${esc(r.videoUrl)}#t=0.5" muted playsinline preload="metadata"></video>`;
  return `
    <a class="card" href="${resourceLink(r)}"
       data-type="${esc(r.type)}" data-topic="${esc(topicsOf(r).join("|"))}"
       data-audience="${esc((r.audience || []).join("|"))}"
       data-search="${esc((r.title + " " + r.summary).toLowerCase())}">
      <div class="thumb ${typeClass(r.type)}">
        ${img}
        <span class="badge">${esc(r.type)}</span>
        ${r.duration ? `<span class="duration">${esc(r.duration)}</span>` : ""}
      </div>
      <div class="card-body">
        <p class="card-topic">${esc(topicsOf(r).join(" · "))}</p>
        <h3>${esc(r.title)}</h3>
        <p class="card-summary">${esc(r.summary)}</p>
      </div>
    </a>`;
}

// ---------- Every page: mobile nav + current-page highlight ----------
document.querySelector(".nav-toggle")?.addEventListener("click", e => {
  const open = document.querySelector(".site-nav").classList.toggle("open");
  e.currentTarget.setAttribute("aria-expanded", open);
});
const here = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".site-nav a").forEach(a => {
  if (a.getAttribute("href") === here) a.setAttribute("aria-current", "page");
});

// ---------- Home page ----------
const typeGrid = document.getElementById("type-grid");
if (typeGrid) {
  const blurbs = {
    Animation: "Maps and fields in motion", Video: "Explainers and lectures",
    Image: "Figures and static maps", Interactive: "Explorable visualizations"
    };
  typeGrid.innerHTML = RESOURCE_TYPES.map(t => `
    <a class="type-tile ${typeClass(t)}" href="library.html?type=${encodeURIComponent(t)}">
      <strong>${esc(t)}s</strong>
      <span>${esc(blurbs[t] || "")}</span>
      <em>${RESOURCES.filter(r => r.type === t).length}</em>
    </a>`).join("");

  document.getElementById("view-all").textContent = `View all ${RESOURCES.length} resources →`;
  document.getElementById("featured").innerHTML =
    RESOURCES.filter(r => r.featured).slice(0, 4).map(cardHTML).join("");
}

// ---------- Library page ----------
const results = document.getElementById("results");
if (results) {
  const groups = [["type", "Type", RESOURCE_TYPES], ["topic", "Topic", TOPICS], ["audience", "Audience", AUDIENCES]];
  document.getElementById("filter-groups").innerHTML = groups.map(([name, label, opts]) => `
    <fieldset>
      <legend>${label}</legend>
      ${opts.map(o => `<label><input type="checkbox" name="${name}" value="${esc(o)}"> ${esc(o)}</label>`).join("")}
    </fieldset>`).join("");

  const sorted = [...RESOURCES].sort((a, b) => a.title.localeCompare(b.title));
  results.innerHTML = sorted.map(cardHTML).join("");

  const cards = [...results.querySelectorAll(".card")];
  const boxes = [...document.querySelectorAll(".filters input[type=checkbox]")];
  const search = document.getElementById("search");
  const count = document.getElementById("result-count");
  const empty = document.getElementById("empty");

  // Pre-select filters from the link, e.g. library.html?type=Animation&topic=Impacts
  const params = new URLSearchParams(location.search);
  boxes.forEach(b => { if (params.getAll(b.name).includes(b.value)) b.checked = true; });
  if (params.get("q")) search.value = params.get("q");

  function apply() {
    const sel = {};
    boxes.filter(b => b.checked).forEach(b => (sel[b.name] ??= []).push(b.value));
    const q = search.value.trim().toLowerCase();
    let shown = 0;
    cards.forEach(c => {
      const ok =
        (!sel.type || sel.type.includes(c.dataset.type)) &&
        (!sel.topic || c.dataset.topic.split("|").some(t => sel.topic.includes(t))) &&
        (!sel.audience || c.dataset.audience.split("|").some(a => sel.audience.includes(a))) &&
        (!q || c.dataset.search.includes(q));
      c.hidden = !ok;
      if (ok) shown++;
    });
    count.textContent = `${shown} resource${shown === 1 ? "" : "s"}`;
    empty.hidden = shown > 0;
  }
  function clearAll() { boxes.forEach(b => (b.checked = false)); search.value = ""; apply(); }

  boxes.forEach(b => b.addEventListener("change", apply));
  search.addEventListener("input", apply);
  document.getElementById("clear-filters").addEventListener("click", clearAll);
  document.getElementById("clear-filters-2").addEventListener("click", clearAll);
  document.querySelector(".filters-toggle").addEventListener("click", () =>
    document.querySelector(".filters").classList.toggle("open"));
  apply();
}

// ---------- Resource page ----------
const resourcePage = document.getElementById("resource");
if (resourcePage) {
  const id = new URLSearchParams(location.search).get("id");
  const r = RESOURCES.find(x => x.id === id);

  if (!r) {
    resourcePage.innerHTML = `<h1>Resource not found</h1>
      <p class="lede">That link doesn't match any resource. <a href="library.html">Back to the library</a>.</p>`;
  } else {
    document.title = `${r.title} · El Niño Resource Library`;
    

    let media;
    if (r.youtubeId) media = `<iframe src="https://www.youtube-nocookie.com/embed/${esc(r.youtubeId)}" title="${esc(r.title)}" allowfullscreen></iframe>`;
    else if (r.videoUrl) media = `<video src="${esc(r.videoUrl)}" controls loop playsinline></video>`;
    else if (r.imageUrl) media = `<a href="${esc(r.imageUrl)}" target="_blank" rel="noopener" title="Open full size"><img src="${esc(r.imageUrl)}" alt="${esc(r.title)}"></a>`;
    else if (r.interactiveUrl) media = `<iframe src="${esc(r.interactiveUrl)}" title="${esc(r.title)}" loading="lazy"></iframe>`;
    else media = `<div class="media-placeholder">...`;

    const row = (label, val) => val ? `<dt>${label}</dt><dd>${esc(val)}</dd>` : "";
    const myTopics = topicsOf(r);
    const related = RESOURCES.filter(x => x.id !== r.id && topicsOf(x).some(t => myTopics.includes(t))).slice(0, 3);

    resourcePage.innerHTML = `
      <nav class="crumbs"><a href="library.html">Library</a> / <span>${esc(r.type)}</span></nav>
      <h1>${esc(r.title)}</h1>
      <p class="lede">${esc(r.summary)}</p>
      <div class="resource-grid">
        <div>
          <div class="media ${typeClass(r.type)}">${media}</div>
          <div class="prose">
            ${r.description || ""}
            ${[["What it shows", r.whatItShows], ["How it relates to El Niño", r.howItRelates],
               ["How to read this figure", r.howToRead], ["Data", r.data]]
              .filter(([, v]) => v)
              .map(([label, v]) => `<div class="explain"><h3>${label}</h3><p>${esc(v)}</p></div>`).join("")}
          </div>
        </div>
        <aside class="details">
          ${r.downloadUrl ? `<a class="btn btn-primary btn-block" href="${esc(r.downloadUrl)}">Download ${esc(r.format || "")}</a>` : ""}
          <dl>
            ${row("Type", r.type)}
            ${row("Topic", myTopics.join(", "))}
            ${row("Audience", (r.audience || []).join(", "))}
            ${row("Time period", r.period)}
            ${row("Data source", r.dataSource)}
            ${row("Created by", r.createdBy)}
          </dl>
          ${r.citation ? `
            <div class="cite">
              <p class="cite-label">How to cite</p>
              <p class="cite-text">${esc(r.citation)}</p>
              <button class="btn btn-ghost btn-small" id="copy-cite">Copy citation</button>
            </div>` : ""}
        </aside>
      </div>
      ${related.length ? `
        <section class="related">
          <h2>More on ${esc(myTopics.join(" and "))}</h2>
          <div class="card-grid">${related.map(cardHTML).join("")}</div>
        </section>` : ""}`;

    document.getElementById("copy-cite")?.addEventListener("click", async e => {
      const btn = e.currentTarget;
      try { await navigator.clipboard.writeText(r.citation); btn.textContent = "Copied ✓"; }
      catch { btn.textContent = "Select text to copy"; }
      setTimeout(() => (btn.textContent = "Copy citation"), 2000);
    });
  }
}
