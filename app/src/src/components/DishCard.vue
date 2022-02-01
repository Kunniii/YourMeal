<template>
  <div class="dish-card">
    <div class="dish-name">
      <h2>{{ dish.name }}</h2>
    </div>

    <div>
      <img class="dish-image" :src="dish.image" alt="" />
    </div>
    <div class="dish-recipe">
      {{ dish.recipe }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["dish"],
};
</script>

<style scoped>
.dish-card {
  max-width: 75vw;
}

.dish-image {
  min-width: 300px;
  max-width: 300px;
}
</style>