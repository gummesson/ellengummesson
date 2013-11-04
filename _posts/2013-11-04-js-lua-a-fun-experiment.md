---
title: "js.lua: a fun little experiment"
tags: ["Code", "Lua"]
layout: post
comments: true
external-url: false
---

I recently had a few hours to kill and I decided to try out a new language, [Lua](http://www.lua.org/). In short, it's a fun little language[^20131104-1] and it's kind of a cross between JavaScript and Ruby, which I really like. I threw together a little library with JavaScript-like array functions which I named [js.lua](https://github.com/gummesson/js.lua). A really bad name, but I couldn't really think of anything else.

Setting everything up was a bit of a pain since I wanted to use [LuaRocks](http://luarocks.org/) and the [Busted](http://olivinelabs.com/busted/) module for testing. [This guide](http://www.thijsschreijer.nl/blog/?p=772) was the *only* one I could find and thankfully it worked. Working with JavaScript and [Node.js](http://nodejs.org/) has sure made me spoiled since everything's just a simple Google search away!

* * *

[^20131104-1]: Literally. The source code's only around 20 000 lines long. See ["Lua is small"](http://www.lua.org/about.html).
