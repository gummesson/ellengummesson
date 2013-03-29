$(document).ready(function() {

  "use strict";

  anchorScrolling();
  postRandomizer();

});

function anchorScrolling(){

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

};

function postRandomizer(){

  "use strict";

  var postList   = $(".post-link[href]"),
      postItems  = postList.length,
      postRandom = postList[Math.floor(Math.random() * postItems)];

  $(".random-post").attr("href", postRandom);

};
