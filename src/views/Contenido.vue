<template>
  <section>
    <div class="d-flex flex-wrap justify-content-center container__preview">
      <div v-for="(image, index) in images" :key="index" class="col-5 col-sm-3 mx-1 mx-sm-2 img-preview">
        <div class="img-preview__description">
          <p> {{image.tittle}}</p>
        </div>
        <div class="img-preview__boton">
          <button class="btn primary" @click="mostrarModal(index)">
            Detalles
          </button>
        </div>
        <img :src="image.url" alt="" class="img-fit-content col-12">
      </div>
    </div>
    <div v-if="modal" class="modal align-sm-content-start">
      <div class="col-7 col-sm-6 order-2 order-sm-1 order-md-0 ">
        <img :src="item.url" alt="" class="img-width">
      </div>
      <div class="order-1 order-md-0 col px-2">
        <p class="h3">{{item.tittle}}</p>
        <p class="h2">{{item.description}}</p>
      </div>
      <div class="col-sm-12 order-3  order-md-0 align-self-end">
        <router-link to="/formulario">
          <button class="btn primary ml-auto">
            ¡Lo quiero!
          </button>
        </router-link>
      </div>
      <div class="w-100 col-sm-12 align-right">
        <font-awesome-icon
          class="close-icon align-self-start"
          icon="fa-solid fa-xmark"
          @click="modal = false"
        />
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
          tittle : "Everything it's Ok :)",
          url: require('../assets/images/content/image_1.jpg'),
          description: "representa el positivismo en un momento malo y/o de tension"
        },
        {
          tittle : "Is that a supra??!!",
          url: require('../assets/images/content/image_2.jpg'),
          description: "Referencia al fanatismo que hay alrededor del vehiculo toyota supra"
        },
        {
          tittle : "Its enough space for you",
          url: require('../assets/images/content/image_3.jpg'),
          description: "Representa el necesitar un espacio solitario para descanzar del dia a dia"
        },
        {
          tittle : "Lets ryde togheter",
          url: require('../assets/images/content/image_4.jpg'),
          description: "Invitacion para una carrera"
        },
        {
          tittle : "Cruspiros cake",
          url: require('../assets/images/content/image_5.jpg'),
          description: "Pequeño brandeo para una pastelería dedicada a los suspiros"
        },
        {
          tittle : "Lets take a trip",
          url: require('../assets/images/content/image_6.jpg'),
          description: "Invitación a un viaje"
        },
        {
          tittle : "Follow your dreams",
          url: require('../assets/images/content/image_7.jpg'),
          description: "Poster motivador para seguir tus sueños"
        },
        {
          tittle : "Stay with me",
          url: require('../assets/images/content/image_8.jpg'),
          description: "Petición para que te quedes con esa persona especial"
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