<template>
  <div id="app">
    <Header />
  
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins&family=Rajdhani&family=Russo+One&display=swap");
/*===========Variables css===========*/
/*=======Colors=======*/
/*=======Font and Typography=======*/
/*======Font Weight ========*/
/*===========Variables css===========*/
/*=======Colors=======*/
/*=======Font and Typography=======*/
/*======Font Weight ========*/
/*------Functions For Fonts && Buttons------*/
/*=========== HOME ===========*/
.home__data {
  text-align: center;
}

.home__container {
  row-gap: 0.5rem;
}

.home__img {
  width: 280px;
  -ms-grid-column-align: center;
  justify-self: center;
}

.home__title {
  font-family: "Russo One", sans-serif;
  font-weight: 400;
  font-size: 24px;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.home__description {
  margin-bottom: 1.5rem;
  font-family: "Rajdhani", sans-serif;
  font-weight: 400;
  font-size: 17px;
}

/*=========== BUTTONS =========**/
.button {
  display: inline-block;
  background: #da2535;
  color: #fff;
  padding: 0.8rem 1.8rem;
  border-radius: 2.6rem;
  font-weight: 600;
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}

.button:hover {
  background: #c42130;
}

.button-link {
  background: none;
  padding: 0.8rem;
  color: #da2535;
}

.button-link:hover {
  background: transparent;
  color: #c42130;
}

/*========== SHARE ========*/
.share__data {
  text-align: center;
}

.share__data .section-title-center {
  font-family: "Russo One", sans-serif;
  font-weight: 400;
  font-size: 24px;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.share__data .share__description {
  margin-bottom: 1.5rem;
  font-family: "Rajdhani", sans-serif;
  font-weight: 400;
  font-size: 17px;
}

.share__img {
  width: 280px;
  -ms-grid-column-align: center;
  justify-self: center;
}

/*======== Decoration ========*/
.section-title {
  font-family: "Russo One", sans-serif;
  font-weight: 400;
  font-size: 22px;
  text-transform: uppercase;
  letter-spacing: 1px;
  line-height: 2.4rem;
}

.decoration__container {
  -ms-grid-columns: (minmax(220px, 1fr)) [auto-fit];
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.decoration__container .decoration__data {
  text-align: center;
  padding: 1rem 1rem 2rem;
  background: #fff;
  -webkit-box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}

.decoration__container .decoration__data:hover {
  -webkit-box-shadow: 0 22px 30px -6px rgba(0, 0, 0, 0.2),
    0 2px 20px -7px rgba(0, 0, 0, 0.05);
  box-shadow: 0 22px 30px -6px rgba(0, 0, 0, 0.2),
    0 2px 20px -7px rgba(0, 0, 0, 0.05);
}

.decoration__container .decoration__data .decoration__img {
  width: 180px;
}

.decoration__container .decoration__data .decoration__title {
  font-family: "Russo One", sans-serif;
  font-weight: 400;
  font-size: 19px;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/*========== ACCESSORY ========*/
.accessory__container {
  -ms-grid-columns: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  padding-bottom: 2rem;
}

.accessory__container .accessory__content {
  cursor: pointer;
  position: relative;
  display: -ms-grid;
  display: grid;
  padding: 0.25rem 0.75rem 0.75rem;
  background: #fff;
  -webkit-box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  border-radius: 1rem;
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}

.accessory__container .accessory__content:hover {
  -webkit-box-shadow: 0 22px 30px -6px rgba(0, 0, 0, 0.2),
    0 2px 20px -7px rgba(0, 0, 0, 0.05);
  box-shadow: 0 22px 30px -6px rgba(0, 0, 0, 0.2),
    0 2px 20px -7px rgba(0, 0, 0, 0.05);
}

.accessory__container .accessory__content .accessory__img {
  width: 110px;
  -ms-grid-column-align: center;
  justify-self: center;
  margin-bottom: 0.25rem;
}

.accessory__container .accessory__content .accessory__title,
.accessory__container .accessory__content .accessory__category {
  text-align: center;
}

.accessory__container .accessory__content .accessory__title {
  font-family: "Russo One", sans-serif;
  font-weight: 400;
  font-size: 18px;
}

.accessory__container .accessory__content .accessory__category {
  font-family: "Rajdhani", sans-serif;
  font-weight: 500;
  font-size: 17px;
  margin-bottom: 0.5rem;
  color: #8f8a8a;
}

.accessory__container .accessory__content .accessory__price {
  font-family: "Russo One", sans-serif;
  font-weight: 400;
  font-size: 16px;
  text-transform: uppercase;
}

.accessory__container .accessory__content .accessory__button {
  position: absolute;
  bottom: 0;
  right: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  font-size: 1.25rem;
  padding: 0.5rem 0.625rem;
  border-radius: 1rem 0 1rem 0;
}

/*============== SEND GIFT ============*/
.send {
  background: #de3b49;
  margin: 20px 1.5rem;
}

.send .send__title,
.send .send__description {
  color: #fff;
}

.send .send__title {
  font-family: "Russo One", sans-serif;
  font-weight: 400;
  font-size: 22px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.send .send__description {
  font-family: "Rajdhani", sans-serif;
  font-weight: 500;
  font-size: 17px;
  text-align: center;
  margin-bottom: 2rem;
}

.send .send__direction {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;

  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background: #fff;
  padding: 0.3rem;
  border-radius: 35px;
}

.send .send__direction .send__input {
  width: 100%;
  outline: none;
  border: none;
  font-family: "Russo One", sans-serif;
  font-weight: 400;
  font-size: 15px;
  color: #5b5757;
  text-align: center;
  border-radius: 35px;
  min-height: 113px;
}

.send .send__direction .send__input::-webkit-input-placeholder {
  font-family: "Russo One", sans-serif;
  font-weight: 500;
  font-size: 15px;
  text-transform: uppercase;
}

.send .send__direction .send__input:-ms-input-placeholder {
  font-family: "Russo One", sans-serif;
  font-weight: 500;
  font-size: 15px;
  text-transform: uppercase;
}

.send .send__direction .send__input::-ms-input-placeholder {
  font-family: "Russo One", sans-serif;
  font-weight: 500;
  font-size: 15px;
  text-transform: uppercase;
}

.send .send__direction .send__input::placeholder {
  font-family: "Russo One", sans-serif;
  font-weight: 500;
  font-size: 15px;
  text-transform: uppercase;
}

.send .send__direction i {
  font-size: 23px;
}

.send .send__direction .send__btn {
  padding-left: 45px;
  padding-right: 45px;
}

.send .send__direction .send__img {
  width: 280px;
  -ms-grid-column-align: center;
  justify-self: center;
}

/*===========Variables css===========*/
/*=======Colors=======*/
/*=======Font and Typography=======*/
/*======Font Weight ========*/
/*------Functions For Fonts && Buttons------*/
/*============ FOOTER ============*/


.footer__container {
  -ms-grid-columns: (minmax(220px, 1fr)) [auto-fit];
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.footer__container .footer__logo {
  font-family: "Russo One", sans-serif;
  font-weight: 900;
  font-size: 22px;
  text-transform: uppercase;
  color: #161212;
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}

.footer__container .footer__logo:hover {
  color: #da2535;
}

.footer__container .footer__content .footer__title {
  margin-bottom: 1rem;
}

.footer__container .footer__content .footer__logo,
.footer__container .footer__content .footer__title {
  font-size: 1.125rem;
}

.footer__container .footer__content .footer__link {
  font-family: "Rajdhani", sans-serif;
  font-weight: 400;
  font-size: 17px;
  text-transform: uppercase;
  display: inline-block;
  margin-bottom: 0.75rem;
  color: #5b5757;
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}

.footer__container .footer__content .footer__link:after {
  content: "";
  width: 0%;
  height: 4px;
  display: block;
  margin: 2px auto;
  background: #da2535;
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
  border-radius: 18px;
}

.footer__container .footer__content .footer__link:hover:after {
  color: #da2535;
  width: 100%;
}

.footer__container .footer__content .footer__social {
  font-size: 1.5rem;
  color: #161212;
  margin-right: 1.5rem;
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}

.footer__container .footer__content .footer__social:hover {
  color: #da2535;
}

.footer__copy {
  text-align: center;
  margin-top: 1.5rem;
  color: #8f8a8a;
  font-family: "Rajdhani", sans-serif;
  font-weight: 400;
  font-size: 17px;
  text-transform: uppercase;
}

.footer__copy span {
  color: #de3b49;
}

/*=============START STYLING==============*/
* {
  padding: 0;
  margin: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

/*------Functions For Fonts && Buttons------*/
a,
a::before,
a:after {
  text-decoration: none;
}

ul {
  list-style: none;
  padding: 0;
}

/*=======BASE ========*/
*,
::before,
::after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

/*====== VARIABLE DARK THEME =========*/
/*========= BUTTON DARK/LIGHT ==========*/
.change-theme {
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: #161212;
  font-size: 2rem;
  cursor: pointer;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 3rem 0 0 0;
  font-family: "poppins", sans-serif;
  font-size: 0.938rem;
  background: #fefbfb;
  color: #5b5757;
  line-height: 1.6;
}

h1,
h2,
h3,
ul,
p {
  margin: 0;
}

h1,
h2,
h3 {
  font-weight: 600;
  color: #161212;
}

img {
  max-width: 100%;
  height: auto;
}

/*======== GLOBAL CLASS=======*/
.section {
  padding: 4rem 0 2rem;
}

.section-title,
.section-title-center {
  font-size: 1.25rem;
  color: #161212;
  text-align: center;
  margin-bottom: 1.5rem;
}

/*============LAYOUT==========*/
.l-main {
  overflow: hidden;
}

.bd-container {
  max-width: 968px;
  width: calc(100% - 3rem);
  margin-left: 1.5rem;
  margin-right: 1.5rem;
}

.bd-grid {
  display: -ms-grid;
  display: grid;
  gap: 1.5rem;
}

.l-header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background: #fefbfb;
}

/*======NAV======*/
.nav {
  height: 4rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin: 0 auto;
}

.nav__toggle {
  display: none;
  visibility: hidden;
}

@media screen and (max-width: 768px) {
  .nav__menu {
    position: fixed;
    top: -100%;
    left: 0;
    right: 0;
    width: 90%;
    margin: 0 auto;
    padding: 1.7rem 0 0;
    text-align: center;
    background: #fefbfb;
    -webkit-transition: 0.4s ease-in-out;
    transition: 0.4s ease-in-out;
    -webkit-box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    z-index: 100;
  }
  .nav__menu .nav-list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin: 0 auto;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .nav__menu .nav-list .nav__item {
    margin-bottom: 1.4rem;
  }
  .nav__toggle {
    display: block;
    visibility: visible;
  }
}

.nav__link,
.nav__logo,
.nav__toggle {
  color: #161212;
  font-weight: 600;
}

.nav__logo {
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
  font-family: "Russo One", sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 19px;
  letter-spacing: 1px;
}

.nav__logo:hover {
  color: #da2535;
}

.nav__item {
  margin-right: 1.7rem;
}

.nav__link {
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
  font-family: "Rajdhani", sans-serif;
  font-weight: 400;
  font-size: 17px;
  text-transform: uppercase;
  color: #000;
}

.nav__link:hover {
  color: #da2535;
}

.nav__toggle {
  font-size: 1.3rem;
  cursor: pointer;
}

/*----SHOW MENU----*/
.show-menu {
  top: 5rem;
}

/*----ACTIVE MENU LINKS----*/
.nav__item {
  position: relative;
}
.active__link::before{
    content: "";
  position: absolute;
  bottom: -0.5rem;
  left: 0;
  width: 100%;
  height: 5px;
  background: #da2535;
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}
.nav__item:active::before {
  content: "";
  position: absolute;
  bottom: -0.5rem;
  left: 0;
  width: 100%;
  height: 5px;
  background: #da2535;
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}

.active-link:hover:before {
  background: #da2535;
}

/*--------SCROLL TOP-----*/
.scrollTop {
  position: fixed;
  right: 2rem;
  bottom: 1.8rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background: rgba(218, 37, 53, 0.7);
  border-radius: 100%;
  z-index: 1000;
  -webkit-transition: 0.4s ease-in-out;
  transition: 0.4s ease-in-out;
  visibility: hidden;
  opacity: 1;
  cursor: pointer;
}

.scrollTop:hover {
  background: #da2535;
  color: #fff;
}

.scrollTop .scrolltop_icon {
  font-size: 1.5rem;
  color: #fefbfb;
}

.nav-list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.show-scroll {
  visibility: visible;
  bottom: 1.5rem;
}

.scroll-header {
  -webkit-transition: 300ms ease-in-out;
  transition: 300ms ease-in-out;
  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
}

/*============ MEDIA QUERIES ==========*/
@media screen and (max-width: 359px) {
  .home__img,
  .share__img,
  .send__img {
    width: 100%;
  }
}

@media screen and (min-width: 576px) {
  .home__container,
  .share__container,
  .send__container {
    -ms-grid-columns: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .home__container {
    padding: 5rem 0 0;
  }
  .home__img {
    -webkit-box-ordinal-group: 2;
    -ms-flex-order: 1;
    order: 1;
  }
  .section-title-center,
  .share__data,
  .send__description {
    text-align: initial;
  }
  .home__img,
  .share__img,
  .send__img {
    width: 100%;
  }
  .share__img {
    -webkit-box-ordinal-group: 0;
    -ms-flex-order: -1;
    order: -1;
  }
}

@media screen and (min-width: 768px) {
  body {
    margin: 0;
  }
  .section {
    padding-top: 7rem;
  }
  .nav {
    height: calc($header-height + 1.5rem);
  }
  .nav__list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .nav__item {
    margin-left: 2.5rem;
    margin-bottom: 0;
  }
  .nav__toggle {
    display: none;
  }
  .change-theme {
    position: initial;
    margin-left: 2rem;
  }
  .home__container {
    padding: 7rem 2rem 0;
  }
  .share__container {
    padding: 0 2rem;
  }
  .accessory__container {
    -ms-grid-columns: 224px 224px 224px;
    grid-template-columns: 224px 224px 224px;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
  .accessory__content {
    padding: 0.5rem 1.5rem 1.5rem;
  }
  .accessory__img {
    width: 120px;
    margin-bottom: 0.5rem;
  }
  .accessory__title,
  .accessory__category {
    text-align: center;
  }
  .accessory__button {
    padding: 0.75rem;
  }
  .send {
    background: none;
  }
  .send__container {
    background: #de3b49;
    padding: 2rem;
    border-radius: 1.5rem;
  }
  .fade-icon {
    display: none;
  }
}

@media screen and (min-width: 968px) {
  .bd-container {
    margin-left: auto;
    margin-right: auto;
  }
  .home__img,
  .share__img,
  .send__img {
    width: 469px;
  }

  .home__container,
  .share__container,
  .send__container {
    -webkit-column-gap: 5rem;
    column-gap: 5rem;
  }
}
</style>
