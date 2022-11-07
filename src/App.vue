<template>
  <div id="app">
    <BarraNavegacion />
    <HomePage />
  </div>
</template>

<script>
import BarraNavegacion from './components/BarraNavegacion.vue'
import HomePage from './vistas/Inicio.vue'

export default {
  name: 'App',
  components: {
    BarraNavegacion,
    HomePage
  }
}
</script>

<style lang="scss">
  @import './assets/app.scss';
</style>
