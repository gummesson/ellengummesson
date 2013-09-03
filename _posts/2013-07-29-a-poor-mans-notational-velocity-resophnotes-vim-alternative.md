---
title: "A poor man's Notational Velocity/ResophNotes Vim alternative"
tags: ["Code", "Vim"]
layout: post
comments: true
external-url: false
---

*Long time, no see. I haven't touched this blog in almost two months and the reason for that is that life got in the way. I've really missed writing so I'll defintively try to pick it up again, I swear!*

Linux is in a lot of ways much better than Windows but for some reason there's no good alternative for note-taking apps like [Notational Velocity](http://notational.net/) or [ResophNotes](http://www.resoph.com/ResophNotes/Welcome.html). I've tried [NvPY](https://github.com/cpbotha/nvpy) but unfortunately it doesn't really work that great for using plain text files with Dropbox. A couple of months back I did experiment with using Vim in conjunction with the [Ack plugin](https://github.com/mileszs/ack.vim), which worked fine on Linux but rather poorly on Windows[^20130729-1]. I decided to replace Ack with Vim's built-in `grep` function, mainly just to keep it a cross-platform script. It's not quite as fast as Ack but the difference isn't huge since it's just dealing with text files.

It basically consists of two command line mappings: `Note`, which will create a new in the specified notes folder with the provided filename and the default extension, like this: `:Note This is the filename`. `Notes` has two functions. You can either use it to browse the notes folder or search the content of the text files in it, ie: `:Notes I'm looking for this`. It'll open up the quickfix list after the search is complete.

I actually have a folder in my Vim home directory called `tweaks` were I've placed a few small changes but you could technically turn this into a real plugin too or rewrite it and put it in your `.vimrc` file. I like having most of its' functionality in a `autoload` folder since it won't load until you actually need it.

**tweaks/autoload/notes.vim:**

    function! notes#List(pattern)
      if strlen(a:pattern) == 0
        silent! execute 'Sexplore '.g:notes_directory
      else
        silent! execute 'lcd '.g:notes_directory.' | vimgrep /'.a:pattern.'/gj *.'.g:notes_extension.' | copen'
      endif
    endfunction

    function! notes#New(filename)
      if strlen(a:filename) == 0
        echom "No filename!"
      else
        silent! execute 'enew | lcd '.g:notes_directory.' | w '.a:filename.'.'.g:notes_extension
      endif
    endfunction

There's really nothing fancy in the above scripts, but the combination of using `netrw`, `vimgrep` and the quickfix list works really well.

**tweaks/plugin/notes.vim**:

    if exists("g:loaded_notes_plugin") || &cp
      finish
    endif

    let g:loaded_notes_plugin = 1

    if !exists("g:notes_directory")
      if has("unix")
        let g:notes_directory = "~/Notes"
      else
        let g:notes_directory = "C:/Notes"
      endif
    endif

    if !exists("g:notes_extension")
      let g:notes_extension = "txt"
    endif

    command! -nargs=? Notes call notes#List(<q-args>)
    command! -nargs=? Note call notes#New(<q-args>)

You can of course change the `g:notes_directory` and `g:notes_extension` to whatever you want. You could remove the `if has("unix")` part if you don't plan on using it on different systems too.

***

[^20130729-1]: The plugin in itself works flawlessly but Ack doesn't really work all to well on Windows.
