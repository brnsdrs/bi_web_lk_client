<template>
  <div class="BiHome row">
    <div class="col-2">
      <BiSidebar/>
    </div>
    <div class="biCatalogBody col-10">

    </div>
  </div>
</template>

<script>

import BiSidebar from "@/components/BiSidebar.vue";

export default {
  name: "BiCatalog",
  components: {
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