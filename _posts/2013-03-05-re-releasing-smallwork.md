---
title: "Re-releasing Smallwork" 
tags: ["Code", "CSS", "Sass"]
layout: post
comments: true
external-link: false
---

Back in January I wrote a small paragraph about my SCSS "framework" [Smallwork](https://github.com/gummesson/smallwork). When I released it I was really happy about it, but I soon realized that I'd been perhaps a bit too trigger happy with it. This weekend I decided on a whim to nuke it and start over and yesterday I re-released it. It's pratically re-written from the ground up and it's even smaller in size than it was before. I cleaned up the code like a maid and threw out quite a bit of extra "baggage" that I was probably never going to use anyway. Now I feel like it actually could be useful to someone else too, which is really nice.

I also created yet another [Vim](http://www.vim.org/) plugin, this time just a simple wrapper for [Compass](http://compass-style.org/), which *Smallwork* is built with. I was getting sick of having to type either `:!compass compile` or `:sh` and then `compass compile` so I threw together a really basic function that makes it much easier. Now I only have to type `:CompassCompile`. Another nice feature is that you don't actually have to close the command prompt[^20130305-1] which means that you can use `:CompassWatch` without it interfering with Vim[^20130305-2]. If all goes well I think I'll even publish it on the official Vim scripts website too.

***

[^20130305-1]: Normally you can't do anything until you've exited the command prompt and hit `Enter`, but a simple solution from the [Vim Wiki](http://vim.wikia.com/wiki/Execute_external_programs_asynchronously_under_Windows) fixed that.
[^20130305-2]: Atleast on Windows. I don't think that there's an easy way to do that on Unix, which is unfortunate.
