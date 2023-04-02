<template>
  <tr>
                    <td class="product__thumbnail">
                      <a href="#">
                        <img src="" alt="" />
                      </a>
                    </td>
                    <td class="product__name">
                      <a href="#">Apple iPhone 11</a>
                      <br />
                     
                      <small>White/6.25</small>
                    </td>
                    <td class="product__price">
                      <div class="price">
                        <span class="new__price">$250.99</span>
                      </div>
                    </td>
                    <td class="product__quantity">
                      <quantity />
                    </td>
                    <td class="product__subtotal">
                      <div class="price">
                        <span class="new__price">$250.99</span>
                      </div>
                      <a href="#" class="remove__cart-item">
                        <i class='bx bx-trash'></i>
                        
                      </a>
                    </td>
                  </tr>
</template>

<script>
import Quantity from './Quantity.vue'
export default {
  components: { Quantity },

}
</script>

<style>

</style>