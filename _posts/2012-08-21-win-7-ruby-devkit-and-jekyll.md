---
title: Windows 7, Ruby, DevKit And Jekyll
tags: [Code, Jekyll]
layout: post
comments: true
---

To tell you the truth, I wasn't that familiar with the whole Ruby thing when I decided to start using [Jekyll](http://www.jekyllrb.com/ "Jekyll"). I practically had to learn it by trial, error and finally success since I couldn't really find a good guide on how to do it. I thought that it would be good to write it all down and share it (mostly for my own sake).

## Installing Ruby

- Go to [RubyInstaller](http://rubyinstaller.org/ "Ruby Installer for Windows") and download the latest version.
- Run the installer.

**Note:** It's really important that you install it in a directory without a space in it's path as stated in the installer, eg: `C:\ProgrammingLanguages\Ruby` and NOT `C:\Program Files\Ruby`, for example. Trust me.

## Installing DevKit

- Run the DevKit Installer and extract it to your desired directory.
- Open up the command line and type `cd` + the path to the directory were you installed DevKit, eg: `cd C:\ProgrammingLanguages\DevKit`.
- Type `ruby dk.rb init` to intialize the setup.
- Type `ruby dk.rb review` to check if DevKit has found your Ruby directory.
- Type `ruby dk.rb install` to install it.

**Note:** I usually just search for "cmd" in the start menu search bar to open the command line.

## Installing Jekyll

- Type `gem install jekyll` in the command line.

## Running Jekyll

After you're done with creating your site with template and liquid tags (hit the [wiki](https://github.com/mojombo/jekyll/wiki "Jekyll wiki") to check them out), do the following:

- Open up the command line and type `cd` + the path to the directory were you've saved your site, eg: `cd C:\User\MySite`.
- Type `jekyll --server` in the cmd.
- Type out `localhost:4000` in your browser to see your site.

**Note:** You can use `jekyll --auto --server` instead of `jekyll --server` if you want Jekyll to generate and update your site continuosly while you write and save a new post, change the layout etc.