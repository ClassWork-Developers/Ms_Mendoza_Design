<template>
  <section :class="['nav-bar', HomePage ? 'fixed' : 'sticky']">
    <div class="nav-bar__container">
      <div>
        <i class="logo" />
      </div>
      <div class="d-flex align-items-center">
        <router-link to="/">
          <p :class="['px-2', { 'active' : Page == 'inicio'}]">
            Inicio
          </p>
        </router-link>
        <router-link to="/contenido">
          <p :class="['px-2', { 'active' : Page == 'contenido'}]">
            Contenido
          </p>
        </router-link>
        <router-link to="/acercademi">
          <p :class="['px-2', { 'active' : Page == 'aboutme'}]">
            Acerca de mi
          </p>
        </router-link>
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
    },
    Page : {
      type: String,
      default: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.logo::after {
  background-image: url("/src/assets/logo.png");
}
</style>
