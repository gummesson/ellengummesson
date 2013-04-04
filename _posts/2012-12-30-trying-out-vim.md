---
title: "Trying out Vim"
tags: ["Code", "Vim"]
layout: post
comments: true
external-link: false
---

There's no doubt that if you've ever spent some time looking through and reading various developer related things that you've seen people mentioning the text editor [Vim](http://www.vim.org/ "Vim"). I decided to try it out the graphical version of it, gVim, and it really is a different experience. Instead of relying on trusty old keyboard shortcuts like `Ctrl+S` you instead have to first hit `Esc` and type `:w`. While I'm not a hundred percent sold on it[^20121230-1] I can defintively see the appeal, especially for people who love their keyboards. The Vim version of the color scheme [Solarized](http://ethanschoonover.com/solarized "Solarized"), which I absolutely love, looks gorgeous and what I can tell Vim probably has the best Markdown syntax highlighting I've ever seen. One other aspect I really like is that you can save all of your settings in a single file which you can then use across multiple systems, since Vim is cross-platform.

I'm still very new to using it, so if I decided to really dive in to it I'm sure I'll write more about it during the coming weeks.

## My (g)Vim config

I naturally wanted to add some settings to make the experience slightly better[^20121230-2] and thanks to a lot of different people[^20121230-3] across the web I was able to change quite a whole lot to my liking. I also installed a plugin called [NERDTree](https://github.com/scrooloose/nerdtree "NERDTree") which adds a sidebar where you can see the files in your project directory. [Pathogen](https://github.com/tpope/vim-pathogen "Pathogen") is also very helpful when it comes to managing all your plugins. It's of course available on [my GitHub page](https://github.com/gummesson/vimfiles/blob/master/.vimrc "My .vimrc on GitHub") and it's loaded with comments.

## Resources

If you're interested in trying Vim out, I encourage you to look at these websites and screencasts.

- [Use Vim](http://usevim.com/ "Use Vim")
- [Vim Recipes](http://vim.runpaint.org/ "Vim Recipes")
- [Vimcasts](http://vimcasts.org/ "Vimcasts")
- [Derek Wyatt's Vim tutorial videos](http://www.derekwyatt.org/vim/vim-tutorial-videos/ "Derek Wyatt's Vim tutorial videos")

***

[^20121230-1]: I've noticed that the more I use it the more I like it so maybe it's just a matter of time before I take the plunge and switch over to it fully.
[^20121230-2]: Vim is like a blank canvas when you start. Literally. Not even the syntax highlighting is on by default. 
[^20121230-3]: [Jeffrey Way's](http://net.tutsplus.com/articles/general/top-10-pitfalls-when-switching-to-vim/ "Top 10 Pitfalls When Switching to Vim"), [Vincent Driessen's](http://nvie.com/posts/how-i-boosted-my-vim/ "How I boosted my Vim") and [Steve Losh's](http://stevelosh.com/blog/2010/09/coming-home-to-vim/ "Coming Home to Vim") tips, tricks and config files where extremely helpful.
