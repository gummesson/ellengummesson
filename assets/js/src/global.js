(function(document) {

  'use strict';

  var App = {};

  App.highlightCode = function() {
    hljs.initHighlighting();
  };

  App.randomPost = function() {
    var postList = document.querySelectorAll('.js-post-link[href]'),
        postTarget = document.querySelector('#js-random-post'),
        postItems = postList.length,
        postRandom = postList[Math.floor(Math.random() * postItems)];
    postTarget.setAttribute('href', postRandom);
  };

  App.init = function() {
    App.highlightCode();
    App.randomPost();
  };

  App.init();

})(window.document);
