<template>
  <div class="w-full flex justify-center items-center py-[100px] bg-white">
    <div class="max-w-desktop-full flex items-center flex-col w-full space-y-10">
      <div class="flex flex-col items-center text-center max-w-[727px] w-full">
        <span class="font-bold text-black text-4xl mb-[12px]">
          Что на практике
        </span>
        <span class="text-black-500 text-xl font-medium">
          Наш стиль — экспертиза всей цепочки торговли. Пивные инсайдеры каждый месяц проходят обучение у сомелье, анализируют рынок и предлагают рабочие решения.
        </span>
      </div>
      <!-- cards -->
      <div class="flex items-center space-x-3 w-full">
        <div :style="{backgroundImage:'url(/blocks/practice/training.png)'}" class="relative overflow-hidden flex flex-col justify-between flex-1 h-[418px] max-w-[378px] bg-black rounded-xl">
          <div class="flex justify-end p-3 z-10">
            <div class="bg-white-200 rounded-[100px] px-4 py-[12px] text-[18px] leading-[18px] text-white">Услуга</div>
          </div>
          <div class="flex flex-col min-h-[192px] px-4 pb-[53px] space-y-2 z-10">
            <span class="text-xl text-white font-semibold">Обучение персонала</span>
            <span class="text-sm text-white-800 leading-[17px]">Поможем создать сбалансированную пивную карту исходя из формата заведения, а также проведем обучение персонала по новому ассортименту пива. Грамотный персонал — залог успешных продаж.</span>
          </div>
          <div class="absolute top-0 left-0 right-0 bottom-0 card-mask-gradient " />
        </div>
        <div :style="{backgroundImage:'url(/blocks/practice/expertise.png)'}" class="relative overflow-hidden flex flex-col justify-between flex-1 h-[418px] max-w-[378px] bg-black rounded-xl">
          <div class="flex justify-end p-3 z-10">
            <div class="bg-white-200 rounded-[100px] px-4 py-[12px] text-[18px] leading-[18px] text-white">Услуга</div>
          </div>
          <div class="flex flex-col min-h-[192px] px-4 pb-[53px] space-y-2 z-10">
            <span class="text-xl text-white font-semibold">Экспертиза оборудования</span>
            <span class="text-sm text-white-800 leading-[17px]">Знаем как, зачем и почему должна выглядеть идеальная система для работы и сможем должным образом ее построить, настроить и поддерживать в отличном состоянии.</span>
          </div>
          <div class="absolute top-0 left-0 right-0 bottom-0 card-mask-gradient " />
        </div>
        <div :style="{backgroundImage:'url(/blocks/practice/distribution.png)'}" class="relative overflow-hidden flex flex-col justify-between flex-1 h-[418px] max-w-[378px] bg-black rounded-xl">
          <div class="flex justify-end p-3 z-10">
            <div class="bg-white-200 rounded-[100px] px-4 py-[12px] text-[18px] leading-[18px] text-white">Услуга</div>
          </div>
          <div class="flex flex-col min-h-[192px] px-4 pb-[53px] space-y-2 z-10">
            <span class="text-xl text-white font-semibold">Дистрибуция напитков</span>
            <span class="text-sm text-white-800 leading-[17px]">Собственная служба доставки и склад в Санкт-Петербурге и Москве для хранения пива и сидра позволяет нам работать по всей России. Чтобы начать сотрудничество достаточно заключить — договор поставки. Обычно это не занимает больше трех дней.</span>
          </div>
          <div class="absolute top-0 left-0 right-0 bottom-0 card-mask-gradient " />
        </div>
      </div>
      <!-- button -->
      <button class="bg-lightGreen py-[13px] px-[15px] rounded-xl text-white font-semibold"> Подробнее о компании </button>
    </div>
  </div>
</template>

<script>
// import BiArticleCard from "@/components/UI/BiArticleCard.vue";
// import BiButton from "@/components/UI/BiButton.vue";

export default {
  name: "BiArticles",
  // components: {BiButton, BiArticleCard}
}
</script>

<style scoped>
  .card-mask-gradient {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%);
  }
</style>