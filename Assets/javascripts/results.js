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
        window.location.href = "../../results.html";
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
      window.location.href = "../../results.html";
  })
    .catch((error) => {
      console.error("Error: ", error);
    });
  }
});


       