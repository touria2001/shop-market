<template>

  <div class="box" v-if="categories != null">
   
    <select class="mydropdown" v-model="categoryValue" @change="emitCategory()">    
      
      <option :value="null" >categories</option>
      <option v-for="option in categories" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
   
  <div class="box" v-else-if="prices != null">
    <select class="mydropdown" v-model="priceValue" @change="emitPrice()">
      <option :value="null" >prices</option>
      <option v-for="option in prices" :value="option.value">
        {{ option.text }}
      </option>
    </select>
  </div>
  <div class="box" v-else-if="rating != null">
    <select class="mydropdown" v-model="ratingValue" @change="emitRating()">
      <option :value="null" >rating</option>
      <option value="0">no rate yet</option>
      <option v-for="option in rating" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
  
</template>

<script>
export default {
  props: {
    categories: {
      type: [],
    },
    prices: {
      type: [],
    },
    rating: {
      type: [],
    }
  },
 
  data() {
    return {
      categoryValue:  null,
      priceValue: null,
      ratingValue: null,
    };
  },
  methods: {
    emitCategory() {
      
      this.$emit("category", this.categoryValue);
    },
    emitPrice() {
      this.$emit("price", this.priceValue);
    },
    emitRating() {
      this.$emit("rating", this.ratingValue);
    },
  },
};
</script>

<style>
.box select {
  padding: 12px;
  width: 250px;
  border: none;
  font-size: 17px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
  -webkit-appearance: button;
  appearance: button;
  outline: none;
}

.mydropdown {
  border: none;
  border-bottom: 2px dotted black;
  display: inline;
  font-weight: 600;
  cursor: pointer;
}
.mydropdown:hover,
.myoption:active,
.myoption:checked {
  border: 2px dotted #da2535;
}
.box select option {
  padding: 30px;
}
</style>