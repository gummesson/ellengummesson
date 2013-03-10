---
title: "Footnotes"
tags: [Jekyll, Markdown]
layout: post
comments: true
external-link: false
---

Earlier today I look into some simple solution to enable support for footnotes since that's something that regular Markdown doesn't cover[^20121109-1]. My current Markdown interpreter, [rdiscount](https://github.com/rtomayko/rdiscount "rdiscount"), sadly doesn't have any support for it but another one called [kramdown](http://kramdown.rubyforge.org/ "kramdown") do. I thought that maybe kramdown was going to be significantly slower[^20121109-2] but it's actually hardly noticeable. According to the [syntax](http://kramdown.rubyforge.org/syntax.html "kramdown syntax") it processes the markdown a little differently but luckily I haven't noticed any changes, since I was worried for a while that I'd had to edit some posts. I did however had to add some thing in my CSS so that the footnotes didn't look to out of place, but since the markup consists of some attribute selectors that didn't turn out to be a big hassle either.

So to wrap this short post up, if you're looking for a pretty fast markdown interpreter for Jekyll that has some additional features you should definitively try out kramdown.

***

[^20121109-1]: Although forks of Markdown like [Markdown Extra](http://michelf.ca/projects/php-markdown/extra/ "Markdown Extra") and [MultiMarkdown](http://fletcherpenney.net/multimarkdown/ "MultiMarkdown") do.
[^20121109-2]: kramdown is built exclusively with [Ruby](http://en.wikipedia.org/wiki/Ruby_(programming_language) "Ruby (Programming Language)") while rdiscount also uses [C](http://en.wikipedia.org/wiki/C_(programming_language) "C (Programming Language)"), which to my understanding makes the whole process faster.
