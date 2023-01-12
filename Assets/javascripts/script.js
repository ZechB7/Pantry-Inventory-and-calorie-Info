// input for recipe and ingredients get
var query = "text"
// document.getElementById("search-bar").value
// var searchFormEl = document.querySelector('#search-form');

// function handleSearchFormSubmit(event) {
//   event.preventDefault();

//   var searchInputVal = document.querySelector('#search-input').value;
//   if (!searchInputVal) {
//     console.error('You need a search input value!');
//     return;
//   }

//   var queryString = './search-results.html?q=' + searchInputVal + '&format=' + formatInputVal;

//   location.assign(queryString);
// }

// searchFormEl.addEventListener('click', handleSearchFormSubmit);


// recipe and ingredients get
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/recipe?query=' + 'taco',
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
// $( function() {
//   $( ".widget input[type=submit], .widget a, .widget button" ).button();
//   $( "button, input, a" ).on( "click", function( event ) {
//     event.preventDefault();
//   } );
// } );
