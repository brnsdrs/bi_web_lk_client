<template>
 <div class="w-full flex justify-center items-center py-[100px] bg-lightGray sm:px-3 sm:pt-[70px] sm:pb-[36px]">
    <div class="max-w-desktop-full sm:max-w-full flex items-center flex-col w-full space-y-10">
      <div class="flex flex-col items-center text-center max-w-[727px] w-full">
        <span class="font-bold text-black text-4xl mb-[12px] sm:text-2xl">
          Новинки
        </span>
        <span class="text-black-500 text-xl font-medium sm:text-sm">
          Самые последние поставки и новинки в прямом эфире со склада
        </span>
      </div>
      <!-- cards -->
      <div class="flex w-full items-center justify-center space-x-4 sm:space-x-0 sm:gap-3 sm:grid sm:grid-cols-2">
        <bi-product-card/>
        <bi-product-card/>
        <bi-product-card/>
        <bi-product-card/>
        <bi-product-card/>
      </div>
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