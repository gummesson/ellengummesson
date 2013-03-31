// Used in anchors.js and vim.js
function scrollAnimation(target, speed) {

  "use strict";

  $("html, body").animate({
    scrollTop: target
  }, speed);

}
