---
title: "Github"
layout: page
---

A handy guide for creating pull requests on [Github](https://github.com/).

## Forking

1. Click on the "Fork" button and clone your fork of the repository:

        git clone https://github.com/your-username/forked-repository.git

2. Track the "upstream" branch:

        git remote add --track master upstream https://github.com/original-username/original-repository.git

3. Fetch and merge your forked repository with the original repository (if needed):

        git fetch upstream
        git merge upstream/master

## Branching

1. Create a new development branch and switch to it[^1]:

        git checkout -b feature-name

2. Start hacking.
3. Commit your changes.

## Pushing

1. Push the new branch to your forked repository:

        git push --set-upstream origin feature-name

## Pull requesting

1. Click on the "Pull Request" button/link.
2. Write a pull request message.

***
[^1]: Rename `feature-name` to something relevant.
