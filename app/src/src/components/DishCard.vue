<template>
  <router-link :to="'/detail/' + dish.id">
    <div class="dish-card">
      <div class="dish-name">
        <h2>{{ dish.name }}</h2>
      </div>

      <div>
        <img class="dish-image" :src="dish.image" alt="" />
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["dish"],
};
</script>

<style scoped>
.dish-card {
  padding: 1px 0px 15px 15px;
  margin: 15px;
  border-radius: 12px;
  background-color: rgb(231, 206, 255);
  max-width: 317px;
}

.dish-image {
  min-width: 300px;
  max-width: 300px;
}

ul {
  list-style-type: "- ";
}
a,
a:visited {
  text-decoration: none;
  color: black;
}
</style>