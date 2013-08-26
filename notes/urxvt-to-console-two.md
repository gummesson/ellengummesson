---
title: "urxvt to Console2"
layout: page
---

A handy cheatsheet for converting colorschemes from [urxvt](http://software.schmorp.de/pkg/rxvt-unicode.html) to [Console2](http://sourceforge.net/projects/console/).

| urxvt        | PowerShell     | Console2 |
|--------------|----------------|----------|
| `background` | `Black`        | 0        |
| `color4`     | `DarkBlue`     | 1        |
| `color2`     | `DarkGreen`    | 2        |
| `color6`     | `DarkCyan`     | 3        |
| `color1`     | `DarkRed`      | 4        |
| `color5`     | `DarkMagenta`  | 5        |
| `color3`     | `DarkYellow`   | 6        |
| `foreground` | `Gray`[^1]     | 7        |
| `color8`     | `DarkGray`[^2] | 8        |
| `color12`    | `Blue`         | 9        |
| `color10`    | `Green`        | 10       |
| `color14`    | `Cyan`         | 11       |
| `color9`     | `Red`          | 12       |
| `color13`    | `Magenta`      | 13       |
| `color11`    | `Yellow`       | 14       |
| `color15`    | `White`        | 15       |

You can also use `color0` for `Black` and `color7` for `White`.

* * *

[^1]: It's the counterpart to `White`, ie: `Dark White`.
[^2]: It's the counterpart to `Black`, ie: `Light Black`.
