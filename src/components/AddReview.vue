<template>
  <form @submit="AddReview">
    <input class="name" type="text" placeholder="write your name here"  @focus="deleteErrors('name')" v-model="name" >
    <p v-if="errorsName.length">    
                <ul class="ul-error">
                  <li v-for="error in errorsName" >{{ error }}</li>
                </ul>
              </p>
                <div class="form-group">
        
        <div class="stars">
   
        <div class="margin__rating" >
            <AwesomeVueStarRating :star="this.star" :disabled="this.disabled" :maxstars="this.maxstars" :starsize="this.starsize" :hasresults="this.hasresults" :hasdescription="this.hasdescription" :ratingdescription="this.ratingdescription" />
</div>
        </div>
        
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
import AwesomeVueStarRating from "awesome-vue-star-rating";
export default {
  components: {
    AwesomeVueStarRating,
  },
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
      
      errorsName: [],
      errorsReview: [],
      ratingArr: [1, 2, 3, 4, 5],
    
      star: 5, // default star
      ratingdescription: [
        {
          text: "Poor",
          class: "star-poor",
        },
        {
          text: "Below Average",
          class: "star-belowAverage",
        },
        {
          text: "Average",
          class: "star-average",
        },
        {
          text: "Good",
          class: "star-good",
        },
        {
          text: "Excellent",
          class: "star-excellent",
        },
      ],
      hasresults: true,
      hasdescription: false,
      starsize: "lg", //[xs,lg,1x,2x,3x,4x,5x,6x,7x,8x,9x,10x],
      maxstars: 5,
      disabled: false,
    };
  },
  methods: {
    AddReview(e) {
      e.preventDefault();

      this.errorsName = Validate.fieldIsEmpty(this.name, "Name field");
      this.errorsReview = Validate.fieldIsEmpty(this.review, "Review field");      
      let picked = document.querySelector(".rating >span").textContent.charAt(0);
      if (
        this.errorsName.length === 0 &&
        this.errorsReview.length === 0 
      
      ) {
        const newReview = {
          name: this.name,
          rating: parseInt(picked),
          review: this.review,
        };

        this.$store.dispatch("addReview", { id: this.id, review: newReview });

        this.$data.name = "";
        this.$data.review = "";
      
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

.margin__rating {
  margin-top: 10px;
}
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
  margin: 3rem 0 0 0;

  background: #fefbfb;

  line-height: 1.6;
  font-family: "Russo One", sans-serif;

  font-weight: 400;
  font-size: 15px;
  color: #5b5757;
  text-align: center;
}
.name::placeholder {
  font-family: "poppins", sans-serif;
  font-weight: 900;
  font-size: 17px;
  text-align: center;
  margin-bottom: 2rem;
}
.margin-review {
  margin-top: 10px;
}
</style>