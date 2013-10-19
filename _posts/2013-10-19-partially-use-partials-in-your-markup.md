---
title: "Partially: use partials in your markup"
tags: ["Code", "JavaScript", "Node.js"]
layout: post
comments: true
external-url: false
---

I've always been jealous of the plethora of build tools available on OS X, in particular [Hammer for Mac](http://hammerformac.com/) and it's excellent `@include` feature. Rather than buying a new computer I decided to instead create yet another [Node.js](http://nodejs.org/) project and build it myself. I named it [Partially](https://github.com/gummesson/partially)[^20131019-1]. It enables you to do this:

    <!-- @include partial.ext -->

It'll then include the partial in question in the file. It should be able to handle any markup language, although I've some far only tried HTML, [Haml](http://haml.info/), [Jade](http://jade-lang.com/) and [Markdown](http://daringfireball.net/projects/markdown/).

This was also the first real project that I decide to go all in on and write actual tests for. It suprised me that once I got into it it was actually quite fun! I have no idea if I did it the "right" way, but I atleast tried to. Pull requests are always welcome. In fact, they're even encouraged!

* * *

[^20131019-1]: Of course!
