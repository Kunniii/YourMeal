<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/what2cook">What to cook ?</router-link>
      <router-link to="/random">Random Food!!</router-link>
      <!-- <router-link style="display:none" to="/detail/">Detail</router-link> -->
    </nav>
    <keep-alive include="What2Cook, RandomFood">
      <router-view />
    </keep-alive>
  </div>
</template>

<style scoped>

nav {
  /* color: rgb(86, 245, 86); */
  /* text-decoration: none; */
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  /* font-size: 1.5rem; */
  padding: auto;
  margin: auto;
}

nav {
  height: 30px;
  min-width: 100vw;
  display: flex;
  justify-content: space-around;
}

.img-logo {
  max-width: 30px;
  margin-top: auto;
  margin-bottom: auto;
}
</style>
