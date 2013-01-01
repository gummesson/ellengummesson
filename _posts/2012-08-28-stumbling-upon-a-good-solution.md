---
title: "Stumbling Upon A Good Solution"
tags: [Code, CSS]
layout: post
comments: true
---
As some of you may know, I've built my own grid system with the world's most horrible name, [Begrider](/projects/begrider/ "Begrider is a simple, twelve column 1140px fluid grid system"). One thing that always bothered me with it was that at when you wanted to the row to end you'd had to add a class named `.last`.  I added this because it was a simple solution to my problem. I've experimented with adding negative margins, but I never got it to function properly. Yesterday I found the perfect solution for my needs. 

## The Solution

Begrider uses an attribute selector to target all of the column classes rather than adding all the properties and values to them by hand or having to declare all of the classes twice. So I did some experimenting and for some reason tried this simple trick:

    [class^="col-"]:last-child {
      margin-right: 0;
    }

It worked! I know that I always sound suprised when something I've done works, but this really took me by suprise. Now the last `.col` in the row gets it's gutter/margin removed without adding another class to it. I ran it through Chrome, Firefox, Opera and Internet Explorer 9 and it works in all of them. However, it should be noted that while IE9 supports it, IE8 don't (IE8 isn't too fond of the :last-child thing). I think I'm going to leave the `.last` class in the code, just so there's an option to use it. 

I also re-did some parts in Begrider and split it up to two different versions: one called begrider-new and another called begrider-old. The new version uses attribute selectors to apply properties and values on all of column classes and to remove the gutter from the last column in the row. The second one groups the column classes together to add their shared properties and values while seperating them for their unique width property.