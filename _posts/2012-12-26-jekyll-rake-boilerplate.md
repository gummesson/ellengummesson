---
title: "Jekyll Rake Boilerplate"
tags: ["Code", "Ruby", "Jekyll"]
layout: post
comments: true
external-url: false
---

Even though I so far love learning [Ruby](http://www.ruby-lang.org/en/) I've had hard time to find a project to work on. All the things that I wanted to code have already been done which makes my motivation crumble. I know that I can code something that already been done and it would probaly be a good experience, but I'm lazy like that. After some thinking I finally came up with something and yesterday I "released" it: the [Jekyll Rake Boilerplate](https://github.com/gummesson/jekyll-rake-boilerplate). 

Using a rakefile for [Jekyll](http://jekyllrb.com/) isn't something that's new nor unique but so far I haven't stumbled upon a simple boilerplate. It isn't revolutionary by any means[^20121226-1] but it gave me the motivation that I needed and I had fun while doing it. Even though it's a small file I actually both tested and experimented with it quite extensively. It may sound silly but I wanted to be "proud" of it, or atleast content.

## The Tasks

The *Jekyll Rake Boilerplate* consists of four tasks: `build`, `post`, `git` and `remote`[^20121226-2].

- `build` generates the site. If I want to generate it with a post limit, I can use `build[1]` or whatever number of posts I want to generate. 
- `post["Post title"]` creates a new post in the `_posts` directory by reading the default template file, adding the title I've specified and generating a file name by using the current date and the title.
- `git["Commit message"]` adds, commits and pushes the site to the site's remote git repository with the commit message that's been specified.
- `remote` uses either `robocopy` or `rsync` to transfer the site to a remote host/server.

I also set the default task to `build` so if I'm feeling lazy I only need to type `rake`, hit `Enter` and the site will be generated. I've contemplating about adding some more tasks but for now I'll stick to what I already have. The goal is to keep it as simple and adaptable as possible so that anyone can use it without having to modify it too much unless they want to.

***

[^20121226-1]: And the code itself is probably not that good since I'm still learning.
[^20121226-2]: The settings for some of the tasks needs to be in the `_config.yml` file in order for them to work.
