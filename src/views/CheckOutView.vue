<template>
  
    <div class="row-f" v-if="cart != null">
      <div class="col-75">
        <div class="container">
          <form @submit="checkout">
            <div class="row">
              <div class="col-50">
                <h3>Billing Address</h3>
                <label for="fname">Full Name</label>
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="John M. Doe"
                  v-model="full_name"
                @focus="deleteErrors('fullName')"
                :disabled='confirm'
                />
                
                 <p v-if="errorsEmail.length">    
                <ul class="ul-error">
                  <li v-for="error in errorsEmail" >{{ error }}</li>
                </ul></p>
                <label for="email"> Email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  @focus="deleteErrors('email')"
                
                />
                  <p v-if="errorsEmail.length">    
                <ul class="ul-error">
                  <li v-for="error in errorsEmail" >{{ error }}</li>
                </ul></p>
                <label for="adr"
                  > Address</label
                >
                <input
                    v-model="address"
                @focus="deleteErrors('address')"
                  type="text"
                  id="adr"
                  name="address"
                  placeholder="542 W. 15th Street"
                />
                 <p v-if="errorsEmail.length">    
                <ul class="ul-error">
                  <li v-for="error in errorsEmail" >{{ error }}</li>
                </ul></p>
                <label for="city"> City</label>
                <input
                 v-model="city"
                @focus="deleteErrors('city')"
                  type="text"
                  id="city"
                  name="city"
                  placeholder="New York"
                />
 <p v-if="errorsEmail.length">    
                <ul class="ul-error">
                  <li v-for="error in errorsEmail" >{{ error }}</li>
                </ul></p>
                <div class="row">
                  <div class="col-50">
                    <label for="state">State</label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      placeholder="NY"
                         v-model="state"
                    @focus="deleteErrors('state')"
                    />
                    <p v-if="errorsEmail.length">    
                <ul class="ul-error">
                  <li v-for="error in errorsEmail" >{{ error }}</li>
                </ul></p>
                  </div>
                  <div class="col-50">
                    <label for="zip">Zip</label>
                    <input
                       v-model="zip"
                    @focus="deleteErrors('zip')"
                      type="text"
                      id="zip"
                      name="zip"
                      placeholder="10001"
                    />
                      <p v-if="errorsEmail.length">    
                <ul class="ul-error">
                  <li v-for="error in errorsEmail" >{{ error }}</li>
                </ul></p>
                  </div>
                </div>
              </div>

              <div class="col-50">
                <h3>Payment</h3>
                <label for="fname">Accepted Cards</label>
                <div class="icon-container">
                  <i class="fa fa-cc-visa icon-visa" style="color: navy"></i>
                  <i class="fa fa-cc-amex icon-visa" style="color: blue"></i>
                  <i
                    class="fa fa-cc-mastercard icon-visa"
                    style="color: red"
                  ></i>
                  <i
                    class="fa fa-cc-discover icon-visa"
                    style="color: orange"
                  ></i>
                </div>
                <label for="cname">Name on Card</label>
                <input
                  type="text"
                  id="cname"
                  name="cardname"
                  placeholder="John More Doe"
                   v-model="name_on_card"
                @focus="deleteErrors('nameOnCard')"
                />
                 <p v-if="errorsEmail.length">    
                <ul class="ul-error">
                  <li v-for="error in errorsEmail" >{{ error }}</li>
                </ul></p>
                <label for="ccnum">Credit card number</label>
                <input
                  type="text"
                  id="ccnum"
                  name="cardnumber"
                  placeholder="1111-2222-3333-4444"
                   v-model="credit_card_number"
                @focus="deleteErrors('credit_card_number')"
                />
                  <p v-if="errorsCreditCartNumber.length">    
                <ul class="ul-error">
                  <li v-for="error in errorsCreditCartNumber" >{{ error }}</li>
                </ul></p>
                <label for="expmonth">Exp Month</label>
                <input
                  type="text"
                  id="expmonth"
                  name="expmonth"
                  placeholder="September"
                     v-model="exp_month"
                @focus="deleteErrors('expMonth')"
                />
                  <p v-if="errorsExpMonth.length">    
                <ul class="ul-error">
                  <li v-for="error in errorsExpMonth" >{{ error }}</li>
                </ul></p>
                <div class="row">
                  <div class="col-50">
                    <label for="expyear">Exp Year</label>
                    <input
                      type="text"
                      id="expyear"
                      name="expyear"
                      placeholder="2018"
                       @focus="deleteErrors('expYear')"
                    
                    />
                     <p v-if="errorsExpYear.length">    
                <ul class="ul-error">
                  <li v-for="error in errorsExpYear" >{{ error }}</li>
                </ul></p>
                  </div>
                  <div class="col-50">
                    <label for="cvv">CVV</label>
                    <input  v-model="cvv"
                    @focus="deleteErrors('cvv')" type="text" id="cvv" name="cvv" placeholder="352" />
                     <p v-if="errorsCVV.length">    
                <ul class="ul-error">
                  <li v-for="error in errorsCVV" >{{ error }}</li>
                </ul></p>
                  </div>
                </div>
              </div>
            </div>
           
            <input type="submit" value="Continue to checkout"  class="btn" v-if="confirm == false"/>
               <input type="submit" value="Confirm order" disabled  class="btn" v-else/>
          </form>
        </div>
      </div>
      <div class="col-25">
        <div class="container">
          <h4>
            Cart
            <span class="price" style="color: black"
              ><i class="fa fa-shopping-cart"></i> <b>4</b></span
            >
          </h4>
           <p v-for="item in cart">
          <a href="#">{{ item.title }}</a
          ><span>{{ item.quantity }}</span>
          <span class="price">${{ item.price }}</span>
        </p>
          <hr />
          <p>
             Total<span class="price" style="color: black"
            ><b
              >$
              {{
                cart.reduce(
                  (acc, item) => acc + item.price * item.quantity,
                  0
                )
              }}</b
            ></span
          ></span>
          </p>
        </div>
      </div>
    </div>

</template>


  <script>
import Validate from "@/validation/Validate";
import { mapState } from "vuex";
import VueRouter from "@/router/index";
export default {
  data() {
    return {
      full_name: null,
      email: null,
      address: null,
      city: null,
      state: null,
      zip: null,
      name_on_card: null,
      credit_card_number: null,
      exp_month: null,
      exp_year: null,
      cvv: null,
      errorsFullName: [],
      errorsEmail: [],
      errorsAdress: [],
      errorsCity: [],
      errorsNameOnCard: [],
      errorsCreditCartNumber: [],
      errorsExpMonth: [],
      errorsExpYear: [],
      errorsState: [],
      errorsZip: [],
      errorsCVV: [],
      confirm: false,
    };
  },
  created() {
    if (sessionStorage.getItem("user") != null) {
      this.$store.dispatch("fetchCart", sessionStorage.getItem("user"));
      this.$store.dispatch("setUser", sessionStorage.getItem("user"));
    } else {
      VueRouter.push({ name: "home" });
    }
  },
  updated() {
    if (this.cart == null) {
      VueRouter.push({ name: "home" });
    }
  },
  computed: mapState(["cart"]),
  methods: {
    checkout(event) {
      event.preventDefault();
      // this.errorsEmail = Validate.emailIsNotValid(this.email, this.users);
      // this.errorsFullName = Validate.userNameIsNotValid(this.full_name);
      // this.errorsAdress = Validate.validateAddress(this.address);
      // this.errorsCity = Validate.validateCity(this.city);
      // this.errorsNameOnCard = Validate.nameOnCardIsNotValid(this.name_on_card);
      // this.errorsCreditCartNumber = Validate.isMoroccanCreditCardNumberValid(
      //   this.credit_card_number
      // );
      // this.errorsExpMonth = Validate.validateExpMonth(this.exp_month);
      // this.errorsExpYear = Validate.validateExpYear(this.exp_year);
      // this.errorsState = Validate.validateState(this.state);
      // this.errorsZip = Validate.validateZipCode(this.zip);
      // this.errorsCVV = Validate.validateCVV(this.cvv);
      if (
        this.errorsFullName.length === 0 &&
        this.errorsEmail.length === 0 &&
        this.errorsAdress.length === 0 &&
        this.errorsCity.length === 0 &&
        this.errorsNameOnCard.length === 0 &&
        this.errorsCreditCartNumber.length === 0 &&
        this.errorsExpMonth.length === 0 &&
        this.errorsExpYear.length === 0 &&
        this.errorsState.length === 0 &&
        this.errorsZip.length === 0 &&
        this.errorsCVV.length === 0
      ) {
        this.confirm = true;
      }
    },
    deleteErrors(str) {
      if (str === "email") {
        this.errorsEmail = [];
      }
      if (str === "full_name") {
        this.errorsFullName = [];
      }
      if (str === "address") {
        this.errorsAdress = [];
      }
      if (str === "emailSignIn") {
        this.errorsEmailSignIn = [];
      }
      if (str === "city") {
        this.errorsCity = [];
      }
      if (str === "name_on_card") {
        this.errorsNameOnCard = [];
      }
      if (str === "credit_card_number") {
        this.errorsCreditCartNumber = [];
      }
      if (str === "exp_month") {
        this.errorsExpMonth = [];
      }
      if (str === "exp_year") {
        this.errorsExpYear = [];
      }
      if (str === "cvv") {
        this.errorsCVV = [];
      }
      if (str === "state") {
        this.errorsState = [];
      }
      if (str === "zip") {
        this.errorsZip = [];
      }
    },
  },
};
</script>



<style scoped>
body {
  font-family: Arial;
  font-size: 17px;
  padding: 8px;
}

* {
  box-sizing: border-box;
}
.row-f {
  display: -ms-flexbox; /* IE10 */
  display: flex;
  -ms-flex-wrap: wrap; /* IE10 */
  flex-wrap: wrap;
  margin: 0 -16px;
  margin-top: 100px;
  max-width: 968px;
  width: calc(100% - 3rem);
  margin-left: auto;
  margin-right: auto;
}
.row {
  display: -ms-flexbox; /* IE10 */
  display: flex;
  -ms-flex-wrap: wrap; /* IE10 */
  flex-wrap: wrap;
  margin: 0 -16px;
}

.col-25 {
  -ms-flex: 25%; /* IE10 */
  flex: 25%;
}

.col-50 {
  -ms-flex: 50%; /* IE10 */
  flex: 50%;
}

.col-75 {
  -ms-flex: 75%; /* IE10 */
  flex: 75%;
}

.col-25,
.col-50,
.col-75 {
  padding: 0 16px;
}

.container {
  background-color: white;
  padding: 5px 20px 15px 20px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  border-radius: 3px;
}

input[type="text"] {
  width: 100%;
  margin-bottom: 20px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

label {
  margin-bottom: 10px;
  display: block;
}

.icon-container {
  margin-bottom: 23px;

  font-size: 24px;
}
.icon-visa {
  margin-right: 10px;
}
.btn {
  background-color: #da2535;
  color: white;
  padding: 12px;
  margin: 10px 0;
  border: none;
  width: 100%;
  border-radius: 3px;
  cursor: pointer;
  font-size: 17px;
}

.btn:hover {
  background-color: #f12536;
}

a {
  color: #161212;
}

hr {
  border: 1px solid lightgrey;
}

span.price {
  float: right;
  color: grey;
}
.total {
  color: #da2535;
}

@media (max-width: 1020px) {
  .row-f {
    flex-direction: column-reverse;
  }
  .col-25 {
    margin-bottom: 20px;
  }
}
@media (max-width: 593px) {
  .row {
    flex-direction: column-reverse;
  }
}
</style>