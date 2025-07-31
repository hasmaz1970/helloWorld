document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("a[href^='http']").forEach(function (el) {
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });
});