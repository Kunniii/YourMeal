<template>
  <div>
    <div class="main">
      <h2>Menus For You</h2>
      <div class="result">
        <ResultCard
          v-for="(dish, index) in this.dishes"
          :key="index"
          :dish="dish"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ResultCard from "@/components/ResultCard.vue";
export default {
  components: {
    ResultCard,
  },
  props: ["dishes"],
};
</script>

<style scoped>
@import '../assets/styles/result.css'
</style>