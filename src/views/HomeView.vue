<template>
  <main class="l-main">
    <!--======HOME=====-->
    <section class="home" id="home">
      <div class="home__container bd-container bd-grid">
        <div class="home__img">
          <img
           :src="imageHome"
          />
        </div>

        <div class="home__data">
          <h1 class="home__title">MakeUPG loves Fenty Beauty</h1>
          <p class="home__description">
            En cette fin d'année, exaucez son voeu le plus cher avec cet élégant
            coffret BOSS Bottled. Un ...
          </p>
          <router-link :to="{name: 'products'}">
          <button-shop-now text="go shopping" />
          </router-link>
        </div>
      </div>
    </section>
    <!--======FEATRUED PRODUCTS=====-->
    <section class="accessory bd-container section" id="accessory">
      <h2 class="section-title">OUR FAVORITE MAKEUP PRODUCTS</h2>

      <div class="accessory__container bd-grid">
         <router-link
          :to="{ name: 'detail', params: { id: product.id } }"
          v-for="product in featuredProducts"
          :key="product.id"
        >
        <Product   :product="product" />
        </router-link>
      </div>
    </section>
    <!--========== CATEGORIES ==========-->
    <section class="decoration section bd-container" id="decoration">
      <div class="decoration__container bd-grid">
        <div class="decoration__data">
          <h2 class="section-title">CATEGORIES</h2>
          <div class="decoration__container bd-grid">
            <category v-for="category in categories" :key="" :category="category"/>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Category from "@/components/Category.vue";
import Product from "@/components/Product.vue";
import ButtonShopNow from "@/components/ButtonShopNow.vue";
import { mapState } from "vuex";
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {
    Category,
    Product,
    ButtonShopNow,
  },
  created() {
    this.$store.dispatch("fetchFeatruedProducts");
    this.$store.dispatch("fetchCategories");
  },
  computed: mapState(["featuredProducts","categories"]),
  data() {
    return {
      imageHome: require('@/assets/images/images-foreo_prev_ui.png')
    }
  }
};
</script>
