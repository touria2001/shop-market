<template>
  <main class="l-main">
    <section class="bd-container section cart-container" id="share">
      <div class="container">
        <div class="responsive__cart-area">
          <form class="cart__form">
            <div class="cart__table table-responsive">
              <table width="100%" class="table">
                <thead>
                  <tr>
                    <th>PRODUCT</th>
                    <th>NAME</th>
                    <th>UNIT PRICE</th>
                    <th>QUANTITY</th>
                    <th>TOTAL</th>
                  </tr>
                </thead>
                <tbody v-if="cart != null">                   
                 <cart v-for="product in cart" :key="product.id" :product="product" />
                </tbody>
              </table>
            </div>

            <div class="cart-btns">
              <div class="continue__shopping">
                <button@click="goToCheckOut()" >shop now</button>
              </div>
              <div class="check__shipping">
                <input type="checkbox" />
                <span>Shipping(+7$)</span>
              </div>
            </div>

            <div class="cart__totals">
              <h3>Cart Totals</h3>
              <ul>
                <li>
                  Subtotal
                  <span class="new__price">$   {{
                cart.reduce(
                  (acc, item) => acc + item.price * item.quantity,
                  0
                ) 
              }}</span>
                </li>
                <li>
                  Shipping
                  <span>$0</span>
                </li>
                <li>
                  Total
                  <span class="new__price">$250.99</span>
                </li>
              </ul>
              <button-shop-now />
            </div>
          </form>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import ButtonShopNow from "@/components/ButtonShopNow.vue";
import Cart from "@/components/Cart.vue";
import { mapState } from "vuex";
import VueRouter from "@/router/index";
export default {
  components: { ButtonShopNow, Cart },
  created() {
    if (sessionStorage.getItem("user") != null) {
      this.$store.dispatch("fetchCart", sessionStorage.getItem("user"));
    }
  },
  computed: mapState(["cart"]),
  methods: {
    goToCheckOut() {
      if (this.cart != null && this.cart.length != 0) {
        VueRouter.push({ name: "checkout" });
      }
    },
  },
};
</script>

<style>
:root {
  --primaryColor: #f1f1f1;
  --black: #222;
  --black2: #555;
  --black3: #252525;
  --black4: #000;
  --black5: #212529;
  --orange: #da2535;
  --white: #fff;
  --grey: #959595;
  --grey2: #666;
  --grey3: #ccc;
  --secondaryColor: #2b1f4d;
  --yellow: #ffcc00;
  --green: #59b210;
  --blue: rgb(56, 10, 223);
}

.cart__area {
  padding-bottom: 3rem;
}

.cart__form {
  display: block;
}

.product__thumbnail img {
  width: 5rem;
  height: 8rem;
  object-fit: contain;
}

.remove__cart-item svg {
  width: 1rem;
  height: 1rem;
  fill: var(--orange);
  transition: all 0.3s ease-in-out;
}

.cart__table {
  display: block;
  width: 100%;
  margin-bottom: 2rem;
  overflow-x: auto;
}

.cart__table .table {
  border-collapse: collapse;
  width: 100%;
  max-width: 100rem;
}

.cart__table .table th {
  font-weight: 500;
  font-style: 1rem;
  text-align: left;
  padding: 0.8rem 0;
}

.cart__table .table td {
  vertical-align: middle;
  padding: 0.8rem 0;
  white-space: nowrap;
  border-bottom: 1px solid var(--primaryColor);
}

.cart__table .table thead {
  border-bottom: 1px solid var(--primaryColor);
}

.product__name a:link,
.product__name a:visited {
  font-size: 1rem;
  color: var(--black2);
}

.product__name small {
  color: var(--grey);
  margin-top: 0.6rem;
}

.product__subtotal .price {
  display: inline;
}

.product__subtotal .price .new__price,
.product__price .price .new__price {
  font-size: 1rem;
  color: var(--orange);
}

.remove__cart-item {
  margin-left: 1rem;
  color: red;
}

.remove__cart-item:hover svg {
  fill: var(--orange);
}

.cart-btns {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--primaryColor);
  padding-bottom: 2rem;
  margin: 1.5rem 0;
}

.continue__shopping a:link,
.continue__shopping a:visited {
  transition: all 0.4s ease-in-out;
}

.continue__shopping a:hover {
  background-color: var(--black);
  color: var(--white);
  border: 1px solid var(--black);
}

.cart__totals {
  width: 40rem;

  margin: 3rem auto 0 auto;
  color: var(--black5);
  padding: 2rem 3rem;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 2px 30px 10px rgba(0, 0, 0, 0.09);
  border-radius: 0.5rem;
}

.cart__totals h3 {
  font-weight: 500;
  font-size: 1.1rem;
  margin-bottom: 1.6rem;
}

.cart__totals .new__price {
  font-size: 1rem;
  color: var(--orange);
}

.cart__totals ul {
  margin-bottom: 2.5rem;
}

.cart__totals li {
  border: 1px solid var(--primaryColor);
  padding: 1rem 0.2rem;
  position: relative;
}

.cart__totals li:not(:last-child) {
  border-bottom-color: transparent;
}

.cart__totals li span {
  position: absolute;
  right: 1rem;
}

.cart__totals a:link,
.cart__totals a:visited {
  transition: all 0.4s ease-in-out;
}

.cart__totals a:hover {
  background-color: var(--black);
  color: var(--white);
  border: 1px solid var(--black);
}

.shopping-cart {
  position: absolute;
  top: 9%;
  right: -110%;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: var(--box-shadow);
  width: 20rem;
  background-color: #fff;
  z-index: 5;
}
.shopping-cart.active {
  right: 4rem;
  transition: 0.4s linear;
}
.shopping-cart .box {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  position: relative;
  margin: 0.7rem 0;
}

.shopping-cart .box img {
  height: 7rem;
  width: 7rem;
  object-fit: contain;
}

.shopping-cart .box .fa-trash {
  font-size: 1rem;
  position: absolute;
  top: 50%;
  right: 2rem;
  cursor: pointer;
  color: var(--light-color);
  transform: translateY(-50%);
}
.shopping-cart .box .fa-trash:hover {
  color: var(--orange);
}

.shopping-cart .box .content h3 {
  color: var(--black);
  font-size: 0.7rem;
  padding-bottom: 0.7rem;
}
.shopping-cart .box .content span {
  color: var(--light-color);
  font-size: 0.6rem;
}

.shopping-cart .box .content .quantity {
  padding-left: 0.7rem;
}

.shopping-cart .total {
  font-size: 1.5rem;
  padding: 0.7rem 0;
  text-align: center;
  color: var(--black);
}
.shopping-cart .btn {
  display: block;
  text-align: center;
  margin: 0.7rem;
}
.counter-btn {
  width: 5rem;
  padding: 0.6rem 0;
  text-align: center;
  border: 1px solid var(--primaryColor);
  background-color: #fefbfb;
}
/*
======================
Cart Area Media Query
======================
*/

@media only screen and (max-width: 1200px) {
  .minus-btn,
  .plus-btn {
    padding: 0.4rem 0.6rem;
    margin-right: 0;
  }

  .counter-btn {
    width: 3rem;
    padding: 0.7rem 0;
  }

  .input-counter svg {
    width: 1.5rem;
    height: 1.5rem;
  }
}

@media only screen and (max-width: 568px) {
  .shopping-cart.active {
    top: 14%;
    right: 50%;
    transform: translateX(50%);
  }
}
</style>