(function($) {

  "use strict";

  /* Anchor scrolling (public object)
   *
   *  Enables smooth scrolling between the given anchor attribute and the
   *  target in question.
   */
  var AnchorScrolling = {

    config: {
      scrollHook: $("a[rel]"),  // The targeted anchors (pre-generated footnotes).
      scrollSpeed: 750,         // The scrolling animation's speed.
      pageBody: $("html, body") // The body of the HTML page.
    },

    init: function() {
      var scrollHook = this.config.scrollHook,
          scrollSpeed = this.config.scrollSpeed;
      this.click(scrollHook, scrollSpeed);
    },

    click: function(scrollHook, scrollSpeed) {
      var self = this; // Reference to the "AnchorScrolling" object.
      scrollHook.click(function() {
        var idHref = $(this).attr("href"),
            idTarget = $(idHref.replace(":", "\\:")),
            scrollTarget = idTarget.offset().top;
        self._animate(scrollTarget, scrollSpeed);
        return false;
      });
    },

    _animate: function(scrollTarget, scrollSpeed) {
      var pageBody = this.config.pageBody;
      pageBody.animate({
        scrollTop: scrollTarget
      }, scrollSpeed);
    }

  };

  /* Random post (public object)
   *
   *  Creates an array of all the post links with the given attribute and
   *  returns a random link.
   */
  var RandomPost = {

    config: {
      postList: $(".js-post-link[href]"), // The targeted post link attribute.
      postTarget: $("#js-random-post")    // Where the random link will be appended.
    },

    init: function() {
      var postList = this.config.postList,
          postTarget = this.config.postTarget;
      this.get(postList, postTarget);
    },

    get: function(postList, postTarget) {
      var postItems = postList.length,
          postRandom = postList[Math.floor(Math.random() * postItems)];
      this.send(postTarget, postRandom);
    },

    send: function(postTarget, postRandom) {
      postTarget.attr("href", postRandom);
    }

  };

  /* Github repos (public object)
   *
   *  Gets all repositories from Github via their API and renders them
   *  using a Mustache.js template.
   */
  var GithubRepos = {

    config: {
      repoTemplate: $("#js-github-repos"), // The Mustache script template id.
      repoList: $("#js-repo-list")         // Where the repos will be rendered.
    },

    init: function(username) {
      var repoTemplate = (this.config.repoTemplate).html(),
          repoList = this.config.repoList;
      repoList.append("<li>Loading...</li>");
      this.render(username, repoTemplate, repoList);
    },

    get: function(username, callback) {
      $.getJSON("https://api.github.com/users/" + username + "/repos?callback=?", callback);
    },

    render: function(username, repoTemplate, repoList) {
      this.get(username, function(data) {
        var render = Mustache.render(repoTemplate, data);
        repoList.html(render);
      });
    }

  };

  /* HighlightJS (stand-alone object)
   *
   * Initializes Highlight.js.
   */
  var HighlightJS = {

    config: {
      highlightTarget: $("pre code")
    },

    init: function() {
      var highlightTarget = this.config.highlightTarget;
      highlightTarget.each(function(i, e) {
        hljs.highlightBlock(e);
      });
    }

  };

  $(document).ready(function() {
    HighlightJS.init();
    AnchorScrolling.init();
    RandomPost.init();
    GithubRepos.init("gummesson");
  });

})(jQuery);
