<template>
  <header class="l-header" id="header">
    <nav class="nav bd-container">
      <a href="#" class="nav__logo"> MakeUPG</a>
      <div
        class="nav__menu"
        :class="this.showMobileMenu ? 'show-menu' : ''"
        id="nav-menu"
      >
        <ul class="nav-list">
          <li class="nav__item">
            <router-link to="/" exact-active-class="active__link">
              <a  
                href=""
                class="nav__link"
                
                >Home</a
              ></router-link
            >
          </li>
          <li class="nav__item">
            <router-link to="/products" exact-active-class="active__link"
              ><a
                href="#share"
                class="nav__link"
               
              
                >Products</a
              ></router-link
            >
          </li>
          <li class="nav__item">
            <router-link to="/#decoration" exact-active-class="active__link"
              ><a  
                href=""
                class="nav__link"
               
                >Categories</a
              ></router-link
            >
          </li>
          <li class="nav__item">
            <router-link to="/sign-in" exact-active-class="active__link"
              ><a  
                href=""
                class="nav__link"
               
                >Login</a
              ></router-link
            >
          </li>
          <router-link to="/cart" exact-active-class="active__link"
            ><li>
              <i
                class="bx bx-cart cart-icon change-theme"
                id="theme-button"
              ></i></li
          ></router-link>
        </ul>
      </div>

      <div class="cart-icon fade-icon" id="nav-toggle" @click="showMenu()">
        <i class="bx bx-menu"></i>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      showMobileMenu: false,
     
    };
  },
  methods: {
    showMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
  },
};
</script>

<style>
.cart-icon {
  cursor: pointer;
  font-size: 25px;
  margin-left: 20px;
}
</style>