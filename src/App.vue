<template>
  <div id="app">
    <div class="flex flex-col w-screen h-screen overflow-auto">
      <BiHeader/>
      <router-view/>
       <!-- <BiFooter/> -->
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import vueRouter from 'vue-router'
import './main.scss'
// import BiFooter from "@/components/BiFooter.vue";
import BiHeader from "@/components/BiHeader.vue";


Vue.use(vueRouter)

export default {
  name: 'App',
  components: {
    BiHeader,
    // BiFooter,
  }
}
</script>

<style>

</style>