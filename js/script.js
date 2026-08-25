// Darkum Design, coming soon page
// Bilingual (EN left / AR right) permanent layout, no toggle needed.
// Minimal JS: footer year, Formspree-connected notify form, light catchphrase ticker.

(function () {
  // Footer year
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Notify form, submits to Formspree (https://formspree.io/f/mzepvbqn) via fetch,
  // success/error handled in-page (no redirect) with a swapped-in status message.
  var form = document.getElementById('notify-form');
  var message = document.getElementById('form-message');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var emailInput = document.getElementById('email');
      if (emailInput && !emailInput.checkValidity()) {
        if (message) {
          message.classList.add('is-error');
          message.textContent = "Please enter a valid email address. / من فضلك أدخل بريد إلكتروني صحيح.";
        }
        emailInput.focus();
        return;
      }

      var submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) submitBtn.disabled = true;

      fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      })
        .then(function (response) {
          if (response.ok) {
            if (message) {
              message.classList.remove('is-error');
              message.textContent = "Thank you! We'll let you know when we launch. / شكرًا لك! هنعلمك أول ما نطلق الموقع.";
            }
            form.reset();
          } else {
            throw new Error('Formspree submission failed');
          }
        })
        .catch(function () {
          if (message) {
            message.classList.add('is-error');
            message.textContent = "Something went wrong. Please try again. / حصل خطأ، برجاء المحاولة تاني.";
          }
        })
        .finally(function () {
          if (submitBtn) submitBtn.disabled = false;
        });
    });
  }

  // Light catchphrase ticker.
  // Full sliding-question carousel is planned for the real WordPress homepage,
  // this is a lightweight preview for the coming-soon placeholder.
  // Crossfade between phrases (slowed 2026-08-15, the original slide-in read as too fast/sudden,
  // distracting in peripheral vision; a slower plain fade is calmer).
  // Manual dot/arrow navigation + pause-on-hover/focus added 2026-08-15, a first-time visitor
  // has no way to know it's a multi-phrase rotation, so give a position indicator, manual
  // back/forth, and let their own attention pause it instead of racing to read in time.
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

    // Build one dot per phrase, driven by the array length rather than hardcoded in HTML,
    // so it stays correct if phrases are added or removed later.
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

      // Fade the current phrase out first, then swap the text and fade the next one in,
      // avoids the old abrupt cut where the previous phrase vanished instantly.
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
        // Manual navigation restarts the autoplay clock so it doesn't advance
        // again right on top of the visitor's own click.
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

    // Pause auto-rotation while the visitor is hovering or has keyboard focus in the
    // ticker/controls, so it never moves on someone mid-sentence.
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
