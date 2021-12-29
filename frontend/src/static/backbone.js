spawnNewCard = function (data, element) {

    let name = document.createElement("h4");
    name.setAttribute("class", "card-title");
    name.innerHTML = data.name.replaceAll("\n", " ").replaceAll(",", ", ")

    let ingredients = document.createElement("p");
    ingredients.setAttribute("class", "card-text custom-card-text");
    ingredients.innerHTML = data.ingredients.join(", ").replaceAll(",", ", ").replaceAll("\n", " ");

    let image = document.createElement("img");
    image.setAttribute("class", "card-img-top custom-card-img")
    image.src = data.image
    
    let see_more_button = document.createElement("a")
    see_more_button.setAttribute("class", "btn btn-primary")
    see_more_button.innerHTML = "View Recipe"
    see_more_button.href = "/recipe/dish/"+data.name
    
    let container_body = document.createElement("div")
    container_body.setAttribute("class", "card-block px-2")
    container_body.innerHTML = name.outerHTML + "<br>" + ingredients.outerHTML + "<br>" +see_more_button.outerHTML;
    
    let container_image = document.createElement("div")
    container_image.setAttribute("class", "card-header border-0")
    container_image.innerHTML = image.outerHTML

    let container = document.createElement("div")
    container.setAttribute("class", "card custom-dish-card flex-row flex-wrap")
    container.innerHTML =  container_image.outerHTML + container_body.outerHTML;

    element.append(container)
}

showRecipe = function(data) {
    let image = document.createElement("img");
    image.src = data.image

    let name = document.createElement("h2");
    name.innerHTML = data.name.replaceAll("\n", " ").replaceAll(",", ", ")

    let ingredients = document.createElement("p");
    ingredients.innerHTML = data.ingredients.join(", ").replaceAll(",", ", ").replaceAll("\n", " ");

    let recipe = document.createElement("p");
    recipe.innerHTML = data.recipe.replaceAll(",", ", ").replaceAll("\n", "</p><p>")
    
    $('#data-container-head').append(name);
    $('#data-container-head').append(image);
    $('#ingredients-container').append(ingredients);
    $('#recipe-container').append(recipe);

    // let container_body = document.createElement("div")
    // container_body.innerHTML = name.outerHTML + "<br>" + ingredients.outerHTML + "<br>" +see_more_button.outerHTML;
    
    // let container_image = document.createElement("div")
    // container_image.innerHTML = image.outerHTML

    // let container = document.createElement("div")
    // container.innerHTML =  container_image.outerHTML + container_body.outerHTML;
}