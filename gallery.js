// La galerie : un clic sur une image l'ouvre en grand ; un clic ou Échap la referme. Sans JavaScript, le lien ouvre l'image seule.
(function () {
  var box = document.querySelector(".lightbox");
  var big = box.querySelector("img");
  var links = document.querySelectorAll(".gallery a");
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function (e) {
      e.preventDefault();
      big.src = this.getAttribute("href");
      big.alt = this.querySelector("img").alt;
      box.hidden = false;
    });
  }
  function close() { box.hidden = true; big.src = ""; }
  box.addEventListener("click", close);
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !box.hidden) close(); });
})();
