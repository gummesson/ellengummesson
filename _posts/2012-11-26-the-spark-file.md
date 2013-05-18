---
title: "The spark file"
tags: ["Writing", "Plain Text"]
layout: post
comments: true
external-link: false
---

A few weeks ago I came across a post on [Medium](https://medium.com/) called [The Spark File](https://medium.com/the-writers-room/8d6e7df7ae58) written by [Steven Johnson](https://medium.com/@stevenbjohnson). I really liked the idea of having a spark file of some sort but never took the time to try it out. I usually depend on [ResophNotes](http://resoph.com/ResophNotes/Welcome.html) when it comes to jotting down ideas but more often than not I've ended up with text files with just a headline in them, like "write about x and y". While it definitively helps me remembering what I want to write about I feel that it's unnecessary to have a ton of one line ideas clutter up my notes. That's where the spark file fits perfectly. I finally understood that it's something that'll be a good addition to my writing workflow. Now I've begun to only use ResophNotes for my blog posts or other types of writing when an idea has involved to something more solid, while the spark file is just a scratchpad for things I want to write about but haven't really figured out yet.

## Instant sparks

I threw together a simple [AutoHotKey](http://www.autohotkey.com/) script so the spark file is just one hotkey away:

	!q::
	{
	Run, Notepad.exe "~/spark-file.txt"
	Return
	}

This means that whenever an idea pops up I just need to press `Alt+Q` and type down whatever's in my head. It's a simple but powerful solution that'll serve me well I think.
