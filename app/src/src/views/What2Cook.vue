<template>
  <div>
    <h1>What to Cook ?</h1>
    <DishCard v-for="dish in dishes" :key="dish.id" :dish=dish />
  </div>
</template>

<script>
import DishCard from "@/components/DishCard.vue";
import axios from "axios";
export default {
  data: function () {
    return {
      dishes: [],
    };
  },

  mounted: function () {
    axios
      .get("http://localhost:5000/dishes/")
      .then((response) => (this.dishes = response.data))
      .catch((error) => console.log(error));
  },

  components: {
    DishCard,
  },
};
</script>

<style>
</style>