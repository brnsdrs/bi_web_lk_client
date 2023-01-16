<template>
  <div>
    <BiHeader/>
    <BiCarousel/>
    <BiCatalog/>
    <BiPartners/>
    <BiNewProduct/>
    <BiArticles/>
    <BiDownload/>
    <BiFooter/>
  </div>
</template>

<script>
import Vue from 'vue'
import { BootstrapVue, IconsPlugin, CardPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './main.scss'
import BiHeader from "@/components/BiHeader.vue";
import BiCarousel from "@/components/BiCarousel.vue";
import BiCatalog from "@/components/BiCatalog.vue";
import BiPartners from "@/components/BiPartners.vue";
import BiNewProduct from "@/components/BiNewProduct.vue";
import BiArticles from "@/components/BiArticles.vue";
import BiDownload from "@/components/BiDownload.vue";
import BiFooter from "@/components/BiFooter.vue";

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(CardPlugin)

export default {
  name: 'App',
  components: {
    BiHeader,
    BiCarousel,
    BiCatalog,
    BiPartners,
    BiNewProduct,
    BiArticles,
    BiDownload,
    BiFooter
  }
}
</script>

<style>

</style>