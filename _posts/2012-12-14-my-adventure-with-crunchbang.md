---
title: "My adventure with Crunchbang"
tags: ["Tech", "Linux", "Crunchbang"]
layout: post
comments: true
external-url: false
---

Lately I've been thinking about installing a Linux distro on my thrusty but ailing netbook, a *Samsung NC10*[^20121214-1]. After some intense research via Google and countless hours of Youtube videos I found one particular distro I really liked: [Crunchbang Linux](http://crunchbang.org/). It's quite a minimal distro but highly functional and it also looked quite nice to my eyes. It's based on [Debian](http://www.debian.org/) which means that there's a lot of apps for it and the support is generally good. I decided to download the current testing version, [Waldorf](http://crunchbang.org/download/testing), since I'm just going to use the netbook mainly for browsing and writing.

## Installation

I wrote the `iso` to a USB stick and played around with for a few minutes before I hit install. I was a bit worried that I'd completely break my computer but the installation went fine. It took about 10-15 minutes and then the system was up and running. I was also prepared for some tinkering with the settings and such but everything worked right out the box, even the brightness and volume controls. Color me impressed!

## Configuration

After the installation I decided to remove a couple of apps[^20121214-2] since I'm not going to use them anyway. With a couple of `sudo apt-get remove`, `sudo apt-get autoremove` and some fiddling with the [Openbox](http://openbox.org/) menu it was done in a matter of minutes. The default web browser, [Iceweasel](http://www.geticeweasel.org/), wasn't really for me so I replaced it with [Chrome](www.google.com/chrome/). I also change the default font in system montoring tool [Conky](http://conky.sourceforge.net/) to a monospaced one. I'm probably going to change a few more things, but so far I'm happy with the default experience.

## Apps

While my goal is to keep the netbook as clean as possible there was one[^20121214-3] additional app that I just had to install: [ReText](http://sourceforge.net/p/retext/home/ReText/). It was the only real Markdown editor with syntax highlighting that I could find. My favorite distraction free editor [FocusWriter](http://gottcode.org/focuswriter/) is available but since I want to keep my app count at a minimum I decided to only install ReText. I've heard that a Debian-compatible version of [UberWriter](http://uberwriter.wolfvollprecht.de/) is in the works so I might switch to that once it's out.

![Crunchbang Linux (Waldorf)](/images/blog/2012-12-14-crunchbang-waldorf.png)

## Closing thoughts

In short I really love this distro. It's fast, light on the resources, highly customizable but at the same just works. The battery life has gone down from around 5 hours to 4.5 hours, which isn't that bad at all. In fact I'm really impressed by that too. I wholeheartedly recommend it to people who want to make the jump to Linux but don't want to use something more resource-heavy, like the current main version of [Ubuntu](http://www.ubuntu.com/), while still maintaining an all-around functionality for most users.

***

[^20121214-1]: The system specification is as followed: 1.6 GHz, 1 GB RAM, 160 GB HDD with Windows XP (previously) installed.
[^20121214-2]: [Abiword](http://www.abisource.com/), [Gnumeric](http://projects.gnome.org/gnumeric/), [xfburn](http://goodies.xfce.org/projects/applications/xfburn) and a few others.
[^20121214-3]: I also installed [Dropbox](http://dropbox.com/) but that's pretty much a given thing. 
