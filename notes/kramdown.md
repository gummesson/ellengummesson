---
title: "kramdown"
layout: page
---

A few notes about the syntax and code generation of the [Markdown](http://daringfireball.net/projects/markdown/) generator [kramdown](http://kramdown.rubyforge.org/).

## Footnotes

Generates the HTML for the footnotes with the classes named `footnote` (the inline footnote reference), `reversefootnote` (the actual footnote) and `footnotes` (the ordered list that contains the footnotes).

## Table of contents

    * Heading
    {:toc}
{: .no-highlight }

This generates the HTML for the unordered list of table of contents with an id called `markdown-toc`.

## Inline classes

    This is a paragraph.
    {: .print--lead .print--brand }
{: .no-highlight }

## Definition lists

    Term
    : Definition
{: .no-highlight }

## Abbreviations

    Abbrev

    *[Abbrev]: Abbreviation
{: .no-highlight }
