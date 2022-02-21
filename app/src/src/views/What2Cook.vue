<template>
  <div>
    <h1>What to Cook ?</h1>
    <label for="input-search">Enter some ingredients that you have, seperated by a comma</label>
    <br>
    <input v-model="ingredients" id="input-search" type="text" placeholder="Enter some ingredients seperated by a comma">
    <button @click="fetchDataOnInputChange">Search</button>
    
    <div v-show="show_dishes" class="dish-list">
      <DishCard v-for="dish in dishes" :key="dish.id" :dish=dish />
    </div>

  
  </div>
</template>

<script>
import DishCard from "@/components/DishCard.vue";
import axios from "axios";
export default {
  data: function () {
    return {
      dishes: [],
      new_dishes: [],
      show_dishes: false,
      ingredients: ""
    };
  },

  methods: {
    fetchDataOnInputChange() {
      axios.get('http://localhost:5000/search', {
        headers: { "Content-Type" : "application/json;charset=utf-8" },
        params: {"ingredients": this.ingredients}
      })
      .then((response) => {
        console.log(response.data);
        this.dishes = response.data;
        this.show_dishes = true;
      })
      .catch((error) => {
        console.log(error.response.data);
        this.show_dishes = false;
      })
    }
  },

  mounted: function () {
  },

  components: {
    DishCard,
  },
};
</script>

<style scoped>
#input-search, #input-search:focus {
  min-width: 30%;
  padding: 5px;
  margin: 5px;
  outline: none;
}

button {
  padding: 5px;
}
</style>