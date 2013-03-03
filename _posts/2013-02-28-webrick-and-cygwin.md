---
title: "WEBrick And Cygwin" 
tags: [Code, Ruby]
layout: post
comments: true
external-link: false
---

There's no secret that I've become a big fan of [Cygwin](http://www.cygwin.com/ "Cygwin") and the Unix command line since I started to use it more frequently. However, there's really no easy way of running [Ruby](http://www.ruby-lang.org/en/ "Ruby"), or more specifically [RubyGems](http://rubygems.org/ "RubyGems") under it unless you've installed it directly throught the Cygwin installer which I, unfortunately, haven't done. I did find the alias solution which I wrote about in the previous post that makes it somewhat less of a hassle. Using it in conjunction with [WEBrick](http://www.ruby-doc.org/stdlib-1.9.3/libdoc/webrick/rdoc/WEBrick.html "Webbrick")[^20130228-1] is a pain though, since it for some reason won't kill the server and thus rendering the port useless until the computer gets rebooted. After much, much digging I did found an answer to how to shut it down "properly": `taskkill /F /PID {num}`[^20130228-2]. The `{num}` is of course replaced with the real PID number that Webbrick outputs when it starts. It's kind of brutal and annoying, but I think it's good to have a backup plan in case I do want to execute Jekyll from Cygwin. I did give it an alias too, just to be sure.

***

[^20130228-1]: Which is the default server for [Jekyll](http://jekyllrb.com/ "Jekyll") and [Sinatra](http://www.sinatrarb.com/ "Sinatra").
[^20130228-2]: [The answer was found on StackOverflow](http://stackoverflow.com/questions/14244288/how-do-i-kill-a-rails-webrick-server?rq=1 "How do I killa a Rails Webbrick server?"), as expected.
