<template>
  <section>
    <div v-for="(image, index) in images" :key="index">
      <div>
        <img :src="image.url" alt="">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PrototypeContent',
  props: {
  },
  data() {
    return {
      images: [
        {
          tittle : '',
          url: '../assets/images/content/image_1.png',
          description: ''
        },
        {
          tittle : '',
          url: '../assets/images/content/image_2.png',
          description: ''
        },
        {
          tittle : '',
          url: '../assets/images/content/image_3.png',
          description: ''
        },
        {
          tittle : '',
          url: '../assets/images/content/image_4.png',
          description: ''
        },
        {
          tittle : '',
          url: "src/assets/images/content/image_5.png",
          description: ''
        },
        {
          tittle : '',
          url: '../assets/images/content/image_6.png',
          description: ''
        },
        {
          tittle : '',
          url: '/src/assets/images/content/image_7.png',
          description: ''
        },
        {
          tittle : '',
          url: '../../src/assets/images/content/image_8.png',
          description: ''
        }
      ]
    }
  },
}
</script>