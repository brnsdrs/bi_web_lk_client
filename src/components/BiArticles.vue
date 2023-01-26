<template>
  <div class="w-full flex justify-center items-center py-[100px] bg-white sm:px-3 sm:py-[70px]">
    <div class="max-w-desktop-full max-w-full flex items-center flex-col w-full space-y-10 sm:space-y-3">
      <div class="flex flex-col items-center text-center max-w-[727px] w-full">
        <span class="font-bold text-black text-4xl mb-[12px] sm:text-2xl">
          Что на практике
        </span>
        <span class="text-black-500 text-xl font-medium sm:text-sm">
          Наш стиль — экспертиза всей цепочки торговли. Пивные инсайдеры каждый месяц проходят обучение у сомелье, анализируют рынок и предлагают рабочие решения.
        </span>
      </div>
      <!-- cards -->
      <div class="flex items-center justify-center space-x-3 w-full sm:flex-col sm:space-x-0 sm:space-y-2.5 sm:!mt-[30px]">
        <bi-article-card/>
        <bi-article-card/>
        <bi-article-card/>
      </div>
      <!-- button -->
      <button class="bg-lightGreen py-[13px] px-[15px] rounded-xl text-white font-semibold sm:w-full"> Подробнее о компании </button>
    </div>
  </div>
</template>

<script>
import BiArticleCard from "@/components/UI/BiArticleCard.vue";
// import BiButton from "@/components/UI/BiButton.vue";

export default {
  name: "BiArticles",
  components: {BiArticleCard}
}
</script>

<style scoped>
  .card-mask-gradient {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%);
  }
</style>