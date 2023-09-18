<template>
  <div>
    <div class="main">
      <h2>Random for You</h2>
      <div class="item-food">
        <DishCard v-show="isFetched" :dish=dish />
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
          <a href="home.html">Home</a>
          <a href="input.html">Input</a>
          <a href="random.html">Random</a>
          <a href="about.html">About us</a>
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
import DishCard from "@/components/DishCard.vue";
import axios from "axios";
export default {
  data: function () {
    return {
      dish: {},
      isFetched: false,
    };
  },
  mounted: function () {
    this.getRandomDish();
  },

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
@import "../assets/styles/random.css";
</style>