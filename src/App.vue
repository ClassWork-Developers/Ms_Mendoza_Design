<template>
  <div id="app">
    <BarraNavegacion 
      :home-page="HomePage"
      :Page="Page"
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
      HomePage: '',
      Page: ''
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
      this.Page = this.$router.currentRoute.name
    }
  }
}
</script>

<style lang="scss">
  @import './assets/app.scss';
</style>
