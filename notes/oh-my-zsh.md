---
title: "Oh my Zsh!"
layout: page
---

A handy cheatsheet for [Oh my Zsh!](https://github.com/robbyrussell/oh-my-zsh)

## Debian

Aliases and functions for common [Debian](http://www.debian.org/) tasks.

| Alias                | Command                  |
|----------------------|--------------------------|
| `ag`                 | `apt-get`                |
| `acs`                | `apt-cache search`       |
| `apt-history OPTION` |  Print `apt` history[^1] |

## Git

Aliases for common [Git](http://www.git-scm.com/) tasks.

| Alias    | Command                 |
|----------|-------------------------|
| `g`      | `git`                   |
| `gst`    | `git status`            |
| `gd`     | `git diff`              |
| `gl`     | `git pull`              |
| `gp`     | `git push`              |
| `gcmsg`  | `git commit -m`         |
| `gco`    | `git checkout`          |
| `gr`     | `git remote`            |
| `gb`     | `git branch`            |
| `ga`     | `git add`               |
| `gm`     | `git merge`             |
| `ggpull` | Pull current[^2] branch |
| `ggpush` | Push current branch     |

## Rsync

Aliases for common [Rsync](http://rsync.samba.org/) tasks.

| Alias               | Command                                         |
|---------------------|-------------------------------------------------|
| `rsync-copy`        | `rsync -av --progress -h`                       |
| `rsync-move`        | `rsync -av --progress -h --remove-source-files` |
| `rsync-update`      | `rsync -avu --progress -h`                      |
| `rsync-synchronize` | `rsync -avu --delete --progress -h`             |


[^1]: the options are `install`, `upgrade`, `remove`, `rollback` and `list`.
[^2]: you can see the current branch right on the command line, depending on your `Zsh` theme.
