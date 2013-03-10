---
title: "Easy Session for Vim" 
tags: [Code, Vim]
layout: post
comments: true
external-link: false
---

Another week, another project and this time it's actually something half decent. After a few hours of work over the last couple of days I'm finally done with my first plugin for [Vim](http://www.vim.org/ "Vim") and I named it [Easy Session](https://github.com/gummesson/easy-session.vim "Easy Session on GitHub"). It lets you easily manage sessions with four commands: `:SaveSession`, `:NewSession`, `:OpenSession` and `:ListSessions`.

`:SaveSession` uses the current working directory as the default filename, so you have to make sure that you're in the project's root directory if you're saving your session for the first time. It may not be the most ultimate solution, but it's better than the default filename `Session.vim`. There's also `:NewSession` which lets you use your own custom filename. The `:OpenSession`, suprisingly, opens a session.

An earlier version of it had an `:Sessions` command, but it used [Netrw](http://www.vim.org/scripts/script.php?script_id=1075 "Netrw") and was a bit too clunky so I rewrote it as `:ListSessions`, which is quite a fun hack. It launches a new window with a temporary buffer that gets deleted as soon as it's closed. It gets the list by reading the content of the sessions directory with `:0read !ls` or `:0read !dir /B`[^20130212-1]. The code looks really sketchy, but the result looks quite nice:

![Easy Session (Sessions List)](/images/blog/2013-02-12-easy-session-01.png)

![Easy Session (Sessions List)](/images/blog/2013-02-12-easy-session-02.png)

I don't know if it's useful for anyone but me, but it was a fun challenge. There's a [Session.vim](http://peterodding.com/code/vim/session/ "Session.vim") plugin that has a lof more advanced features than mine do, but I think I'll stick with my own solution for now.

***

[^20130212-1]: The "`0`" makes the list start on the first line in the buffer. If just `:read` is used it'll paste the content below the first line.
