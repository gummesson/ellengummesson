---
title: "The Linux setup"
layout: page
---

A collection of notes on my [Debian](http://www.debian.org/) and [dwm](http://dwm.suckless.org/) powered system.

## Table of contents

- [Computer](#computer)
  - [Hardware](#hardware)
  - [OS](#os)
- [Software](#software)
  - [Base](#base)
  - [Tools](#tools)
    - [ncurses](#ncurses)
  - [Applications](#applications)
  - [Development](#development)
  - [Fonts](#fonts)
  - [Theme](#theme)
- [Screenshots](#screenshots)
- [Installation](#installation)
  - [Base](#base)
  - [Desktop](#desktop)
  - [Sound](#sound)
  - [Wireless](#wireless)
  - [Apt-pinning](#apt-pinning)
- [Maintenance](#maintenance)
  - [Cleaning the system](#cleaning-the-system)
  - [Removing old kernels](#removing-old-kernels)
- [Miscellaneous](#miscellaneous)
  - [Install from the `unstable` repositories](#install-from-the-unstable-repositories)
  - [Use `shutdown` without sudo](#use-shutdown-without-sudo)

## Computer

**TL;DR:** a [Samsung NC10](http://en.wikipedia.org/wiki/Samsung_NC10) with [Debian Testing](http://www.debian.org/releases/testing/).

### Hardware

I have an aging [Samsung NC10](http://en.wikipedia.org/wiki/Samsung_NC10) netbook that I got back in 2009 which I use as my primary Linux box. It has a 10.2" LCD screen, a 1.6 GHz CPU, 1GB RAM and a 160GB HDD. It actually works suprisingly well with the more popular distributions of Linux and the battery still lasts for a couple of hours.

### OS

My main operating system right now is [minimal install](#installation) of [Debian Testing](http://www.debian.org/releases/testing/). I have my `sources.list`, `preferences` and `apt.conf` files pointing to the actual testing branch and not the current codename. I used [this guide](http://linuxforcynics.com/how-to/minimal-debian-install) for the installation and [this wiki entry](https://wiki.debian.org/AptPreferences) for the apt-pinning.

## Software

**NOTE:** a couple of the packages may very well be included in the installation.

### Base

- [dwm](http://dwm.suckless.org/) as my window manager of choice.
  - [dmenu](http://tools.suckless.org/dmenu/) as a simple application launcher.
  - [feh](http://packages.debian.org/testing/feh) for image viewing and wallpaper management.
  - [unclutter](http://packages.debian.org/testing/unclutter) for hiding the cursor.
- [urxvt](http://packages.debian.org/testing/rxvt-unicode-256color) as my main terminal emulator.
- [Zsh](http://packages.debian.org/testing/zsh) as my default shell.
  - [Oh My Zsh](https://github.com/robbyrussell/oh-my-zsh) as my framework for `Zsh`.
- [tmux](http://packages.debian.org/testing/tmux): as my terminal multiplexer.

### Tools

- [acpi](http://packages.debian.org/testing/acpi): as an ACPI client for providing battery, AC power, and thermal readings.
- [cpufrequtils](http://packages.debian.org/testing/cpufrequtils): for managing the `cpufreq` kernel feature.
- [xbacklight](http://packages.debian.org/testing/xbacklight): for setting the brightness of the screen.
- [htop](http://packages.debian.org/testing/htop): for system monitoring.
- [autocutsel](http://packages.debian.org/testing/autocutsel): for synchronzing the clipboard.
- [xclip](http://packages.debian.org/testing/xclip): for managing the clipboard.
- [scrot](http://packages.debian.org/testing/scrot): for taking screenshots.
- [usbmount](http://packages.debian.org/testing/usbmount): for automatically mouting and unmounting USB devices.
- [curl](http://packages.debian.org/testing/curl): for transfering data via URLs.
- [trash](http://packages.debian.org/testing/trash-cli): as a command line trashcan utility.
- [tree](http://packages.debian.org/testing/tree): for a command line tree view.
- [ack](http://packages.debian.org/testing/ack-grep): as a `grep`-like searching tool.
- [z](https://github.com/rupa/z): instead of having to use `cd` all the time.
- [ranger](https://github.com/hut/ranger): as a file browser.
- [pandoc](http://packages.debian.org/testing/pandoc): for converting Markdown to HTML.

#### ncurses

Packages for running and compiling `ncurses`-based software.

- [libncurses5](http://packages.debian.org/testing/libncurses5-dev)
- [libncurses5-dev](http://packages.debian.org/testing/libncurses5)
- [libncursesw5](http://packages.debian.org/testing/libncurses5-dev)
- [libncursesw5-dev](http://packages.debian.org/testing/libncurses5)
- [ncurses-term](http://packages.debian.org/testing/ncurses-term)

### Applications

- [Dropbox](https://www.dropbox.com/install?os=lnx): for synchronizing a lot of things.
- [Vim/gVim](http://packages.debian.org/testing/vim-gtk): as my main text editor.
- [dav](http://packages.debian.org/testing/dav-text): as a simpler alternative to `Vim`.
- [hnb](http://packages.debian.org/testing/hnb): for general outlining.
- [mplayer2](http://packages.debian.org/testing/mplayer2): as my default video and podcast player.
- [cmus](http://packages.debian.org/testing/cmus): as a more advanced music player.
- [uzbl](http://packages.debian.org/testing/uzbl): for graphical web browsing.
- [w3m](http://packages.debian.org/testing/w3m): for text-based web browsing.
- [surfraw](http://packages.debian.org/jessie/surfraw): as my command line web search client.
- [irssi](http://packages.debian.org/testing/irssi): as my IRC client.
- [zathura](http://packages.debian.org/testing/zathura): for viewing PDFs.
- [mashpodder](https://code.google.com/p/mashpodder): as a simple podcatcher for a couple off oggcasts.

### Development

- [Git](http://packages.debian.org/testing/git): for version control and as a backup tool.
- [Ruby](http://packages.debian.org/testing/ruby): with the [`ruby-dev`](http://packages.debian.org/jessie/ruby-dev) package.
  - [Jekyll](http://rubygems.org/gems/jekyll): for generating my website.
  - [Sass](http://sass-lang.com/)/[Compass](http://rubygems.org/gems/compass): as a CSS authoring tool.
- [Node.js](http://nodejs.org/): from the `unstable` repositories with the [`nodejs-legacy`](http://packages.debian.org/sid/nodejs-legacy) package.
  - [nws](https://npmjs.org/package/nws): as a simple static server.
  - [JSHint](https://npmjs.org/package/jshint): for hinting JavaScript.
  - [UglifyJS](https://npmjs.org/package/uglify-js): for minimizing JavaScript.
  - [GruntJS](https://npmjs.org/package/grunt-cli): as a web development task runner.

### Fonts

- [Terminus](http://packages.debian.org/testing/xfonts-terminus): as the default font for `dwm`.
- [Liberation](http://packages.debian.org/testing/fonts-liberation): for writing and coding.

### Theme

- [Solarized](http://ethanschoonover.com/solarized): as the default "theme" for nearly everything.

## Screenshots

[![My Debian and dwm desktop](/images/notes/2013-08-23-debian-dwm-desktop.png)](/images/notes/2013-08-23-debian-dwm-desktop.png)

[![My Debian and dwm term](/images/notes/2013-08-24-debian-dwm-urxvt.png)](/images/notes/2013-08-24-debian-dwm-urxvt.png)

## Installation

**NOTE:** these notes are heavily based on the links in the [OS](#os) section.

### Base

- Download the [Debian stable net installer](http://www.debian.org/distrib/netinst).
- Setup an ethernet connection.
- Select *SSH Server*, *System Utilities* and *Laptop Utilities* when the *Select and install software* dialog pops up.
- Install `sudo` and add your username:
  - `apt-get sudo`
  - `adduser USERNAME sudo`
  - `exit`

### Desktop

- Install `X`:
  - `sudo apt-get install xorg`
- Install some common build tools:
  - `sudo apt-get install build-essential`
  - `sudo apt-get install libx11-dev libxinerama-dev`
- Install `Git` and clone the `dwm` repository:
  - `sudo apt-get install git`
  - `git clone http://git.suckless.org/dwm`
- Compile `dwm`:
  - `cd dwm`
  - `cp config.def.h config.h`
  - `sudo make clean install`
- Create an `.xinitrc` file:
  - `nano ~/.xinitrc`
    - Add the following content:

      ~~~
      exec dwm
      ~~~

- Make the `.xinitrc` file executable:
  - `chmod +x ~/.xinitrc`
- Start `X`:
  - `startx`

### Sound

- Install `ALSA`:
  - `sudo apt-get alsa-base alsa-utils`
- Intialize it:
  - `alsactl init`
- Unmute the channels:
  - `alsamixer`
- Test it to make sure that it works:
  - `aplay /usr/share/sounds/alsa/*` 

### Wireless

- Add  the `contrib` and the `non-free` repositories to the `/etc/apt/sources.list` file:

  ~~~
  deb http://ftp.us.debian.org/debian/ CODENAME main contrib non-free
  deb-src http://ftp.us.debian.org/debian/ CODENAME main contrib non-free

  deb http://security.debian.org/ CODENAME/updates main contrib non-free
  deb-src http://security.debian.org/ CODENAME/updates main contrib non-free
  ~~~

- Update the repositories and install the necessary firmware:
  - `sudo apt-get update`
  - `sudo apt-get FIRMWARE`
- Install the `wireless-tools` package:
  - `sudo apt-get install wireless-tools`
- Restart the module to run the firmware:
  - `sudo modprobe -r FIRMWARE ; modprobe FIRMWARE`
- Check if the wifi interface is available:
  - `sudo iwconfig`
    - `wlan0 [...]` (or something like it)
- Edit the  `/etc/network/interfaces` file:

  ~~~
  auto wlan0
  iface wlan0 inet dhcp
      wpa-ssid SSID
      wpa-psk PASSWORD
  ~~~

- Check if you're connected to the router:
  - `sudo ifup wlan0`
  - `sudo ifconfig wlan0`
  - `ping google.com`

### Apt-pinning

**NOTE:** Debian does not encourage `apt-pinning` without thorough consideration.

- Replace the content of the `sources.list` file located in `/etc/apt/` with the following:

  ~~~
  # Testing
  deb http://ftp.se.debian.org/debian/ testing main contrib non-free
  deb-src http://ftp.se.debian.org/debian/ testing main contrib non-free

  # Unstable
  deb http://ftp.se.debian.org/debian/ unstable main contrib non-free
  deb-src http://ftp.se.debian.org/debian/ unstable main contrib non-free

  # Security
  deb http://security.debian.org/ testing/updates main contrib non-free
  deb-src http://security.debian.org/ testing/updates main contrib non-free
  ~~~

- Create a file called `preferences` in `/etc/apt/` and add the below content:

  ~~~
  # Testing
  Package: *
  Pin: release a=testing
  Pin-Priority: 900

  # Unstable
  Package: *
  Pin: release a=unstable
  Pin-Priority: 800
  ~~~

- Create a file called `apt.conf` in `/etc/apt/` with the following content:

  ~~~
  APT::Default-Release "testing";
  ~~~

- Update the system:
  - `sudo apt-get update`
  - `sudo apt-get dist-upgrade`

## Maintenance

**NOTE:** You should only proceed with these actions if you know what you're doing.

### Cleaning the system

- To completely uninstall software:
  - `sudo apt-get purge PACKAGE`
- To remove unneeded packages:
  - `sudo apt-get autoremove`
  - `sudo apt-get autoclean`

### Removing old kernels

- Get the current kernel version:
  - `uname -r`
- Get all installed kernels:
  - `dpkg -l | grep 'linux-image-'`
- Remove the kernel from `GRUB`:
  - `sudo apt-get autoremove linux-image-x.x.xx-xxx-xxx`
- Completely remove the kernel from the system:
  - `sudo apt-get purge linux-image-x.x.xx-xxx-xxx`

## Miscellaneous

**NOTE:** You should only proceed with these actions if you know what you're doing.

### Install from the `unstable` repositories

- Run the following with the relevant package name:
  - `sudo apt-get install PACKAGE/unstable`

### Use `shutdown` without sudo

- Modify the `/etc/sudoers` file:
  - `sudo visudo`
    - Add the following content with your username:

      ~~~
      USERNAME ALL = NOPASSWD: /sbin/shutdown
      ~~~
