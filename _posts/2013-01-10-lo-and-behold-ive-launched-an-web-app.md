---
title: "Lo and behold, I've launched an web app!" 
tags: ["Web", "Code", "Apps"]
layout: post
comments: true
external-link: false
---

The day before yesterday I launched my first "web app", [Kramit!](http://kramit.ellengummesson.com/ "Kramit!"). Like about half a million people on the internet with some kind of web development interest I created yet another [Markdown](http://daringfireball.net/projects/markdown/ "Markdown") preview app and with the wonderful micro web framework [Sinatra](http://www.sinatrarb.com/ "Sinatra"). It's nothing unique but I'm quite proud nonetheless. I haven't actually seen that many that uses [Kramdown](http://kramdown.rubyforge.org/ "Kramdown") as it's default parser, so I guess that that aspect is somewhat pretty unique[^20130110-1].

## More minimum than an MVP

*Kramit!* is at it's core the definition of an MVP[^20130110-2]. The whole thing consists of just 33 lines of Sinatra code, 61 lines of HTML for the views (ie. the layout) and 243 lines of CSS for both the app itself and the preview. A total of 337 lines. That's nothing! I'm quite amazed that Sinatra makes me able to do so much with barely any code at all. It literally took me just a few hours to go from idea to launch and the hard part wasn't actually writing the code but rather designing it.[^20130110-3]

## So, what's next?

First of all I think I'm continue to play around with Sinatra and the Ruby language itself a bit more and then maybe look at [Ruby on Rails](http://rubyonrails.org/ "Ruby on Rails"). It's much more advanced and kind of plays on a whole other field than Sinatra, but it would be fun to learn.

***

[^20130110-1]: I like it because it has [MultiMarkdown](http://fletcherpenney.net/multimarkdown/ "MultiMarkdown") features like footnotes for examples (this footnote became very meta by the way).
[^20130110-2]: [Minimum viable product](http://en.wikipedia.org/wiki/Minimum_viable_product "Minimum viable product").
[^20130110-3]: I would called myself challenged in that department. My basic design process is "make something up, strip away all the things that I though was going to look good but didn't, look it at it again and then remove some more".
