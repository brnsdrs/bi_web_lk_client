<template>
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
</template>

<script>
import BiButton from "@/components/UI/BiButton.vue";

export default {
  name: "Bi-Header",
  components: {
    BiButton,

  }
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
