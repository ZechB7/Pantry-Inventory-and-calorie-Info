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






