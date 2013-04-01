function vimKeyBindings() {

  "use strict";

  var pageBody = $("html, body");

  if (pageBody.hasClass("js-vim")) {

    var scrollHeight = 50, // px
        scrollSpeed  = 50; // ms

    pageBody.keydown(function(key) {

      if (key.which === 75) {
        keyDirection("up"); // K key
      }

      if (key.which === 74) {
        keyDirection("down"); // J key
      }

    });

    var keyDirection = function(direction) {

      var scrollPosition,
          windowPosition = $(window).scrollTop();

      if (direction === "up") {
        scrollPosition = windowPosition - scrollHeight;
      }

      if (direction === "down") {
        scrollPosition = windowPosition + scrollHeight;
      }

      scrollAnimation(scrollPosition, scrollSpeed); // scrolling.js

    };

  }

}
