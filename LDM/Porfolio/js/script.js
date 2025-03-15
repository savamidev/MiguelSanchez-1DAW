"use strict";

document.addEventListener("DOMContentLoaded", function() {
  var visibleContact = document.getElementById('visibleContact');
  var hiddenContact = document.querySelector('.hidden-contact');
  
  visibleContact.addEventListener('change', function() {
    if (this.checked) {
      // Mostrar el formulario
      hiddenContact.style.display = 'block';
      // Forzar reflow para que se reconozca el cambio
      void hiddenContact.offsetWidth;
      hiddenContact.style.opacity = '1';
    } else {
      // Ocultar el formulario
      hiddenContact.style.opacity = '0';
    }
  });
  
  // Al finalizar la transición, si la opacidad es 0, se oculta completamente
  hiddenContact.addEventListener('transitionend', function() {
    if (hiddenContact.style.opacity === '0') {
      hiddenContact.style.display = 'none';
    }
  });
});
