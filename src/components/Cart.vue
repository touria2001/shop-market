<template>
  <tr>
    <td class="product__thumbnail">
      <a href="#">
        <img v-bind:src="product.image" alt="" />
      </a>
    </td>
    <td class="product__name">
      <a href="#">{{ product.title }}</a>
      <br />

      <small>{{ product.category }}</small>
    </td>
    <td class="product__price">
      <div class="price">
        <span class="new__price">${{ product.price }}</span>
      </div>
    </td>
    <td class="product__quantity">
      <quantity :product="product" />
    </td>
    <td class="product__subtotal">
      <div class="price">
        <span class="new__price"
          >$
          {{
                product.price *product.quantity,

          }}</span
        >
      </div>
      <a
        href="#"
        class="remove__cart-item"
        @click="deleteProductFromCart(product)"
      >
        <i class="bx bx-trash"></i>
      </a>
    </td>
  </tr>
</template>

<script>
import Quantity from "./Quantity.vue";
export default {
  components: { Quantity },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    deleteProductFromCart(product) {
      this.$store.dispatch("deleteProduct", {
        product: product,
        id: sessionStorage.getItem("user"),
      });
    },
  },
};
</script>

<style>
</style>