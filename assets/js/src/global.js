(function() {

  "use strict";

  // Global configuration (object, settings)
  //
  //  Used for the scrolling animation object and for the 
  //  Vim keybindings object.
  //
  var Global = {

    config: {
      pageBody: $("html, body") // The body of the HTML page.
    }

  };

  // Scroll animation (object, utility)
  //
  //  Animates the scrolling motion. Used for the anchor scrolling object
  //  and the Vim keybindings object.
  //
  var ScrollAnimation = {

    init: function(target, speed) {

      var pageBody = Global.config.pageBody;

      pageBody.animate({
        scrollTop: target
      }, speed);

    }

  };

  // Anchor scrolling (object)
  //
  //  Enables smooth scrolling between the given anchor attribute and the
  //  target in question.
  //
  var AnchorScrolling = { 

    config: {
      scrollAttribute: $("a[rel]"), // The targeted anchor attribute
      scrollSpeed: 750              // The speed of the scrolling animation
    },
  
    init: function() {

      var scrollAttribute = this.config.scrollAttribute,
          scrollSpeed     = this.config.scrollSpeed;

      this.click(scrollAttribute, scrollSpeed);

    },

    click: function(scrollAttribute, scrollSpeed) {

      scrollAttribute.click(function() {
        var idHref       = $(this).attr("href"),
            idTarget     = $(idHref.replace(":", "\\:")),
            scrollTarget = idTarget.offset().top;

        ScrollAnimation.init(scrollTarget, scrollSpeed);
        return false;

      });

    }

  };

  // Vim keybindings (object)
  //
  //  Enables the use of Vim-like keybindings across the site.
  //
  var VimKeyBindings = {

    config: {
      scrollHeight: 50, // px
      scrollSpeed: 25   // ms
    },
  
    init: function() {
      var pageBody = Global.config.pageBody;
      this.keypress(pageBody);
    },

    position: function(direction) {

      var scrollTarget,
          scrollHeight = this.config.scrollHeight,
          scrollSpeed  = this.config.scrollSpeed;

      var windowPosition = $(window).scrollTop(),
          documentHeight = $(document).height(),
          windowHeight   = $(window).height();

      if (direction === "up") {
        scrollTarget = windowPosition - scrollHeight;
      }

      if (direction === "down") {
        scrollTarget = windowPosition + scrollHeight;
      }

      if (direction === "top") {
        scrollTarget = 0;
      }

      if (direction === "bottom") {
        scrollTarget = documentHeight;
      }

      if (direction === "middle") {
        scrollTarget = (documentHeight / 2) - (windowHeight / 2);
      }

      ScrollAnimation.init(scrollTarget, scrollSpeed);

    },

    keypress: function(pageBody) {

      // Reference to the VimKeyBindings object
      var self = this;

      pageBody.keydown(function(key) {

        // Quesion mark (Swedish and English keyboard layout)
        if (key.shiftKey === true && (key.which === 187 || key.which === 171 || key.which === 191 )) {
          window.location = "/experiments/vim";
        }

        // K key
        if (key.which === 75) {
          self.position("up");
        }

        // J key
        if (key.which === 74) {
          self.position("down");
        }

        // G key
        if (key.which === 71) {

          if (key.shiftKey === true) {
            self.position("bottom");
          }

          else {
            self.position("top");
          }

        }

        // M key
        if (key.which === 77) {
          self.position("middle");
        }

      });

    }
  
  };

  // Random post (object)
  //
  //  Creates an array of all the post links with the given attribute and
  //  returns a random link.
  //
  var RandomPost = {

    config: {
      postList: $(".post-link[href]"),  // The targeted post link attribute
      postTarget: $("#random-post")     // Where the random link will be appended
    },

    init: function() {

      var postList   = this.config.postList,
          postTarget = this.config.postTarget;

      this.get(postList, postTarget);

    },

    get: function(postList, postTarget) {

      var postItems  = postList.length,
          postRandom = postList[Math.floor(Math.random() * postItems)];

      this.send(postTarget, postRandom);

    },

    send: function(postTarget, postRandom) {
      postTarget.attr("href", postRandom);
    }

  };

  // Github repos (object)
  //
  //  Gets all repositories from Github via their API and renders them
  //  using a Mustache.js template.
  //
  var GithubRepos = {

    config: {
      repoTemplate: $("#github-repos"),  // The Mustache script template id
      repoList: $("#repo-list")          // Where the repos will be rendered
    },

    init: function(username) {

      var repoTemplate = (this.config.repoTemplate).html(),
          repoList     = this.config.repoList;

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

  $(document).ready(function() {

    AnchorScrolling.init();
    VimKeyBindings.init();
    RandomPost.init();
    GithubRepos.init("gummesson");

  });

})();
