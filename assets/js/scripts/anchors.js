function anchorScrolling() {

  var scrollSpeed = 750;

  $("a[rel]").click(function() {

    var idHref       = $(this).attr("href"),
        idTarget     = $(idHref.replace(":", "\\:")),
        scrollTarget = idTarget.offset().top;

    scrollAnimation(scrollTarget, scrollSpeed); // scrolling.js

    return false;

  });

}
