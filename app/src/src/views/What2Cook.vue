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
      <SearchResult v-show="show_dishes" :dishes="dishes" />
      <NotFoundCard v-show="no_dishes"/>
      </div>
    </div>
    <footer>
      <div class="top_header">
        <section>
          <span><i class="fa fa-map-marker"></i></span>
          <span
            >Cầu Rau Răm, đường Nguyễn Văn Cừ nối dài, An Bình, Ninh Kiều, Cần
            Thơ 900000</span
          >
        </section>
        <section>
          <span><i class="fa fa-phone"></i></span>
          <span>(+84) 123456789</span>
        </section>
        <section>
          <span><i class="fa fa-envelope"></i></span>
          <span>yourmeal@gmail.com</span>
        </section>
      </div>
      <span class="border-shape"></span>
      <div class="bottom_content">
        <section>
          <a href="/home">Home</a>
          <a href="/what2cook">Input</a>
          <a href="/random">Random</a>
          <a href="/about">About us</a>
        </section>
        <section>
          <a href="#"><i class="fab fa-facebook"></i></a>
          <a href="#"><i class="fab fa-instagram-square"></i></a>
          <a href="#"><i class="fab fa-github"></i></a>
          <a href="#"><i class="fab fa-twitter-square"></i></a>
        </section>
      </div>
      <div class="copyright">
        Copyright © 2022 YourMeal - All rights reserved
      </div>
    </footer>
  </div>
</template>

<script>
import SearchResult from "@/components/SearchResult.vue";
import NotFoundCard from "@/components/NotFoundCard.vue";
import axios from "axios";
export default {
  data: function () {
    return {
      dishes: [],
      new_dishes: [],
      show_dishes: false,
      no_dishes: false,
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
          this.dishes = response.data;
          if (this.dishes.length > 0) {
            this.show_dishes = true;
            this.no_dishes = false;
          } else {
            this.no_dishes = true;
            this.show_dishes = false;
          }
        })
        .catch((error) => {
          console.log(error);
          this.show_dishes = false;
          this.no_dishes = true;
        });
    },
  },

  mounted: function () {},

  components: {
    SearchResult,
    NotFoundCard
  },
  async created() {
    window.addEventListener("keydown", (e) => {
      if (e.key == "Enter") {
        this.fetchDataOnInputChange();
      }
    });
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
  padding: 14px 10px;
  margin-left: 5px;
  text-align: center;
  border-radius: 10px;
  border: none;
  width: 10vw;
  background-color: orange;
  font-family: Quicksand;
  font-size: 25px;
}
.button-reset:hover {
  box-shadow: 0 0 5px 2px #ffffff;
  transition: 300ms;
  font-weight: bold;
  background-color: orange;
  color: #fff;
}
</style>