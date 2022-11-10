<template>
  <div id="app">
    <BarraNavegacion />
    <router-view/>
  </div>
</template>

<script>
import BarraNavegacion from './components/BarraNavegacion.vue'

export default {
  name: 'App',
  components: {
    BarraNavegacion
  }
}
</script>

<style lang="scss">
  @import './assets/app.scss';
</style>
