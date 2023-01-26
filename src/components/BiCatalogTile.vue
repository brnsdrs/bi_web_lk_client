<template>
<div class="w-full flex items-center justify-center">
  <div class="flex flex-col items-center justify-center w-full max-w-desktop-full sm:max-w-full space-y-10">
    <div class="grid grid-cols-4 gap-4 w-full sm:grid-cols-2">
      <div class="relative flex flex-col justify-between items-start px-[30px] py-10 row-span-2 col-span-2 bg-lightGray rounded-xl min-h-[380px] sm:min-h-[158px] sm:row-span-1 sm:col-span-1">
        <div class="flex items-center space-x-2 text-xl font-bold">
          <span class="text-black">Пиво</span>
          <span class="text-black-400">345 позиции</span>
        </div>
        <div class="bg-white p-3 text-black font-semibold rounded-[8px]">от 245 ₽ </div>
        <img class="absolute right-0 top-0 sm:hidden" src="/blocks/catalog/bottles.png" alt="bottles">
      </div>
      <div class="flex flex-col justify-between items-start px-[30px] py-10 bg-lightGray rounded-xl min-h-[179px] sm:min-h-[158px] sm:row-span-1 sm:col-span-1">
        <div class="flex items-center space-x-2 text-xl font-bold">
          <span class="text-black">Кега</span>
        </div>
        <div class="bg-white p-3 text-black font-semibold rounded-[8px]">от 245 ₽ </div>
      </div>
      <div class="px-[30px] py-10 bg-lightGray rounded-xl min-h-[179px] sm:min-h-[158px] sm:row-span-1 sm:col-span-1">lit</div>
      <div class="px-[30px] py-10 row-span-2 col-span-2 bg-lightGray rounded-xl min-h-[380px] sm:min-h-[158px] sm:row-span-1 sm:col-span-1">big</div>
      <div class="px-[30px] py-10 bg-lightGray rounded-xl min-h-[179px] sm:min-h-[158px] sm:row-span-1 sm:col-span-1">lit</div>
      <div class="px-[30px] py-10 bg-lightGray rounded-xl min-h-[179px] sm:min-h-[158px] sm:row-span-1 sm:col-span-1">lit</div>
    </div>
    <button class="bg-lightGreen py-[13px] px-[15px] rounded-xl text-white font-semibold"> Подробнее о компании </button>
  </div>
</div>
  
</template>

<script>
// import BiButton from "@/components/UI/BiButton.vue";

export default {
  name: "BiCatalog",
  // components: {
  //   BiButton
  // }
}
</script>