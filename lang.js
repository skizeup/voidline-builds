// La langue du site : chaque texte existe en deux <span lang="fr"> / <span lang="en">, le CSS cache l'autre selon html[data-lang].
// Sans JavaScript : le français. Avec : le choix gardé (localStorage), sinon la langue du navigateur.
(function () {
  var saved = null;
  try { saved = localStorage.getItem("voidline-lang"); } catch (e) {}
  var lang = saved || ((navigator.language || "fr").toLowerCase().indexOf("fr") === 0 ? "fr" : "en");
  function apply(l) {
    document.documentElement.setAttribute("data-lang", l);
    document.documentElement.setAttribute("lang", l);
    document.title = l === "fr" ? "Voidline — une expédition coopérative au cœur de la Faille" : "Voidline — a co-op expedition into the heart of the Rift";
    var buttons = document.querySelectorAll("[data-set-lang]");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute("aria-pressed", buttons[i].getAttribute("data-set-lang") === l ? "true" : "false");
    }
  }
  apply(lang);
  document.addEventListener("DOMContentLoaded", function () {
    apply(lang);
    var buttons = document.querySelectorAll("[data-set-lang]");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function () {
        lang = this.getAttribute("data-set-lang");
        try { localStorage.setItem("voidline-lang", lang); } catch (e) {}
        apply(lang);
      });
    }
  });
})();
