<template>
  <div class="sticky top-0 w-full flex items-center justify-center bg-white h-[60px] z-40">
    <div class="flex items-center justify-between w-full max-w-desktop-header px-10 py-2.5">
      <div class="flex-1">
        <img class="h-[29px]" src="BI-logo.svg" alt="BeerInsiders"/>
      </div>
      <div class="flex-1 flex items-center justify-center space-x-6 text-black">
        <a href="">Каталог</a>
        <a href="">Клиентам</a>
        <a href="">Что за люди</a>
        <a href="">BI app</a>
        <a href="">Контакты</a>
      </div>
      <div class="flex-1 flex items-center justify-end space-x-4">
        <button class="flex justify-center items-center w-10 h-10 bg-lightGray3 rounded-full">
          <img class="w-6 h-6" src="/menuIcons/cart.svg" alt="">
        </button>
        <button class="flex justify-center items-center w-10 h-10 bg-lightGray3 rounded-full">
          <img class="w-6 h-6" src="/menuIcons/search.svg" alt="">
        </button>
        <button class="flex justify-center items-center h-10 bg-lightGray3 rounded-full space-x-3 px-6">
          <span class="text-black">Личный кабинет</span>
          <img class="w-6 h-6" src="/menuIcons/cart.svg" alt="">
        </button>
      </div>
    </div>
  </div>
  <!-- <div class="bg-black w-full">
  <div class="container-fluid">
    <b-navbar toggleable="lg" type="light" variant="light">

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>

        <b-navbar-brand href="/" class="col-3 biBrand">
          <img class="logo" src="BI-logo.svg" alt="BeerInsiders"/>
        </b-navbar-brand>

        <b-navbar-nav class="col-6 justify-content-center">
              <b-nav-item href="/about_us">
                <p class="BiMenuItem">О нас</p>
              </b-nav-item>
              <b-nav-item href="/catalog">
                <p class="BiMenuItem">Каталог</p>
              </b-nav-item>
              <b-nav-item href="/clients">
                <p class="BiMenuItem">Клиентам</p>
              </b-nav-item>
              <b-nav-item href="/distributors">
                <p class="BiMenuItem">Поставщикам</p>
              </b-nav-item>
              <b-nav-item href="/contacts">
                <p class="BiMenuItem">Контакты</p>
              </b-nav-item>
            </b-navbar-nav>

        <b-navbar-nav class="col-3 row">
          <b-nav-item class="col-2">
            <img class="right-menu-img" src="search.svg" alt="search"/>
          </b-nav-item>
          <b-nav-item class="col-2">
            <img href="/cart" class="right-menu-img" src="cart.svg" alt="cart"/>
          </b-nav-item>
          <b-nav-item class="col-8">
            <bi-button

            >
              Личный кабинет
              <img class="img-user" src="User.svg" alt="o_0"/>
            </bi-button>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
  </div> -->
</template>

<script>
// import BiButton from "@/components/UI/BiButton.vue";

export default {
  name: "Bi-Header",
  // components: {
  //   BiButton,

  // }
}
</script>

<style scoped>
.biBrand {
  align-items: start !important;
}

.img-user {
  width: 20px;
}

.right-menu-img {
  height: 30px;
  width: 30px;
}
.BiMenuItem {
  font-family: 'Rubik', sans-serif;
}

</style>
