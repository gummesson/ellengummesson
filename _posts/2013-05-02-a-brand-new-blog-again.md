---
title: "A brand new blog (again)"
tags: ["Code", "Design"]
layout: post
comments: true
external-link: false
---

I decided yet again to throw together a new design for this site. At this point it feels like it's almost getting a monthly thing, but hopefully I'll stick with this one for a bit longer. I do really feel that I'm getting a bit better every time I do it though, which is something. This time around I took a much more [OOCSS](http://oocss.org/ "OOCSS") approach to the writing of the CSS and I mainly used the [BEM](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/ "MindBEMding – getting your head ’round BEM syntax") syntax. I don't find it particularly pretty but it's quite logical. 

Another thing I did was that instead of prefixing the classes of every major part of the site with `site-` I went for a much simpler `l-`, which stands for "layout". I also used `br-`, "breakpoint", for the buttons in the main navigation. They get much wider when the site's viewed on a small screen and instead of having to write a lot of code I simply added a class to them. Very convenient! If I had more "media query"-based classes I probably would've used other names for them, but as of right now it works well I think.

I once again used [Sass](http://www.sass-lang.com/)' excellent `darken` and `lighten` functions to generate the color palette. I can't imagine how I'd do without them, to be honest. Like I mentioned earlier I feel that I'm getting better at designing in general but I'm not designer by far.

I finally added syntax highlighting too. For some reason I completely missed that [Highlight.js](http://softwaremaniacs.org/soft/highlight/en/ "Highlight.js"), the engine that I now use, actually detects the language automatically without me having to add classes and span tags by hand. All the code is suddenly much more readable! I removed the [Vim](http://www.vim.org/ "Vim") keybindings script for the site. It was getting on my nerves and the code looked truly awful.

And that's a wrap!
