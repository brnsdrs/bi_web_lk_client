<template>
  <div class="flex flex-col space-y-2.5 h-[338px] w-[212px] bg-white rounded-3xl p-3 hover:drop-shadow-lg cursor-pointer">
          <div class="bg-lightGray h-[136px] w-full rounded-[20px]">
            <!-- img + button -->
          </div>
          <div class="flex justify-between flex-col flex-1 text-xs">
            <div class="flex flex-col text-black space-y-1 mb-2">
              <div class="flex items-center space-x-2 mb-2.5">
                <span class="font-bold text-base leading-[19px]">169.81 ₽</span>
                <span class="line-through text-black-500 text-[12px] leading-[14px]">169.81 ₽</span>
                <div class="bg-purple text-[8px] leading-[9.6px] flex justify-center items-center rounded-[8px] p-1 text-white">-15%</div>
              </div>
              <div class="flex">
                <!-- flag -->
                <span class="font-bold uppercase text-xs">WILL BRAU WEIZEN</span>
              </div>
              <span class="text-xs leading-[14px]">Безалкогольное пшеничное </span>
            </div>
            <div class="flex items-center justify-start space-x-2 text-black-500 ">
              <span>0.5%</span>
              <div class="bg-black-500 w-1 h-1 rounded-full" />
              <span>0,33 мл</span>
              <div class="bg-black-500 w-1 h-1 rounded-full" />
              <span>20 штук</span>
            </div>
            <div class="text-purple mb-2">
              543 шт. в наличии
            </div>
            <button class="w-full flex items-center justify-center border border-lightGreen text-lightGreen rounded-[30px] py-2.5 hover:text-white hover:bg-lightGreen">
              В корзину
            </button>
          </div>
        </div>
</template>

<script>
// import BiButton from "@/components/UI/BiButton.vue";

export default {
  name: "productCard",
  // components: {BiButton},
  props: {
    product_data: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>
