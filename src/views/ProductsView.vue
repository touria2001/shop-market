<template>
 <loader v-if="products == null" />
  <main class="l-main" v-else>
    <section class="section bd-container filter">
      <select-element :categories="categories" @category="setCategory" />
      <select-element :prices="prices" @price="setPrice" />
      <select-element :rating="ratingSelect" @rating="setRating" />
    </section>
    <section class="accessory bd-container section product" id="accessory">
      <div class="accessory__container bd-grid">
        <router-link
          :to="{ name: 'detail', params: { id: product.id } }"
          v-for="product in products"
          :key="product.id"
        >
          <product :product="product" />
        </router-link>
      </div>
    </section>
  </main>
 
</template>

<script>
import Product from "@/components/Product.vue";
import SelectElement from "@/components/SelectElement.vue";

export default {
  components: { Product, SelectElement },
  props: ["categoryName"],
  created() {
    this.$store.dispatch("fetchProducts");
    this.$store.dispatch("fetchCategories");
  },

  computed: {
    categories() {
      return this.$store.state.categories;
    },
    products() {
      return this.$store.state.products
        .filter(
          (product) =>
            (this.category != null && this.category == product.category) ||
            this.category == null
        )
        .filter(
          (product) =>
            (this.price != null && product.price <= this.price) ||
            this.price == null
        )
        .filter((product) => {
          if (this.rating != null && this.rating != 0 && product.reviews != null && product.reviews.length != 0 ) {
            let rate = Math.round(
              product.reviews.reduce((acc, review) => {
                if (review.rating != null) acc += review.rating;
                return acc;
              }, 0) / product.reviews.length
            );
            if (this.rating <= rate) {
              return product;
            }
          } else if ((this.rating != null && product.reviews == null) ||(this.rating != null && product.reviews != null && product.reviews.length == 0) || this.rating == null) {
            return product;
          } 
        });
    },
  },
  data() {
    return {
      category: null,
      price: null,
      rating: null,
      prices: [
        { value: 100, text: "< 100$" },
        { value: 300, text: "< 300$" },
        { value: 500, text: "< 500$" },
        { value: 1000, text: "< 1000$" },
      ],
      ratingSelect: [1, 2, 3, 4, 5],
    };
  },
  methods: {
    setCategory(value) {
      this.category = value;
    },
    setPrice(value) {
      this.price = value;
    },
    setRating(value) {
      this.rating = value;
    },
  },
};
</script>

<style>
.filter {
  display: flex;
  justify-content: space-between;
}
.product {
  padding-top: 20px;
}
@media screen and (max-width: 843px) {
  .filter {
    flex-direction: column;

    gap: 20px;
    align-items: center;
  }
}
</style>


