document.addEventListener("DOMContentLoaded", function () {
  var icons = document.querySelectorAll(".icon");

  icons.forEach(function (icon) {
    icon.addEventListener("mouseover", function () {
      anime({
        targets: icon,
        translateX: 20, // Desplazamiento horizontal
        duration: 500, // Duración de la animación en milisegundos
        easing: "easeInOutQuad", // Tipo de animación (puedes cambiarlo según tus necesidades)
      });
    });

    icon.addEventListener("mouseout", function () {
      anime({
        targets: icon,
        translateX: 0, // Vuelve a la posición original
        duration: 500,
        easing: "easeInOutQuad",
      });
    });
  });
});
