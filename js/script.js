// Darkum Design — coming soon page
// Minimal JS: language toggle (EN/AR), footer year, front-end-only notify form

(function () {
  var STORAGE_KEY = 'darkum-lang';
  var htmlEl = document.documentElement;
  var bodyEl = document.body;
  var toggleBtn = document.getElementById('lang-toggle');
  var translatable = document.querySelectorAll('[data-en]');
  var emailInput = document.getElementById('email');

  function applyLang(lang) {
    var isAr = lang === 'ar';

    htmlEl.setAttribute('lang', isAr ? 'ar' : 'en');
    htmlEl.setAttribute('dir', isAr ? 'rtl' : 'ltr');
    bodyEl.setAttribute('dir', isAr ? 'rtl' : 'ltr');

    translatable.forEach(function (el) {
      var text = isAr ? el.getAttribute('data-ar') : el.getAttribute('data-en');
      if (text !== null) el.textContent = text;
    });

    if (emailInput) {
      var placeholder = isAr
        ? emailInput.getAttribute('data-ar-placeholder')
        : emailInput.getAttribute('data-en-placeholder');
      if (placeholder) emailInput.setAttribute('placeholder', placeholder);
    }

    if (toggleBtn) {
      toggleBtn.textContent = isAr ? 'English' : 'عربي';
    }

    localStorage.setItem(STORAGE_KEY, lang);
  }

  // Restore saved language preference, default to English
  var savedLang = localStorage.getItem(STORAGE_KEY) || 'en';
  applyLang(savedLang);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', function () {
      var current = htmlEl.getAttribute('lang') === 'ar' ? 'ar' : 'en';
      applyLang(current === 'ar' ? 'en' : 'ar');
    });
  }

  // Footer year
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Notify form — front-end only placeholder until a real backend/service is wired up
  var form = document.getElementById('notify-form');
  var message = document.getElementById('form-message');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var isAr = htmlEl.getAttribute('lang') === 'ar';
      if (message) {
        message.textContent = isAr
          ? 'شكرًا لك! سنُعلمك عند إطلاق الموقع.'
          : "Thank you! We'll let you know when we launch.";
      }
      form.reset();
    });
  }
})();
