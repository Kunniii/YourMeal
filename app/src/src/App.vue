<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"><img class="img-logo" alt="App logo" src="./assets/logo.png"/></router-link>
      |
      <router-link to="/about">About</router-link>
      |
      <router-link to="/what2cook">What to cook ?</router-link>
      |
      <router-link to="/random">Random Food!!</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
nav {
  height: 20px !important;
}
.img-logo {
  max-width: 2%;

}
</style>
