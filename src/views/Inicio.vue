<template>
  <section>
    <div class="landing-page">
      <div>
        <span class="landing-page__content background"></span>
        <div class="landing-page__content">
          <p class="h1">Ms_Mendoza_Design</p>
          <p class="h5">asdasdasd</p>
          <div class="d-flex align-items-center">
            <div>
              <button class="btn ghost-gradient">
                <span class="ghost-text">
                <router-link to="/contenido">Ver contenido</router-link>
                </span>
              </button>
            </div>
            <div>
              <button class="btn primary">
                <router-link to="/formulario">Contáctame</router-link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="landing-page__logo">
        <i class="logo__big" />
      </div>
    </div>
    <div class="container d-flex column align-items-center">
      <p class="h3 text-special align-center mb-3">¿Qué puedo hacer por ti?</p>
      <div class="container-benefits">
        <div class="container-benefits__image align-self-start">
            <img class="img-width" src="../assets/images/image1.jpg" alt="">
        </div>
        <div class="container__descriptions">
          <div>
            <p class="h5 text-special text-uppercase">
              Edits creativos y
              <span class="d-block">
                publicidades
              </span>
            </p>
            <p class="small-block">
              Adaptados también con la
              <span class="d-block">
                personalidad de tu marca
              </span>
            </p>
          </div>
          <div class="align-right">
            <p class="small-block">
              Diseños creativos con tu
            </p>
            <p class="h5 text-special text-uppercase">
              perfil profesional
            </p>
            <p class="text-container">
              Déjame desatar mi creatividad con una
              <span class="d-block">
                imagen tuya incluso para fines vocacionales
              </span>
            </p>
          </div>
        </div>
        <div class="container-benefits__image align-self-end">
          <img class="img-width" src="../assets/images/image3.jpg" alt="">
          <img class="img-width preview-absolute" src="../assets/images/image2.jpg" alt="">
        </div>
      </div>
    </div>
    <p class="h3 special">
      "I made designs with the heart"
    </p>
    <div class="mx-auto w-auto">
      <img class="img-width" src="../assets/images/image4.png" alt="">
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
  }
}
</script>