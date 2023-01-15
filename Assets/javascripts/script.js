//Recipe api ninja key = vxibSWpyKxfvY5Ra3REMUA==gGksQsKJpEJb8KeT
//CarolieNinjas api key = SLhnmDL5lMFC68loy3+Uiw==n3FqgMaxOUjrHMUd;
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

      // window.location.href = "./results.html";

      
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

  var calorieSearch = $("#search-bar").val();
  
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

        // Store data
        localStorage.setItem("calories", JSON.stringify(calorieResult));
        window.location.href = "./results.html";
      })
      .catch((error) => {
        console.error("Error: ", error);
        // Retrieve data
        const calorie = JSON.parse(localStorage.getItem("calories")) || [];
        calorie.push(result);

        if (!recipe) {
          console.error("No data in local storage");
        } else {
          console.log(recipe);
          //       // handle the error here
        }
      });
});
