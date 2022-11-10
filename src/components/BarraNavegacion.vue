<template>
  <section>
    <ul class="nav-bar text">
      <li>
        <i class="logo" />
      </li>
      <li>
        <router-link to="/">Inicio</router-link>
      </li>
      <li>Contenido</li>
      <li>Acerca de mi</li>
      <li class="redes">
        <font-awesome-icon class="p-1" icon="fa-brands fa-facebook" />
        <font-awesome-icon class="p-1" icon="fa-brands fa-twitter" />
        <font-awesome-icon class="p-1" icon="fa-brands fa-telegram" />
        <font-awesome-icon class="p-1" icon="fa-brands fa-whatsapp" />
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'BarraNavegacion',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.logo::after {
  background-image: url("/src/assets/logo.png");
}
</style>
