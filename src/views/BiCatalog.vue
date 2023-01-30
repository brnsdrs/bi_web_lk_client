<template>
  <div class="flex w-full h-full max-w-desktop-main-content overflow-hidden">
    <BiSidebar/>
    <div class="flex flex-col p-[28px] w-full max-w-[calc(100vw-255px)] space-y-6">
      <!-- catalog title -->
      <div class="flex items-center justify-start space-x-[15px] text-[40px] leading-[47px] font-semibold px-[12px]">
        <span class="text-black">Title</span>
        <span class="text-black-500">1234</span>
      </div>
      <!-- catalog filters -->

      <!-- catalog -->
      <div class="flex flex-wrap items-center justify-start overflow-auto">
          <div class="p-3">
            <product-card></product-card>
          </div>
          <div class="p-3">
            <product-card></product-card>
          </div>
          <div class="p-3">
            <product-card></product-card>
          </div>
          <div class="p-3">
            <product-card></product-card>
          </div>
      </div>
      
    </div>
  </div>  
</template>

<script>
import BiSidebar from "@/components/BiSidebar.vue";
import ProductCard from "@/components/UI/BiProductCard.vue";



export default {
  name: "BiCatalog",
  components: {
    ProductCard,
    BiSidebar
  },
}
</script>

<style scoped>
.biSidebarContainer {
  min-width: 300px;
  background-color: #333333;
}
.biCatalogBody{
  min-width: 300px;
  background-color: aquamarine;
}
</style>
