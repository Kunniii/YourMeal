spawnNewObject = function (e) {
    /**
     * div
     *      h4
     *      p
     *      p
     *      img
     * /div
     */
    console.log("Spawn : " + e.name);

    let name = document.createElement("h4");
    name.innerHTML = e.name + '';
    let ingredients = document.createElement("p");
    ingredients.innerHTML = e.ingredients;
    let recipe = document.createElement("p");
    recipe.innerHTML = e.recipe;

    let image = document.createElement("img");
    image.src = e.image




    let container = document.createElement("div")
    container.innerHTML = name.innerText + "<br>" + ingredients.innerText + "<br>" + recipe.innerText + " <br> " + image.outerHTML + "<hr>";

    console.log(image);

    $('#data-container').append(container)
}