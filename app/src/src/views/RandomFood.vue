<template>
  <div>
    <h1>Random Food</h1>
    <DishCard v-show="isFetched" :dish="dish" />
    <button @click="getRandomDish">Get your random dish!</button>
  </div>
</template>

<script>
import DishCard from "@/components/DishCard.vue";
import axios from "axios";
export default {
  data: function () {
    return {
      dish: {},
      isFetched: false,
    };
  },
  mounted: function () {},

  methods: {
    getRandomDish: function () {
      axios
        .get("http://localhost:5000/random/")
        .then((response) => {
          this.dish = response.data;
          this.isFetched = true;
        })
        .catch(
          (error) =>
            (this.dish = {
              name: "Please try again",
              recipe:
                "There was an error getting the dishes! Please try again!",
            })
        );
    },
  },

  components: {
    DishCard,
  },
};
</script>

<style scoped>
button {
  padding: 15px;
  border-radius: 5px;
  color: black;
  background: aqua;
}
</style>