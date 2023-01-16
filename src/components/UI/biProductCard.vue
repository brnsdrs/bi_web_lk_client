<template>
  <div>
    <b-card class="b-card"
        title="Card Title"
        img-src="newImg.svg"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 15rem;
                min-width: 300px;
              "
    >
      <b-card-text>
        <div class="row">
          <div class="col-6 cardMenu">
            Градус
          </div>
          <div class="col-6">
            AAA
          </div>
        </div>
        <div class="row">
          <div class="col-6 cardMenu">
            Объём
          </div>
          <div class="col-6">
            AAA
          </div>
        </div>
        <div class="row">
          <div class="col-6 cardMenu">
            Количество в коробке
          </div>
          <div class="col-6">
            AAA
          </div>
        </div>
        <div class="row">
          <div class="col-6 cardMenu">
            Наличие
          </div>
          <div class="col-6">
            AAA
          </div>
        </div>
      </b-card-text>
      <bi-button>Подробнее</bi-button>
    </b-card>
  </div>
</template>

<script>
import BiButton from "@/components/UI/BiButton.vue";

export default {
  name: "productCard",
  components: {BiButton}
}
</script>

<style scoped>
.b-card {
  margin: 10px;
  padding: 10px;
}

.cardMenu {
  text-align: start;
  font-size: 12px;
}
</style>