---
title: "Wordcount plugin for Jekyll"
tags: ["Code", "Ruby", "Jekyll"]
layout: post
comments: true
external-url: false
---

Today I decided to hack together a small plugin for Jekyll that can count all the words in a blog post and also roughly calculate how many seconds it takes to read it. This is based on some quick googling where I found out that the average person reads 300 words per minute, so I'm not sure if it's 100% true but it's a pretty fun feature nonetheless. I've of course created a repository for it on [GitHub](https://github.com/gummesson/jekyll-wordcount). I'm not entirely sure that the implementation I use is the best since it needs to read the content and strip it of it's HTML tags before actually doing the counting but it was by far the easiest way[^20130131-1]. The couting seems to be quite accurate too, which is nice.

***

[^20130131-1]: Atleast if you're measuring by code length since the whole plugin currently consists of just 17 lines of code.
