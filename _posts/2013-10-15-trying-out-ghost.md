---
title: "Trying out Ghost"
tags: ["Web", "Code", "Ghost"]
layout: post
comments: true
external-url: false
---

[Ghost](http://ghost.org/) finally arrived yesterday and I was eager to try it out. The UI is really amazing and it seems like creating a theme for it can be done in minutes[^20131015-1]. I ran into some common errors so here's a really condensed guide on how to get it up and running. This may not be the perfect thing to do if you're actually planning on using it in production, but more so for just playing around with it.

## Prerequisites

The default database used for Ghost is [SQLite3](http://www.sqlite.org/), so make sure that you have that installed. Don't worry, [it's extremely easy](http://mislav.uniqpath.com/rails/install-sqlite3/).

## Installing Ghost

1. Clone the repository.
2. Run `git submodule update --init`[^20131015-2]. This will install the default theme.
3. Run `npm install -g grunt-cli`. This will install [Grunt](http://gruntjs.com/)[^20131015-3].
4. Run `npm install`. This installs all the dependencies.
5. Run `gem install bourbon`. This will install the Sass mixin library [Bourbon](http://bourbon.io/).
6. Run `grunt init`. This will compile the stylesheet and templates.
7. Go to `localhost:2368/ghost` and sign up.

As you can see it's not that hard. Now go make a theme or something!

* * *

[^20131015-1]: If you have a design in mind.
[^20131015-2]: If this doesn't work (SSH can be a quite the hassle on Windows) just clone the [Casper](https://github.com/TryGhost/Casper) theme into the `content/themes` folder. Make sure that you rename the folder from `Casper` to `casper`.
[^20131015-3]: Which I recommend having anyway.
