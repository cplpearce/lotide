# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @mighthire/lotide`

**Require it:**

`const _ = require('@mighthire/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: returns index 0 of an array
* `tail(array)`: returns index 0 of a length 1 array or splice(1) of a larger array
* `middle(array)`: returns a snarky string if array length is 2 or less, or returns the middle 1/2 indexes values.