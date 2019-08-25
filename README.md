# string-unified
All you need to **handle Unicode strings properly** in JS.

This library builds on the power of [grapheme-splitter](https://github.com/orling/grapheme-splitter) to provide all essential functions for accurate Unicode string manipulations.

# Installation
## Node.js
```
npm i string-unified
```
## Browsers
jsDelivr
```
https://cdn.jsdelivr.net/npm/string-unified@latest
```
Unpkg
```
https://unpkg.com/string-unified@latest/dist/index.js
```
And import string-unified like this
```js
// ES2015+
import * as unified from "string-unified";
import { length, charAt, substring } from "string-unified";

// CommonJS
const unified = require("string-unified")
const { length, charAt, substring } = require("string-unified");
```
# Usage
* [length()](#length)
* [charAt()](#charAt)
* [substring()](#substring)
* [indexOf()](#indexOf)
* [lastIndexOf()](#lastIndexOf)
* [includes()](#includes)
* [split()](#split)
* [startsWith()](#startsWith)
* [endsWith()](#endsWith)
* [match()](#match)

> All functions except match() are transpiled to ES5.
> [See below](#match) for why match() requires ES2015+.

## length
Get the length of a string.
```js
function length(str)
```
|Param|Type|Default|Description|
|-----|----|-------|-----------|
|str  |string|*none*|string to find length for|
### Examples
```js
length('abc') // 3

length('谢谢') // 2

length('अनुच्छेद') // 5

length('뎌쉐') // 2

length('Ĺo͂řȩm̅') // 5

length('Z͑ͫ̓ͪ̂ͫ̽͏̴̙̤̞͉͚̯̞̠͍A̴̵̜̰͔ͫ͗͢L̠ͨͧͩ͘G̴̻͈͍͔̹̑͗̎̅͛́Ǫ̵̹̻̝̳͂̌̌͘') // 5

length('🎅🔥🌘☀🛴👚') // 6

length('🏳️‍🌈') // 1
```
## charAt
Get the character at an index.
```
function charAt(str, index)
```
|Param|Type|Default|Description|
|-----|----|-------|-----------|
|str  |string|*none*|string to get char from|
|index|number|*none*|index to get char|
### Examples
```js
charAt('helloあ', 5) // 'あ'

// negative indices also work!
// same as charAt('谢谢你😊', 3)
charAt('谢谢你😊', -1) // '😊'
```
## substring
Get a substring of a string.
```
function substring(str, start, end?)
```
|Param|Type|Default|Description|
|-----|----|-------|-----------|
|str  |string|*none*|string to retrieve substring from|
|start|number|*none*|start index of substring|
|end|number|end of string|end index of substring|
### Examples
```js
substring('🥪🥗🍤🍜🍚', 3) // '🍜🍚'

substring('🥪🥗🍤🍜🍚', 2, 5) // '🍤🍜🍚'

// negative indices also work!
// same as substring('🥪🥗🍤🍜🍚', 2, 3)
substring('🥪🥗🍤🍜🍚', -3, -2) // '🍤'
```
## indexOf
Get the index of the first occurence of a search string.
```js
function indexOf(str, searchStr, start?)
```
|Param|Type|Default|Description|
|-----|----|-------|-----------|
|str  |string|*none*|string to search in|
|searchStr|string|*none*|string to search for|
|start|number|0|start index of the search
### Examples
```js
// get index of the *first* occurence
indexOf('🚗🚌🚑🚜🚒🚜', '🚜') // 3

// return -1 if not found
indexOf('🚗🚌🚑🚜🚒🚜', '🛴🛴🛴') // -1
```
## lastIndexOf
Get the index of the last occurence of a search string.
```js
function lastIndexOf(str, searchStr, start?)
```
|Param|Type|Default|Description|
|-----|----|-------|-----------|
|str  |string|*none*|string to search in|
|searchStr|string|*none*|string to search for|
|start|number|end of string|start index of the search
### Examples
```js
// get index of the *last* occurence
lastIndexOf('🚗🚌🚑🚜🚒🚜', '🚜') // 5

// return -1 if not found
lastIndexOf('🚗🚌🚑🚜🚒🚜', '🛴🛴🛴') // -1
```
## includes
Test if a search string appears in a string.
```js
function includes(str, searchStr, start?)
```
|Param|Type|Default|Description|
|-----|----|-------|-----------|
|str  |string|*none*|string to search in|
|searchStr|string|*none*|string to search for|
|start|number|end of string|start index of the search
### Examples
```js
includes('🎁🎄🎃🎉🧧', '🎃') // true

// same as includes('🎃🎉🧧', '🎁')
includes('🎁🎄🎃🎉🧧', '🎁', 2) // false

// negative indices also work!
// same as includes('🎃🎉🧧', '🎁')
includes('🎁🎄🎃🎉🧧', '🎁', -3) // false
```
## split
Split a string by a separator (can be a string or regex).
```js
function split(str, separator?, limit?)
```
|Param|Type|Default|Description|
|-----|----|-------|-----------|
|str  |string|*none*|string to split|
|separator|string or RegExp|*none*|separator to split string|
|limit|number|+Infinity|limit of the number of splits returned
### Examples
```js
split('👩🔹👨🔹🧑🔹👧🔹👦🔹🧒', '🔹') //  ['👩','👨','🧑','👧','👦','🧒'])
split('👩🔹👨🔹🧑🔹👧🔹👦🔹🧒', '🔹', 3) // ['👩','👨','🧑']

// limit can be larger than array size
split('👩🔹👨🔹🧑', '🔹', 6) // ['👩','👨','🧑']

// no separator returns a copy of the string inside an array
split('👩🔹👨🔹🧑🔹👧🔹👦🔹🧒') // ['👩🔹👨🔹🧑🔹👧🔹👦🔹🧒']

// if separator is an empty string '', split whole string into a character array
split('👩🔹👨🔹🧑🔹👧🔹👦🔹🧒', '') //  ['👩','🔹','👨','🔹','🧑','🔹','👧','🔹','👦','🔹','🧒'])

// If separator is a regular expression containing capturing parentheses (), matched results are included
split('Hello👋 1 word. Sentence #️⃣ 2.', /(\d)/)) // ["Hello👋 ", "1", " word. Sentence #️⃣ ", "2", "."]
```
## startsWith
Test is a string starts with a search string.
```js
function startsWith(str, searchStr, start?)
```
|Param|Type|Default|Description|
|-----|----|-------|-----------|
|str  |string|*none*|string to search in|
|searchStr|string|*none*|string to search for|
|start|number|0|start index of the search
### Examples
```js
startsWith('🎢🎪🎭🎡🎠', '🎢🎪') // true

// same as startsWith('🎪🎭🎡🎠', '🎢')
startsWith('🎢🎪🎭🎡🎠', '🎢', 1) // false

// negative indices also work!
// same as startsWith('🎡🎠', '🎡')
startsWith('🎢🎪🎭🎡🎠', '🎡', -2) // true
```
## endsWith
Test is a string ends with a search string.
```js
function endsWith(str, searchStr, start?)
```
|Param|Type|Default|Description|
|-----|----|-------|-----------|
|str  |string|*none*|string to search in|
|searchStr|string|*none*|string to search for|
|start|number|end of string|start index of the search
### Examples
```js
endsWith('🎢🎪🎭🎡🎠', '🎠') // true

// same as endsWith('🎢🎪🎭', '🎭')
endsWith('🎢🎪🎭🎡🎠', '🎭', 2) // true

// negative indices also work!
// same as endsWith('🎢🎪🎭🎡', '🎡')
endsWith('🎢🎪🎭🎡🎠', '🎡', -2) // true
```
## match
> Note that match() requires ES2015+ because of limited support of unicode regexp
> in lower versions and limitations of current source code transpilers like [regexpu](https://github.com/mathiasbynens/regexpu#known-limitations).

Test if a string matches a regular expression or another string.
```js
function match(str, regexp)
```
|Param|Type|Default|Description|
|-----|----|-------|-----------|
|str  |string|*none*|string to search in|
|regexp|RegExp or string|*none*|Regular expression or string to search for|
### Examples
```js
// Test if a string matches a RegExp
// Without global flag
match('🐵🐶🐺🐱', /🐺/) // ['🐺', index: 2, input: '🐵🐶🐺🐱', groups: undefined]

match('🏳️‍🌈', /🌈/) // null

// Must add 'u' flag otherwise throw "Range out of order in character class"
match('💩', /[💩-💫]/u) // ['💩', index: 0, input: '💩', groups: undefined]

// all operators like '.' includes unicode characters
match('foo👋bar', /foo(.)bar/) // ['foo👋bar', '👋', index: 0, input: 'foo👋bar', groups: undefined)

// With global flag
match('🐵🐺🐶🐺🐱', /🐺/g) // ['🐺', '🐺']

match('🏁🏳️‍🌈🏴🏳️‍🌈⛳🚩🏳️‍🌈🎌', /🏳️‍🌈[⛳🎌]/g) // ['🏳️‍🌈⛳', '🏳️‍🌈🎌']

// Test if a string matches another string
match('🏁🏳️‍🌈🏴🏳️‍🌈⛳🚩', '🏳️‍🌈') // ['🏳️‍🌈', index: 1, input: '🏁🏳️‍🌈🏴🏳️‍🌈⛳🚩', groups: undefined];

// Special case when regexp is undefined
match('Nothing will not match anything.', undefined) // null
```