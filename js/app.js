$( function() {
    $( 'body' ).scrollspy( { target: '.list-group' } );

    $( '.list-group' ).affix({
        offset: {
            top: 90
        }
    });
});
