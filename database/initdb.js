db = db.getSiblingDB("yourMeal")
db.yourMeal.drop()

db.createCollection("Dishes")
db.createCollection("Photos")
db.createCollection("Ingredients")
db.createCollection("Recipes")

// add some sample data Dishes
db.Dishes.insertMany([
    {
        name: "trung-chien"
    },
    {
        name: "trung-op-la"
    }
])

// add some sample data 

