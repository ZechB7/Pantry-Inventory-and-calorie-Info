var result = JSON.parse(localStorage.getItem("recipe")) || [];

let resultsContainer = document.getElementById("results-container");
result.forEach((recipe) => {
  let recipeContainer = document.createElement("div");
  let recipeTitle = document.createElement("h2");
  recipeTitle.innerText = recipe.title;
  recipeContainer.appendChild(recipeTitle);
  resultsContainer.appendChild(recipeContainer);
});
