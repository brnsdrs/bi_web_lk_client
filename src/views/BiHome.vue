<template>
  <div class="BiHome">
    <BiCarousel/>
    <BiCatalogTile/>
    <BiPartners/>
    <BiNewProduct/>
    <BiArticles/>
    <BiDownload/>
  </div>
</template>

<script>
import BiCarousel from "@/components/BiCarousel.vue";
import BiCatalogTile from "@/components/BiCatalogTile.vue";
import BiPartners from "@/components/BiPartners.vue";
import BiNewProduct from "@/components/BiNewProduct.vue";
import BiArticles from "@/components/BiArticles.vue";
import BiDownload from "@/components/BiDownload.vue";

export default {
  name: "BiHome",
  components: {
    BiCarousel,
    BiCatalogTile,
    BiPartners,
    BiNewProduct,
    BiArticles,
    BiDownload,
  }
}
</script>

<style scoped>

</style>