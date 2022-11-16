<template>
  <div id="app">
    <BarraNavegacion />
    <router-view/>
    <FooterPage />
  </div>
</template>

<script>
import BarraNavegacion from './components/BarraNavegacion.vue'
import FooterPage from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    BarraNavegacion,
    FooterPage
  }
}
</script>

<style lang="scss">
  @import './assets/app.scss';
</style>
