---
title: "More Vim goodness" 
tags: ["Code", "Vim"]
layout: post
comments: true
external-url: false
---

I feel like I start to sound like a fantatic when it comes to [Vim](http://www.vim.org/), but the truth is that I'm having so much fun with it that it's hard to stop and thus I've created two more plugins: [Voutliner](https://github.com/gummesson/voutliner.vim) and [Footnotes](https://github.com/gummesson/footnotes.vim).

## Voutliner

*Voutliner* is a simple outlining tool[^20130216-1]. I looked at both [VimOutliner](http://www.vim.org/scripts/script.php?script_id=3515) and [TVO](http://www.vim.org/scripts/script.php?script_id=517) but I felt that they were a bit too "heavy" for me. I wanted something simple that didn't depend on too many different components. *Voutliner* is certainly not for everyone but it works perfectly for me. It basically built around a couple of regexes based on indentation that's been linked with the default syntax highlighting. I did try it out on a couple of different colorschemes and it seems to work on most of them, which is good.

## Footnotes

I like using footnotes but I hate having to manually enter the date for each and every one of them[^20130216-2]. At first I used a simple abbreviation to try to tackle the problem but I still had to move around too much for my liking. Now I just need to press `F7` and the date will get added to every footnote automatically. Like *Voutliner* I doubt that many people will use it, but yet again it's extremely useful for me.

* * *

[^20130216-1]: And it's a really bad name.
[^20130216-2]: I use `YYYYMMDD-#` as a format so that every footnote has an unique set of numbers, which makes it even more tedious.
