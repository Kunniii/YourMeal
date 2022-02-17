<template>
  <div>
    <h1>Random Food</h1>
    <button @click="getRandomDish">Get your random dish!</button>
    <DishCard v-show="isFetched" :dish="dish" />
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
        .get("http://bdd3-118-71-27-155.ngrok.io/random/")
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
/* button {
  padding: 15px;
  border-radius: 5px;
  color: black;
  background: aqua;
} */
</style>