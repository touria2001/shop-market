<template>
  <main class="l-main">
     <section class=" section bd-container filter">
    <select-element />
    <select-element />
    <select-element />
    </section>
    <section class="accessory bd-container section product" id="accessory">
      <div class="accessory__container bd-grid">
        <product  v-for="product in products" :key="product.id" :product="product" />
       
      </div>
    </section>
   
  </main>
</template>

<script>
import Product from "@/components/Product.vue";
import SelectElement from '@/components/SelectElement.vue';
import { mapState } from "vuex";
export default {
  components: { Product, SelectElement },
  created() {
    this.$store.dispatch("fetchProducts");
  },
  computed: mapState(["products"]),
};
</script>

<style>
.filter {
  display: flex;
  justify-content: space-between;
  
}
.product {
  padding-top: 20px ;
}
@media screen and (max-width:843px) {
  .filter {
    flex-direction: column;
   
    gap: 20px;
    align-items: center;
  }
}
</style>


