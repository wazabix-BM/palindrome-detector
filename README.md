### palindrome-detector

[![Discord](https://img.shields.io/discord/519837781866840122?color=%237289DA&label=WaZaBiX%27s%20guild&logo=discord)](https://discord.gg/ES52WDg)
[![npm](https://img.shields.io/npm/v/@wazabix/palindrome-detector?logo=npm)](https://www.npmjs.com/package/@wazabix/palindrome-detector)
[![NPM](https://img.shields.io/npm/l/@wazabix/palindrome-detector?logo=github)](https://github.com/wazabix-BM/palindrome-detector/blob/main/LICENSE.md)
[![npm](https://img.shields.io/npm/dt/@wazabix/palindrome-detector?logo=npm)](https://www.npmjs.com/package/@wazabix/palindrome-detector)

> Simple JS library to detect all palindromes in a sentence

# Install

```batch
$ npm i @wazabix/palindrome-detector
```

# API

* **getPalindromes ()**
    * This method makes it possible to obtain all the palindromes present in the sentence. It is based on the code of this [`package`](https://www.npmjs.com/package/@wazabix/palindrome)

* **isPalindrome()**
    * This method returns true if the sentence is a palindrome sentence or false if it is not
    * ⚠️ This package may be obsolete depending on the language. The detection of Palindrome sentences is correctly done for French or English, however for some languages like Russian or Polish using specific characters, the return value may be distorted due to a bad treatment of these characters

# Usage

```js
const { Phrase } = require ( '@wazabix/palindrome-detector' ),
phrase = new Phrase ();

phrase.content = 'Ma chaîne de caractères';
console.log ( phrase.content ); // Ma chaîne de caractères
console.log ( phrase.getPalindromes () ); // No palindromes found

phrase.content = 'Tu l\'as trop écrasé César ce Port-Salut';
console.log ( '\n' + phrase.content ); // Tu l'as trop écrasé César ce Port-Salut
console.log ( phrase.isPalindrome () ); // true

// -----------------------------------------------------

const { Phrase } = require ( '@wazabix/palindrome-detector' ),
phrase1 = new Phrase ( 'J\'adore faire du kayak !! Il faut beaucoup de level !' );
phrase2 = new Phrase ( 'Dennis, no misfit can act if Simon sinned' );

console.log ( phrase1.content ); // J'adore faire du kayak !! Il faut beaucoup de level !
console.log ( phrase1.getPalindromes () ); // [ 'kayak', 'level' ]

console.log ( '\n' + phrase2.content ); // Dennis, no misfit can act if Simon sinned
console.log ( phrase2.isPalindrome () ); // true
```"# palindrome-detector" 
