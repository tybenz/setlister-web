$( function() {
    $( 'body' ).scrollspy( { target: '.master-list-col' } );

    $( '.list-group' ).affix({
        offset: {
            top: 90
        }
    });

    $( '.tab' ).on( 'click', function( evt ) {
        evt.preventDefault();

        var $this = $( this );
        $( '.sidebar' ).toggleClass( 'slide-in' );

        if ( $this.hasClass( 'glyphicon-chevron-right' ) ) {
            $this.addClass( 'glyphicon-chevron-left' );
            $this.removeClass( 'glyphicon-chevron-right' );
        } else {
            $this.addClass( 'glyphicon-chevron-right' );
            $this.removeClass( 'glyphicon-chevron-left' );
        }
    });
});
