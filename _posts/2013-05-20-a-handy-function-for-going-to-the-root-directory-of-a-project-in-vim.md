---
title: "A handy function for going to the root directory of a project in Vim"
tags: ["Code", "Vim"]
layout: post
comments: true
external-url: false
---

Here's a handy function I came up with after being tired of using `:cd ../` like a madman when I was deep down at the bottom of a project's folder structure:

    function! GoToRootDir()
      if isdirectory(".git")|| filereadable("Rakefile") || filereadable("Gruntfile.js")
        pwd
      else
        silent! exec 'cd ../'
        call GoToRootDir()
      endif
    endfunction

It's a not-so-fancy way of basically telling Vim to keep going up in the directory structure until it finds either a `.git` folder or a specific file. When it finds the root it'll also print out the path, which I added so that you can actually see that you're in the root of the project. You can of course change `.git`, `Rakefile` and `Gruntfile.js` to something completely different, as long as it's a file that you commonly have in your projects. I also added a more convenient mapping for it in my `.vimrc`:

    command! -nargs=0 Root call GoToRootDir()

This step may not be necessary, but by mapping something like `:call GoToRootDir` to just `:Root` means that you have to type fewer keystrokes.
