<template>
  <main >
    <section  >
      <div class="form-wrap">
        <div class="tabs">
          <h3 class="signup-tab" @click="signUpMethod">
            <a :class="signUp ? 'active' : ''" href="#"
              >Sign Up</a
            >
          </h3>
          <h3 class="login-tab" @click="signInMethod">
            <a :class="signIn ? 'active' : ''" href="#"
              >Login</a
            >
          </h3>
        </div>
        <!--.tabs-->

        <div class="tabs-content">
          <div id="signup-tab-content" :class="signUp ? 'active' : ''">
            <form class="signup-form" action="" method="post">
              <input
                type="email"
                class="input"
                id="user_email"
                autocomplete="off"
                placeholder="Email"
              />
              <input
                type="text"
                class="input"
                id="user_name"
                autocomplete="off"
                placeholder="Username"
              />
              <input
                type="password"
                class="input"
                autocomplete="off"
                placeholder="Password"
              />
              <input type="submit" class="button" value="Sign Up" />
            </form>
            <!--.login-form-->
            <div class="help-text">
              <p>By signing up, you agree to our</p>
              <p><a href="#">Terms of service</a></p>
            </div>
            <!--.help-text-->
          </div>
          <!--.signup-tab-content-->

          <div id="login-tab-content" :class="signIn ? 'active' : ''">
            <form class="login-form" action="" method="post">
              <input
                type="text"
                class="input"
                id="user_login"
                autocomplete="off"
                placeholder="Email or Username"
              />
              <input
                type="password"
                class="input"
                id="user_pass"
                autocomplete="off"
                placeholder="Password"
              />
              <input type="checkbox" class="checkbox" id="remember_me" />
              <label for="remember_me">Remember me</label>

              <input type="submit" class="button" value="Login" />
            </form>
            <!--.login-form-->
            <div class="help-text">
              <p><a href="#">Forget your password?</a></p>
            </div>
            <!--.help-text-->
          </div>
          <!--.login-tab-content-->
        </div>
        <!--.tabs-content-->
      </div>
      <!--.form-wrap-->
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return { signIn: true, signUp: false };
  },
  methods: {
    signInMethod() {
      this.signIn = true;
      this.signUp = false;
    },
    signUpMethod() {
      this.signIn = false;
      this.signUp = true;
    },
  },
};
</script>


<style scoped>

* {
  margin: 0;
  padding: 0;
}

a {
  color: #666;
  text-decoration: none;
}
a:hover {
  color: #DA2535;
}

input {
  font: 16px/26px "poppins", sans-serif; }

body {
  color: #666;
  background-color: #f1f2f2;
  font: 16px/26px "poppins", sans-serif
}

.form-wrap {
  background-color: #fff;
  width: 320px;
  margin-left:  auto;
  margin-right: auto;
  margin-top: 100px;
  box-shadow: 0px 1px 8px #bebebe;
  -webkit-box-shadow: 0px 1px 8px #bebebe;
  -moz-box-shadow: 0px 1px 8px #bebebe;
}
.form-wrap .tabs {
  overflow: hidden;
}
.form-wrap .tabs h3 {
  float: left;
  width: 50%;
}
.form-wrap .tabs h3 a {
  padding: 0.5em 0;
  text-align: center;
  font-weight: 400;
  background-color: #e6e7e8;
  display: block;
  color: #666;
}
.form-wrap .tabs h3 a.active {
  background-color: #fff;
}
.form-wrap .tabs-content {
  padding: 1.5em;
}
.form-wrap .tabs-content div[id$="tab-content"] {
  display: none;
}
.form-wrap .tabs-content .active {
  display: block !important;
}
.form-wrap form .input {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  color: inherit;
 
  padding: 0.8em 0 10px 0.8em;
  border: 1px solid #cfcfcf;
  outline: 0;
  display: inline-block;
  margin: 0 0 0.8em 0;
  padding-right: 2em;
  width: 100%;
}
.form-wrap form .button {
  width: 100%;
  padding: 0.8em 0 10px 0.8em;
  background-color: #DA2535;
  border: none;
  color: #fff;
  cursor: pointer;
  text-transform: uppercase;
}
.form-wrap form .button:hover {
  background-color: #DA2535;
}
.form-wrap form .checkbox {
  visibility: hidden;
  padding: 20px;
  margin: 0.5em 0 1.5em;
}
.form-wrap form .checkbox:checked + label:after {
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
  filter: alpha(opacity=100);
  opacity: 1;
}
.form-wrap form label[for] {
  position: relative;
  padding-left: 20px;
  cursor: pointer;
}
.form-wrap form label[for]:before {
  content: "";
  position: absolute;
  border: 1px solid #cfcfcf;
  width: 17px;
  height: 17px;
  top: 0px;
  left: -14px;
}
.form-wrap form label[for]:after {
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  filter: alpha(opacity=0);
  opacity: 0;
  content: "";
  position: absolute;
  width: 9px;
  height: 5px;
  background-color: transparent;
  top: 4px;
  left: -10px;
  border: 3px solid #DA2535;
  border-top: none;
  border-right: none;
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
.form-wrap .help-text {
  margin-top: 0.6em;
}
.form-wrap .help-text p {
  text-align: center;
  font-size: 14px;
}
</style>