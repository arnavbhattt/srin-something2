/* ------------------------------------------------------------------
   for srin ♡  — all the little interactions live here

   ADDING PHOTOS LATER:
   each year below has a `photos` array. to drop in a real picture,
   put the file in assets/ and set its `src`, e.g.
       { src: "assets/beach-day.jpg", caption: "our first trip" }
   leave src as "" and you'll just see a labelled box (great for testing).
   add or remove entries freely — 2 or 3 per year feels about right.
------------------------------------------------------------------ */

const YEARS = [
  {
    kicker: "where it all started",
    title: "Year One",
    photos: [
      { src: "assets/year1-ice-skating.jpg", caption: "One of our first pics together. Wow we were so awkward... remember what we did in the parking lot before ice skating 😉?!" },
      { src: "assets/year1-target.jpg", caption: "Aww target dressing room. You looked extremely cute this day (especially your little strands)" },
      { src: "assets/year1-central-park.jpg", caption: "one of my first times in Central Park! This was truly magical to experience w/ you. We look rly different holyyyy" },
    ],
  },
  {
    kicker: "growing together",
    title: "Year Two",
    photos: [
      { src: "assets/year2-waverly.jpg", caption: "our hangout on top of waverly parking deck before we said goodbye 😞 This was one of my favorite moments with you" },
      { src: "assets/year2-ny-trip.jpg", caption: "NY TRIP AGAIN!! I remember we set up your cam and tried to get the perfect picture haha" },
      { src: "assets/year2-nye-kiss.jpg", caption: "nye kiss 😏The live on this was truly cinematic. Can't wait to kiss you again" },
    ],
  },
  {
    kicker: "deeper still",
    title: "more arbsrin",
    photos: [
      { src: "assets/year3-cat-cafe.jpg", caption: "cat cafe together! I think all the cats were running away from us while we holding the little fishing toy 🤣 Woah look at ur red hair 😍" },
      { src: "assets/year3-raleigh.jpg", caption: "one of your raleigh trips 😺we always did the most random stuff when you came, but I loved having u experience my life at school" },
      { src: "assets/year3-central-park.jpg", caption: "dangg we look good here. peep the hoodie you bought me for my bday! more central park dates to come ✨" },
    ],
  },
  {
    kicker: "and here we are",
    title: "Year Four",
    photos: [
      { src: "assets/year4-ktown-photobooth.jpg", caption: "ktown photobooth! I guess this foreshadowed the cat ears I'm gonna wear this halloween 😈" },
      { src: "assets/year4-seattle.jpg", caption: "seattle trip with my love ❤️ lowk one of the last pics before yk what..." },
      { src: "assets/year4-reunited.jpg", caption: "REUNITED!! I was so happy to have my girl back -- probably the happiest I've been in my life" },
    ],
  },
];

// the two words we're looking for (any casing)
const ANSWER_1 = "behemoth";
const ANSWER_2 = "behemini";

/* ---------------- screen helpers ---------------- */
function showScreen(id) {
  document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
  const el = document.getElementById(id);
  if (el) {
    el.classList.add("active");
    window.scrollTo({ top: 0 });
  }
}

/* ---------------- 1. password ---------------- */
const pwForm = document.getElementById("password-form");
const blank1 = document.getElementById("blank-1");
const blank2 = document.getElementById("blank-2");
const pwError = document.getElementById("password-error");

pwForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const a = blank1.value.trim().toLowerCase();
  const b = blank2.value.trim().toLowerCase();

  if (a === ANSWER_1 && b === ANSWER_2) {
    showScreen("screen-proposal");
  } else {
    pwError.textContent = pickGentleNudge(a, b);
    pwError.classList.add("show");
    pwForm.classList.remove("shake");
    void pwForm.offsetWidth; // restart the animation
    pwForm.classList.add("shake");
  }
});

function pickGentleNudge(a, b) {
  if (!a && !b) return "fill in both, my love";
  // right words, wrong order? give a wink.
  if (a === ANSWER_2 && b === ANSWER_1) return "so close… try swapping them";
  return "not quite… think about us";
}

/* ---------------- 2. proposal ---------------- */
const proposalStage = document.getElementById("proposal-stage");
const yesBtn = document.getElementById("yes-btn");
let yesClicks = 0;

yesBtn.addEventListener("click", () => {
  yesClicks += 1;
  if (yesClicks >= 4) {
    showScreen("screen-message");
    return;
  }
  moveYesButton();
});

function moveYesButton() {
  yesBtn.classList.add("loose");
  const stage = proposalStage.getBoundingClientRect();
  const bw = yesBtn.offsetWidth;
  const bh = yesBtn.offsetHeight;
  const pad = 12;
  const maxX = Math.max(0, stage.width - bw - pad * 2);
  const maxY = Math.max(0, stage.height - bh - pad * 2);
  const x = pad + Math.random() * maxX;
  const y = pad + Math.random() * maxY;
  yesBtn.style.left = x + "px";
  yesBtn.style.top = y + "px";
}

/* floating hearts — sprinkle a handful into any .hearts container */
function spawnHearts(container, count) {
  const glyphs = ["♥", "❤", "💕", "🤍"];
  for (let i = 0; i < count; i++) {
    const h = document.createElement("span");
    h.className = "heart";
    h.textContent = glyphs[Math.floor(Math.random() * glyphs.length)];
    h.style.left = Math.random() * 100 + "%";
    h.style.fontSize = 1 + Math.random() * 1.4 + "rem";
    h.style.animationDuration = 6 + Math.random() * 7 + "s";
    h.style.animationDelay = Math.random() * 6 + "s";
    container.appendChild(h);
  }
}
spawnHearts(document.getElementById("hearts"), 18);
spawnHearts(document.getElementById("hearts-end"), 18);

/* ---------------- year pages (built from YEARS) ---------------- */
const yearsRoot = document.getElementById("years");

YEARS.forEach((year, index) => {
  const section = document.createElement("section");
  section.className = "screen screen-year";
  section.id = "screen-year-" + index;

  const isLast = index === YEARS.length - 1;
  const nextTarget = isLast ? "screen-end" : "screen-year-" + (index + 1);

  const tilts = [-3, 2, -1.5, 3, -2]; // gentle, uneven — not machine-straight

  section.innerHTML = `
    <div class="year-header">
      <p class="year-kicker">${year.kicker}</p>
      <h2 class="year-title">${year.title}</h2>
    </div>
    <div class="year-stage">
      ${year.photos
        .map((p, i) => {
          const tilt = tilts[i % tilts.length];
          const inner = p.src
            ? `<img src="${p.src}" alt="${escapeHtml(p.caption)}" />`
            : `<span class="photo-placeholder">photo</span>`;
          return `
            <figure class="photo" data-photo="${i}">
              <div class="photo-frame" style="--tilt:${tilt}deg; animation-delay:${i * 0.6}s">
                <div class="photo-inner">${inner}</div>
                <figcaption class="photo-caption">${escapeHtml(p.caption)}</figcaption>
              </div>
            </figure>`;
        })
        .join("")}
    </div>
    <p class="tap-hint" data-hint>tap anywhere to reveal the next moment</p>
    <button class="next-btn year-next" data-next="${nextTarget}">next</button>
  `;

  yearsRoot.appendChild(section);
});

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
  );
}

/* reveal photos one tap at a time, per year screen */
function setupYearReveals() {
  document.querySelectorAll('[id^="screen-year-"]').forEach((section) => {
    const photos = Array.from(section.querySelectorAll(".photo"));
    const hint = section.querySelector("[data-hint]");
    const nextBtn = section.querySelector(".year-next");
    let shown = 0;

    const revealNext = () => {
      if (shown >= photos.length) return;
      const justShown = photos[shown];
      justShown.classList.add("revealed");
      shown += 1;
      // on tall / phone screens, ease the new photo into view so the
      // sequential reveal actually reads as sequential
      if (shown > 1) {
        setTimeout(() => {
          justShown.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 120);
      }
      if (shown >= photos.length) {
        if (hint) hint.style.display = "none";
        if (nextBtn) nextBtn.classList.add("show");
        setTimeout(() => {
          if (nextBtn) nextBtn.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 520);
      }
    };

    // clicking the stage area reveals; but not clicks on the next button
    section.addEventListener("click", (e) => {
      if (e.target.closest(".year-next")) return;
      revealNext();
    });

    section._resetReveals = () => {
      photos.forEach((p) => p.classList.remove("revealed"));
      shown = 0;
      if (hint) hint.style.display = "";
      if (nextBtn) nextBtn.classList.remove("show");
    };
  });
}
setupYearReveals();

/* ---------------- music ---------------- */
const song = document.getElementById("song");
const musicToggle = document.getElementById("music-toggle");
let musicStarted = false;

function startMusic() {
  if (musicStarted) return;
  musicStarted = true;
  musicToggle.hidden = false;
  const p = song.play();
  if (p && p.catch) p.catch(() => {/* browser blocked it; toggle is there */});
}

musicToggle.addEventListener("click", () => {
  if (song.paused) {
    song.play();
    musicToggle.classList.remove("muted");
  } else {
    song.pause();
    musicToggle.classList.add("muted");
  }
});

/* ---------------- next / navigation buttons ---------------- */
// any button with data-next advances; entering the first year starts the song
document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-next]");
  if (!btn) return;
  const target = btn.getAttribute("data-next");
  if (target === "screen-year-0") startMusic();
  showScreen(target);
});

/* ---------------- restart ---------------- */
document.getElementById("restart-btn").addEventListener("click", () => {
  // reset everything back to the start
  blank1.value = "";
  blank2.value = "";
  pwError.textContent = "";
  pwError.classList.remove("show");

  yesClicks = 0;
  yesBtn.classList.remove("loose");
  yesBtn.style.left = "";
  yesBtn.style.top = "";

  document.querySelectorAll('[id^="screen-year-"]').forEach((s) => {
    if (s._resetReveals) s._resetReveals();
  });

  song.pause();
  song.currentTime = 0;
  musicStarted = false;
  musicToggle.hidden = true;
  musicToggle.classList.remove("muted");

  showScreen("screen-password");
});
