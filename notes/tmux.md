---
title: "Tmux"
layout: page
---

A handy cheatsheet for [Tmux](http://tmux.sourceforge.net/).

## Sessions

| Command                     | Action                        |
|-----------------------------|-------------------------------|
| `tmux new -s NAME`[^1]      | Start a new named session     |
| `tmux new -s NAME -d`       | Create a detached session     |
| `tmux attach -t NAME`       | Attach to a named session     |
| `tmux kill-session -t NAME` | Kill a named session          |
| `tmux ls`                   | List all sessions             |

## Windows

| Keybinding     | Action                  |
|----------------|-------------------------|
| `Ctrl-B` + `c` | Create a new window     |
| `Ctrl-B` + `n` | Move to next window     |
| `Ctrl-B` + `p` | Move to previous window |
| `Ctrl-B` + `f` | Find a window           |
| `Ctrl-B` + `,` | Name a window           |
| `Ctrl-B` + `&` | Kill a window           |
| `Ctrl-B` + `w` | List all windows        |

## Panes

| Keybinding     | Action                       |
|----------------|------------------------------|
| `Ctrl-B` + `%` | Create a new vertical pane   |
| `Ctrl-B` + `"` | Create a new horizontal pane |
| `Ctrl-B` + `o` | Go to next pane              |
| `Ctrl-B` + `x` | Kill a pane                  |
| `Ctrl-B` + `q` | List all panes               |

## Miscellaneous

| Keybinding     | Action                |
|----------------|-----------------------|
| `Ctrl-B` + `?` | List all keybindings  |

[^1]: Replace `NAME` with an actual name.
