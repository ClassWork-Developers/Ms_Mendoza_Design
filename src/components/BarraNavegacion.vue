<template>
  <section :class="['nav-bar', HomePage ? 'fixed' : 'sticky']">
    <div class="nav-bar__container">
      <div>
        <i class="logo" />
      </div>
      <div class="d-flex align-items-center">
        <p class="px-2">
          <router-link to="/">Inicio</router-link>
        </p>
        <p class="px-2">
          <router-link to="/contenido">Contenido</router-link>
        </p>
        <p class="px-2">
          <router-link to="/acercademi">Acerca de mi</router-link>
        </p>
        <p class="redes">
          <font-awesome-icon class="p-1" icon="fa-brands fa-facebook" />
          <font-awesome-icon class="p-1" icon="fa-brands fa-instagram" />
          <font-awesome-icon class="p-1" icon="fa-brands fa-telegram" />
          <font-awesome-icon class="p-1" icon="fa-brands fa-whatsapp" />
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BarraNavegacion',
  props: {
    HomePage : {
      type: Boolean,
      default: false
    }
  }
  // data() {
  //   return {
  //     HomePage: ''
  //   }
  // }
  // mounted() {
  //   this.vista()
  // },
  // methods: {
  //   vista() {
  //     this.HomePage = this.$router.currentRoute.name == 'inicio' ? true : false
  //   }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.logo::after {
  background-image: url("/src/assets/logo.png");
}
</style>
