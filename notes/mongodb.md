---
title: "MongoDB"
layout: page
---

A handy guide for installing and using [MongoDB](http://www.mongodb.org/) locally.

## Installation

### Windows

1. Download [MongoDB](http://www.mongodb.org/downloads) and extract it to `C:\mongodb`.
2. Create a file called `mongod.cfg` with the following content:

        logpath=<path>\MongoDB\log\mongodb.log
        logappend=true
        dbpath=<path>\MongoDB\data\db

3. Open up the command prompt or PowerShell and execute the following as an *Administrator*:

        C:\mongodb\bin\mongod.exe --config <path>\mongod.cfg --install

## Service

### Windows

1. Start the service:

        net start mongodb

2. Stop the service:

        net stop mongodb

## Database

### Deleting a database

1. Start the MongoDB CLI[^1]:

        mongo

2. Select the database:

        use.<databaseName>;

3. Drop it (like it's hot):

        db.dropDatabase();

***

[^1]: On Windows you need to set an alias for this command to work, or use the full path to the executable.
