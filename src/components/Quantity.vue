<template>
  <div class="input-counter">
    <div>
      <span class="minus-btn" @click="increase()"> + </span>
      <input type="text" v-bind:value="quantityData" class="counter-btn" />
      <span class="plus-btn" @click="decrease()"> - </span>
    </div>
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
  data() {
     return {
      quantityData : this.product.quantity? this.product.quantity :  1,      
     }   
  },
  methods: {
    increase() {
      this.quantityData += 1;
      this.product.quantity = this.quantityData;
       this.$store.dispatch('setQuantity',this.product)
    },
     decrease() {
      if(this.quantityData === 1) return;
      this.quantityData -= 1;
      this.product.quantity = this.quantityData;
       this.$store.dispatch('setQuantity',this.product)
    },
  },
};
</script>

<style>
</style>