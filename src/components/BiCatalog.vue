<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <div class="row">
          <div class="col-12 tileContainer">
            <div class="bigItemCat">
              <img src="cat-beer.svg" alt="beer">
              <h5 class="catTxt font-weight-bold">Пиво</h5>
              <div class="catLabel">
                ot 245
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-6 tileContainer">
            <div class="smItemCat">
              <img src="cat-costers.svg" alt="coaster">
              <h5 class="catTxt font-weight-bold">Костеры</h5>
              <div class="catLabel">
                ot 245
              </div>
            </div>
          </div>
          <div class="col-6 tileContainer">
            <div class="smItemCat">
              <img src="cat-alcohol.svg" alt="alc">
              <h5 class="catTxt font-weight-bold">Алкоголь</h5>
              <div class="catLabel">
                ot 245
              </div>
            </div>
          </div>

        </div>
      </div>
      <div class="col-6">
        <div class="row">
          <div class="col-6 tileContainer">
            <div class="smItemCat">
              <img src="cat-kega.svg" alt="kega">
              <h5 class="catTxt font-weight-bold">Кега</h5>
              <div class="catLabel">
                ot 245
              </div>
            </div>
          </div>
          <div class="col-6 tileContainer">
            <div class="smItemCat">
              <img src="cat-glass.svg" alt="glass">
              <h5 class="catTxt font-weight-bold">Бокалы</h5>
              <div class="catLabel">
                ot 245
              </div>
            </div>
          </div>

        </div>
        <div class="row">
          <div class="col-12 tileContainer">
            <div class="bigItemCat">
              <img src="cat-cidre.svg" alt="cider">
              <h5 class="catTxt font-weight-bold">Сидр</h5>
              <div class="catLabel">
                ot 245
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row vCatalog">
      <bi-button class="catalogButt">В каталог</bi-button>
    </div>
  </div>
</template>

<script>
import BiButton from "@/components/UI/BiButton.vue";

export default {
  name: "BiCatalog",
  components: {
    BiButton
  }
}
</script>

<style scoped>
.container{
  margin-top: 50px;
  margin-bottom: 50px;
}

.tileContainer {
  padding: 10px;
}

.bigItemCat {
  position: relative;
  padding: 0;
  height: 300px;
  min-width: 200px;
  min-height: 200px;
  background-color: #F4F3F1;
  border-radius: 15px;
}

.bigItemCat img {
  position: absolute;
  right: 0;
  top: 5%;
  height: 250px;
  overflow: hidden;
}

.smItemCat {
  height: 150px;
  background-color: #F4F3F1;
  border-radius: 15px;
  min-width: 200px;
}

.smItemCat img {
  position: absolute;
  margin: 10px;
  right: 0;
  top: 10%;
  height: 120px;
}

.vCatalog {
  margin: 10px;
  align-content: center;
}

.catalogButt {
  display: block;
  margin: auto;
  color: white;
  width: 200px !important;
}

.catTxt {
  padding: 20px;
}



</style>