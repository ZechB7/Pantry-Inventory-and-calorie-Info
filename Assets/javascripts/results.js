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
    
  

  let recipeTitle = document.createElement("h1");

  let recipeIngredients = document.createElement("p");
  recipeIngredients.className = "text-align-left";
  let recipeButton = document.createElement("button");
  recipeButton.className = " px-4 py-2.5 bg-blue-500 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out collapsible";
  recipeIngredients.className = "py-2";
  let ingredientsList = recipe.ingredients.replaceAll("|", "<li>");
  
  console.log(ingredientsList);
  let collapseDiv = document.createElement("div")

  let recipeInstruction = document.createElement("p");
  recipeInstruction.className = "py-2";
  let recipeServing = document.createElement("p");
  recipeButton.innerHTML = recipe.title + " Recipe" + "<br>" + "<br>" + ingredientsList;

  recipeIngredients.innerHTML = "Ingredients: <br>" + ingredientsList;

  recipeInstruction.innerHTML = "Recipe: <br>" + recipe.instructions;
  recipeServing.innerHTML = "Serving: " + recipe.servings;
  recipeContainer.appendChild(recipeButton);
  recipeContainer.appendChild(recipeIngredients);
  recipeContainer.appendChild(recipeInstruction);
  recipeContainer.appendChild(recipeServing);
  resultsContainer.appendChild(recipeContainer);
  // resultsContainer.appendChild(recipeIngredients);
  console.log(recipeIngredients);
  }
});

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