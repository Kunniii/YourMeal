<template>
  <div id="app">
    <div id="main">
      <div class="slide-show">
        <div class="slider">
          <div class="slides">
            <div id="slide-1"><img src="../assets/img/1.png" alt="" /></div>
            <div id="slide-2"><img src="../assets/img/2.png" alt="" /></div>
            <div id="slide-3"><img src="../assets/img/3.png" alt="" /></div>
            <div id="slide-4"><img src="../assets/img/4.png" alt="" /></div>
            <div id="slide-5"><img src="../assets/img/5.png" alt="" /></div>
          </div>
          <a href="#slide-1"></a>
          <a href="#slide-2"></a>
          <a href="#slide-3"></a>
          <a href="#slide-4"></a>
          <a href="#slide-5"></a>
        </div>
      </div>
      <div class="home-content">
        <div class="home-content-first">
          <div class="home-content-left">
            <img src="../assets/img/h1.png" alt="" />
          </div>
          <div class="home-content-right">
            <div class="home-title">
              <h2>Welcome to YourMeal</h2>
              <h3>GET YOUR DISHES</h3>
            </div>
            <div class="home-description">
              <p>
                Nowadays, time has become a luxury for modern people. 3 meals a
                day, 7 days a week, 30 days a month, thinking about food becomes
                a difficult problem for anyone. YourMeal will be what will
                answer your questions. YourMeal will provide dishes based on the
                ingredients you have available. Helps you quickly get a simple
                recipe, detailed instructions for your dish.
              </p>
            </div>
          </div>
        </div>
        <div class="home-content-second">
          <div class="home-content-left">
            <div class="home-title">
              <h2>Welcome to YourMeal</h2>
              <h3>SOMETHING NEW</h3>
            </div>
            <div class="home-description">
              <p>
                If the dishes with basic ingredients are too boring, you are too
                tired of the dishes that have been eaten over and over again.
                This will be the one for you. You will be suggested a random
                dish guaranteed to bring new flavours to your family.
              </p>
            </div>
          </div>
          <div class="home-content-right">
            <img src="../assets/img/h2.png" alt="" />
          </div>
        </div>
        <div class="home-content-first">
          <div class="home-content-left">
            <img src="../assets/img/h3.png" alt="" />
          </div>
          <div class="home-content-right">
            <div class="home-title">
              <h2>Welcome to YourMeal</h2>
              <h3>HEALTH BENEFITS</h3>
            </div>
            <div class="home-description">
              <p>
                Even though it's delicious, you still have to be healthy. This
                is a feature that provides energy information that you have
                loaded by dish or by ingredient, helping you to calculate a
                scientific meal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import '../assets/styles/home.css';
#app {
  min-width: 99.2vw;
}
</style>