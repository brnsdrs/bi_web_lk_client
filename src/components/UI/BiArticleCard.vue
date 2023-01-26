<template>
  <div :style="{backgroundImage:'url(/blocks/practice/training.png)'}" class="relative overflow-hidden flex flex-col justify-between flex-1 h-[418px] max-w-[378px] sm:h-[327px] sm:max-w-full bg-black rounded-xl">
          <div class="flex justify-end p-3 z-10">
            <div class="bg-white-200 rounded-[100px] px-4 py-[12px] text-[18px] leading-[18px] text-white">Услуга</div>
          </div>
          <div class="flex flex-col min-h-[192px] px-4 pb-[53px] space-y-2 z-10">
            <span class="text-xl text-white font-semibold">Обучение персонала</span>
            <span class="text-sm text-white-800 leading-[17px]">Поможем создать сбалансированную пивную карту исходя из формата заведения, а также проведем обучение персонала по новому ассортименту пива. Грамотный персонал — залог успешных продаж.</span>
          </div>
          <div class="absolute top-0 left-0 right-0 bottom-0 card-mask-gradient " />
        </div>
</template>
<script>
export default {
  name: "BiArticleCard"
}
</script>
