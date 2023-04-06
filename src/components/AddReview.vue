<template>
  <form @submit="AddReview">
    <input class="name" type="text" placeholder="write your name here"  @focus="deleteErrors('name')" v-model="name" >
    <p v-if="errorsName.length">    
                <ul class="ul-error">
                  <li v-for="error in errorsName" >{{ error }}</li>
                </ul>
              </p>
                <div class="form-group">
        <label class="label-rating" for="avis"  >Rating:</label>
        <div class="stars">
        <div class="rating" v-for="i in ratingArr" :key="i" >
          <input type="radio" name="rating" :id="i" :value="i" v-model="picked" :class="  isActive == i ? 'active__star':''" @click="isActive = i" /><label :for="i"
            class="star"
            >&#9733;</label
          >
        </div>
        </div>
        <p v-if="errorsPicked.length">    
                <ul class="ul-error ">
                  <li v-for="error in errorsPicked" >{{ error }}</li>
                </ul>
              </p>
      </div>
    <div class="send__direction">
      <textarea
        type="text"
        placeholder="write your review here"
        class="send__input"
        v-model="review"
      ></textarea>
      <button   type="submit" class="button send__btn" data-tilt
        ><i class="bx bx-send"></i
      ></button>
    </div>
     <p v-if="errorsReview.length">    
                <ul class="ul-error margin-review">
                  <li v-for="error in errorsReview" >{{ error }}</li>
                </ul>
              </p>
  </form>
</template>

<script>
import Validate from "@/validation/Validate";
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      name: null,
      review: null,
      picked: null,
      errorsName: [],
      errorsReview: [],
      errorsPicked: [],
      ratingArr: [1, 2, 3, 4, 5],
      isActive: null,
    };
  },
  methods: {
    AddReview(e) {
      e.preventDefault();

      this.errorsName = Validate.fieldIsEmpty(this.name, "Name field");
      this.errorsReview = Validate.fieldIsEmpty(this.review, "Review field");
      this.errorsPicked = Validate.fieldIsEmpty(this.picked, "star field");

      if (
        this.errorsName.length === 0 &&
        this.errorsReview.length === 0 &&
        this.errorsPicked.length === 0 &&
        this.picked !== null
      ) {
        const newReview = {
          name: this.name,
          rating: parseInt(this.picked),
          review: this.review,
        };

        this.$store.dispatch("addReview", { id: this.id, review: newReview });

        this.$data.name = "";
        this.$data.review = "";
        this.$data.picked = "";
      }
    },

    deleteErrors(str) {
     
      if (str === "name") {
        this.errorsName = [];
      }
      if (str === "review") {
        this.errorsReview = [];
      }
      
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Sansita+Swashed:wght@600&display=swap");

.label-rating {
  color: white;
}
.rating {
  direction: rtl;
  unicode-bidi: bidi-override;
  color: white;
}
.stars {
  display: flex;
  flex-direction: row;
}
.star {
  display: inline-block;
  font-size: 30px;
  color: white;
  cursor: pointer;
  transition: color 0.25s ease-in-out;
}
.star:hover,
.star:hover ~ .star {
  color: #f8d64e;
}
.active__star {
  color: #f8d64e;
}
input[type="radio"] {
  display: none;
}

.ul-error {
  list-style: square;
  color: #3d3d3d;
  margin-top: -0.8em;
  margin-bottom: 0.8em;
  font-size: 0.7rem;
  margin-left: 20px;
}
.name {
  height: 35px;
  width: 100%;
  border-radius: 35px;
  border: none;
  margin-bottom: 20px;
}
.name::placeholder {
  font-family: "Rajdhani", sans-serif;
  font-weight: 900;
  font-size: 17px;
  text-align: center;
  margin-bottom: 2rem;
}
.margin-review {
    margin-top: 10px;
}
</style>