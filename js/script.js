// Darkum Design — coming soon page
// Bilingual (EN left / AR right) permanent layout — no toggle needed.
// Minimal JS: footer year, Formspree-connected notify form, light catchphrase ticker.

(function () {
  // Footer year
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Notify form — submits to Formspree (https://formspree.io/f/mzepvbqn) via fetch,
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
  // Full sliding-question carousel is planned for the real WordPress homepage —
  // this is a lightweight preview for the coming-soon placeholder.
  // English enters from the right, Arabic enters from the left, per Bido's spec (2026-08-12).
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

  if (tickerEn && tickerAr && catchphrases.length) {
    var index = 0;

    function showPhrase(i) {
      var phrase = catchphrases[i];

      // Reset animation state
      tickerEn.classList.remove('enter-en');
      tickerAr.classList.remove('enter-ar');
      tickerEn.style.opacity = 0;
      tickerAr.style.opacity = 0;

      tickerEn.textContent = phrase.en;
      tickerAr.textContent = phrase.ar;

      // Force reflow so the animation replays every cycle
      void tickerEn.offsetWidth;
      void tickerAr.offsetWidth;

      tickerEn.classList.add('enter-en');
      tickerAr.classList.add('enter-ar');
    }

    showPhrase(index);

    setInterval(function () {
      index = (index + 1) % catchphrases.length;
      showPhrase(index);
    }, 6000);
  }
})();
