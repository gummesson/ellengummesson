$(document).ready(function() {

  "use strict";

  var pageBody    = $("html, body"),
      scrollSpeed = 750;

  $("a[rel]").click(function(){

    var idHref   = $(this).attr("href"),
        idTarget = $(idHref.replace(":", "\\:"));

    pageBody.animate({
      scrollTop: idTarget.offset().top
    }, scrollSpeed);

    return false;

  });

});
