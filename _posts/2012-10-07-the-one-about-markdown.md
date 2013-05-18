---
title: "The one about Markdown"
tags: ["Writing", "Markdown", "Plain Text"]
layout: post
comments: true
external-link: false
---

When I first heard about [Markdown](http://daringfireball.net/projects/markdown/) a couple of month ago it sparked my interest. I've never really felt comfortable writing in a word processor nor in a WYSIWYG editor, so using something that would make it possible to write in any text editor while maintaining a kind of form of formatting sounded like a perfect solution that would really benefit my needs. It was originally created *"to be used as a format for writing for the web"*, ie. an easier way to convert plain text with a simple formatting to HTML. I won't go in to further detail one why I think it's great, but if you need more convincing or just want to read some more on this particular subject I suggest that you scroll down to the bottom of this blog post and read a couple of links I've collected about Markdown and plain text. Trust me, it's worth it!

## Formatting

The formatting of the syntax is really, really simple to remember. I honestly don't even think about anymore it when I write since it's become like second nature to me. If you want to get a closer look of the whole syntax I suggest that you go to the [official documentation](http://daringfireball.net/projects/markdown/syntax).

### Headings

    # Heading 1
    ## Heading 2
    ### Heading 3
    #### Heading 4
    ##### Heading 5
    ###### Heading 6

A hashtag represents a heading, where each hashtag equals to the size of the heading, ie. a first level heading becomes a `h1` tag and so on when it's converted to HTML.

### Annotations

    *Bold* 
    **Italic**
    ***Bold and italic***

**Side note:** You can also use `_` instead of `*` too.

### Links

    [Click Here](http://www.example.com/ "Example.com") 

    [Click Here][example]
    [example]: http://www.example.com/ "Example.com"

    <http://www.example.com/>

There's three ways to create a link. The rule of thumb is that the word you want to make clickable goes in to `[]` while the actual URL and title tag goes in between `()`. You can also use `<>` if you just want to make an URL clickable.

**Side note:** The second example is useful when you don't want to clutter your text with the URL and the title.

### Unordered lists

    - One 
    - Two
    - Three
    - Four

**Side note:** You can also use `*` or `+` when you're dealing with an unordered list.

### Ordered lists

    1. One 
    2. Two
    3. Three
    4. Four

**Side note:** You don't actually have to numerically order your list if you're going to export it to HTML, but I don't really see the point of not doing that.

### Blockquotes

    > Lorem ipsum...

*Side note:* Even if your quote is longer than a single line you only really have to use a `>` at the beginning of the quote.

### Images

    ![Alt Text](http://www.example.com/images/picture.jpg "Title Text")

Adding an image is really similar to adding a link. This may be the most "inconvenient" feature of the syntax since you have no real control over the image's width and height, but that shouldn't be a problem if you size it the way you want it beforehand.

### Code

    `.inline-code` 

        .code-block {
          color: #000;
        }

You have to indent the code with four spaces or a tab to create a code block.

## Editors

Basically any text editor will do since Markdown is just really plain text, but that may not be the most optimal thing (I'm a sucker for a good interface). While there's a plethora of markdown-friendly text editors for iOS and OSX there's not a lot of them for Windows. I personally use [FocusWriter](http://gottcode.org/focuswriter/) (which doesn't really support Markdown) and [MarkdownPad](http://www.markdownpad.com/) and  I've played around with [WriteMonkey](http://writemonkey.com/) and [Markpad](http://code52.org/DownmarkerWPF/). I've also stumbled across [mdCharm](http://www.mdcharm.com/) and [Qute](http://www.inkcode.net/qute) but I haven't tried them out.

Like I mentioned earlier, FocusWriter doesn't have support for Markdown but the beauty of the syntax is that it's pretty damn readable even without highlighting. I really like the focus mode in it too and it's cross plattform, meaning that I can use it on any OS that I want to. MarkdownPad was the first markdown editor I used so it has a special place in my heart, as lame as  that might sound. In short, I use FocusWriter for when I write longer pieces of text while I fire up MarkdownPad for shorter things and format checking. This might seem like overkill, but I like to have the opportunity to once in a while use a preview while I'm typing something out. 

I do think that WriteMonkey looks good too, but I'm not too fond of the idea of relying exclusively on keyboard shortcuts. I would probably like mdCharm too, especially since it has a syntax highlightning and the ability to export the Markdown files straight to PDF, which is something MarkdownPad lacks. I might try to use them more extensively at some point.

## Summary

If you're looking for a way to start intergrating plain text into your workflow, Markdown is the way to go. The formatting syntax is simple and you're never going to be tied down to one specific tool for your writing. All in all, it's easy to use and it's future proof.

## Further reading

- *Brett Terpstra:* [Why Markdown? A Two Minute Explanation](http://brettterpstra.com/why-markdown-a-two-minute-explanation/) 
- *The Hiltmon:* [The Markdown Mindset](http://www.hiltmon.com/blog/2012/02/20/the-markdown-mindset/)
- *Lifehacker:* [What Is Markdown, and Why Is It Better for My To-Do Lists and Notes?](http://lifehacker.com/5943320/what-is-markdown-and-why-is-it-better-for-my-to+do-lists-and-notes?tag=ask-lifehacker)
- *TUAW:* [Markdown Primer](http://www.tuaw.com/markdown-primer)
- *Mike Vardy:* [The Journey To Markdown](http://vardy.me/the-journey-to-markdown/)
- *Adam Simpson:* [PlainText and Markdown - A Primer](http://www.adamsimpson.net/plaintext-and-markdown-a-primer)
- *Michael Schechter:* [A Plain Text Primer](http://www.bettermess.com/a-plain-text-primer/)
- *Macworld:* [Forget fancy formatting: Why plain text is best](http://www.macworld.com/article/1161549/forget_fancy_formatting_why_plain_text_is_best.html)
- *MacSparky:* [Why I Love Text Files](http://macsparky.com/2011/2/10/the-joy-of-text.html)
