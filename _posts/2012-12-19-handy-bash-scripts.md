---
title: "Handy Bash scripts"
tags: [Tech, Linux, Bash]
layout: post
comments: true
external-link: false
---

One thing that I really miss while I'm using Crunchbang is a good note-taking app with plain text support. I haven't found one yet so I threw together a few simple bash scripts that I can use in the terminal for easier notetaking.

	function no() {
	  geany ~/Dropbox/path/to/notes/$1.txt 
	}

	function nos() {
	  ls -c ~/Dropbox/path/to/notes | grep --color=always $1
	}

	function nol() {
	  ls -c ~/Dropbox/path/to/notes
	}

	function not() {
	  cat ~/Dropbox/path/to/notes/$1.txt
	}

The `no()` function will open the note itself in the text editor [Geany](http://www.geany.org/ "Geany"). The `nos()` function is used for finding notes with a particular search term in their filename. The `--color=always` highlights the given search term. The `-c` sort all of the notes by the last modified date. The `nol()` function just lists all of the notes and the `not()` function displays the content of a note directly in the terminal. Now I just need to type either `$ no filename`, `$ nos search-term`, `$ nol` or `$ not filename` to do various things to my notes. 

I also added two scripts for appending text directly into my spark file and todo file which I then use like this: `$ add Write something about anything` and `$ todo Something soon`.

	function add() {
	  echo $@ >> ~/Dropbox/path/to/notes/spark-file.txt
	}

	function todo() {
	  echo $@ >> ~/Dropbox/path/to/notes/todo.txt
	}

Even though the scripts aren't as useful as a fully featured app they provide some sort of functionality to my writing workflow, which is nice.
