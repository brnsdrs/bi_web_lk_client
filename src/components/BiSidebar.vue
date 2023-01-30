<template>
  <div class="flex flex-col items-start h-full bg-white max-w-desktop-sideBar w-full border-r border-black-100 p-10 flex-shrink-0">
    <div class="flex flex-col justify-start w-full space-y-1">
      <button class="w-full space-x-5 flex items-center p-2.5 rounded-[10px]  hover:bg-lightGray3 group">
        <div class="rounded-full h-[24px] w-[24px] flex items-center justify-center bg-lightGray3 group-hover:bg-white"></div>
        <span class="text-black-500 group-hover:font-semibold group-hover:text-black">Button 1</span>
      </button>
      <button class="w-full space-x-5 flex items-center p-2.5 rounded-[10px]  hover:bg-lightGray3 group">
        <div class="rounded-full h-[24px] w-[24px] flex items-center justify-center bg-lightGray3 group-hover:bg-white"></div>
        <span class="text-black-500 group-hover:font-semibold group-hover:text-black">Button 2</span>
      </button>
    </div>
    
  </div>
</template>

<script>

// import BiSidebarRow from "@/components/UI/BiSidebarRow.vue";

export default {
  name: "BiSidebar",
  // components: {
  //   BiSidebarRow
  // }
}
</script>

<style scoped>
.biSidebar {
  margin: 0;
  padding: 10%;
}

.butt {
  margin: 20px;
}

</style>
