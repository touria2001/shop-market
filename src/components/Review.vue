<template>
  <div class="testimonial-box">
    <!--top------------------------->
    <div class="box-top">
      <!--profile----->
      <div class="profile">
        <!--img---->
        <div class="profile-img">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJyTvfFaMpnKKFb9NVVDqTWwZBrKlVcRbR5421AJjvZq0Gli_qs0PUo0QXCFYqPbK8Tbs&usqp=CAU"
          />
        </div>
        <!--name-and-username-->
        <div class="name-user">
          <strong> {{ review.name }}</strong>
        </div>
      </div>
      <!--reviews------>
    <AwesomeVueStarRating :star="this.review.rating" :disabled="this.disabled" :maxstars="this.maxstars" :starsize="this.starsize" :hasresults="this.hasresults" :hasdescription="this.hasdescription" :ratingdescription="this.ratingdescription" />

    </div>
    <!--Comments---------------------------------------->
    <div class="client-comment">
      <p>
        {{ review.review }}
      </p>
    </div>
  </div>
</template>

<script>
import AwesomeVueStarRating from 'awesome-vue-star-rating'
export default {
   components: {
    AwesomeVueStarRating
  },
  props: {
    review: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      star: 5, // default star
      ratingdescription: [
        {
          text: 'Poor',
          class: 'star-poor'
        },
        {
          text: 'Below Average',
          class: 'star-belowAverage'
        },
        {
          text: 'Average',
          class: 'star-average'
        },
        {
          text: 'Good',
          class: 'star-good'
        },
        {
          text: 'Excellent',
          class: 'star-excellent'
        }
      ],
      hasresults: false,
      hasdescription: false,
      starsize: 'xs', //[xs,lg,1x,2x,3x,4x,5x,6x,7x,8x,9x,10x],
      maxstars: 5,
      disabled: false
    }
}, 

};
</script>

<style>
</style>