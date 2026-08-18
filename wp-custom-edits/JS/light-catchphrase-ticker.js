// Homepage hero ticker JS, Kadence Custom HTML block (see HTML/light-catchphrase-ticker.html
// for the pairing note). Pastes into the same block, wrapped in a <script> tag.
// Ported from the coming-soon page's js/script.js with no logic changes (2026-08-17).
(function () {
  var catchphrases = [
    {
      en: "Do you want to buy the same bed as all your friends, family, and neighbors? Customize your bed frame today with Darkum Design.",
      ar: "عايز تنام على نفس السرير اللي عند كل صحابك وجيرانك؟ اعمل سريرك بتصميمك انت مع داركم ديزاين."
    },
    {
      en: "Is your anniversary coming up? Surprise your partner with romantic customization, only from Darkum Design.",
      ar: "عيد جوازك قرب؟ فاجئ شريك حياتك بتصميم رومانسي مميز، بس من داركم ديزاين."
    },
    {
      en: "Is your child a superhero fan? Customize his bed with Iron Man or Superman with Darkum Design.",
      ar: "ابنك بيحب الأبطال الخارقين؟ صمّملّه سرير آيرون مان أو سوبرمان مع داركم ديزاين."
    }
  ];

  var tickerEn = document.getElementById('ticker-en');
  var tickerAr = document.getElementById('ticker-ar');
  var tickerPrev = document.getElementById('ticker-prev');
  var tickerNext = document.getElementById('ticker-next');
  var tickerDotsWrap = document.getElementById('ticker-dots');
  var tickerStatus = document.getElementById('ticker-status');
  var tickerSection = document.querySelector('.catchphrase-ticker');
  var tickerNavRow = document.querySelector('.ticker-nav-row');

  if (tickerEn && tickerAr && catchphrases.length) {
    var index = 0;
    var intervalId = null;
    var paused = false;
    var prefersReducedMotion = window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var fadeMs = prefersReducedMotion ? 0 : 900;
    var rotateMs = 7000;
    var dots = [];

    if (tickerDotsWrap) {
      catchphrases.forEach(function (_, i) {
        var dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'ticker-dot';
        dot.setAttribute('aria-current', i === 0 ? 'true' : 'false');
        dot.setAttribute('aria-label', 'Slide ' + (i + 1) + ' of ' + catchphrases.length +
          ' / الشريحة ' + (i + 1) + ' من ' + catchphrases.length);
        dot.addEventListener('click', function () { goTo(i, true); });
        tickerDotsWrap.appendChild(dot);
        dots.push(dot);
      });
    }

    function updateDots(i) {
      dots.forEach(function (dot, di) {
        dot.setAttribute('aria-current', di === i ? 'true' : 'false');
      });
    }

    function updateStatus(i) {
      if (tickerStatus) {
        tickerStatus.textContent = 'Slide ' + (i + 1) + ' of ' + catchphrases.length +
          ' / الشريحة ' + (i + 1) + ' من ' + catchphrases.length;
      }
    }

    function setPhraseText(phrase) {
      tickerEn.textContent = phrase.en;
      tickerAr.textContent = phrase.ar;
      tickerEn.style.opacity = 1;
      tickerAr.style.opacity = 1;
    }

    function renderSlide(i, immediate) {
      var phrase = catchphrases[i];
      if (immediate) {
        setPhraseText(phrase);
        updateDots(i);
        updateStatus(i);
        return;
      }
      tickerEn.style.opacity = 0;
      tickerAr.style.opacity = 0;
      setTimeout(function () {
        setPhraseText(phrase);
        updateDots(i);
        updateStatus(i);
      }, fadeMs);
    }

    function startAutoplay() {
      stopAutoplay();
      intervalId = setInterval(function () {
        if (paused) return;
        index = (index + 1) % catchphrases.length;
        renderSlide(index, false);
      }, rotateMs);
    }

    function stopAutoplay() {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
    }

    function goTo(i, userInitiated) {
      index = i;
      renderSlide(index, false);
      if (userInitiated) {
        startAutoplay();
      }
    }

    if (tickerPrev) {
      tickerPrev.addEventListener('click', function () {
        goTo((index - 1 + catchphrases.length) % catchphrases.length, true);
      });
    }
    if (tickerNext) {
      tickerNext.addEventListener('click', function () {
        goTo((index + 1) % catchphrases.length, true);
      });
    }

    [tickerSection, tickerNavRow].forEach(function (el) {
      if (!el) return;
      el.addEventListener('mouseenter', function () { paused = true; });
      el.addEventListener('mouseleave', function () { paused = false; });
      el.addEventListener('focusin', function () { paused = true; });
      el.addEventListener('focusout', function () { paused = false; });
    });

    renderSlide(index, true);
    startAutoplay();
  }
})();
