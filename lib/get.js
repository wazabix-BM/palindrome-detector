module.exports = function ( sentence, chr, isPalindrome ) {
    let input;
    let output = [];

    for ( let i of chr ) {
        if ( sentence.includes ( i ) )
            sentence = sentence.replace ( new RegExp ( i, 'g' ), '' );
    }

    input = sentence.split ( ' ' );

    input.map ( elm => {
        if ( isPalindrome ( elm ) )
            output.push ( elm );
    } );

    for ( let index in output ) {
        if ( output [ index ].length == 0 | output [ index ].length == 1 )
            delete output [ index ];
    }

    output = output.filter ( e => e );

    if ( output.length == 0 )
        return 'No palindromes found';

    else
        return output;
}