<template>
  <div class="biSidebar">
    <div class="row">
      <bi-button class="butt">d</bi-button>
      <bi-button class="butt">d</bi-button>
      <bi-button class="butt">d</bi-button>
      <bi-button class="butt">d</bi-button>
      <bi-button class="butt">d</bi-button>

    </div>
  </div>
</template>

<script>

import BiButton from "@/components/UI/BiButton.vue";

export default {
  name: "BiSidebar",
  components: {
    BiButton
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