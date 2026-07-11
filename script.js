/* =================================================================
   FOREVER, PUCHUU — SCRIPT
   Modular vanilla JS. No frameworks, no external libraries.
   ================================================================= */

document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initAmbientBackground();
  initMouseGlow();
  initScrollReveal();
  initReasons();
  initPromises();
  initHiddenHeartGame();
  initLoveLetter();
  initCounter();
  initFinale();
});

/* -----------------------------------------------------------------
   1. LOADING SCREEN
   ----------------------------------------------------------------- */
function initLoader() {
  const loader = document.getElementById('loader');
  const site = document.getElementById('site');

  window.setTimeout(() => {
    loader.classList.add('hide');
    site.hidden = false;
    // Let scroll reveal pick up hero elements already in view
    window.dispatchEvent(new Event('scroll'));
  }, 4000);

  const beginBtn = document.getElementById('beginBtn');
  beginBtn.addEventListener('click', () => {
    const apology = document.getElementById('apology');
    apology.scrollIntoView({ behavior: 'smooth' });
  });
}

/* -----------------------------------------------------------------
   2. AMBIENT BACKGROUND — floating hearts + sparkles
   ----------------------------------------------------------------- */
function initAmbientBackground() {
  const heartsWrap = document.getElementById('bgHearts');
  const sparklesWrap = document.getElementById('bgSparkles');
  const HEART_COUNT = 14;
  const SPARKLE_COUNT = 30;

  for (let i = 0; i < HEART_COUNT; i++) {
    const heart = document.createElement('span');
    heart.className = 'floating-heart';
    heart.textContent = '❤';
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.fontSize = `${10 + Math.random() * 18}px`;
    heart.style.animationDuration = `${14 + Math.random() * 12}s`;
    heart.style.animationDelay = `${Math.random() * 16}s`;
    heartsWrap.appendChild(heart);
  }

  for (let i = 0; i < SPARKLE_COUNT; i++) {
    const sparkle = document.createElement('span');
    sparkle.className = 'sparkle';
    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.top = `${Math.random() * 100}%`;
    sparkle.style.animationDuration = `${2 + Math.random() * 3}s`;
    sparkle.style.animationDelay = `${Math.random() * 5}s`;
    sparklesWrap.appendChild(sparkle);
  }
}

/* -----------------------------------------------------------------
   3. MOUSE GLOW (desktop only — hidden via CSS on touch devices)
   ----------------------------------------------------------------- */
function initMouseGlow() {
  const glow = document.getElementById('mouseGlow');
  window.addEventListener('mousemove', (e) => {
    glow.style.left = `${e.clientX}px`;
    glow.style.top = `${e.clientY}px`;
  });
}

/* -----------------------------------------------------------------
   4. SCROLL REVEAL
   ----------------------------------------------------------------- */
function initScrollReveal() {
  const targets = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  targets.forEach((el) => observer.observe(el));
}

/* -----------------------------------------------------------------
   5. REASONS I LOVE YOU (50 unique reasons)
   ----------------------------------------------------------------- */
function initReasons() {
  const reasons = [
    "Because your smile can fix my worst day.",
    "Because you always stay in my thoughts, even in the middle of ordinary things.",
    "Because life feels lighter with you.",
    "Because you listen like what I'm saying actually matters.",
    "Because you say sorry first, even when it's hard.",
    "Because your laugh is the most honest sound I know.",
    "Because you remember the small things I mention only once.",
    "Because you make quiet evenings feel like an event.",
    "Because you're kind to people who can't do anything for you.",
    "Because you ask 'did you eat?' before you ask anything else.",
    "Because you never make me feel small for feeling too much.",
    "Because your voice is the last thing I want to hear before sleep.",
    "Because you fight fair, even when you're upset.",
    "Because you cry at things that matter and I love that about you.",
    "Because you're braver than you think you are.",
    "Because you make me want to be a better version of myself.",
    "Because your hands feel like home.",
    "Because you notice when I go quiet.",
    "Because you never let a joke go too far at someone else's expense.",
    "Because you still get shy sometimes, and it's the sweetest thing.",
    "Because you believe in me on days I don't believe in myself.",
    "Because you say what you mean instead of playing games.",
    "Because you dance a little when a song you love comes on.",
    "Because your patience with me is a kind of quiet miracle.",
    "Because you make ordinary Tuesdays feel worth remembering.",
    "Because you never let me apologize for taking up space.",
    "Because you keep your promises, even the small ones.",
    "Because you're curious about the world, not just comfortable in it.",
    "Because you forgive without keeping score.",
    "Because you're the same person on your worst day as your best.",
    "Because you make me laugh at the exact moment I need to.",
    "Because your hugs solve arguments better than words do.",
    "Because you never left when things got complicated.",
    "Because you ask questions instead of assuming the worst of me.",
    "Because you love your people fiercely.",
    "Because you still get excited over small surprises.",
    "Because you're honest even when a lie would be easier.",
    "Because your presence is calming, not demanding.",
    "Because you never made me choose between you and my growth.",
    "Because you say 'we' when you talk about the future.",
    "Because you take care of people without being asked to.",
    "Because you make me feel chosen, not just loved.",
    "Because you understand silence as much as conversation.",
    "Because you never lost your softness, even when the world got hard on you.",
    "Because your trust in me feels like a responsibility I want to keep.",
    "Because you show up, even on the days it would be easier not to.",
    "Because you make me believe forever is a reasonable thing to promise.",
    "Because you're my favorite person to tell good news to first.",
    "Because loving you has taught me what patience actually means.",
    "Because, simply, you are the reason I believe in us."
  ];

  const grid = document.getElementById('reasonsGrid');
  const frag = document.createDocumentFragment();

  reasons.forEach((text, i) => {
    const card = document.createElement('div');
    card.className = 'glass-card reason-card reveal';
    card.style.animationDelay = `${(i % 6) * 0.4}s`;
    card.textContent = text;
    frag.appendChild(card);
  });

  grid.appendChild(frag);

  // Re-run scroll reveal for the newly injected cards
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  grid.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}

/* -----------------------------------------------------------------
   6. PROMISES
   ----------------------------------------------------------------- */
function initPromises() {
  const promises = [
    "I promise to listen before judging.",
    "I promise to protect your peace.",
    "I promise to respect your dreams, even the ones I don't fully understand yet.",
    "I promise to keep choosing you, on the easy days and the hard ones.",
    "I promise to say sorry first when I'm wrong.",
    "I promise to never make you feel alone in a room with me in it.",
    "I promise to celebrate your wins as loudly as my own.",
    "I promise to give you space when you need it, without taking it personally.",
    "I promise to keep learning how to love you better.",
    "I promise to fight for us, not against you.",
    "I promise to remember the little things that matter to you.",
    "I promise to be honest, even when it's uncomfortable."
  ];

  const grid = document.getElementById('promisesGrid');
  const frag = document.createDocumentFragment();

  promises.forEach((text) => {
    const card = document.createElement('div');
    card.className = 'glass-card promise-card reveal';
    card.textContent = text;
    frag.appendChild(card);
  });

  grid.appendChild(frag);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  grid.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}

/* -----------------------------------------------------------------
   7. HIDDEN HEART GAME
   ----------------------------------------------------------------- */
function initHiddenHeartGame() {
  const field = document.getElementById('heartgameField');
  const heart = document.getElementById('hiddenHeart');
  const modal = document.getElementById('heartModal');
  const closeModalBtn = document.getElementById('closeHeartModal');

  // Randomize the hidden heart's position within the field once it's visible
  function placeHeart() {
    const fieldRect = field.getBoundingClientRect();
    const maxX = Math.max(fieldRect.width - 40, 10);
    const maxY = Math.max(fieldRect.height - 40, 10);
    heart.style.left = `${10 + Math.random() * (maxX / fieldRect.width) * 100 * 0.8}%`;
    heart.style.top = `${10 + Math.random() * (maxY / fieldRect.height) * 100 * 0.8}%`;
  }
  placeHeart();
  window.addEventListener('resize', placeHeart);

  heart.addEventListener('click', () => {
    modal.hidden = false;
    spawnHeartBurst(heart);
  });

  closeModalBtn.addEventListener('click', () => { modal.hidden = true; });
  modal.addEventListener('click', (e) => { if (e.target === modal) modal.hidden = true; });
}

function spawnHeartBurst(originEl) {
  const rect = originEl.getBoundingClientRect();
  const originX = rect.left + rect.width / 2;
  const originY = rect.top + rect.height / 2;
  const count = 14;

  for (let i = 0; i < count; i++) {
    const piece = document.createElement('span');
    piece.className = 'heart-burst';
    piece.textContent = '❤';
    const angle = (Math.PI * 2 * i) / count;
    const distance = 60 + Math.random() * 60;
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance;
    piece.style.setProperty('--burst-transform', `translate(${dx}px, ${dy}px) scale(1.2)`);
    piece.style.left = `${originX}px`;
    piece.style.top = `${originY}px`;
    document.body.appendChild(piece);
    piece.addEventListener('animationend', () => piece.remove());
  }
}

/* -----------------------------------------------------------------
   10. LOVE LETTER — typewriter animation
   ----------------------------------------------------------------- */
function initLoveLetter() {
  const letterText = `My Puchuu,

I don't know how to write this without sounding like every love letter ever written, so I'll just tell you the truth instead.

I'm grateful for you in a way that's hard to compress into a sentence. Grateful for the ordinary days as much as the big ones — for the voice notes at odd hours, the arguments we found our way back from, the way you make a room feel warmer just by being in it.

I respect you. Not just love you — respect you. Your mind, your boundaries, the way you stand up for what's fair even when it's inconvenient. I never want to be someone who makes you smaller. I want to be someone who makes you feel like you can take up all the space you need.

When I think about our future, I don't picture anything cinematic. I picture small things — quiet mornings, inside jokes nobody else understands, growing older and still choosing each other on purpose. That's the dream. Not perfection, just togetherness.

I remember more of our small moments than I probably let on. The first message. The nervous first meeting. That call that went on far too long and still felt too short. The "yes" that changed everything. I keep them the way you'd keep something fragile and important — carefully, and on purpose.

So this is me, choosing my words instead of hiding behind them: thank you for staying, thank you for being patient with me, and thank you for letting me love you.

Forever yours,
Your Sweetheart Surya ❤️`;

  const el = document.getElementById('letterText');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        typeText(el, letterText);
        obs.disconnect();
      }
    });
  }, { threshold: 0.3 });

  observer.observe(document.getElementById('letter'));
}

function typeText(el, fullText, speed = 22) {
  let i = 0;
  el.textContent = '';
  el.classList.remove('done');
  function step() {
    if (i < fullText.length) {
      el.textContent += fullText.charAt(i);
      i++;
      window.setTimeout(step, speed);
    } else {
      el.classList.add('done');
    }
  }
  step();
}

/* -----------------------------------------------------------------
   11. RELATIONSHIP COUNTER
   ----------------------------------------------------------------- */
function initCounter() {
  const startDate = new Date('2026-04-29T19:33:00');

  const els = {
    years: document.getElementById('cYears'),
    months: document.getElementById('cMonths'),
    days: document.getElementById('cDays'),
    hours: document.getElementById('cHours'),
    minutes: document.getElementById('cMinutes'),
    seconds: document.getElementById('cSeconds'),
  };

  function update() {
    const now = new Date();
    if (now < startDate) {
      // Not started yet — show all zeros gracefully
      Object.values(els).forEach((el) => (el.textContent = '0'));
      return;
    }

    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();
    let hours = now.getHours() - startDate.getHours();
    let minutes = now.getMinutes() - startDate.getMinutes();
    let seconds = now.getSeconds() - startDate.getSeconds();

    if (seconds < 0) { seconds += 60; minutes--; }
    if (minutes < 0) { minutes += 60; hours--; }
    if (hours < 0) { hours += 24; days--; }
    if (days < 0) {
      const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += prevMonth.getDate();
      months--;
    }
    if (months < 0) { months += 12; years--; }

    els.years.textContent = years;
    els.months.textContent = months;
    els.days.textContent = days;
    els.hours.textContent = hours;
    els.minutes.textContent = minutes;
    els.seconds.textContent = seconds;
  }

  update();
  window.setInterval(update, 1000);
}

/* -----------------------------------------------------------------
   12. FINAL SURPRISE
   ----------------------------------------------------------------- */
function initFinale() {
  const finaleBtn = document.getElementById('finaleBtn');
  const finaleSection = document.getElementById('finale');
  const finaleText = document.getElementById('finaleText');
  const starsWrap = document.getElementById('finaleStars');
  const heartRain = document.getElementById('heartRain');
  const confettiWrap = document.getElementById('confetti');

  // Pre-build a starfield; most stars stay as ambient twinkle,
  // a subset is reserved to animate into a heart shape.
  const STAR_COUNT = 70;
  const stars = [];
  for (let i = 0; i < STAR_COUNT; i++) {
    const star = document.createElement('span');
    star.className = 'finale-star';
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    starsWrap.appendChild(star);
    stars.push(star);
  }

  // Heart shape as normalized (x, y) points, mapped later to viewport %
  function heartPoint(t) {
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
    return { x, y };
  }

  finaleBtn.addEventListener('click', () => {
    finaleBtn.disabled = true;
    finaleSection.classList.add('dark');

    if (window.__risePlayerVolume) window.__risePlayerVolume(1, 3500);

    startHeartRain(heartRain, 45);
    startConfetti(confettiWrap, 60);
    igniteStars();

    window.setTimeout(() => formStarHeart(), 1600);

    window.setTimeout(() => {
      finaleBtn.hidden = true;
      finaleText.hidden = false;
      typeText(finaleText, "No matter how many days pass...\n\nI'll still choose you.\n\nAgain.\n\nEvery single time.\n\n❤️", 45);
    }, 3200);
  });

  function igniteStars() {
    stars.forEach((star, i) => {
      window.setTimeout(() => star.classList.add('on'), i * 15);
    });
  }

  function formStarHeart() {
    const heartStars = stars.slice(0, 40);
    heartStars.forEach((star, i) => {
      const t = (i / heartStars.length) * Math.PI * 2;
      const { x, y } = heartPoint(t);
      // Map heart coords (roughly -18..18 x, -17..13 y) to viewport percentages
      const leftPct = 50 + (x / 18) * 18;
      const topPct = 42 - (y / 17) * 18;
      star.style.left = `${leftPct}%`;
      star.style.top = `${topPct}%`;
      star.style.transform = 'scale(1.6)';
    });
  }
}

function startHeartRain(container, count) {
  for (let i = 0; i < count; i++) {
    window.setTimeout(() => {
      const heart = document.createElement('span');
      heart.className = 'rain-heart';
      heart.textContent = '❤';
      heart.style.left = `${Math.random() * 100}%`;
      heart.style.fontSize = `${12 + Math.random() * 16}px`;
      heart.style.animationDuration = `${4 + Math.random() * 3}s`;
      heart.style.opacity = `${0.5 + Math.random() * 0.5}`;
      container.appendChild(heart);
      heart.addEventListener('animationend', () => heart.remove());
    }, i * 120);
  }
}

function startConfetti(container, count) {
  const colors = ['#FF4D8D', '#FFD6E8', '#FFE9F3', '#FFFFFF'];
  for (let i = 0; i < count; i++) {
    window.setTimeout(() => {
      const piece = document.createElement('span');
      piece.className = 'confetti-piece';
      piece.style.left = `${Math.random() * 100}%`;
      piece.style.background = colors[Math.floor(Math.random() * colors.length)];
      piece.style.animationDuration = `${3 + Math.random() * 2.5}s`;
      piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
      container.appendChild(piece);
      piece.addEventListener('animationend', () => piece.remove());
    }, i * 90);
  }
}
