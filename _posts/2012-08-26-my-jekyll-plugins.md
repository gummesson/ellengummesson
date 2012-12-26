---
title: My Jekyll Plugins
tags: [Code, Jekyll]
layout: post
comments: true
---

Continuing with my Jekyll series, here's a list of the plugins and other hacks I use to make everything on this site run as smooth as possible.

## Pagination

For pagination, I just followed the guidelines from the [official wiki](https://github.com/mojombo/jekyll/wiki/Pagination) and did some minor changes in the markup. Although it's strictly not a plugin, I had to make a small configuration in Jekyll's `pagination.rb` file since I wanted to generate my pagination pages in to a different folder than the default one. I copied the `pagination.rb` from Jekyll's library directory and placed it in the _plugins folder and changed the following line from this:

	newpage.dir = File.join(page.dir, "page#{num_page}")

To this:

	newpage.dir = File.join(page.dir, "blog/page/#{num_page}")

To my suprise, it actually worked! Like I said earlier, I guess it doesn't really count as a plugin, but I thought it would be good to mention it so that someone else can use the same approach if they want to.

## Tags

To get tags to work on this site I used [an excellent guide/plugin](http://charliepark.org/tags-in-jekyll/ "Tags In Jekyll") from Charlie Parker. I also changed the default folder to a different one by adding and changing `tag_dir` in my _config.yml file (ie: `tag_dir: /blog/tag/` instead of just `tag_dir: /tag/`).

## RSS Feed

I followed and used the guidelines from Snaptortoise's [RSS Feeds Templates](https://github.com/snaptortoise/jekyll-rss-feeds "Jekyll RSS Feeds Templates"). However, instead of using `layout: rss-feed` in my feed.xml file I use `layout: nil`. Same thing, different names.

## Sitemap

I use Mike Levin's [sitemap.xml Generator](https://github.com/kinnetica/jekyll-plugins "sitemap.xml Generator") to generate a simple sitemap. It's maybe not the the most required function ever, but I like to have it.

## Images

For an easy image implementation I used Scott Parker's plugin [ImageBlock](http://spparker.com/posts/2011-04-26-keeping-jekyll-classy#posting "ImageBlock"). It makes it easier to add images to the blog post by using a liquid tag. Simple and effective. However, it's probably not suitable if you're going to use a lot of images since it just fetches them from one folder called `images` (or in my case, `/assets/images`).

## Youtube

I stumbled upon [this gist/plugin](http://www.portwaypoint.co.uk/jekyll-youtube-liquid-template-tag-gist/ "Jekyll Youtube Liquid Template Tag") by Portway Point and I decided to test it even though I probably won't use it that much. It works perfectly and like the above plugin you use it by adding a simple liquid tag.