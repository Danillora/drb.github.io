// ============================================================
//  lang-switcher.js — drb.github.io
//  Lógica de troca de idioma EN ↔ PT
// ============================================================

(function () {
  "use strict";

  var STORAGE_KEY = "drb-lang";

  // ── Helpers ────────────────────────────────────────────────
  function getLang() {
    return localStorage.getItem(STORAGE_KEY) || "en";
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
  }

  function t(key) {
    var lang = getLang();

    return (window.TRANSLATIONS &&
            window.TRANSLATIONS[lang] &&
            window.TRANSLATIONS[lang][key]) ||
           (window.TRANSLATIONS &&
            window.TRANSLATIONS["en"] &&
            window.TRANSLATIONS["en"][key]) ||
           key;
  }

  // ── Apply translations to data-i18n elements ──────────────
  function applyTranslations() {
    var lang = getLang();

    // Elementos com data-i18n: substitui textContent
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var value = t(key);
      if (value) el.textContent = value;
    });

    // Elementos com data-i18n-html: substitui innerHTML
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      var value = t(key);
      if (value) el.innerHTML = value;
    });

    // Atualiza o botão flutuante de idioma
    var btn = document.getElementById("lang-fab");
    var flag = document.getElementById("lang-fab-flag");
    var label = document.getElementById("lang-fab-label");

    if (btn && flag && label) {
      if (lang === "pt") {
        flag.textContent = "🇺🇸";
        label.textContent = "EN";
        btn.setAttribute("aria-label", "Switch to English");
      } else {
        flag.textContent = "🇧🇷";
        label.textContent = "PT";
        btn.setAttribute("aria-label", "Mudar para Português");
      }
    }

    // Atualiza o atributo lang do <html>
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }

  // ── Toggle ────────────────────────────────────────────────
  function toggleLang() {
    var current = getLang();
    var next = current === "en" ? "pt" : "en";
    setLang(next);
    applyTranslations();

    // Feedback visual no botão
    var btn = document.getElementById("lang-fab");
    if (btn) {
      btn.classList.add("lang-fab--pulse");
      btn.addEventListener("animationend", function handleAnimationEnd() {
        btn.classList.remove("lang-fab--pulse");
        btn.removeEventListener("animationend", handleAnimationEnd);
      });
    }
  }

  // ── Init ──────────────────────────────────────────────────
  document.addEventListener("DOMContentLoaded", function () {
    applyTranslations();

    var btn = document.getElementById("lang-fab");
    if (btn) {
      btn.addEventListener("click", toggleLang);

      if (!localStorage.getItem(STORAGE_KEY)) {
        btn.classList.add("lang-fab--pulse");
        btn.addEventListener("animationend", function handleFirstPulse() {
          btn.classList.remove("lang-fab--pulse");
          btn.removeEventListener("animationend", handleFirstPulse);
        });
      }
    }
  });
})();
