<template>
  <div class="decoration__data">
    <img
      src="https://static.galerieslafayette.com/media/796/79691774/G_79691774_378_360x393_1.jpg"
      alt=""
      class="decoration__img"
    />
    <h3 class="decoration__title">{{ category }}</h3>
    <router-link  :to="{ name: 'products', params: { categoryName: category } }">
    <a href="#" class="button button-link">Go Shopping</a>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    category: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
</style>