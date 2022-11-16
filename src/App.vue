<template>
  <div id="app">
    <BarraNavegacion />
    <router-view/>
    <AboutMe />
    <PrototypeContent />
    <FormContact />
    <FooterPage />
  </div>
</template>

<script>
import BarraNavegacion from './components/BarraNavegacion.vue'
import FooterPage from './components/Footer.vue'
import AboutMe from './views/AboutMe.vue'
import PrototypeContent from './views/Contenido.vue'
import FormContact from './views/From.vue'

export default {
  name: 'App',
  components: {
    BarraNavegacion,
    FooterPage,
    AboutMe,
    PrototypeContent,
    FormContact
  }
}
</script>

<style lang="scss">
  @import './assets/app.scss';
</style>
