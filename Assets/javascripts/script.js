//Recipe api ninja key = vxibSWpyKxfvY5Ra3REMUA==gGksQsKJpEJb8KeT

//button function
$("#search-button").click(function (e) {
  e.preventDefault();
  var recipeSearch = $("#search-bar").val();

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
    })});



//     fetch("https://api.api-ninjas.com/v1/recipe?query=" + recipeSearch, {
//   method: "GET",
//   headers: { "X-Api-Key": "vxibSWpyKxfvY5Ra3REMUA==gGksQsKJpEJb8KeT" },
//   contentType: "application/json",
// })
// .then((result) => {
//   console.log(result);
//   // Store data
//   localStorage.setItem("recipe", JSON.stringify(result));
//   // do something with the result here
//   let resultsContainer = document.getElementById("results-container");
//   result.forEach((recipe) => {
//     let recipeContainer = document.createElement("div");
//     let recipeTitle = document.createElement("h2");
//     recipeTitle.innerText = recipe.title;
//     recipeContainer.appendChild(recipeTitle);
//     resultsContainer.appendChild(recipeContainer);
//   });
// });

