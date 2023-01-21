<template>
  <div class="row newMainProduct">
    <div class="col-12 newMainCol">
      <div class="biNewsHeader">
        <h3>Новинки</h3>
        <p>Самые последние поставки и новинки в прямом эфире со склада</p>
      </div>
      <b-card-group class="cardGroup">
        <bi-product-card/>
        <bi-product-card/>
        <bi-product-card/>
        <bi-product-card/>
      </b-card-group>
    </div>
  </div>
</template>

<script>

import BiProductCard from "@/components/UI/BiProductCard.vue";

export default {
  name: "newProduct",
  components: {
    BiProductCard
  }
}
</script>

<style scoped>
.newMainProduct {
  background-color: #F4F3F1;
  margin: 0;
  justify-content: center;
}

.newMainCol {
  justify-content: center;
  text-align: center;
}

.biNewsHeader h3 {
  text-align: center;
  padding-top: 50px;
}

.cardGroup {
  justify-content: center;
}

</style>