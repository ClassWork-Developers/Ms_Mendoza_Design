<template>
  <section>
    <div class="d-flex flex-wrap justify-content-center container__preview">
      <div v-for="(image, index) in images" :key="index" class="col-3 mx-2 img-preview">
        <div class="img-preview__description">
          <p class="h5"> {{image.tittle}}</p>
        </div>
        <div class="img-preview__boton">
          <button class="btn primary" @click="mostrarModal(index)">
            Detalles
          </button>
        </div>
        <img :src="image.url" alt="" class="img-fit-content col-12">
      </div>
    </div>
    <div v-if="modal" class="modal">
      <img :src="item.url" alt="" class="col-4">
      <div class="col">
        <p class="h3">{{item.tittle}}</p>
      </div>
      <div class="align-self-end">
        <router-link to="/formulario">
          <button class="btn primary">
            ¡Lo quiero!
          </button>
        </router-link>
      </div>
      <font-awesome-icon
        class="close-icon align-self-start"
        icon="fa-solid fa-xmark"
        @click="modal = false"
      />
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
          tittle : "Everything it's Ok :)",
          url: require('../assets/images/content/image_1.jpg'),
          description: ""
        },
        {
          tittle : "Is that a supra??!!",
          url: require('../assets/images/content/image_2.jpg'),
          description: ""
        },
        {
          tittle : "Space",
          url: require('../assets/images/content/image_3.jpg'),
          description: ""
        },
        {
          tittle : "Lets ryde togheter",
          url: require('../assets/images/content/image_4.jpg'),
          description: ""
        },
        {
          tittle : "Cruspiros cake",
          url: require('../assets/images/content/image_5.jpg'),
          description: ""
        },
        {
          tittle : "Lets take a trip",
          url: require('../assets/images/content/image_6.jpg'),
          description: ""
        },
        {
          tittle : "Follow your dreams",
          url: require('../assets/images/content/image_7.jpg'),
          description: ""
        },
        {
          tittle : "Stay with me",
          url: require('../assets/images/content/image_8.jpg'),
          description: ""
        }
      ],
      modal: false,
      item: {}
    }
  },
  methods: {
    mostrarModal(index) {
      this.modal = true
      this.item = this.images[index]
    }
  }
}
</script>