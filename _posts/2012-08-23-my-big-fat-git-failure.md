---
title: "My big fat git failure"
tags: ["Code", "Git"]
layout: post
comments: true
external-link: false
---

**Note:** this isn't critism, rather a documentation of my own stupidity.

It all started a couple of hours ago. I needed to change something fast on this blog so instead of using my normal method (ie: using Jekyll to generate all the files and then push them to GitHub) I decided to use GitHub's built-in editor since that's a much faster way. Big mistake. After a while, when I decided to commit another change using the actual desktop client I got an error message which said "DETACHED HEAD". After some googling around I found a pretty simple [solution](http://stackoverflow.com/questions/1705731/how-do-i-fix-checking-out-head-in-git, "Stack Overflow - How do I fix checking out HEAD^ in git") that thankfully solved this. 

However, after I'd fixed that and remade all of my changes locally using my normal method, I got another error message when I was trying to commit the changes: "Failed to sync this branch".

![Failed to sync this branch](/images/blog/2012-08-23-failed-to-sync.png "Failed to sync this branch")

I again did a google search but this time around I didn't come across something that could entirely fix the problem. I did found a [temporary fix](http://haacked.com/archive/2012/05/21/introducing-github-for-windows.aspx#87327 "git push in the shell") though which involves using the shell, so I'm still able to update the site. I don't know if I screwed something up or if it's a bug. I'm hoping that the problem will solve itself, even though it's highly unlikely.

Damn me and my apparent laziness.
