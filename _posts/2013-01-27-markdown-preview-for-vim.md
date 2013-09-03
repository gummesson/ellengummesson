---
title: "Markdown preview for Vim"
tags: ["Code", "Markdown", "Vim"]
layout: post
comments: true
external-url: false
---

One of the biggest advantages of using a dedicated tool for writing [Markdown](http://daringfireball.net/projects/markdown/) is that they often come with some way of previewing your text file. I kind of miss that kind of function when I'm using [Vim](http://www.vim.org/) I decided to throw together a simple vimscript that uses [Pandoc](http://johnmacfarlane.net/pandoc/) to convert a Markdown file to HTML. The basic gist of it looks like this:

    function! PandocMarkdownPreview()
      silent exec 'cd %:p:h'
      silent exec 'pwd'
      silent exec '!pandoc -o preview.html %'
    endfunction

It sets the directory of the current open file as the root and then calls Pandoc to do the conversion. It's not that terribly complicated but it gets the job done well. I also expanded upon it a bit and added another part that'll open the `preview.html` directly in the browser:

    if has("win32")
      silent exec '!start cmd /c preview.html'
    else
      silent exec '!xdg-open preview.html'
    endif

One thing that's worth being mentioned is that the `!xdg-open` part can be changed to `!open` and then you can also use it if you're on a Mac.

In the end the whole thing looks like this:

    function! PandocMarkdownPreview()
      silent exec 'cd %:p:h'
      silent exec 'pwd'
      silent exec '!pandoc -o preview.html %'
      if has("win32")
        silent exec '!start cmd /c preview.html'
      else
        silent exec '!xdg-open preview.html'
      endif
    endfunction

And the mapping looks like this:

    map <leader>pmd :call PandocMarkdownPreview()<cr>

I also threw together more refined version of the whole thing in a [gist on Github](https://gist.github.com/4649514). You'll obviously need to have Pandoc install on your machine in order to get it up and running.
