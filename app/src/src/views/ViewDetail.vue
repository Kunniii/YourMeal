<template>
  <DetailCard v-show="show_dish" :dish="dish"/>
</template>

<script>
import axios from 'axios';
import DetailCard from '@/components/DetailCard.vue';
export default {
  data: function () {
    return {
      dish: {},
      show_dish: false
    };
  },
  props: ["id"],
  mounted: function () {
      axios.get('http://localhost:5000/dish/id/'+this.id)
      .then((response) => {
        this.dish = response.data;
        this.show_dish = true;
      })
      .catch((error) => {
        console.log(error);
      })
  },
  components: {
    DetailCard
  }
};
</script>

<style scoped>

</style>