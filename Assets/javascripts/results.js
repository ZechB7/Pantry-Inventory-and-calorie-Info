//still need to work on this page to increase readability 

//when page loads
//https://www.w3schools.com/jquery/event_ready.asp
$("document").ready(function(){
  var result = JSON.parse(localStorage.getItem("recipe")) || [];
  
  var calorieResult = JSON.parse(localStorage.getItem("calories")) || {items: [],};

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
        document.getElementById("errorText").innerHTML = "NO SEARCH RESULT - RECIPE"
      }

      var calories = await fetchCalories(searchInput);
      if (calories.items.length>0){
        localStorage.setItem("calories", JSON.stringify(calories));
        displayCalories(calories);
      } else {
        console.log("NO SEARCH RESULT - CALORIES")
      }
    }
})

// display functions to handle display only

function displayRecipe(result) {
  let resultsContainer = document.getElementById("results-card");
}






        }
        return response.json();
      })
      .then((result) => {
        console.log(result);
        // Store data
        localStorage.setItem("recipe", JSON.stringify(result));
        let resultsContainer = document.getElementById("results-card");
        result.forEach((recipe, i) => {
          if (i < 6) {
            let recipeContainer = document.createElement("div");
            recipeContainer.className =
              "bg-white rounded overflow-hidden shadow-md relative ";
            let recipeTitle = document.createElement("h1");

            let recipeIngredients = document.createElement("p");
            recipeIngredients.className = "py-2";
            let ingredientsList = recipe.ingredients.replaceAll("|", "<br>");
            console.log(ingredientsList);

            let recipeInstruction = document.createElement("p");
            recipeInstruction.className = "py-2";
            let recipeServing = document.createElement("p");
            recipeTitle.innerText = "Title: " + recipe.title;
            recipeIngredients.innerHTML = "Ingredients: <br>" + ingredientsList;

            recipeInstruction.innerHTML = "Recipe: <br>" + recipe.instructions;
            recipeServing.innerHTML = "Serving: " + recipe.servings;
            recipeContainer.appendChild(recipeTitle);
            recipeContainer.appendChild(recipeIngredients);
            recipeContainer.appendChild(recipeInstruction);
            recipeContainer.appendChild(recipeServing);
            resultsContainer.appendChild(recipeContainer);
            // resultsContainer.appendChild(recipeIngredients);
            console.log(recipeIngredients);
          }

        });
        // do something with the result here
        // check if there are no search results the log.
        if (result.length === 0){
          console.log("No Search Results");
          document.getElementById("errorText").innerHTML = "No Search Results";
        } else if (result.length > 0){
          window.location.href = "./results.html";  
        }
      })
      .catch((error) => {
        console.error("Error: ", error);
        // Retrieve data
        const recipe = JSON.parse(localStorage.getItem("recipe")) || [];
        recipe.push(result);

        if (!recipe) {
          console.error("No data in local storage");
        } else {
          console.log(recipe);
          // handle the error here
        }
      });
  }

});



var result = JSON.parse(localStorage.getItem("recipe")) || [];
console.log(result);

// var resultsContainer = document.getElementById("results-card");
result.forEach((recipe, i) => {
  // var result = JSON.parse(localStorage.getItem("recipe")) || [];
  let resultsContainer = document.getElementById("results-card");
  let recipeContainer = document.createElement("div");
  if (i < 6) {
    recipeContainer.className =
      "bg-white rounded overflow-hidden shadow-md relative";



// Working on the below collapse capabilities 

  // let collapseDiv = document.createElement("div")
  // if (collapseDiv) {
  //   collapseDiv.setAttribute("class", "collapse border border-base-300 bg-base-100 rounded-box");
  // }
  // collapseDiv.tabIndex = 0

  
  // let collapseTitle = document.createElement("div")
  // collapseTitle.className = "collapse-title text-xl font-medium";
  // collapseTitle.innerHTML = "Recipe Name: "+ recipe.title + "<br>" + "<br>" + "Ingredients: " + "<br>" + "<br>" + ingredientsList;

  // let collapseContent = document.createElement("div");
  // collapseContent.className = "collapse-content";

  // let instructions = document.createElement("p")
  // instructions.innerHTML = recipe.instructions

  // recipeContainer.appendChild(collapseDiv);
  // collapseDiv.appendChild(collapseTitle);
  // collapseDiv.appendChild(collapseContent);
  // collapseContent.appendChild(instructions);
  // resultsContainer.appendChild(collapseDiv);

  var recipeTit = recipe.title
  recipeTit.className = "text-4xl"

  let recipeTitle = document.createElement("h1");
  recipeTitle.className = 'text-xl'
  let recipeIngredients = document.createElement("p");
  recipeIngredients.className = "text-align-left";
  let recipeButton = document.createElement("button");
  recipeButton.className = " w-full h-full px-4 py-2.5 text-start bg-blue-500 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out collapsible";
  recipeIngredients.className = "py-2";
  let ingredientsList = recipe.ingredients.replaceAll("|", "<br>");
  
  console.log(ingredientsList);
  

  let recipeInstruction = document.createElement("p");
  recipeInstruction.className = "py-2";
  let recipeServing = document.createElement("p");
  recipeButton.innerHTML = recipeTit + " Recipe" + "<br>" + "<br>" + "Ingredients: " + "<br>" + "<br>" + ingredientsList;

  // recipeIngredients.innerHTML = "Ingredients: <br>" + "Ingredients: " +  + ingredientsList;

  recipeInstruction.innerHTML = "Recipe: <br>" + recipe.instructions;
  recipeServing.innerHTML = "Serving: " + recipe.servings;
  recipeContainer.appendChild(recipeButton);
  // recipeContainer.appendChild(recipeIngredients);
  // recipeContainer.appendChild(recipeInstruction);
  // recipeContainer.appendChild(recipeServing);
  resultsContainer.appendChild(recipeContainer);
  // resultsContainer.appendChild(recipeIngredients);
  console.log(recipeIngredients);

  }
});

var calorieResult = JSON.parse(localStorage.getItem("calories")) || {
  items: [],
};
console.log(calorieResult);
if (calorieResult.items.length > 0) {

  console.log(calorieResult.items[0].name);
  console.log(calorieResult.items[0].calories);

  let calorieResultContainer = document.getElementById("calorie-result-container")
  let calorieTitle = document.getElementById("calorie-container-title");
  calorieTitle.innerHTML = "General Calorie Information"
  let calrorieName = document.createElement("p");
  calrorieName.innerText = "Name: " + calorieResult.items[0].name;
  let calrorieNameCalories = document.createElement("p");
  calrorieNameCalories.innerText = "Calories: " + calorieResult.items[0].calories;

  calorieResultContainer.appendChild(calorieTitle);
  calorieResultContainer.appendChild(calrorieName);
  calorieResultContainer.appendChild(calrorieNameCalories);
}



$("#site-search").keypress(function (event) {
  var keycode = event.keyCode ? event.keyCode : event.which;
  if (keycode == "13") {
    event.preventDefault();

    var recipeSearch = $("#site-search").val();

    fetch("https://api.api-ninjas.com/v1/recipe?query=" + recipeSearch, {
      method: "GET",
      headers: { "X-Api-Key": "vxibSWpyKxfvY5Ra3REMUA==gGksQsKJpEJb8KeT" },
      contentType: "application/json",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((result) => {
        console.log(result);
        // Store data
        localStorage.setItem("recipe", JSON.stringify(result));
        let resultsContainer = document.getElementById("results-card");
        result.forEach((recipe, i) => {
          if (i < 6) {
            let recipeContainer = document.createElement("div");
            recipeContainer.className =
              "bg-white rounded overflow-hidden shadow-md relative ";
            let recipeTitle = document.createElement("h1");

            let recipeIngredients = document.createElement("p");
            recipeIngredients.className = "py-2";
            let ingredientsList = recipe.ingredients.replaceAll("|", "<br>");
            console.log(ingredientsList);

            let recipeInstruction = document.createElement("p");
            recipeInstruction.className = "py-2";
            let recipeServing = document.createElement("p");
            recipeTitle.innerText = "Title: " + recipe.title;
            recipeIngredients.innerHTML = "Ingredients: <br>" + ingredientsList;

            recipeInstruction.innerHTML = "Recipe: <br>" + recipe.instructions;
            recipeServing.innerHTML = "Serving: " + recipe.servings;
            recipeContainer.appendChild(recipeTitle);
            recipeContainer.appendChild(recipeIngredients);
            recipeContainer.appendChild(recipeInstruction);
            recipeContainer.appendChild(recipeServing);
            resultsContainer.appendChild(recipeContainer);
            // resultsContainer.appendChild(recipeIngredients);
            console.log(recipeIngredients);
          }

        });
        // do something with the result here
        // check if there are no search results the log.
        if (result.length === 0){
          console.log("No Search Results");
          document.getElementById("errorText").innerHTML = "No Search Results";
        } else if (result.length > 0){
          window.location.href = "./results.html";  
        }
      })
      .catch((error) => {
        console.error("Error: ", error);
        // Retrieve data
        const recipe = JSON.parse(localStorage.getItem("recipe")) || [];
        recipe.push(result);

        if (!recipe) {
          console.error("No data in local storage");
        } else {
          console.log(recipe);
          // handle the error here
        }
      });
  }

});

$("#site-search").keypress(function (event) {
  var keycode = event.keyCode ? event.keyCode : event.which;
  if (keycode == "13") {
    event.preventDefault();

    var calorieSearch = $("#site-search").val();
 
    fetch("https://api.calorieninjas.com/v1/nutrition?query=" + calorieSearch, {
      method: "GET",
      headers: { "X-Api-Key": "SLhnmDL5lMFC68loy3+Uiw==n3FqgMaxOUjrHMUd" },
      contentType: "application/json",
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((calorieResult) => {
      console.log(calorieResult);
      //Store data
      localStorage.setItem("calories", JSON.stringify(calorieResult));
      var calorieResult = JSON.parse(localStorage.getItem("calories")) || {
        items: [],
      };
      console.log(calorieResult);
      if (calorieResult.items.length > 0) {    
        let calorieResultContainer = document.getElementById("calorie-result-container")
        calorieResultContainer.innerHTML = "";
        let calorieTitle = document.getElementById("calorie-container-title");
        calorieTitle.innerHTML = "General Calorie Information";
        let calrorieName = document.createElement("p");
        calrorieName.innerText = "Name: " + calorieResult.items[0].name;
        let calrorieNameCalories = document.createElement("p");
        calrorieNameCalories.innerText = "Calories: " + calorieResult.items[0].calories;
      
        calorieResultContainer.appendChild(calorieTitle);
        calorieResultContainer.appendChild(calrorieName);
        calorieResultContainer.appendChild(calrorieNameCalories);
      }
      window.location.href = "./results.html";
  })
    .catch((error) => {
      console.error("Error: ", error);
    });
  }
});     
