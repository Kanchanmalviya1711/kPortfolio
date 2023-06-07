document.addEventListener("DOMContentLoaded", function () {
  var links = document.querySelectorAll("nav a");

  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", smoothScroll);
  }

  function smoothScroll(e) {
    e.preventDefault();

    var targetId = this.getAttribute("href");
    var targetElement = document.querySelector(targetId);
    var targetPosition = targetElement.offsetTop;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  }
});
