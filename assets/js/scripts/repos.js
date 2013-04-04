function getGithubRepositories(username) {

  "use strict";

  $("#repo-list").append("<li>Loading...</li>");

  var githubUsername = function(username, callback) {
    $.getJSON("https://api.github.com/users/" + username + "/repos?callback=?", callback);
  };

  githubUsername(username, function(data) {

    var template    = $("#github-repos").html(),
        information = Mustache.to_html(template, data);

    $("#repo-list").html(information);

  });

}
