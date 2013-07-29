---
title: "Hotstrings and Markdown"
tags: ["Tech", "Apps", "Markdown"]
layout: post
comments: true
external-url: false
---

Since yesterday I've been messing around with an small but powerful app called [AutoHotKey](http://www.autohotkey.com/). I guess you can call it a poor man's [TextExpander](http://smilesoftware.com/TextExpander/index.html), but the fact is that it's capable of doing much more. Not only does it support text expansions for abbreviations but you can also create scripts with so called hotkeys and other things for anything and everything. When I say everything I do mean it. The learning curve is pretty steep for the more advanced functions since there's no GUI for it but for creating some simple text expansions it's as easy as scripting gets. The [documentation](http://www.autohotkey.com/docs/) is really great too if you want to dive in deeper.

## Abbreviate all the things

One of the strengths of an app like this is that it works great for repetitive writing tasks like phone numbers, email adresses and signatures. Instead of having to repeat essentially the same phrase several times a day you just write a simple keyword and it'll automatically transform into the right thing. Since it's as just a script it works universally across all of your apps too, which is another thing that's great. I can use the same abbreviations whether I'm surfing the web in Chrome or writing a blog post in FocusWriter or ResophNotes.

The basic structure of a simple text expansion script/hotstring looks like this:

	:oc:abbreviation::expanded text

**Side note:** the `oc` in the script tells the app to not add a blank space after the expansion and that the script is in fact case-sensitive. Just remove them if you want neither of those things to happen.

### Markdown automation

Since I use Markdown almost exclusively while writing these days I of course had to create a couple abbreviations for a more smooth writing experience. Even though the Markdown syntax is really easy it can sometimes slow you down when you have the insert certain characters like `[]` and `()`. Instead of having to type out all of the characters when I want to create link I only have to type `.mdlnk` thanks to this simple hotstring:

	:oc:.mdlnk::[]({"}{"})

After a simple hit on the spacebar the `.mdlnk` transforms into `[]("")` (the quotation marks, along with a couple of other characters, has to be wrapped inside curly brackets in order to show since they're used in the real syntax). Instead of having to fiddle with it I can easily paste the link in it and move on which works much better as you can imagine. I've also created similar hotstrings for many other things such as images (`.mdimg`) and referenced-styled links (`.mdrefi` and `.mdrefl`), although I rarely use those.

**Another side note:** since I'm new to this whole scripting thing there's no doubt at all that they could be more advanced and help even further with a more automated writing workflow but I haven't had time to learn that just yet. I could probably expand the above link script to actually add a link from the clipboard directly into it which I'm going to do once I have the time to sit down and figure it out.

So to wrap things up, if you want to speed up your repetitive writing then AutoHotKey is definitively it. Don't let the lack of a fancy GUI scare you off. If I can make it work, you can too.
