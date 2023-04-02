<template>
  <div class="accessory__content product">
    <div class="container-img-product">
      <img v-bind:src="product.image" alt="" class="accessory__img" />
    </div>
    <h3 class="accessory__title">{{ product.title }}</h3>
    <span class="accessory__category">{{ product.category }}</span>
    <span class="accessory__price">${{ product.price }}</span>
    <a href="#" class="button accessory__button"> buy </a>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.container-img-product {
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem 0;
}
.container-img-product  img {
  object-fit: fill;
  max-height: max-content;
  align-self: stretch;
}
</style>