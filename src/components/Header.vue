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
            <router-link to="/">
              <a   @click="
                  itemActive = {
                    home: true,
                    products: false,
                    category: false,
                    login: false,
                  }
                "
                href=""
                class="nav__link"
                :class="itemActive.home ? 'active-link' : ''"
                >Home</a
              ></router-link
            >
          </li>
          <li class="nav__item">
            <router-link to="/products"
              ><a
                href="#share"
                class="nav__link"
                :class="itemActive.products ? 'active-link' : ''"
                @click="
                  itemActive = {
                    home: false,
                    products: true,
                    category: false,
                    login: false,
                  }
                "
                >Products</a
              ></router-link
            >
          </li>
          <li class="nav__item">
            <router-link to="/#decoration"
              ><a   @click="
                  itemActive = {
                    home: false,
                    products: false,
                    category: true,
                    login: false,
                  }
                "
                href=""
                class="nav__link"
                :class="itemActive.category ? 'active-link' : ''"
                >Categories</a
              ></router-link
            >
          </li>
          <li class="nav__item">
            <router-link to="/sign-in"
              ><a   @click="
                  itemActive = {
                    home: false,
                    products: false,
                    category: false,
                    login: true,
                  }
                "
                href=""
                class="nav__link"
                :class="itemActive.login ? 'active-link' : ''"
                >Login</a
              ></router-link
            >
          </li>
          <router-link to="/cart"
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
      itemActive: {
        home: true,
        products: false,
        category: false,
        login: false,
      },
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