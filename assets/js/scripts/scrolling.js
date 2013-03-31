function anchorScrolling() {

  "use strict";

  var scrollSpeed = 750;

  $("a[rel]").click(function() {

    var idHref       = $(this).attr("href"),
        idTarget     = $(idHref.replace(":", "\\:")),
        scrollTarget = idTarget.offset().top;

    scrollAnimation(scrollTarget, scrollSpeed); // utils.js

    return false;

  });

};
