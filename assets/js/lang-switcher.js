// ============================================================
//  lang-switcher.js — drb.github.io
//  Lógica de troca de idioma EN ↔ PT
// ============================================================

(function () {
  "use strict";

  // ── Helpers ────────────────────────────────────────────────
  function getLang() {
    return localStorage.getItem("drb-lang") || "en";
  }

  function setLang(lang) {
    localStorage.setItem("drb-lang", lang);
  }

  function t(key) {
    const lang = getLang();
    return (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) ||
           (TRANSLATIONS["en"] && TRANSLATIONS["en"][key]) ||
           key;
  }

  // ── Apply translations to data-i18n elements ──────────────
  function applyTranslations() {
    const lang = getLang();

    // Elementos com data-i18n: substitui textContent
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      const value = t(key);
      if (value) el.textContent = value;
    });

    // Elementos com data-i18n-html: substitui innerHTML (para links, etc.)
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-html");
      const value = t(key);
      if (value) el.innerHTML = value;
    });

    // Atualiza o botão de idioma
    const btn = document.getElementById("lang-toggle-btn");
    if (btn) {
      btn.textContent = t("lang-button-label");
      btn.setAttribute("aria-label", lang === "en" ? "Mudar para Português" : "Switch to English");
    }

    // Atualiza o atributo lang do <html>
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }

  // ── Toggle ────────────────────────────────────────────────
  window.toggleLang = function () {
    const current = getLang();
    const next = current === "en" ? "pt" : "en";
    setLang(next);
    applyTranslations();

    // Feedback visual no botão
    const btn = document.getElementById("lang-toggle-btn");
    if (btn) {
      btn.classList.add("lang-btn--active");
      setTimeout(function () {
        btn.classList.remove("lang-btn--active");
      }, 300);
    }
  };

  // ── Init ─────────────────────────────────────────────────
  document.addEventListener("DOMContentLoaded", function () {
    applyTranslations();
  });
})();
