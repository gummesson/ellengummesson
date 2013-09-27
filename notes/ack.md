---
title: "Ack"
layout: page
---

## Installation

A quick guide for installing [ack](http://betterthangrep.com/).

### Windows

1. Download the standalone script from the [official website](http://betterthangrep.com/install/) and save it as `ack`.
3. Create a `bat` file and add the following to it: `@"C:\path\to\perl.exe" C:\path\to\ack %*`[^1].
4. Save the file as `ack.bat` and place it somewhere in your system environment path or create a new folder and add it to said path[^2].

***

[^1]: Perl is included in the standard [Git](http://git-scm.com/) install and can be found at `C:\Program Files (x86)\Git\bin\perl.exe`.
[^2]: This can be modified under "System Properties" &rarr; "Advanced system settings" &rarr; "Advanced" &rarr; "Environment Variables" &rarr; "Path".
