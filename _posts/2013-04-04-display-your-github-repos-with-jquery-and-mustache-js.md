---
title: "Display your Github repos with jQuery and Mustache.js"
tags: ["Code", "jQuery", "Mustache.js"]
layout: post
comments: true
external-link: false
---

After failing to keep a simple Markdown document with up-to-date information of all my Github repositories I decided to skip using that method in favor of something more efficient. I didn't have to look any further than using [jQuery](http://jquery.com/)'s `getJSON` function and the Javascript implementation of the [Mustache templating engine](http://mustache.github.com/). The end result [looks pretty neat](/experiments/repos "My Github repositories"), although I think I'm going to tweak the UI a bit. I also created a repository for it [on Github](https://github.com/gummesson/repos.js "repos.js on Github").

## The Javascript

This is the function itself: 

    function getGithubRepositories(username) {

      "use strict";

      var repoList = $("#repo-list");
      repoList.append("<li>Loading...</li>");

      var githubUsername = function(username, callback) {
        $.getJSON("https://api.github.com/users/" + username + "/repos?callback=?", callback);
      };

      githubUsername(username, function(data) {

        var template    = $("#github-repos").html(),
            information = Mustache.render(template, data);

        repoList.html(information);

      });

    }

And you simply use it like this:

    $(document).ready(function() {

      "use strict";
      getGithubRepositories("gummesson");

    });

Just replace `gummesson` with your own username and you're good to go!

## The template

**Pro-tip:** If you're planning to use [Mustache.js](https://github.com/janl/mustache.js "Mustache.js") on a [Jekyll](http://jekyllrb.com/) site like I do, don't forget to wrap the `<script>` template in a `raw` block.

{% raw %}
    <ul id="repo-list">
      <script id="github-repos" type="text/template">
        {{#data}}
          <li>
            <a href="{{html_url}}" title="{{name}}" alt="{{name}}">
              {{name}}
            </a>
            {{#language}}
              <em>({{language}})</em>
            {{/language}}
          </li>
        {{/data}}
      </script>
    </ul>
{% endraw %}

I essentially only wanted to display the name, the URL and the language but you can of course add about a million other things like the description, how many forks the repo has and so forth.
