---
title: "More Additions"
tags: [Code, CSS]
layout: post
comments: true
---

Being bored sometimes has it's own perks. I continued experimenting with the [Begrider](/projects/begrider/) project and ended up adding a couple of more things to it, mainly a new set of column-like classes called `.unit-`. A unit differ itself from a regular column by not having a gutter, and thus having more of a "proportional" percentage width. So, instead of just having these:

    .row .column-twelve {
      width: 99.99%;
      margin-right: 0;
    }

    .row .column-eleven {
      width: 91.42%;
    }

    .row .column-ten {
      width: 82.85%;
    }

    /* Nine columns */
    .row .column-nine {
      width: 74.28%;
    }

    .row .column-eight {
      width: 65.71%;
    }
    
    .row .column-seven {
      width: 57.14%;
    }

    .row .column-six {
      width: 48.57%;
    }

    .row .column-five {
      width: 40%;
    }

    .row .column-four {
      width: 31.43%;
    }

    .row .column-three {
      width: 22.86%;
    }

    .row .column-two {
      width: 14.29%;
    }

    .row .column-one {
      width: 5.72%;
    }

You can also use these:

    .row .unit-full {
      width: 100%;
    }

    .row .unit-four-fifths {
      width: 80%;
    }

    .row .unit-three-quarters {
      width: 75%;
    }

    .row .unit-two-thirds {
      width: 66.66%;
    }

    .row .unit-three-fifths {
      width: 60%;
    }

    .row .unit-half {
      width: 50%;
    }

    .row .unit-two-fifths {
      width: 40%;
    }

    .row .unit-one-third {
      width: 33.33%;
    }

    .row .unit-one-quarter {
      width: 25%;
    }

    .row .unit-one-fifth {
      width: 20%;
    }

It's useful if you don't want to have any gutters and/or want to use paddings instead instead of margins. I don't know if anyone's ever going to use besides myself, but I quite like to work on it either way. Like I said, it keeps my boredom at bay. I don't really know if it actually needs anything more, but I'll be sure to try stuff out.