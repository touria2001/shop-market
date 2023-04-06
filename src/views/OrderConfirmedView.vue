<template>
  <section class="home" id="home">
    <div class="home__container bd-container bd-grid">
      <div class="home__img">
        <img
          :src="imageHome"
        />
      </div>

      <div class="home__data">
        <h1 class="home__title">THNAKS FOR YOUR ORDER!</h1>
        <p class="home__description">
          Each one is a gesture of support for our business, and that is worth
          more than money can buy. Have an awesome day!
        </p>
        <router-link to="/">
          <button-shop-now text="back to home" />
        </router-link>
       
      </div>
    </div>
  </section>
</template>

<script>
import ButtonShopNow from "@/components/ButtonShopNow.vue";
export default {
  components: {
    ButtonShopNow,
  },
   data() {
    return {
      imageHome: require('@/assets/images/images-foreo_prev_ui.png')
    }
  }
};
</script>

<style >
</style>