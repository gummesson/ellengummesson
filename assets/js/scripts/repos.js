var githubUsername = function(username, callback) {
  $.getJSON("https://api.github.com/users/" + username + "/repos?callback=?", callback);
};

var getGithubRepositories = function(username) {

  var repoList = $("#repo-list");
  repoList.append("<li>Loading...</li>");

  githubUsername(username, function(data) {

    var template    = $("#github-repos").html(),
        information = Mustache.render(template, data);

    repoList.html(information);

  });

};
