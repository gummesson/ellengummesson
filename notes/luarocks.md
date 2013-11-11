---
title: "LuaRocks"
layout: page
---

A small guide for getting [LuaRocks](http://luarocks.org/) up and running on Windows.

## MinGW

1. Download the installer.
2. Choose the `mingw32-base` package and the `mingw32-gcc-g++` package.
3. Add `C:\MinGW\bin` to your PATH.

## LuaRocks

1. Download the installer and extract it.
2. Run `install.bat /P C:\LuaRocks /MW`.
3. Add `C:\LuaRocks\2.1` and `C:\LuaRocks\bin` to your PATH.
4. Create a new environment variable called `LUA_PATH` with the following value: `.\?.lua;.\?\init.lua;C:\LuaRocks\share\lua\5.1\?.lua;C:\LuaRocks\share\lua\5.1\?\init.lua`
5. Create a new environment variable called `LUA_CPATH` with the following value: `.\?.dll;C:\LuaRocks\lib\lua\5.1\?.dll`.

### Packages

Some packages can't be built on Windows with MinGW. The easiest way to get them to work is to go to LuaRocks' [main repository](http://luarocks.org/repositories/rocks/), download the package's `win32-x86.rock` file and install it manually, like this:

    luarocks install package-version-win32-x86.rock
