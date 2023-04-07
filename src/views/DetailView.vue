<template>
  <div>
    <loader v-if="product == null" />
    <main class="l-main" v-else>
      <section class="share bd-container section detail" id="share">
        <div class="share__container bd-grid">
          <div class="share__data">
            <h2 class="section-title-center">{{ product.title }}</h2>
            <AwesomeVueStarRating
              v-if="product.reviews"
              :star="
                Math.round(
                  product.reviews.reduce((acc, review) => {
                    acc += review.rating;
                    return acc;
                  }, 0) / product.reviews.length
                )
              "
              :disabled="this.disabled"
              :maxstars="this.maxstars"
              :starsize="this.starsize"
              :hasresults="this.hasresults"
              :hasdescription="this.hasdescription"
              :ratingdescription="this.ratingdescription"
            />

            <div class="reviews" v-else>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
              <span class="description__rating">(no rating yet)</span>
            </div>

            <p class="share__description">
              {{ product.description }}
            </p>
            <button-shop-now
              text="shop now"
              @event-click="addToCart(product)"
            />
          </div>

          <div class="share__img">
            <img v-bind:src="product.image" alt="" />
          </div>
        </div>
      </section>
      <section class="send section">
        <div class="send__container bd-container">
          <div class="send__content">
            <h2 class="section-title-center send__title">Add your review</h2>
            <p class="send__description">
              We are so happy to share with us your review, we appreciate your
              time.
            </p>
            <add-review :id="Number(id)" />
          </div>
        </div>
      </section>
      <!--Testimonials------------------->
      <section id="testimonials">
        <!--heading--->
        <div class="testimonial-heading">
          <span>reviews</span>
        </div>
        <!--testimonials-box-container------>
        <div class="testimonial-box-container">
          <div v-if="product.reviews != null" class="container-reviews">
            <Review v-for="review in product.reviews" :review="review" />
          </div>
          <div v-else>no reviews yet</div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import ButtonShopNow from "@/components/ButtonShopNow.vue";
import Review from "@/components/Review.vue";
import Quantity from "@/components/Quantity.vue";
import VueRouter from "@/router/index";
import AddReview from "@/components/AddReview.vue";
import { mapState } from "vuex";
import AwesomeVueStarRating from "awesome-vue-star-rating";
import Loader from "@/components/Loader.vue";
export default {
  components: {
    ButtonShopNow,
    Review,
    Quantity,
    AddReview,
    AwesomeVueStarRating,
    Loader,
  },

  data() {
    return {
      id: null,

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
      hasresults: false,
      hasdescription: false,
      starsize: "lg", //[xs,lg,1x,2x,3x,4x,5x,6x,7x,8x,9x,10x],
      maxstars: 5,
      disabled: false,
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.$store.dispatch("getProductById", this.id);
  },
  computed: mapState(["product"]),
  methods: {
    addToCart(product) {
      if (sessionStorage.getItem("user") != null) {
        this.$store.dispatch("setProductInCart", {
          product: product,
          id: sessionStorage.getItem("user"),
        });
        VueRouter.push({ name: "cart" });
      } else {
        VueRouter.push({ name: "sign-in" });
      }
    },
  },
};
</script>

<style>
.description__rating {
  color: #202020;
  margin-left: 0.5rem;
  font-size: 0.7rem;
}
.share__img {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 416px;
}
.share__img img {
  align-self: stretch;
}
.input-counter {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.input-counter input {
  background-color: transparent;
}
.input-counter div {
  display: flex;
}
.minus-btn {
  border-right-color: transparent;
}
.plus-btn {
  border-left-color: transparent;
}
.minus-btn,
.plus-btn {
  display: inline-block;
  border: 1px solid #f1f1f1;
  padding: 0.8rem 1rem;
  margin-right: 0;
  cursor: pointer;
}
.counter-btn {
  width: 7rem;
  padding: 1rem 0;
  text-align: center;
  border: 1px solid #f1f1f1;
}
.quantity {
  margin-left: 10px;
}
.container-reviews {
  display: flex;
  flex-wrap: wrap;
}
@media only screen and (max-width: 1200px) {
  .minus-btn,
  .plus-btn {
    padding: 0.6rem 0.8rem;
    margin-right: 0;
  }
  .counter-btn {
    width: 4rem;
    padding: 1rem 0;
  }
}
.detail {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  margin-top: 99px;
  padding-top: 30px;
  background-color: white;
}
@media (max-width: 767px) {
  .detail {
    padding-left: 20px;
    padding-right: 20px;
  }
  .container-reviews {
    justify-content: center;
  }
}
* {
  margin: 0px;
  padding: 0px;

  box-sizing: border-box;
}
a {
  text-decoration: none;
}
#testimonials {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}
.testimonial-heading {
  letter-spacing: 1px;
  margin: 30px 0px;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.testimonial-heading h1 {
  font-size: 2.2rem;
  font-weight: 500;
  background-color: #202020;
  color: #ffffff;
  padding: 10px 20px;
}
.testimonial-heading span {
  font-size: 1.3rem;
  color: #252525;
  margin-bottom: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
}
.testimonial-box-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
}
.testimonial-box {
  max-width: 500px;
  box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  padding: 20px;
  margin: 15px;
  cursor: pointer;
}
.profile-img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 10px;
}
.profile-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.profile {
  display: flex;
  align-items: center;
}
.name-user {
  display: flex;
  flex-direction: column;
}
.name-user strong {
  color: #3d3d3d;
  font-size: 1.1rem;
  letter-spacing: 0.5px;
}
.name-user span {
  color: #979797;
  font-size: 0.8rem;
}
.reviews {
  color: #f9d71c;
}
.box-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.client-comment p {
  font-size: 0.9rem;
  color: #4b4b4b;
}
.testimonial-box:hover {
  transform: translateY(-10px);
  transition: all ease 0.3s;
}

@media (max-width: 1060px) {
  .testimonial-box {
    padding: 10px;
  }
}
@media (max-width: 790px) {
  .testimonial-box {
    width: 100%;
  }
  .testimonial-heading h1 {
    font-size: 1.4rem;
  }
}
@media (max-width: 340px) {
  .box-top {
    flex-wrap: wrap;
    margin-bottom: 10px;
  }
  .reviews {
    margin-top: 10px;
  }
}
::selection {
  color: #ffffff;
  background-color: #252525;
}
@media screen and (max-width: 576px) {
  .input-counter {
    justify-content: center;
  }
}
</style>