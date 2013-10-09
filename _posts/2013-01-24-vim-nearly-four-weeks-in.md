---
title: "Vim: nearly four weeks in" 
tags: ["Code", "Vim"]
layout: post
comments: true
external-url: false
---

My little [Vim](http://www.vim.org/) adventure continues and a couple of days ago I uninstalled [Sublime Text 2](http://www.sublimetext.com/). I have nothing against it and I still think it's a fantastic editor but I feel like I don't really need it anymore. I'm no way near being a expert but like I've stated before I really like using Vim and I don't see that that changing anytime soon. I've also configured my Vim files [quite a bit](https://github.com/gummesson/vimfiles)[^20130124-1] but I've tried to stay away from adding too many plugins since I don't want to rely on too many of them. Right now I use eight which I think is a reasonable number. I also finally re-did my git repository so that every plugin is a git submodule[^20130123-2] which makes updating them much, much easier. I have to say that the customization possibilities in Vim are extraordinary. Who knew that that would be the case for an editor that's just slightly younger than me?

## A few tips and tricks

I won't go through my whole `vimrc` file since it's currently about 225 lines long *(and heavily commented)* but I want to share a few handy settings.

**Set the language to english:**

	if has("unix")
	  language messages C
	else
	  language messages en
	endif  

I don't know if I'm strange but I tend to stick with using english as my default language in nearly every app I install. I find it to be much easier googling for help. Since I both use Linux and Windows I had to add the `if...else...endif` part so that it plays nice with both of them[^20130124-3]. It's important to note that this needs to be at the very top of your `vimrc` file if you want it to work.

**Use the cursorline as a mode indicator:**

	au InsertEnter * set nocursorline
	au InsertLeave * set cursorline

I wanted an easier way to quickly see which mode I was in without relying on some third party plugin. I of course have the `showmode` setting enabled but by removing the cursorline from insert mode I don't even have to move my eyes one bit. I don't really need to see which line I'm on anyway when I'm actually typing something.

**Autoresize all windows:**

	au VimResized * :wincmd =

Resizing your windows in Vim can be a bit of a pain, especially if you want to go from using a fullscreen to something smaller or the other way around. The above setting makes it a lot less of a hassle.

**Ignore certain files:**

	set wildignore+=.git

This was one of the features that I like the most about Sublime Text 2 and I'm glad that I can use it in Vim too. If I can't edit a certain filetype I don't want to see it.

* * *

[^20130124-1]: One of the most useful tweaks I've found for writing blog posts was from Peter Provost's [Editing Octopress/Jekyll Posts in Vim](http://peterprovost.org/blog/2012/04/22/editing-octopress-slash-jekyll-posts-in-vim/). The YAML front matter doesn't look like crap anymore, yay!
[^20130123-2]: [A repository inside another repository](http://git-scm.com/book/en/Git-Tools-Submodules).
[^20130124-3]: This works for everything by the way. I think that the default name for Mac is `macunix`, but I'm not 100% sure. 
