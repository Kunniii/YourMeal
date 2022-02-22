<template>
  <div>
    <div class="main">
      <div class="input-content">
        <div class="font-chu-bu-to-dep">
          <h1>Enter your ingredients</h1>
        </div>
        <div class="search-wrapper">
          <input
            v-model="ingredients"
            type="text"
            required
            class="search-box"
            placeholder="Enter your ingredients"
          />
          <button class="button-reset" @click="fetchDataOnInputChange">
            Search
          </button>
        </div>
      </div>
      <br />
      <div v-show="show_dishes" class="dish-list">
        <SearchResult :dishes="dishes" />
      </div>
    </div>
  </div>
</template>

<script>
import SearchResult from "@/components/SearchResult.vue";
import axios from "axios";
export default {
  data: function () {
    return {
      dishes: [],
      new_dishes: [],
      show_dishes: false,
      ingredients: "",
    };
  },

  methods: {
    fetchDataOnInputChange() {
      axios
        .get("http://localhost:5000/search", {
          headers: { "Content-Type": "application/json;charset=utf-8" },
          params: { ingredients: this.ingredients },
        })
        .then((response) => {
          console.log(response.data);
          this.dishes = response.data;
          this.show_dishes = true;
        })
        .catch((error) => {
          console.log(error.response.data);
          this.show_dishes = false;
        });
    },
  },

  mounted: function () {},

  components: {
    SearchResult,
  },
};
</script>

<style scoped>
@import "../assets/styles/input.css";

.font-chu-bu-to-dep {
  padding: 10px;
  background-color: rgba(0, 99, 53, 0.548);
}
.button-reset {
  padding: 20px;
  margin-left: 5px;
  text-align: center;
  border-radius: 10px;
  border: none;
  width: 10vw;
  background-color: orange;
  font-family: Quicksand;
}
.button-reset:hover {
  box-shadow: 0 0 5px 2px #000000;
  transition: 300ms;
  font-weight: bold;
}
</style>