<template>
  <div id="header" >
    <div class="logo">
      <router-link to="/"
        ><img src="../assets/img/logo.png" alt=""
      /></router-link>
    </div>
    <ul id="nav">
      <li>
        <router-link to="/home">Home</router-link>
      </li>
      <li>
        <router-link to="/what2cook">What to cook</router-link>
      </li>
      <li>
        <router-link to="/random">Random</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
    </ul>
    <div class="search">
      <input
        type="text"
        class="searchTerm"
        placeholder="What are you looking for?"
      />
      <button type="submit" class="searchButton">
        <i class="fa fa-search"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import "../assets/styles/navigation.css";
/* 
#header {
    background-color: rgba(0, 0, 0, 0);
} */

.router-link-exact-active {
    color: limegreen;
}
</style>