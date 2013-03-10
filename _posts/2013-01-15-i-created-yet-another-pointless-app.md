---
title: "I created yet another (pointless) app" 
tags: [Web, Code, Apps]
layout: post
comments: true
external-link: false
---

My experiments with the [Sinatra](http://www.sinatrarb.com/ "Sinatra") framework continues and yesterday I pushed yet another app to [Heroku](http://www.heroku.com/ "Heroku") called [Slugize](http://slugize.ellengummesson.com/ "Slugize"). It only has one small purpose: creating a slug out of a blog title, which can be pretty handy when you use a static site generator like [Jekyll](http://jekyllrb.com/ "Jekyll"). I usually don't decide on a title until a few seconds before I "hit publish" which means that fixing the slug is usually the last thing I do. I find it extremely annoying that I have to manually type out `-` between every word in the title and change every letter to be in downcase[^20130115-1]. I guess you can call it lazyiness too. Now I only need to copy and paste the title into *Slugize* and it'll do it automatically for me and I also added an option to append the current day's date to it. It's funny how being lazy sometimes makes you more productive.

***

[^20130115-1]: I do actually use the `rake post` function that I created for my [Jekyll Rake Boilerplate](https://github.com/gummesson/jekyll-rake-boilerplate "Jekyll Rake Boilerplate") project, but I only use it when I'm 100% sure on a post's title and content.
