---
title: "A brand new blog"
tags: [Code, Design]
layout: post
comments: true
external-link: false
---

I've yet again redesigned the layout of this site and this time it's a hell of a lot different. I grew tired of the old look since it in all honestly looked boring and decided to give it some colors. I found the typeface [Roboto](http://www.google.com/webfonts/specimen/Roboto "Roboto") a few weeks ago and I like it so much that I decided to use it, which was the first step.

## Hey, what is THAT theme?

The theme is based on [Noah Frederick's](http://noahfrederick.com/ "Noah Fredrick") beautiful [Peppermint theme](http://noahfrederick.com/blog/2011/lion-terminal-theme-peppermint/ "Peppermint terminal thehe") for the OS X's terminal. I remember stumbling onto his [Hemisu colorscheme](http://noahfrederick.com/vim-color-scheme-hemisu/ "Hemisu") for [Vim](http://www.vim.org/ "Vim") and for some reason I also found Peppermint. I even liked it so much that I hacked together a Vim colorscheme for it that I use quite a lot.

## Sass + Compass = &hearts;

I also used [Sass](http://sass-lang.com/ "Sass") and [Compass](http://compass-style.org/ "Compass") exclusively for the CSS writing. I've been wanting to use it for a long time and I even tried to convert the old design's CSS to it, but I gave up pretty quickly. This time I didn't and I of course used [Smallwork](https://github.com/gummesson/smallwork "Smallwork") as a base which made the process a lot more easier and faster. Redesigning this site was also one of the things that made me re-write Smallwork.

using Compass with Jekyll is also relatively easy by the way. I first tried out a couple of plugins, but I decided to implement it in my Rake task instead. While the plugins worked great it really bugged me that I couldn't decide when to use `compass compile` and when to use `compass watch`. All I had to do was to add this to my `build` task in my `Rakefile`, before `jekyll` is run:

	system "cd assets/ && compass compile && cd ../"

Simple and effective!

## Fun(ish) trivia

- I started the redesign on March 1st and I've made a total of 28 commits[^20130309-1] to the git repository I used for the development.
- I "skipped" support for Internet Explorer 8 in favor of using `[class^="column-"]:last-child` to remove the `margin-right` on the grid system[^20130309-2].
- I also found a pretty cool Sass function called `darken()`, which made it easy finding a good background color for my `code` and `pre` tags and the subtle text shadow. All of the color functions for Sass are pretty cool, in fact.
- The pink line at the bottom of the site uses the ["James Dean Sticky Footer"](http://mystrd.at/modern-clean-css-sticky-footer/ "Modern Clean CSS Sticky Footer") approach, which is a nice little hack. I love the name too!
- I tried to change as little as possible when I did the CSS for the media queries. I pratically just changed the font size and some margins. That's it.

***

[^20130309-1]: I'm an obsessive commiter.
[^20130309-2]: I doubt that that will cause any problems. I don't think I know anyone that actually use Internet Explorer.
