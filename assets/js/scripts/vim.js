function vimKeyBindings() {

  var pageBody = $("html, body");

  var keyDirection = function(direction) {

    var scrollHeight    = 50, // px
        scrollSpeed     = 25, // ms
        windowPosition  = $(window).scrollTop(),
        documentHeight  = $(document).height(),
        windowHeight    = $(window).height(),
        scrollPosition;

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

    scrollAnimation(scrollPosition, scrollSpeed); // scroll.js

  };

  if (pageBody.hasClass("js-vim")) {

    pageBody.keydown(function(key) {

      // Quesion mark (Swedish and English keyboard layout)
      if (key.shiftKey === true && (key.which === 187 || key.which === 171 || key.which === 191 )) {
        var vimHelpUrl = "/experiments/vim";
        window.location = vimHelpUrl;
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

  }

}
