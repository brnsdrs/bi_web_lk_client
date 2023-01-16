<template>
<div class="container">
  <div class="row partnersContainer">
    <div class="partners">
      <img src="par-araeta.svg" alt="araeta">
    </div>
    <div class="partners">
      <img src="par-benbel.svg" alt="araeta">
    </div>
    <div class="partners">
      <img src="par-cortina.svg" alt="araeta">
    </div>
    <div class="partners">
      <img src="par-dalDacha.svg" alt="araeta">
    </div>
    <div class="partners">
      <img src="par-novopacre.svg" alt="araeta">
    </div>
  </div>
  <div class="text-center parText">
    НАШ ОПЫТ НАУЧИЛ НАС, КАК ПОДБИРАТЬ ПИВО ИЛИ СИДР ДЛЯ СВОИХ ПАРТНЕРОВ, ЧТОБЫ ИХ ГОСТИ ХОТЕЛИ ЗА НИМ ВОЗВРАЩАТЬСЯ
  </div>
</div>
</template>

<script>

export default {
  name: "BiPartners"
}
</script>

<style scoped>
.container {
  margin-bottom: 50px;
}
.partnersContainer {
  justify-content: center;
}

.partners {
  margin: 5px auto;
  height: 100px;
  line-height: 100px;
  min-width: 207px;
  max-width: 300px;
  background-color: #F4F3F1;
  border-radius: 15px;
  align-content: center;
}

.partners img {
  display: block;
  margin: 15% auto;
}

.parText {
  margin: 20px 10px;
}

</style>