<template>
  <div class="dish-card">
    <div class="dish-name">
      <h2>{{ dish.name }}</h2>
    </div>

    <div>
      <img class="dish-image" :src="dish.image" alt="" />
    </div>
    <h3>Prepare Steps</h3>
    <div class="dish-recipe">
      <div class="prepare">
        <ul type="-">
          <li v-for="step in dish.prepare_steps" :key="step">
            {{ step }}
          </li>
        </ul>
      </div>
    </div>
    <h3>Cooking Steps</h3>
    <div class="cook">
      <ol type="">
        <li id="cook_step" v-for="step in dish.cook_steps" :key="step">
          {{ step }}
        </li>
      </ol>
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

ul {
  list-style-type: "- ";
}
</style>