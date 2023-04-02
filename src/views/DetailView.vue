<template>
  <main class="l-main">
    <section class="share bd-container section detail" id="share">
      <div class="share__container bd-grid">
        <div class="share__data">
          <h2 class="section-title-center">Name product</h2>
          <div class="reviews">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
          </div>
          <p class="share__description">
            description -> Sharing this holidays is the best gift you can give,
            give a present or share your love with people you love.
          </p>
          <span class="share__description">quantity: </span>
          <quantity />
          <button-shop-now />
        </div>

        <div class="share__img">
          <img
            src="https://static.galerieslafayette.com/media/796/79691774/G_79691774_378_360x393_1.jpg"
            alt=""
          />
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
          <form action="">
            <div class="send__direction">
              <textarea
                type="text"
                placeholder="write your review here"
                class="send__input"
              ></textarea>
              <a href="#" class="button send__btn" data-tilt
                ><i class="bx bx-send"></i
              ></a>
            </div>
          </form>
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
        <Review />
      </div>
    </section>
  </main>
</template>

<script>
import ButtonShopNow from "@/components/ButtonShopNow.vue";
import Review from "@/components/Review.vue";
import Quantity from "@/components/Quantity.vue";
export default {
  components: { ButtonShopNow, Review, Quantity },
};
</script>

<style>
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
  width: 500px;
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
    width: 45%;
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
</style>