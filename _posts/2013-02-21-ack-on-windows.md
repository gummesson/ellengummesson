---
title: "Ack on Windows"
tags: ["Code", "Tools"]
layout: post
comments: true
external-url: false
---

I recently finally tried out [Ack](http://betterthangrep.com/) which I must say is a pretty awesome tool. The installation was fairly straight forward but I though that I would write it down here in case I'll ever need to do it again or if someone wants a small guide with just a few easy steps.

First things first, [Perl](http://www.perl.org/) needs to be install on the system. If you have either [Git](http://git-scm.com/) or [DevKit](http://rubyinstaller.org/add-ons/devkit/) installed then you're good to go.

1. Download the standalone script from the [here](http://betterthangrep.com/install/).
2. Create a `bat` file and add the following to it: `@"C:\path\to\perl.exe" C:\path\to\ack.pl %*`. Change the paths so that they point to the relevant places.
3. Save the file as `ack.bat` and place it somewhere in your system environment path, or create a new folder and add it to said path.[^20130221-1]
4. Last, but not least, create an alias for the `bat` file in your `.bash_profile` if you want to get it to work with [Cygwin](http://www.cygwin.com/).

You can use the same steps to create a more "sophisticated" way of running any kind of script too. Let's say you have a script called `foo.rb`. You want to run it straight from the command line but you don't necessary want to turn into a full fledged gem. Just change the the first path in the `bat` file so it points to your binary [Ruby](http://www.ruby-lang.org/) file and the second to your actually script and you're all good!

***

[^20130221-1]: Which can be modified under "System Properties" &rarr; "Advanced system settings" &rarr; "Advanced" &rarr; "Environment Variables" &rarr; "Path".
