
//still need to work on this page to increase readability 

//when page loads
//https://www.w3schools.com/jquery/event_ready.asp
$("document").ready(function(){
  var result = JSON.parse(localStorage.getItem("recipe")) || [];
  displayRecipe(result);
  
  var calorieResult = JSON.parse(localStorage.getItem("calories")) || {items: [],};
  displayCalories(calorieResult);
})

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await
//enable to re-search again on result page, this keypress fucntion is for search only.
$("#site-search").keypress(async function (event) {
  var keycode = event.keyCode ? event.keyCode : event.which;
  if (keycode === 13) {
    event.preventDefault();
    var searchInput = $("#site-search").val();

    var recipe = await fetchRecipe(searchInput);
      if (recipe.length > 0){
        localStorage.setItem("recipe", JSON.stringify(recipe));
        displayRecipe(recipe);
      } else {
        console.log("NO SEARCH RESULT - RECIPE")
        document.getElementById("errorText").innerHTML = "No search result found for that recipe!"
        setTimeout(() => {
          document.location.reload();
        }, 1000);

      }

      var calories = await fetchCalories(searchInput);
      if (calories.items.length>0){
        localStorage.setItem("calories", JSON.stringify(calories));
        displayCalories(calories);
      } else {
        console.log("NO SEARCH RESULT - CALORIES")
        document.getElementById("errorText").innerHTML = "No search result found for that recipe amount of calories!"
        setTimeout(() => {
          document.location.reload();
        }, 1000);
      }
    }
})

// display functions to handle display only

function displayRecipe(result) {
  let resultsContainer = document.getElementById("results-card");

  resultsContainer.innerHTML = "";
  result.forEach((recipe, i) => {
    let recipeContainer = document.createElement("div");
    let ingredientsList = recipe.ingredients.replaceAll("|", "<br>");
    let titleRecipe = recipe.title;
    titleRecipe.className = "text-2xl"
    // recipeContainer.className =
    //   "bg-white rounded overflow-hidden shadow-md relative";
      if (i < 6) {
        recipeContainer.innerHTML = 
        '<p class="md:space-x-1 space-y-1 md:space-y-0 mb-4">' +
        '<a class="w-full h-50 inline-block px-6 py-2.5 bg-gray-200 text-black font-medium text-2xl leading-tight rounded shadow-md hover:bg-gray-400 hover:shadow-lg focus:bg-gray-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-250 ease-in-out" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">' + titleRecipe +
        '</a>' + "</p>" + 
        '<div class="collapse" id="collapseExample">' + 
        '<div class="block p-6 rounded-lg shadow-lg bg-white text-md">' +
         "Ingredients: " + "<br>" + "<br>" + ingredientsList + "<br>" + "<br>" + "How to cook! "+ "<br>" + "<br>"+ recipe.instructions +
        '</div>' +
        '</div>' 
        }
        resultsContainer.appendChild(recipeContainer);
      });
    }
    function displayCalories(calorieResult) {
      if (calorieResult.items.length > 0) {
        console.log(calorieResult.items[0].name);
        console.log(calorieResult.items[0].calories);
        let calorieResultContainer = document.getElementById("calorie-result-container")
        calorieResultContainer.innerHTML = "";
        
        let calorieTitle = document.createElement("h4");
        calorieTitle.className = "font-bold mt-12 pb-2 border-b border-gray-200 text-2xl";
        calorieTitle.innerHTML = "General Calorie Information"
        let calrorieName = document.createElement("p");
        calrorieName.innerText = "Name: " + calorieResult.items[0].name;
        let calrorieNameCalories = document.createElement("p");
        calrorieNameCalories.innerText = "Calories: " + calorieResult.items[0].calories;
      
        calorieResultContainer.appendChild(calorieTitle);
        calorieResultContainer.appendChild(calrorieName);
        calorieResultContainer.appendChild(calrorieNameCalories);
      }
    }