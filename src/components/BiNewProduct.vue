<template>
 <div class="w-full flex justify-center items-center py-[100px] bg-lightGray">
    <div class="max-w-desktop-full flex items-center flex-col w-full space-y-10">
      <div class="flex flex-col items-center text-center max-w-[727px] w-full">
        <span class="font-bold text-black text-4xl mb-[12px]">
          Новинки
        </span>
        <span class="text-black-500 text-xl font-medium">
          Самые последние поставки и новинки в прямом эфире со склада
        </span>
      </div>
      <!-- cards -->
      <div class="flex w-full items-center justify-center space-x-4">
        <div class="flex flex-col space-y-2.5 h-[338px] max-w-[212px] bg-white rounded-3xl flex-1 px-5 pt-5 pb-3">
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
            <button class="w-full flex items-center justify-center border border-lightGreen text-lightGreen rounded-[30px] py-2.5">
              В корзину
            </button>
          </div>
        </div>
        <div class="flex flex-col space-y-2.5 h-[338px] max-w-[212px] bg-white rounded-3xl flex-1 px-5 pt-5 pb-3">
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
            <button class="w-full flex items-center justify-center border border-lightGreen text-lightGreen rounded-[30px] py-2.5">
              В корзину
            </button>
          </div>
        </div>
        <div class="flex flex-col space-y-2.5 h-[338px] max-w-[212px] bg-white rounded-3xl flex-1 px-5 pt-5 pb-3">
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
            <button class="w-full flex items-center justify-center border border-lightGreen text-lightGreen rounded-[30px] py-2.5">
              В корзину
            </button>
          </div>
        </div>
      </div>
    </div>
 </div>
  <!-- <div class="row newMainProduct">
    <div class="col-12 newMainCol">
      <div class="biNewsHeader">
        <h3>Новинки</h3>
        <p>Самые последние поставки и новинки в прямом эфире со склада</p>
      </div>
      <b-card-group class="cardGroup">
        <bi-product-card/>
        <bi-product-card/>
        <bi-product-card/>
        <bi-product-card/>
      </b-card-group>
    </div>
  </div> -->
</template>

<script>

// import BiProductCard from "@/components/UI/BiProductCard.vue";

export default {
  name: "newProduct",
  // components: {
  //   BiProductCard
  // }
}
</script>

<style scoped>

</style>