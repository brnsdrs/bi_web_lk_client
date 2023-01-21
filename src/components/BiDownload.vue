<template>
  <div class="banner">
    <div class="container">
      <div class="row">
        <div class="col-8">
          <div class="row">
            <h2>Заказывай в приложении</h2>
          </div>
          <div class="row">
            <span>Вся информация под рукой в приложении</span>
          </div>
          <div class="row">
            <div class="col-6 storeLabel">
              <img src="../../public/appStore.svg" alt="appStore"/>
            </div>
            <div class="col-6 storeLabel">
              <img src="../../public/googlePlay.svg" alt="googlePlay"/>
            </div>
          </div>
        </div>
        <div class="col-4">
          <img src="../../public/phoneImg.svg" alt="phoneImg"/>
        </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "BiDownload"
}
</script>

<style scoped>
.container {
  min-width: 600px;
  max-width: 800px;
}

.storeLabel{
  padding: 0;
  height: 150px;
  display: flex;

}
.banner {
  background-color: #F4F3F1;
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 50px;
  height: 300px;
}

.banner span {
  font-size: 20px;
  font-weight: 500;
  color: gray;
}

.storeLabel img {
  width: 200px;
}

</style>