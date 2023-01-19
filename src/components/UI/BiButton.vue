<template>
  <div>
    <b-button class="bibtn align-content-center">
        <slot class="BiMenuItem"></slot>
    </b-button>
  </div>
</template>

<script>
export default {
  name: "BiButton"
}
</script>

<style scoped>

.bibtn {
  background: #A6D05D;
  border: none;
  min-width: 150px;
  color: white;
}

</style>
