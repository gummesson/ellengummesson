---
title: "Make Netrw behave more like NERDTree" 
tags: ["Code", "Vim"]
layout: post
comments: true
external-link: http://stackoverflow.com/questions/5006950/setting-netrw-like-nerdtree
---

This is nice read for using something more native to [Vim](http://www.vim.org/). Quite early into my editor transition I found out that it had a native file explorer called [Netrw](http://vimdoc.sourceforge.net/htmldoc/pi_netrw.html), but I didn't particularly like it it's default state so I started to use a plugin called [NERDTree](https://github.com/scrooloose/nerdtree) instead. It's great but it's nice that a more native solution can solve the problem too. I've also started using a fuzzy finder plugin, [CtrlP](https://github.com/kien/ctrlp.vim), more and more lately but I still like to have a "project visualizer" of some sort and I think that Netrw will fit that quite nicely. I also added these to my `.vimrc` file:

	let g:netrw_liststyle = 3
	let g:netrw_list_hide = ".git,.sass-cache,.jpg,.png,.svg"

The `liststyle` option makes it lists all file and folders in a more tree-like structure vill the `hide` options just hides the selected filetypes and folders.
