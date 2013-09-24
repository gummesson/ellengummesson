---
title: "A few quick tips for working with `npm` on Windows"
tags: ["JavaScript", "Node.js", "npm"]
layout: post
comments: true
external-url: false
---
A few days ago I was having trouble with the executable file for [Severa](https://github.com/gummesson/servera). I couldn't get it to run on my Linux box and after some troubleshooting I realized what the culprit was. It was saved as a `dos` file. That's highly annoying when you're trying to make your code cross-platform. After some digging around I found a few solutions that seems to work:

- Use Unix-style line endings:
    - `set fileformat=unix` in your `.vimrc`.
- Set the [Git](http://git-scm.com/) configuration option `auto.clrf` to `input`:
    - `git config --global core.autoclrf input` 
- Update the Git index so that the executable file always has the right permissions:
    - `git update-index --chmod=+x <path/to/file>`

That's it. This'll hopefully make my code a little less prone to errors.
