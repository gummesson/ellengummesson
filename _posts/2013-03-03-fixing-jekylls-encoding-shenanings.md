---
title: "Fixing Jekyll's encoding shenanings" 
tags: ["Code", "Jekyll"]
layout: post
comments: true
external-url: false
---

After installing the 0.12.1 version of [Jekyll](http://jekyllrb.com/) I started to get an annoying error that the encoding was wrong. I'm really picky about saving all my files as `UTF-8`, so I couldn't for the life of me figuring out why it all of a sudden threw that kind of error. I even reinstalled 0.12.0 and sure enough, that version worked without a problem. The solution is to set the default language and encoding before running Jekyll, ie. `set LANG=en_EN.UTF-8` for Windows or `export LANG=en_EN.UTF-8`[^20130303-1] for Unix. Since I'm a lazy person I of course implemented it in my `Rakefile`, similar to this:

    require 'rbconfig'

    LANG = en_EN.UTF-8

    if RbConfig::CONFIG["host_os"] =~ /mswin|mingw/
      SET = "set"
    else
      SET = "export"
    end

    task :build do
      system "#{SET} LANG=#{LANG} && jekyll"
    end

The `RbConfig` part is actually a neat trick I found a couple of weeks ago. It apparently works better than using `RUBY_PLATFORM` since it picks up the actual OS rather than the Ruby platform.[^20130303-2] I'm not sure that the `require` part is really necessary but it doesn't hurt either. You can of course just create an alias too if you're only using Unix, ie: `alias jekyll="export LANG=en_EN.UTF-8 && jekyll"` or something like that.

* * *

[^20130303-1]: I actually set my language to `sv_SV.UTF-8`, but I figured that using the english version in an example is better.
[^20130303-2]: Using `RUBY_PLATFORM` when you're working with other Ruby implementations such as JRuby doesn't quite work, if I understand it correctly.
