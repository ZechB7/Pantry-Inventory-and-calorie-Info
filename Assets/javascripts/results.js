
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

  resultsContainer.innerHTML = "";
  result.forEach((recipe, i) => {
    let recipeContainer = document.createElement("div");
    recipeContainer.className =
      "bg-white rounded overflow-hidden shadow-md relative";
      if (i < 6) {

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
    
        recipeInstruction.innerHTML = "Recipe: <br>" + recipe.instructions;
        recipeServing.innerHTML = "Serving: " + recipe.servings;
        recipeContainer.appendChild(recipeButton);
        resultsContainer.appendChild(recipeContainer);
        console.log(recipeIngredients);
    
        }
      });
    }
    function displayCalories(calorieResult) {
      if (calorieResult.items.length > 0) {
        console.log(calorieResult.items[0].name);
        console.log(calorieResult.items[0].calories);
        let calorieResultContainer = document.getElementById("calorie-result-container")
        calorieResultContainer.innerHTML = "";
        
        let calorieTitle = document.createElement("h4");
        calorieTitle.className = "font-bold mt-12 pb-2 border-b border-gray-200";
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






//         }
//         return response.json();
//       })
//       .then((result) => {
//         console.log(result);
//         // Store data
//         localStorage.setItem("recipe", JSON.stringify(result));
//         let resultsContainer = document.getElementById("results-card");
//         result.forEach((recipe, i) => {
//           if (i < 6) {
//             let recipeContainer = document.createElement("div");
//             recipeContainer.className =
//               "bg-white rounded overflow-hidden shadow-md relative ";
//             let recipeTitle = document.createElement("h1");

//             let recipeIngredients = document.createElement("p");
//             recipeIngredients.className = "py-2";
//             let ingredientsList = recipe.ingredients.replaceAll("|", "<br>");
//             console.log(ingredientsList);

//             let recipeInstruction = document.createElement("p");
//             recipeInstruction.className = "py-2";
//             let recipeServing = document.createElement("p");
//             recipeTitle.innerText = "Title: " + recipe.title;
//             recipeIngredients.innerHTML = "Ingredients: <br>" + ingredientsList;

//             recipeInstruction.innerHTML = "Recipe: <br>" + recipe.instructions;
//             recipeServing.innerHTML = "Serving: " + recipe.servings;
//             recipeContainer.appendChild(recipeTitle);
//             recipeContainer.appendChild(recipeIngredients);
//             recipeContainer.appendChild(recipeInstruction);
//             recipeContainer.appendChild(recipeServing);
//             resultsContainer.appendChild(recipeContainer);
//             // resultsContainer.appendChild(recipeIngredients);
//             console.log(recipeIngredients);
//           }

//         });
//         // do something with the result here
//         // check if there are no search results the log.
//         if (result.length === 0){
//           console.log("No Search Results");
//           document.getElementById("errorText").innerHTML = "No Search Results";
//         } else if (result.length > 0){
//           window.location.href = "./results.html";  
//         }
//       })
//       .catch((error) => {
//         console.error("Error: ", error);
//         // Retrieve data
//         const recipe = JSON.parse(localStorage.getItem("recipe")) || [];
//         recipe.push(result);

//         if (!recipe) {
//           console.error("No data in local storage");
//         } else {
//           console.log(recipe);
//           // handle the error here
//         }
//       });
//   }

// });



// var result = JSON.parse(localStorage.getItem("recipe")) || [];
// console.log(result);

    // let recipeTitle = document.createElement("h1");

//     let recipeTitle = document.createElement("h1");

//     let recipeIngredients = document.createElement("p");
//     recipeIngredients.className = "py-2";
//     let ingredientsList = recipe.ingredients.replaceAll("|", "<br>");
//     console.log(ingredientsList);

//     let recipeInstruction = document.createElement("p");
//     recipeInstruction.className = "py-2";
//     let recipeServing = document.createElement("p");
//     recipeTitle.innerText = "Title: " + recipe.title;
//     recipeIngredients.innerHTML = "Ingredients: <br>" + ingredientsList;

//     recipeInstruction.innerHTML = "Recipe: <br>" + recipe.instructions;
//     recipeServing.innerHTML = "Serving: " + recipe.servings;
//     recipeContainer.appendChild(recipeTitle);
//     recipeContainer.appendChild(recipeIngredients);
//     recipeContainer.appendChild(recipeInstruction);
//     recipeContainer.appendChild(recipeServing);
//     resultsContainer.appendChild(recipeContainer);
//     console.log(recipeIngredients);
//   }
// });

// var calorieResult = JSON.parse(localStorage.getItem("calories")) || [];
// console.log(calorieResult);
// var name = items.name;
// console.log(name);

//   calorieResultContainer.appendChild(calorieTitle);
//   calorieResultContainer.appendChild(calrorieName);
//   calorieResultContainer.appendChild(calrorieNameCalories);
// }


// $("#site-search").keypress(function (event) {
//   var keycode = event.keyCode ? event.keyCode : event.which;
//   if (keycode == "13") {
//     event.preventDefault();

//     var recipeSearch = $("#site-search").val();

//     fetch("https://api.api-ninjas.com/v1/recipe?query=" + recipeSearch, {
//       method: "GET",
//       headers: { "X-Api-Key": "vxibSWpyKxfvY5Ra3REMUA==gGksQsKJpEJb8KeT" },
//       contentType: "application/json",
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(response.statusText);
//         }
//         return response.json();
//       })
//       .then((result) => {
//         console.log(result);
//         // Store data
//         localStorage.setItem("recipe", JSON.stringify(result));
//         let resultsContainer = document.getElementById("results-card");
//         result.forEach((recipe, i) => {
//           if (i < 6) {
//             let recipeContainer = document.createElement("div");
//             recipeContainer.className =
//               "bg-white rounded overflow-hidden shadow-md relative ";
//             let recipeTitle = document.createElement("h1");

//             let recipeIngredients = document.createElement("p");
//             recipeIngredients.className = "py-2";
//             let ingredientsList = recipe.ingredients.replaceAll("|", "<br>");
//             console.log(ingredientsList);

//             let recipeInstruction = document.createElement("p");
//             recipeInstruction.className = "py-2";
//             let recipeServing = document.createElement("p");
//             recipeTitle.innerText = "Title: " + recipe.title;
//             recipeIngredients.innerHTML = "Ingredients: <br>" + ingredientsList;

//             recipeInstruction.innerHTML = "Recipe: <br>" + recipe.instructions;
//             recipeServing.innerHTML = "Serving: " + recipe.servings;
//             recipeContainer.appendChild(recipeTitle);
//             recipeContainer.appendChild(recipeIngredients);
//             recipeContainer.appendChild(recipeInstruction);
//             recipeContainer.appendChild(recipeServing);
//             resultsContainer.appendChild(recipeContainer);
//             // resultsContainer.appendChild(recipeIngredients);
//             console.log(recipeIngredients);
//           }

//         });
//         // do something with the result here
//         // check if there are no search results the log.
//         if (result.length === 0){
//           console.log("No Search Results");
//           document.getElementById("errorText").innerHTML = "No Search Results";
//         } else if (result.length > 0){
//           window.location.href = "./results.html";  
//         }
//       })
//       .catch((error) => {
//         console.error("Error: ", error);
//         // Retrieve data
//         const recipe = JSON.parse(localStorage.getItem("recipe")) || [];
//         recipe.push(result);

//         if (!recipe) {
//           console.error("No data in local storage");
//         } else {
//           console.log(recipe);
//           // handle the error here
//         }
//       });
//   }

// });

// $("#site-search").keypress(function (event) {
//   var keycode = event.keyCode ? event.keyCode : event.which;
//   if (keycode == "13") {
//     event.preventDefault();

//             let recipeInstruction = document.createElement("p");
//             recipeInstruction.className = "py-2";
//             let recipeServing = document.createElement("p");
//             recipeTitle.innerText = "Title: " + recipe.title;
//             recipeIngredients.innerHTML = "Ingredients: <br>" + ingredientsList;

//             recipeInstruction.innerHTML = "Recipe: <br>" + recipe.instructions;
//             recipeServing.innerHTML = "Serving: " + recipe.servings;
//             recipeContainer.appendChild(recipeTitle);
//             recipeContainer.appendChild(recipeIngredients);
//             recipeContainer.appendChild(recipeInstruction);
//             recipeContainer.appendChild(recipeServing);
//             resultsContainer.appendChild(recipeContainer);
//             // resultsContainer.appendChild(recipeIngredients);
//             console.log(recipeIngredients);
//           }
//         });
//         // do something with the result here
//         window.location.href = "../../results.html";
//       })
//       .catch((error) => {
//         console.error("Error: ", error);
//         // Retrieve data
//         const recipe = JSON.parse(localStorage.getItem("recipe")) || [];
//         recipe.push(result);

        if (!recipe) {
          console.error("No data in local storage");
        } else {
          console.log(recipe);
          // handle the error here
        }
      });
  }
});
