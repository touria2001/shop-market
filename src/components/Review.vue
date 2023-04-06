<template>
  <div class="testimonial-box">
          <!--top------------------------->
          <div class="box-top">
            <!--profile----->
            <div class="profile">
              <!--img---->
              <div class="profile-img">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJyTvfFaMpnKKFb9NVVDqTWwZBrKlVcRbR5421AJjvZq0Gli_qs0PUo0QXCFYqPbK8Tbs&usqp=CAU" />
              </div>
              <!--name-and-username-->
              <div class="name-user">
                <strong> {{review.name}}</strong>
                
              </div>
            </div>
            <!--reviews------>
            <div class="reviews">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
            </div>
          </div>
          <!--Comments---------------------------------------->
          <div class="client-comment">
            <p>
             {{review.review}}
            </p>
          </div>
        </div>
</template>

<script>
export default {
   props: {
    review: {
      type: Object,
      required: true,
    },
  },

}
</script>

<style>

</style>