---
title: "Fixing Jekyll's encoding shenaningans (again)"
tags: ["Code", "Jekyll"]
layout: post
comments: true
external-url: false
---

After a lot of of hesitation I finally upgraded [Jekyll](http://jekyllrb.com/) to `1.1.2` from using the `0.12.1` version. Quite a lot has changed and the team is doing a great job with it. However,  my old [`SET LANG` hack](/blog/2013/03/03/fixing-jekylls-encoding-shenanings/) didn't work. I tried using [another hack](http://joseoncode.com/2011/11/27/solving-utf-problem-with-jekyll-on-windows/) which involves using `chcp 65001` instead  but that didn't quite work either. Whenever I tried to launch the default server [WEBrick](http://ruby-doc.org/stdlib-1.9.3/libdoc/webrick/rdoc/WEBrick.html) it blew up. There were errors, errors everywhere. I wasn't going to give up so I came up with another solution.

I now use an external server while Jekyll just auto-generates the site. I use a small [Node.js](http://nodejs.org/) web server app called [nws](#) which I use all the time anyway. I also use [Grunt](http://gruntjs.com/) for task automation ([here's the source code](https://github.com/gummesson/ellengummesson/blob/master/Gruntfile.js)). I also have a project called "[Teeny tiny static server](https://github.com/gummesson/teeny-tiny-static-server)" which I created some months ago. It uses [Rack](https://github.com/chneukirchen/rack), [Rack-Rewrite](https://github.com/jtrupiano/rack-rewrite) and [Thin](https://github.com/macournoyer/thin) to create a fast prototype web server, which may be an alternative to using a Node.js based solution. It's not perfect but it's better than being stuck on an old version.
