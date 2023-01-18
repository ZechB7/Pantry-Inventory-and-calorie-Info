//https://duncan-mcardle.medium.com/solid-principle-1-single-responsibility-javascript-5d9ce2c6f4a5
//intention of this helper script is to create handle fetch function only page (SOLID)
//https://blog.bitsrc.io/refactoring-javascript-5-common-problems-to-look-out-for-and-how-to-fix-them-8c79f76b6abc
//spread responsibility, make it easier to maintain
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await
//async and await

const RECIPE_API_KEY = "vxibSWpyKxfvY5Ra3REMUA==gGksQsKJpEJb8KeT";
const NUTRITION_API_KEY = "SLhnmDL5lMFC68loy3+Uiw==n3FqgMaxOUjrHMUd";

async function fetchRecipe(searchInput) {
  let result = [];
  await fetch("https://api.api-ninjas.com/v1/recipe?query=" + searchInput, {
    method: "GET",
    headers: { "X-Api-Key": RECIPE_API_KEY },
    contentType: "application/json",
  })
    .then((response) => { 
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((responseJson) => {
      console.log(responseJson);
      result = responseJson;
    })
    .catch((error) => {
      console.error("In fetchRecipe, Error: ", error);
    });
  return result;
}

async function fetchCalories(searchInput) {
  let result = [];

  await fetch(
    "https://api.calorieninjas.com/v1/nutrition?query=" + searchInput,
    {
      method: "GET",
      headers: { "X-Api-Key": NUTRITION_API_KEY },
      contentType: "application/json",
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((responseJson) => {
      console.log(responseJson);
      result = responseJson;
    })
    .catch((error) => {
      console.error("In fetchCalories, Error: ", error);
    });
  return result;
}
