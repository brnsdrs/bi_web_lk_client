<template>
  <div class="articleCard">
    <div class="articleLabel">
      <span>Услуга</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "BiArticleCard",
  data() {

  }
}
</script>

<style scoped>
.articleLabel {
  width: 100px;
  height: 50px;
  align-items: center;
  line-height: 50px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(2px);
  border-radius: 30px;
}

.articleLabel span {
   color: white;
  font-weight: bold;
}
</style>