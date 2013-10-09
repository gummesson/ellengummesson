---
title: "Automated Markdown links and better footnotes"
tags: ["Code", "Markdown"]
layout: post
comments: true
external-url: false
---

I've finally updated [my Markdown Hostrings repo](https://github.com/gummesson/markdown-hotstrings) I wrote about earlier with a couple of new things that I came up with after some tinkering. I've tried them and they've been really helpful for me, so I hope that somebody will also find them useful.

## Automated links

I finally figured out how to paste an URL from the clipboard directly into a Markdown-formatted link. I've looked and looked around the web but I felt that all the solutions I found were a bit to "complicated" for such a basic thing. I figured that a simple script for copying and pasting an URL into a simple text string surely wouldn't need 7-10 lines of code? For once, my instincts were right. Here's the hotstring in just three lines of code:

	:oc:.plk::
	{ 
	url = %clipboard%
	SendInput {Enter}[](%url% {" 2}){Home}{Backspace}{Right}
	Return
	}

Which is going to output something like this when you type `.plk`[^20121115-1]:

	[](http://www.website.com/ "")

In theory the `url = %clipboard%` line is unnecessary, but I've had trouble with getting the `%clipboard%` to work properly a few times So I decided to leave it in the script. I also kind of like the look of it. It's worth to note that the above hotstring just copies and pastes whatever's in your clipboard so you have to make sure that you've copied the URL before you use it.

## Footnotes

Another thing I came up with was a hotstring for creating better reference numbers for footnotes. If you're planning on using footnotes extensively you can't just write something like `[^1]` since it'll just add the exact number you use, ie: 1. That means that if you're using several of those on the same page it'll get messy, so I threw together a simple script that adds the date inside a footnote:

	:oc:.fndi::
	{ 
	FormatTime, date,, yyyyMdd
	SendInput [{^}%date%-]{Left}
	Return
	}

Which outputs something like this when you type `.fndi`[^20121115-2]:

	[^20121115-]

You do have to add the footnote number yourself, but that's not too much of a hassle. It'll obviously won't work that great if you're publishing several posts a day, but it could be easily modified to add hours, minutes and seconds to it and so on.

* * *

[^20121115-1]: The cursor will be placed inside the square brackets.
[^20121115-2]: The cursor will be placed after the hyphen.
