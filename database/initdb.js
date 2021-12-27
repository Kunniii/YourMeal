db = db.getSiblingDB("yourMeal")
db.yourMeal.drop()

db.createCollection("Dishes")
db.createCollection("Photos")
db.createCollection("Ingredients")
db.createCollection("Recipes")

// add some sample data
db.Dishes.insertMany([
    {
        name: "trung-chien",
        ingredients: [1, 2, 3, 4, 5, 6, 7]
    },
    {
        name: "trung-op-la",
        ingredients: [1, 2, 3, 4, 5, 6]
    }
])
