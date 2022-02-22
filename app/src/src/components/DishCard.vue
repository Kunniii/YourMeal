<template>
  <div class="dish-card">
    <!-- img -->
    <div class="image">
      <img :src="dish.image" alt="" />
    </div>

    <!-- content -->
    <div class="item-content">
      <h3>{{ dish.name }}</h3>
      <!-- <div class="item-description">
        <p>
          {{ dish.ingredients.join(', ') }}
        </p>
      </div> -->
    </div>

    <!-- button -->
    <router-link class="button"  :to="'/detail/' + dish.id"> View Detail </router-link>
  </div>
</template>

<script>
export default {
  props: ["dish"],
};
</script>

<style scoped>
@import "../assets/styles/dishcard.css";
</style>