---
title: "External links in the post title"
tags: ["Code", "Jekyll"]
layout: post
comments: true
external-url: false
---

A couple of days ago I finally managed to add the ability to have external links in my post titles on this site. I tried and I tried, but for some reason I couldn't get it to work properly. I waited a couple of days and tried again and then boom, it worked. I don't know what I did wrong the first time, but I'm glad that it now works. Thanks to the YAML Front Matter and Liquid tags it's actually not that hard to add to your site. I don't really know if I'll use it that much, but I quite like to have that option.

## How to add the external links

The following markup is a simplified version of what I use. You should modify it to your liking and preferably add alt and title tags to your links. First, add this in the front matter portion of your post:

    external-url: http://www.example.com/

If you don't want to add an external link to your title, just replace the link itself with `false` or remove the whole thing. The markup of your post title on your front page should look like something like this:

{% raw %}

    <h1><a href="{{ post.url }}">{{ post.title }}</a></h1>

{% endraw %}

Instead of having the above markup, replace it with something like this:

{% raw %}

	{% if post.external-url %}
	  <h1><a href="{{ post.external-url }}">{{ post.title }}</a></h1>
	{% else %}
	  <h1><a href="{{ post.url }}">{{ post.title }}</a></h1>
	{% endif %}

{% endraw %}

I also added this in the markup for my post layout:

{% raw %}

    {% if page.external-url %}
      <h1><a href="{{ page.external-url }}">{{ page.title }}</a></h1>
    {% else %}
      <h1>{{ page.title }}</h1>
    {% endif %}

{% endraw %}

And you're done! I would encourage you to also add an actual permalink to your own post if you're using external links, like this for example:

{% raw %}

    <p><a href="{{ post.url }}">Permalink</a></p>

{% endraw %}

### A side note

I actually had to add another plugin so I could show the Liquid tags since Jekyll parses them automatically. You can find it in [this gist](https://gist.github.com/1020852) over at GitHub.
