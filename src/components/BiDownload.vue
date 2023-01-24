<template>
  <div class="w-full flex justify-center bg-lightGray pt-10 space-x-[106px]">
    <div class="flex flex-col w-[504px] pt-[32px]">
      <span class="mb-2 font-bold text-black text-4xl">Заказывайте в приложении</span>
      <span class="mb-6 text-black-500 text-xl font-medium">Вся информация под рукой в приложениии</span>
      <div class="flex items-center space-x-[12px]">
        <img class="w-[179px] h-[58px]" src="/blocks/download/appStore.png" alt="">
        <img class="w-[179px] h-[58px] " src="/blocks/download/googlePlay.png" alt="">
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