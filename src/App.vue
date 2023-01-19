<template>
  <div id="app">
    <BiHeader/>
    <router-view/>
    <BiFooter/>
  </div>
</template>

<script>
import Vue from 'vue'
import vueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin, CardPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './main.scss'
import BiFooter from "@/components/BiFooter.vue";
import BiHeader from "@/components/BiHeader.vue";


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(CardPlugin)
Vue.use(vueRouter)

export default {
  name: 'App',
  components: {
    BiHeader,
    BiFooter,
  }
}
</script>

<style>

</style>