<template>
  <div class="w-full flex justify-center bg-lightGray pt-10 space-x-[106px] sm:space-x-0 sm:space-y-10 sm:flex-col sm:px-5 sm:items-center">
    <div class="flex flex-col max-w-[504px] w-full pt-[32px] sm:items-center">
      <span class="mb-2 font-bold text-black text-4xl sm:text-2xl">Заказывайте в приложении</span>
      <span class="mb-6 text-black-500 text-xl font-medium sm:text-sm">Вся информация под рукой в приложениии</span>
      <div class="flex items-center space-x-[12px] sm:justify-center">
        <img class="w-[179px] sm:max-h-[44px] sm:flex-1 sm:w-full" src="/blocks/download/appStore.png" alt="">
        <img class="w-[179px] sm:max-h-[44px] sm:flex-1 sm:w-full" src="/blocks/download/googlePlay.png" alt="">
      </div>
    </div>
    <img class="w-[270px]" src="/blocks/download/phone.png" alt="">
  </div>
</template>

<script>
export default {
  name: "BiDownload"
}
</script>