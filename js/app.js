$( function() {
    $( 'body' ).scrollspy( { target: '.master-list-col' } );

    $( '.list-group' ).affix({
        offset: {
            top: 90
        }
    });
});
