---
title: "Kapow! – a punchy PowerShell framework"
tags: ["Code", "PowerShell", "Console"]
layout: post
comments: true
external-url: false
---

Earlier today I released a new project called [Kapow!](https://github.com/gummesson/kapow). After growing more and more frustrated over how slow [Cygwin](http://www.cygwin.com/) was[^20130826-1] and not being able to use [Oh my Zsh!](https://github.com/robbyrussell/oh-my-zsh) on my Windows machine I decided to hack together something that atleast resembled some kind of framework. Right now it has quite a few aliases, scripts, tab completion and themes. I haven't really used the PowerShell that much so the code looks a bit wonky but hey, it works! My initial thoughts about writing scripts for the the PowerShell are not bad... I think that I actually like it, which is a shock. This is how my prompt looks right now[^20130826-2]:

![Kapow! with the Punchy theme](/images/blog/2013-08-26-kapow-punchy-theme.png)

It's definitively an improvement over the standard look and behaviour. I haven't noticed any slowness at all either, but the plugin library isn't that huge right now. I'm hoping to expanded it a bit more and I'll be happy if anyone wants to contribute!

* * *

[^20130826-1]: It takes about 10 seconds to launch it. No joke.
[^20130826-2]: I'm also using [Console2](http://sourceforge.net/projects/console/).
