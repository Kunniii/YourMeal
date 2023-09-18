<template>
  <div class="item-food">
    <div class="image"><img :src="dish.image" alt="" /></div>
    <div class="item-content">
      <h3>{{ dish.name }}</h3>
      <router-link class="button" :to="'/detail/' + dish.id">
        View Detail
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["dish"],
};
</script>

<style scoped>
@import "../assets/styles/resultcard.css";
</style>