<template>
  <div class="biSidebar">
    <bi-sidebar-row>
    </bi-sidebar-row>
  </div>
</template>

<script>

import BiSidebarRow from "@/components/UI/BiSidebarRow.vue";

export default {
  name: "BiSidebar",
  components: {
    BiSidebarRow
  }
}
</script>

<style scoped>
.biSidebar {
  margin: 0;
  padding: 10%;
}

.butt {
  margin: 20px;
}

</style>
