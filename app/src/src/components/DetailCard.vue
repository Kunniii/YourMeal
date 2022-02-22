<template>
  <div class="main">
    <div class="food">
      
      <div class="food-image">
        <img :src="dish.image" alt="" />
      </div>

      <div class="food-info">
        
        <div class="food-name">
          <h2>{{ dish.name }}</h2>
        </div>

        <div class="food-detail">
          
          <div class="food-ingredients">
            <h3>Ingredients</h3>
            <div class="ingredients">
              <ul>
                <li>
                  {{ dish.ingredients.join(', ') }}
                </li>
              </ul>
            </div>
          </div>
          
          <div class="food-recipe">
            <h3>Prepare Steps</h3>
            <div class="prepare">
              <ul type="-">
                <li v-for="(step, index) in dish.prepare_steps" :key="index">
                  {{ step }}
                </li>
              </ul>
            </div>
          </div>
          
          <div class="food-method">
            <h3>Cooking Steps</h3>
            <ul>
              <li id="cook_step" v-for="(step, index) in dish.cook_steps" :key="index">
                <b>STEP {{ index + 1  }}:</b>
                <p>{{ step }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 

<div class="main">
        <div class="food">
           <div>
        <img class="dish-image" :src="dish.image" alt="" />
      </div>
            <div class="food-info">
                <div class="food-name">BBQ Chicken</div>

                <div class="food-detail">
                    <div class="food-ingredients">
                        <h3>Ingredients for this recipe:</h3>
                        <ul>
                            <li>
                                oil, onion, garlic, chorizo, tomatoes, sugar, gnocchi, mozzarella, basil
                            </li>
                        </ul>
                    </div>
                    <div class="food-recipe">
                        <h3>Recipe:</h3>
                        <ul>
                            <li>Ingredients</li>
                            <li>1tbsp olive oil</li>
                            <li>1 onion, finely chopped</li>
                            <li>2 garlic cloves, crushed</li>
                            <li>120g chorizo, diced</li>
                            <li>2 x 400g cans chopped tomatoes</li>
                            <li>Ingredients</li>
                            <li>1tbsp olive oil</li>
                            <li>1 onion, finely chopped</li>
                            <li>2 garlic cloves, crushed</li>
                            <li>120g chorizo, diced</li>
                            <li>2 x 400g cans chopped tomatoes</li>
                        </ul>
                    </div>
                    <div class="">
                        <h3>Method:</h3>
                        <ul>
                            <li>
                                Step 1:
                                <p>
                                    Đầu tiên rửa sạch và lau khô gà đúng cách. Bạn hãy rạch vài đường dọc trên mình gà để gà thấm đều gia vị. Đổ nước cốt chanh lên đó và xoa đều. Giữ nó trong một cái bát.
                                </p>
                            </li>
                            <li>
                                Step 2:
                                <p>
                                    Bây giờ trong một tô lớn, thêm sữa chua, bột thì là, bột rau mùi, ngò, nghệ, tỏi băm, giấm, bột tiêu đen, muối, bột ớt bột và dùng máy đánh trứng trộn đều. Nước xốt phải mịn và đặc.
                                </p>
                            </li>
                            <li>
                                Step 3:
                                <p>
                                    Bây giờ, thêm các miếng gà vào nước xốt đã pha chế ở trên. Để thị được thấm gia vị nên ướp thịt khoảng 6h hoặc để qua đêm để thịt được đậm vị hơn. Trước khi bắt đầu nướng thị, hãy làm nóng đồ nướng của bạn trước.
                                </p>
                            </li>
                            <li>
                                Step 1:
                                <p>
                                    Đầu tiên rửa sạch và lau khô gà đúng cách. Bạn hãy rạch vài đường dọc trên mình gà để gà thấm đều gia vị. Đổ nước cốt chanh lên đó và xoa đều. Giữ nó trong một cái bát.
                                </p>
                            </li>
                            <li>
                                Step 2:
                                <p>
                                    Bây giờ trong một tô lớn, thêm sữa chua, bột thì là, bột rau mùi, ngò, nghệ, tỏi băm, giấm, bột tiêu đen, muối, bột ớt bột và dùng máy đánh trứng trộn đều. Nước xốt phải mịn và đặc.
                                </p>
                            </li>
                            <li>
                                Step 3:
                                <p>
                                    Bây giờ, thêm các miếng gà vào nước xốt đã pha chế ở trên. Để thị được thấm gia vị nên ướp thịt khoảng 6h hoặc để qua đêm để thịt được đậm vị hơn. Trước khi bắt đầu nướng thị, hãy làm nóng đồ nướng của bạn trước.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <footer>
        <div class="top_header">
            <section>
                <span><i class="fa fa-map-marker"></i></span>
                <span>Cầu Rau Răm, đường Nguyễn Văn Cừ nối dài, An Bình, Ninh Kiều, Cần
            Thơ 900000</span
          >
        </section>
        <section>
          <span><i class="fa fa-phone"></i></span>
                <span>(+84) 123456789</span>
            </section>
            <section>
                <span><i class="fa fa-envelope"></i></span>
                <span>yourmeal@gmail.com</span>
            </section>
        </div>
        <span class="border-shape"></span>
        <div class="bottom_content">
            <section>
                <a href="home.html">Home</a>
                <a href="input.html">Input</a>
                <a href="random.html">Random</a>
                <a href="about.html">About us</a>
            </section>
            <section>
                <a href="#"><i class="fab fa-facebook"></i></a>
                <a href="#"><i class="fab fa-instagram-square"></i></a>
                <a href="#"><i class="fab fa-github"></i></a>
                <a href="#"><i class="fab fa-twitter-square"></i></a>
            </section>
        </div>
        <div class="copyright">
            Copyright © 2022 YourMeal - All rights reserved
        </div>
    </footer>

 -->
</template>

<script>
export default {
  props: ["dish"],
};
</script>

<style scoped>
@import "../assets/styles/detail.css";
</style>