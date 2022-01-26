<template>
  <div>
    <div>
      
      <div class="dish-name">
        {{ dish.name }}
      </div>

      <div class="dish-recipe">
        {{ dish.recipe }}
      </div>
      
      <hr>
    
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      dish: {}
    }
  },
  props:[
    "dish"
  ]
};
</script>

<style>
</style>