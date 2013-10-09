---
title: "Installing dwm on Crunchbang Linux"
tags: ["Linux", "Crunchbang", "dwm"]
layout: post
comments: true
external-link: false
---

*Note: I started to write this guide a couple of days ago, before I yet again went distrohopping. I now run a minimal Debian Testing setup on my netbook but I thought it would be a good idea to post it nonetheless.*

After trying both [Crunchbang Linux](http://crunchbang.org/), [Manjaro Linux](http://manjaro.org/), a couple of days of [Peppermint OS](http://peppermintos.com/) and a week long stint with [Lubuntu](http://www.lubuntu.net/) I went back to using Crunchbang. It was my first Linux distribution and I still think it's fits my needs perfectly. I really like that it's lightweight while still being a fully functional operating system.

While I was running Lubuntu I played around with [dwm](http://dwm.suckless.org/) and fell in love with it, so when I decided to reinstall Crunchbang I really wanted to use it too. The process wasn't as straight forward as it was on Lubuntu, but after a few tries and with the help of [this blog post](http://cortman.wordpress.com/2012/10/23/crunchbang-slim-and-wm-madness/) I managed to get it to run flawlessly. I thought that I would be an good idea to write it all down, so with no further ado, here's a short guide on how to install and configure `dwm` to run on Crunchbang Linux.

## Installation

First you need to install `dwm`:

    sudo apt-get install dwm

To fully customize it you need to configure it and install it from source, but since I'm happy with the way it looks I'll just use the standard package for now. [dmenu](http://tools.suckless.org/dmenu/) is a great tool to have too, but the package `suckless-tools` is actually installed by default which means that you don't have to install it yourself.

These packages are by no means neccessary, but they're quite handy to have:

    sudo apt-get install unclutter
    sudo apt-get install feh
    sudo apt-get install acpi

`unclutter` will hide your mouse cursor, `feh` will help you set the wallpaper and `acpi` will display your battery's status directly on the `dwm` status bar. You can leave out `acpi` if you're not using a laptop.

## dwm

### The wallpaper

Open up the terminal and type the following (use one of the four layout alternatives):

    feh --bg-[tile|center|scale|seamless] path/to/file.ext

This will create a small file called `.fehbg` in your home directory.

### The startup script

Create a file called `dwm-startup` somewhere in your PATH with the following content (and don't forget to make it executable[^20130810-1]):

    #!/usr/bin/env bash

    # Set `feh` to change the wallpaper
    source $HOME/.fehbg

    # Set `unclutter` to hide the cursor after a second of inactivity
    unclutter -root -idle 1 &

    # Start `dwm` with a modified status bar
    while true; do
      xsetroot -name "Db: $(dropbox status) | B: $(acpi -b | awk '{ print $4 $5 }' | sed 's/,/ \/ /g') | V: $(amixer get Master | awk '/Front Left:/{ print $5 }' | sed 's/\[\|\]//g') | $(date '+%d %b %Y') | $(date '+%H:%M')"
      sleep 10s
    done & exec dwm

The status bar will display an output that'll roughly look like this:

    Db: Idle | B: 50% / 01:30:00 | V: 50% | 01 jan 2000 | 12:00

One thing that's worth noting is that the official [Dropbox CLI script](https://www.dropbox.com/install?os=lnx#linux-install-content) is *NOT* installed on Crunchbang by default, so you have to set it up by yourself.

## X

Create a file in your home directory called `.xinitrc` and add the following content (make it executable too):

    #!/usr/bin/env bash

    # Load .Xresources
    xrdb -merge $HOME/.Xresources

    # Set the default window manager
    DEFAULT=openbox-session

    # Start `Openbox`/`dwm`
    case $1 in
      openbox-session)
        exec openbox-session
      ;;
      dwm)
        exec dwm-startup
      ;;
      *)
        exec $DEFAULT
      ;;
    esac

This will load your `.Xresources` file, which contains a couple of vital settings for [X](http://www.x.org/), and the window manager of your choice. It'll fallback on using Openbox as the default.

## SLiM

Now it's time to configure [SLiM](http://slim.berlios.de/) (the default login manager) by editing the `slim.conf` file that's located in `/etc`. Uncomment the following line:

    login_cmd           exec /bin/sh - ~/.xinitrc %session

And comment out this line:

    login_cmd           exec /bin/bash -login /etc/X11/Xsession %session

This needs to be configured since `dwm` doesn't use a autostart file by itself. The next thing you'll have to do is to add `dwm` to the part that says `sessions`:

    sessions            openbox-session,dwm

## The grand finale

Now it's time for you to reboot and press `F1` when the login screen appears to choose which window manager to use. Make sure that you're using `dwm`, log in and you're done!

* * *

[^20130810-1]: To make a file executable, open up the terminal and type `chmod +x file.ext`.
