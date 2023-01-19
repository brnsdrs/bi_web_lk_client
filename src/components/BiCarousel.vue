<template>
  <div>
    <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="100%"
        style="text-shadow: 1px 1px 2px #333;"

    >
      <b-carousel-slide>
        <template #img>
          <img
              class="d-block img-fluid w-100 carImg"
              width="1024"
              height="445"
              src="../../public/desktop.jpg"
              alt="image slot"
          >
        </template>
        <b-button class="button" href="">Подробнее</b-button>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
          <img
              class="d-block img-fluid w-100 carImg"
              width="1024"
              height="445"
              src="../../public/desktop.jpg"
              alt="image slot"
          >
        </template>
        <b-button class="button" href="">Подробнее</b-button>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
          <img
              class="d-block img-fluid w-100 carImg"
              width="1024"
              height="445"
              src="../../public/desktop.jpg"
              alt="image slot"
          >
        </template>
        <b-button class="button" href="">Подробнее</b-button>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.img-fluid {
  max-height: 445px;
}

.button {
  background-color: black;
  width: 200px;
}

.carImg {
  min-height: 300px;
}

</style>