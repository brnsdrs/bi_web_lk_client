<template>
 <div class="w-full flex justify-center items-center py-[100px] bg-lightGray">
    <div class="max-w-desktop-full flex items-center flex-col w-full space-y-10">
      <div class="flex flex-col items-center text-center max-w-[727px] w-full">
        <span class="font-bold text-black text-4xl mb-[12px]">
          Новинки
        </span>
        <span class="text-black-500 text-xl font-medium">
          Самые последние поставки и новинки в прямом эфире со склада
        </span>
      </div>
      <!-- cards -->
      <div class="flex w-full items-center justify-center space-x-4 sm:space-x-0 sm:gap-3 sm:grid sm:grid-cols-2">
        <bi-product-card
            v-for="product in PRODUCTS"
            :key="product._id"
            v-bind:product_data="product"
        />
      </div>
    </div>
 </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import BiProductCard from "@/components/UI/BiProductCard.vue";

export default {
  name: "newProduct",
  components: {
    BiProductCard
  },
  methods: {
    ...mapActions([
        'GET_PRODUCTS_FROM_API'
    ])
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
  },
  computed: {
    ...mapGetters([
        'PRODUCTS'
    ])
  }
}
</script>

<style scoped>

</style>
