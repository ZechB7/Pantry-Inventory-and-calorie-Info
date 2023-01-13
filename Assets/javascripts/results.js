fetch("https://api.api-ninjas.com/v1/recipe?query=" + recipeSearch, {
  method: "GET",
  headers: { "X-Api-Key": "vxibSWpyKxfvY5Ra3REMUA==gGksQsKJpEJb8KeT" },
  contentType: "application/json",
}).then((result) => {
  console.log(result);
  // Store data
  localStorage.setItem("recipe", JSON.stringify(result));
  // do something with the result here
  let resultsContainer = document.getElementById("results-container");
  result.forEach((recipe) => {
    let recipeContainer = document.createElement("div");
    let recipeTitle = document.createElement("h2");
    recipeTitle.innerText = recipe.title;
    recipeContainer.appendChild(recipeTitle);
    resultsContainer.appendChild(recipeContainer);
  });
});
