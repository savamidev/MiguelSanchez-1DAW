"use strict";

document.addEventListener("DOMContentLoaded", function() {
  var visibleContact = document.getElementById('visibleContact');
  var hiddenContact = document.querySelector('.hidden-contact');
  
  visibleContact.addEventListener('change', function() {
    if (this.checked) {
      hiddenContact.style.display = 'block';
      void hiddenContact.offsetWidth;
      hiddenContact.style.opacity = '1';
    } else {
      hiddenContact.style.opacity = '0';
    }
  });
  
  hiddenContact.addEventListener('transitionend', function() {
    if (hiddenContact.style.opacity === '0') {
      hiddenContact.style.display = 'none';
    }
  });
});
