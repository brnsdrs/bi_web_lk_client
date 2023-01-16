<template>
    <div class="row articleContainer">
      <div class="col-12 articleCol">
        <div class="articleHeader">
          <h3>Что на практике</h3>
          <p>Наш стиль — экспертиза всей цепочки торговли. Пивные инсайдеры каждый месяц проходят обучение у сомелье, анализируют рынок и предлагают рабочие решения.</p>
        </div>
        <b-card-group class="justify-content-center">
          <bi-article-card/>
          <bi-article-card/>
          <bi-article-card/>
        </b-card-group>
      </div>
      <div class="row">
        <bi-button class="catalogButt">Подробнее о компании</bi-button>
      </div>
    </div>
</template>

<script>
import BiArticleCard from "@/components/UI/BiArticleCard.vue";
import BiButton from "@/components/UI/BiButton.vue";

export default {
  name: "BiArticles",
  components: {BiButton, BiArticleCard}
}
</script>

<style scoped>
.articleContainer {
  background-color: white;
  margin: 0;
  padding: 50px;
  justify-content: center;
}

.articleCol {
  padding: 0;
  margin: auto;
  justify-content: center;
  text-align: center;
}

.articleHeader h3 {
  text-align: center;
}

.articleHeader p {
  margin: auto;
  width: 65%;
}

.catalogButt {
  display: block;
  margin: auto;
  color: white;
  width: 200px !important;
}

</style>