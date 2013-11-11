---
title: "should.lua: bringing BDD-style assertions to Lua"
tags: ["Code", "Lua"]
layout: post
comments: true
external-url: false
---

After having released three smaller libraries for Lua I embarked on a pretty ambitious journey: to create a BDD-style assertion library, which I then named [should.lua](https://github.com/gummesson/should.lua). [Busted](http://olivinelabs.com/busted/) has been my testing framework of choice and I'm a big fan of it, but I don't really like using `assert` when I use `describe` and `it` in my tests. Now I can write my tests like this:

    describe('A test', function()
      it('should do something', function()
        should.Equal(true, true)
      end)
    end)

`expect` is also available:

    describe('A test', function()
      it('should do something', function()
        expect(true):toEqual(true)
      end)
    end)

`expect` is actually just a thin "wrapper" for the `should` library, which I hacked together using the recommended way for creating [classes](http://www.lua.org/pil/16.1.html) in Lua. It was a challenge, but a pretty fun one. However, it's far from finished so pull requests are always welcome!
