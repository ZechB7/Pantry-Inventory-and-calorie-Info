// input for recipe and ingredients get
var query = 'inputSearch'

// recipe and ingredients get
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/recipe?query=' + query,
    headers: { 'X-Api-Key': 'vxibSWpyKxfvY5Ra3REMUA==gGksQsKJpEJb8KeT'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});

// in html needs div class of widget
$( function() {
  $( ".widget input[type=submit], .widget a, .widget button" ).button();
  $( "button, input, a" ).on( "click", function( event ) {
    event.preventDefault();
  } );
} );
