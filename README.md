
# strawpoll.js

[![Build Status](https://travis-ci.org/m3talstorm/stawpoll.svg?branch=master)](https://travis-ci.org/m3talstorm/strawpoll) [![Downloads](https://img.shields.io/npm/dm/strawpoll.svg?style=flat)](https://www.npmjs.org/package/strawpoll) [![Npm Version](https://img.shields.io/npm/v/strawpoll.svg?style=flat)](https://www.npmjs.org/package/strawpoll) [![Node Version](https://img.shields.io/node/v/strawpoll.svg?style=flat)](https://www.npmjs.org/package/strawpoll) [![Issues](https://img.shields.io/github/issues/m3talstorm/strawpoll.svg?style=flat)](https://github.com/m3talstorm/strawpoll/issues)

A simple javascript interface/nodejs package to the www.strawpoll.me API.


## Install

#### Node (Coming soon)

~~~ bash
npm install strawpoll --save
~~~

## Usage

#### Node

##### Creating a poll

~~~ javascript

const strawpoll = require('strawpoll')

var poll = strawpoll.create({
    title: 'My first poll',
    options: [
        'wow',
        'awesome',
        'amazing',
        'nice'
    ],
    multi: false,
    dupcheck: 'normal',
    captcha: false
})

poll.then((response) => {
    console.log(response)
}).catch((error) => {
    console.log(error)
})

~~~

##### Getting the state/information about a poll

~~~ javascript

const strawpoll = require('strawpoll')

var poll = strawpoll.get(11822190)

poll.then((response) => {
    console.log(response)
}).catch((error) => {
    console.log(error)
})

~~~
