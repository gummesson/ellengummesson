---
title: "Trying Out SASS"
layout: post
tags: [Code, CSS, SASS]
comments: true
---

Disclaimer: the following blog post is extremely geeky and contains A LOT of code.

Earlier today I decided to try out [Sass](http:/www.sass-lang.com/ "Syntactically Awesome Stylesheets") and [Compass](http://compass-style.org/ "Compass - an open-source CSS Authoring Framework") because I've seen it being mentioned almost daily for quite a while. I didn't really know what I wanted to code, so I just did some kind of starting point with a couple of font selectors, properties and values using mainly the variable function in Sass, which i a really handy tool I think. You have to excuse me for the lack of highlighting in the code blocks and I hope that it's still readable. I've tried a few plugins that enables automatic highlighting, but I haven't come across one that I really love. I also had remove nearly all of my comments in the code but I'm sure it's still understandable. If not, you can check it out on my [GitHub](https://github.com/gummesson/sass-type-variables "Sass Type Variables").

##_variables.scss

Like I said earlier, the variable part in Sass is really awesome. I created a separate file called `variables.scss` (Sass' default file extension) where I defined them all for better control and easier editing. Adding an underscore before a file name stops your file from get rendered into a `.css` file, which is useful since you probably don't want all of your `.scss` files to become regular `.css` files.

    // Default / Body
        $default-font-family: Helvetica, Arial, Sans-serif;
       $default-font-percent: 100%;
    $default-font-lineheight: 1.5;
         $default-font-color: #333;
          $default-font-size: 1em;

    // Headings
    $heading-font-family: Georgia, Times, Serif;
    $heading-font-weight: bold;

    // Links
         $default-link-color: $default-font-color;
    $default-link-decoration: 1px solid;

    // Hover
         $default-hover-color: #666;
    $default-hover-decoration: 1px solid; 

    // Margins
    $default-margin: 1.5em;

I focused on just a few selectors (body, headings and links), but this could be expanded to include a lot more.

##screen.scss

In the `screen.scss` is where the magic happens, so to speak. That's where I imported all of my variables that I defined in `variables.scss` and placed them in selectors with properties.

    @import "_variables.scss";

    /* Body */

    body {
      font : #{$default-font-percentage}/#{$default-font-lineheight} $default-font-family;
      color: $default-font-color;
    }

    /* Headings */

    h1, h2, h3, h4, h5, h6 {
      font-family: $heading-font-family;
      font-weight: $heading-font-weight;
    }

    h1 {
      font-size: $default-font-size * 2;
    }

    h2 {
        font-size: $default-font-size * 1.5;
      line-height: $default-font-lineheight - 0.2;
    }

    h3 {
        font-size: $default-font-size * 1.25;
      line-height: $default-font-lineheight - 0.2;
    }

    h4 {
        font-size: $default-font-size * 1.125;
      line-height: $default-font-lineheight - 0.2;
    }

    h5, h6 {
      font-size: $default-font-size;
    }

    /* Paragraphs */

    p {
      margin-bottom: $default-margin;
    }

    /* Links */

    a {
               color: $default-link-color;
      border-bottom: $default-link-decoration $default-link-color;
    }

    a:hover, a:focus {
              color: $default-hover-color;
      border-bottom: $default-hover-decoration $default-hover-color;
    }


I think it's really cool that you can use basic math with variables so that you can create other values by only using one variable as a base point. Just change it and all the calculations will be rendered automatically.

##screen.css

This is the final result after Compass was done with the compiling:
    /* Body */
    body {
      font: 100%/1.5 Helvetica, Arial, Sans-serif;
      color: #333333;
    }

    /* Headings */
    h1, h2, h3, h4, h5, h6 {
      font-family: Georgia, Times, Serif;
      font-weight: bold;
    }

    h1 {
      font-size: 2em;
    }

    h2 {
        font-size: 1.5em;
      line-height: 1.3;
    }

    h3 {
        font-size: 1.25em;
      line-height: 1.3;
    }

    h4 {
        font-size: 1.125em;
      line-height: 1.3;
    }

    h5, h6 {
      font-size: 1em;
    }

    /* Paragraphs */
    p {
      margin-bottom: 1.5em;
    }

    /* Links */
    a {
              color: #333333;
      border-bottom: 1px solid #333333;
    }

    a:hover, a:focus {
              color: #666666;
      border-bottom: 1px solid #666666;
    }

It might look like a lot of work for simplifying such a small part, but the thing is that both `variables.scss` and `screen.scss` are highly customizable and reusable too. If I wanted to change a font-family or make the font-percentage bigger I could do that by just opening up `variables.scss` and re-rendering it. I don't have to change anything else. I think I'll try out Sass for a while and see how it goes. There's a lot more to it than just simple variables and math, so I'm looking forward to see what I can come up with.