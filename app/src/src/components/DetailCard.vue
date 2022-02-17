<template>
   <div class="dish-card">

    <div class="dish-name">
        <h2>{{ dish.name }}</h2>
    </div>

    <div>
      <img class="dish-image" :src="dish.image" alt="" />
    </div>

    <div class="more-info">

      <div class="ingredients-list">
        <h3>Ingredients</h3>
        <div class="ingredients">
          <ul>
            <li v-for="(ingredient, index) in dish.ingredients" :key="index">
              {{ ingredient }}
            </li>
          </ul>
        </div>
      </div>

      <div class="dish-recipe">
        <h3>Prepare Steps</h3>
        <div class="prepare">
          <ul type="-">
            <li v-for="(step, index) in dish.prepare_steps" :key="index">
              {{ step }}
            </li>
          </ul>
        </div>
      </div>
      
      <div class="cook">
        <h3>Cooking Steps</h3>
        <ol type="">
          <li id="cook_step" v-for="(step, index) in dish.cook_steps" :key="index">
            {{ step }}
          </li>
        </ol>
      </div>

    </div>

  </div>
</template>

<script>
export default {
    props: [
        "dish"
    ]
}
</script>

<style>

</style>