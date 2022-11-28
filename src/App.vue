<template>
  <div id="app">
    <BarraNavegacion 
      :home-page="HomePage"
    />
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
  },
  data() {
    return {
      HomePage: ''
    }
  },
  mounted() {
    this.vista()
    setInterval(() => {
      this.vista();
    }, (1000));
  },
  methods: {
    vista() {
      this.HomePage = this.$router.currentRoute.name == 'inicio' ? true : false
    }
  }
}
</script>

<style lang="scss">
  @import './assets/app.scss';
</style>
