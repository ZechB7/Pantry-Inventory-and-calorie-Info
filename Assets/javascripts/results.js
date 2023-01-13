var result = JSON.parse(localStorage.getItem("recipe")) || [];
console.log(result);
let resultsContainer = document.getElementById("results-card");
result.forEach((recipe) => {
  let recipeContainer = document.createElement("div");
  recipeContainer.className = "bg-white rounded overflow-hidden shadow-md relative"
  let recipeTitle = document.createElement("h1");
  let recipeIngredients = document.createElement("p");
  recipeTitle.innerText = recipe.title;
  recipeIngredients.innerHTML = recipe.ingredients
  recipeContainer.appendChild(recipeTitle);
  recipeContainer.appendChild(recipeIngredients);
  resultsContainer.appendChild(recipeContainer);
  // resultsContainer.appendChild(recipeIngredients);
  console.log(recipeIngredients);
});

$("#search-button").click(function (e) {
  e.preventDefault();
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
      // do something with the result here
      // window.location.href = "./results.html";
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
});