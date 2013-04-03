function vimKeyBindings() {

  "use strict";

  var pageBody = $("html, body");

  if (pageBody.hasClass("js-vim")) {

    var scrollHeight = 50, // px
        scrollSpeed  = 25; // ms

    pageBody.keydown(function(key) {
                                    // Firefox           // Chrome
      if (key.shiftKey === true && (key.which === 187 || key.which === 171 || key.which == 191 )) {
        window.location = "/experiments/vim"; // Quesion mark (Swedish and English keyboard layout)
      }

      if (key.which === 75) {
        keyDirection("up"); // K key
      }

      if (key.which === 74) {
        keyDirection("down"); // J key
      }

      if (key.which === 71) {

        if (key.shiftKey === true) {
          keyDirection("bottom"); // Shift + G key
        }

        else {
          keyDirection("top"); // G key
        }

      }

      if (key.which === 77) {
        keyDirection("middle"); // M key
      }

    });

    var keyDirection = function(direction) {

      var scrollPosition,
          windowPosition = $(window).scrollTop(),
          documentHeight = $(document).height(),
          windowHeight   = $(window).height();

      if (direction === "up") {
        scrollPosition = windowPosition - scrollHeight;
      }

      if (direction === "down") {
        scrollPosition = windowPosition + scrollHeight;
      }

      if (direction === "top") {
        scrollPosition = 0;
      }

      if (direction === "bottom") {
        scrollPosition = documentHeight;
      }

      if (direction === "middle") {
        scrollPosition = (documentHeight / 2) - (windowHeight / 2);
      }

      scrollAnimation(scrollPosition, scrollSpeed); // scrolling.js

    };

  }

}
