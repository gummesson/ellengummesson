---
title: "The hassles of media queries"
tags: [Code, CSS, HTML]
layout: post
comments: true
external-link: false
---

When I first set out to create this site, I knew that I wanted to make it responsive by adding a couple of media queries in my CSS. I never knew that it could become quite a tricky feat though. I tried and I tried, but for some reason I couldn't get them to properly work. Then it hit me that I'd forgot to add this in the `<head>`:

	<meta name="viewport" content="width=device-width">

Note to self: don't be stupid. It'll save you a lot of time.

I also had some problems with my iPhone's Retina display, but after some digging I found a "hack" that made it work properly so that the media queries look the same as on a regular browser:

	(-webkit-min-device-pixel-ratio: 2)

To my defense I'm still pretty new to all of this, but still... I feel really dumb. Now they finally works and I'm totally happy, but I don't know whether or not I should be scared of the fact that I don't own an iPad... Either way, the site should now atleast look okay on an iPhone. I hope. I did try it out on an old HTC Wildfire too, and it looked suprisingly good. That was a nice suprise.
