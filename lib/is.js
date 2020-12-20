const a = [ 'à', 'á', 'â', 'ä' ],
e = [ 'é', 'è', 'ê', 'ë' ],
chri = [ 'í', 'ì', 'î', 'ï' ],
o = [ 'ô', 'ö', 'ò', 'ó' ],
u = [ 'ù', 'ú', 'û', 'ü', 'μ' ],
c = [ 'ç', 'ć', 'c̀', 'ĉ', 'c̈' ],

specialChr = [ '-', '\'', '"', '«', '»', '‹', '›', '“', '”', '‘', '’', '„' ];

module.exports = function ( sentence, chr ) {
    let input;
    let output;

    for ( let i of chr ) {
        if ( sentence.includes ( i ) )
            sentence = sentence.replace ( new RegExp ( i, 'g' ), '' );
    }

    for ( let i of specialChr ) {
        if ( sentence.includes ( i ) )
            sentence = sentence.replace ( new RegExp ( i, 'g' ), '' );
    }

    for ( let i of c ) {
        if ( sentence.includes ( i ) )
            sentence = sentence.replace ( new RegExp ( i, 'g' ), 'c' );
    }

    for ( let i of a ) {
        if ( sentence.includes ( i ) )
            sentence = sentence.replace ( new RegExp ( i, 'g' ), 'a' );
    }

    for ( let i of e ) {
        if ( sentence.includes ( i ) )
            sentence = sentence.replace ( new RegExp ( i, 'g' ), 'e' );
    }

    for ( let i of chri ) {
        if ( sentence.includes ( i ) )
            sentence = sentence.replace ( new RegExp ( i, 'g' ), 'i' );
    }

    for ( let i of o ) {
        if ( sentence.includes ( i ) )
            sentence = sentence.replace ( new RegExp ( i, 'g' ), 'o' );
    }

    for ( let i of u ) {
        if ( sentence.includes ( i ) )
            sentence = sentence.replace ( new RegExp ( i, 'g' ), 'u' );
    }

    sentence = sentence.replace ( / /g, '' );

    input = sentence.split ( '' );
    input.reverse ();

    output = input.join ( '' );

    if ( sentence == output ) return true
    else return false;
}