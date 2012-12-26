---
title: Small Steps Into Ruby
tags: [Code, Ruby]
layout: post
comments: true
external-link: false
---

I've always wanted to learn a real programming language. The few times in the past that I've tried have all been fruitless though. My brain just doesn't work when there's too many complex structures going on at once. Even though I can understand the logic behind certain parts it just won't stick, which is a shame. One of the reasons I think I like writing HTML and and especially CSS is that the syntax is very visual and easy to read. You write `background-color: red;` and what do you know, the background suddenly is red. With those two you don't have write a short novel just to get the command line to print a simple *"Hello World"*.

Since this site is built with Jekyll I decided to really start learning [Ruby](http://www.ruby-lang.org/ "Ruby") and I'm glad I did. The syntax is so simple that it amazes me. Over the last few days I've experimented with it a lot and even released a few simple scripts on [GitHub](https://github.com/gummesson "GitHub"). One of those was inspired by a post I saw yesterday on 
[Lifehacker](http://lifehacker.com/5963597/why-you-should-be-using-an-app-launcher-and-how-to-make-it-do-anythingyou-want "Lifehacker"). The article mentions how you can use [Launchy](http://launchy.net/ "Launchy") to append text to a text file, but I couldn't get the `bat` script they recommended to properly work so I decided to just make a [Ruby version of it](https://github.com/gummesson/append-text "Append Text (for Launchy on GitHub"). The script looks like this without comments:

	require 'yaml'

	config = YAML.load_file("config.yml")
	txt_file = config["txt_file"]

	item = ARGV.join(" ")

	File.open(txt_file, "a") { |file| file.puts(item) }

Right now it consists of just five lines of code. I could've even made it even simpler by leaving out the use of YAML[^20121128-1] for the text file configuration[^20121128-2]. I really like having something like that though since you don't have to change the actual source code if you later decide to use another text file. Now I just need to launch Launchy, type `add`, `TAB` and whatever I want to append to the file and just hit `Enter` to add something to my spark file, which is even faster than launching the actually text file with [AutoHotKey](http://www.autohotkey.com/ "AutoHotKey") like I mentioned in the previous blog post.

## Resources

I found the book [Mr. Neighborly's Humble Little Ruby Book](http://www.humblelittlerubybook.com/book/ "Mr. Neighborly's Humble Little Ruby Book") extremely good. It explains a lot of stuff without getting too technically complex and with a perfect mix of humor. Another book I also found helpful and easy to understand was [The Bastards Book of Ruby](http://ruby.bastardsbook.com/ "The Bastards Book of Ruby"). I've also seen [Learn Ruby The Hard Way](http://ruby.learncodethehardway.org/book/ "Learn Ruby The Hard Way") and [Learn To Program](http://pine.fm/LearnToProgram/ "Learn To Program") being mentioned quite a few times but so far I haven't had time to check them out. Another tip is that you shouldn't underestimate the power of Google and a thriving community. [Stack Overflow](http://stackoverflow.com/questions/tagged/ruby "Stack Overflow") is filled with a lot of answers for literally every single question you might have.

I still have a long way to go, but so far it's been a really fun ride.

***

[^20121128-1]: [YAML Ain't Markup Language](http://en.wikipedia.org/wiki/Yaml "YAML Ain't Markup Language").
[^20121128-2]: The `config.yml` file contains a single line, `txt_file:`, where you put the path to the text file in question. 