const { isPalindrome } = require ( '@wazabix/palindrome' ),
get = require ( '@wazabix/palindrome-detector/lib/get.js' ),
is = require ( '@wazabix/palindrome-detector/lib/is.js' );

const chr = [ ',', ':', '!', ';', '.', '?' ];

module.exports.Phrase = class {
    
    /**
     * @class
     * @description Create a sentence
     * @constructs Phrase
     * @param { String } content
     * @object content
     * @method getPalindromes ()
     * @method isPalindrome ()
     */

    constructor ( content ) { 

        /**
         * @description String of the class
         * @type { string }
         */

        this.content = content;
    }

    /**
     * @method
     * @description Method to obtain the palindromes of the string
     * @return { Array | "No palindromes found" } Return an array containing the palindromes or else return a sentence specifying no palindromes
     * @example
     * const phrase = new Phrase ();
     * phrase.content = "My sentence"
     * 
     * console.log ( phrase.content ); // My sentence
     * console.log ( phrase.getPalindromes () ); // No palindromes found
     * 
     * phrase.content = "The kayak is a type of light pirogue using a paddle to propel, steer and balance it"
     * console.log ( phrase.getPalindromes () ); // [ 'kayak' ]
     */

    getPalindromes () {
        if ( !this.content )
            /* new Phrase ( content: string ) */ throw new Error ( '[content] is undefined' );

        if ( typeof this.content !== 'string' )
            this.content = this.content.toString ();

        if ( this.content.length == 0 )
            /* new Phrase ( content: string ) */ throw new Error ( '[content] is undefined' );

        this.content = this.content.toLowerCase ();

        return get ( this.content, chr, isPalindrome );
    }

    /**
     * @method
     * @description Method to find out if the string is a palindrome
     * @return { boolean } Return true if the string has one otherwise return false
     * @example
     * const phrase = new Phrase ();
     * phrase.content = "My sentence"
     * 
     * console.log ( phrase.content ); // My sentence
     * console.log ( phrase.isPalindrome () ); // false
     * 
     * phrase.content = "Rats live on no evil star"
     * console.log ( phrase.content ) // Rats live on no evil star
     * console.log ( phrase.isPalindrome () ); // true
     */

    isPalindrome () {
        if ( !this.content )
            /* new Phrase ( content: string ) */ throw new Error ( '[content] is undefined' );

        if ( typeof this.content !== 'string' )
            this.content = this.content.toString ();

        if ( this.content.length == 0 )
            /* new Phrase ( content: string ) */ throw new Error ( '[content] is undefined' );

        this.content = this.content.toLowerCase ();

        return is ( this.content, chr );
    }
}