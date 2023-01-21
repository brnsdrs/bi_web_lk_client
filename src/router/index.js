import Vue from 'vue'
import VueRouter from 'vue-router'
import BiHome from "@/views/BiHome.vue";
import BiCatalog from "@/views/BiCatalog.vue";
import BiClients from "@/views/BiClients.vue";
import BiContacts from "@/views/BiContacts.vue";
import BiCart from "@/views/BiCart.vue";
import BiAboutUs from "@/views/BiAboutUs.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: BiHome
  },
  {
    path: '/about_us',
    name: 'about_us',
    component: BiAboutUs
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: BiCatalog
  },
  {
    path: '/clients',
    name: 'clients',
    component: BiClients
  },
  {
    path: '/distributor',
    name: 'distributors',
    component: BiClients
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: BiContacts
  },
  {
    path: '/cart',
    name: 'cart',
    component: BiCart
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
