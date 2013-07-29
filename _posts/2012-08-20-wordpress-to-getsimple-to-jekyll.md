---
title: "WordPress to GetSimple to Jekyll"
tags: ["Code", "Jekyll"]
layout: post
comments: true
external-url: false
---

*... Or: "How I learned to stop worrying and love the command line".*

I love WordPress. I think it's a really great CMS and the community is huge, to say the least. However, I feel that it's sometimes a bit too much. If I wanted to have a site with a lot of pages and if I was writing several blog posts a day it would been a no-brainer, and I'd choose it in a heartbeat. But since I don't plan to do that I wanted something smaller. I've been playing around with [GetSimple](http://www.get-simple.info/) (which is a small but powerful CMS that stores everything in XML files) for a while, so at first I decided to use that. However, it isn't really a blogging plattform so I had to install a  plugin for that. It worked alright, but I still didn't feel quite satisfied. Then I found [Jekyll](http://www.jekyllrb.com/).

## Jekyll

Jekyll is described like this in the [official wiki](https://github.com/mojombo/jekyll/wiki):

> Jekyll is a simple, blog aware, static site generator. It takes a template directory (representing the raw form of a website), runs it through Textile or Markdown and Liquid converters, and spits out a complete, static website suitable for serving with Apache or your favorite web server.

In other words, Jekyll takes your template files, written in HTML and [Markdown](http://daringfireball.net/projects/markdown/) and marked up with [Liquid tags](http://liquidmarkup.org/), and generates them into simple, static .html files. "Blogging Like a Hacker" is sort of Jekyll's tagline, and I think that's a really good description of it. You have to use the command line to generate your static pages and you basically have to write your posts and pages in Markdown or Textile (I don't see that as a bad thing at all though, I love to do it that way). You can also use plugins to extend its' functionality. For example, I use one that enables the pagination pages to be generated into different folders called `/blog/page/2/` and so on (rather than `/page2/`), and another one to create folders and .html files for my tags (I'll write more about this in another post).

### Why?

It's incredibly lightweight. It doesn't need a database or any back end language like PHP at all, which means that you don't have to worry about the database breaking and you can host it wherever you want to. The file size of a site which consists of just static pages is ridiciously small too (this whole site takes up about 200 kb as of right now) and above all, it's highly customizable. One big thing that actually irks me about WordPress is that it's filled with many pre-named classes and functions that you can't change. Well, you could go into the source and hammer away there, but I'd rather not do that. With Jekyll I can actually change the look of the site in a matter of minutes and I can easily add a new class wherever I want if I need to. It only generates the things that I've added by myself. The only disadvantage is that I need to sit in front of my computer in order for me to use Jekyll. It doesn't really matter to me, since I've never been comfortable with writing and publish post with my phone or via email.

Like I said in my previous post, it took me some time to actually get it up and running, but now I'm finally happy. It's not the most convenient solution, but it's simple enough for me. I'll probably write a couple of more post about Jekyll, so keep an eye out.
