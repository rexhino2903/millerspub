// NAVBAR EFFECTS

$(".fa-bars").on("click", function () {
  $(".fabars").toggleClass("fadeOut");
  $(".nav-container")
    .removeClass("fadeOutLeft")
    .addClass("fadeInLeft")
    .css("display", "block");
});

$(".fa-times").on("click", function () {
  $(".nav-container")
    .removeClass("fadeInLeft")
    .addClass("fadeOutLeft");
  $(".fabars")
    .removeClass("fadeOut")
    .addClass("fadeIn");
});

// SLOWING DOWN SCROLL SPEED ON MOUSE WHEEL

// $(document).ready(function () {
//   jQuery.scrollSpeed(60, 1000);
// });

// SMOOTH SCROLLING EFFECT

$(document).ready(function () {
  $("ul.navbar-nav > li > a").on('click', function (event) {

    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, $(hash).offset().top, function () {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }
    // End if
  });
});


// Form validation

(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();