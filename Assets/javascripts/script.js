//click seach button (async)
$("#search-button").click(async function (e) {
  e.preventDefault();
  var searchInput = $("#search-bar").val();
  var recipe = $("#search-bar").val();
  if (recipe.length > 0) {
    // Store data
    localStorage.setItem("recipe", JSON.stringify(recipe));
  } else {
    console.log("No Search Results");
    document.getElementById("errorText").innerHTML = "No Search Results";
  }
  var calories = await fetchCalories(searchInput);
  if (calories.items.length > 0) {
    localStorage.setItem("calories", JSON.stringify(calories));
  } else {
    console.log("No Search Results");
  }

  window.location.href = "./results.html";
});
