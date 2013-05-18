---
title: "My first plugin for Jekyll"
tags: ["Code", "Jekyll"]
layout: post
comments: true
external-link: false
---

Okay, I wouldn't really call it my first real plugin, but I took the [Youtube plugin](http://www.portwaypoint.co.uk/jekyll-youtube-liquid-template-tag-gist/) I use and modified it so you can embed videos from Vimeo with a simple Liquid tag. That's usually the way I learn stuff anyways (even though I haven't really wrapped my head around Ruby yet) so I figured that it'd be interesting to see if I could make it work even though my modifications weren't that significant. Maybe I'll pick it up some day.

## Source code

    module Jekyll
      class Vimeo < Liquid::Tag
        @@width = 500
        @@height = 281

        def initialize(name, id, tokens)
          super
          @id = id
        end

        def render(context)
          %(<iframe width="#{@@width}" height="#{@@height}" src="http://player.vimeo.com/video/#{@id}" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>)
        end
      end
    end

    Liquid::Template.register_tag('vimeo', Jekyll::Vimeo)

### Liquid tag

{% raw %}

    {% vimeo 12345678 %}

{% endraw %}
