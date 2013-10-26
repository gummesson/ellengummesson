---
title: "Geno: a small and opinionated static site generator"
tags: ["Code", "JavaScript", "Node.js"]
layout: post
comments: true
external-url: false
---

Another week, another project, and this time it's yet another static site generator.

[Geno](https://github.com/gummesson/geno) is a small and opinionated static site generator for easily generating a simple site for your [NPM](https://npmjs.org/) projects based on the project's `package.json` file.

## Opinionated?

Well, it is pretty customizable but the defaults are tailored to my needs[^20131026-1]. Like I stated in the project's README file, I find that hand crafting a new site for each project can be quite tedious. I'm also not a designer.

## Configuration

At the most basic level, Geno needs these fields in the `package.json` file:

    {
      "name": "module",
      "version": "0.1.0",
      "description": "An example module.",
      "license": "MIT"
    }

That's it! You can also add a `geno.json` file at the root of your project to enable some extra features. Check out the [GitHub repository](https://github.com/gummesson/geno) for more information.

## The anatomy of a Node.js module

During the creation of it I decided to document the process behind it, Even though it wasn't a particular big or compilicated project. I though that it could be interesting or atleast provide some kind of value for someone[^20131026-2].

### The idea

The initial idea was that I simply wanted to create a project site for [Partially](https://github.com/gummesson/partially). After some tinkering it hit me that it would be pretty cool to use the `package.json` file as a base for a website and off I went. In the end it's a pretty simple idea: read the configuration file(s), add the data to the template and spit out the compiled site.

### The build

I actually started with the design first[^20131026-3], since I'd already begun to work on it. I then went on to pick a templating engine. There's a plethora of them available and I played around with both [doT.js](https://github.com/olado/doT) and [EJS](https://github.com/visionmedia/ejs) before I settled on [Nunjucks](https://github.com/jlongster/nunjucks). It's fairly lightweight, fast and has the perfect logic for making the kind of template that I wanted. I also needed some extra file system functions and [fs-extra](https://github.com/jprichardson/node-fs-extra) came to the rescue. It makes copying files and creating folder paths a breeze.

### The features

Although I wanted to keep it as simple as possible I realized that it would be nice to have some extra features, so I decided to add the option to use the `geno.json` file. This meant that I can add some additional information to a project's site without too much of a hassle.

If you want you can take a look at [Geno's own project site](http://ellengummesson.com/geno/) to see how it turned out. All in all I'm pretty happy with it.

* * * 

[^20131026-1]: And my laziness.
[^20131026-2]: I hope...
[^20131026-3]: I call it "Sass-driven development". I'm not very good at it.
