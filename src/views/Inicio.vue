<template>
  <section>
    <div class="landing-page">
      <div>
        <span class="background"></span>
        <div class="landing-page__content">
          <p class="h1">Ms_Mendoza_Design</p>
          <p class="h5">asdasdasd</p>
          <div class="d-flex align-items-center">
            <div>
              <router-link to="/contenido">
               <button class="btn ghost-gradient">
                  <span class="ghost-text">
                    Ver contenido
                  </span>
                </button>
              </router-link>
            </div>
            <div>
              <router-link to="/formulario">
                <button class="btn primary">
                  Contáctame
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="landing-page__logo">
        <i class="logo__big col-12" />
      </div>
    </div>
    <p class="h3 text-special align-center mb-3 p-2">¿Qué puedo hacer por ti?</p>
    <div class="d-flex justify-content-center container-benefits">
      <div class="col-3 container-benefits__image">
        <img class="img-width" src="../assets/images/image1.jpg" alt="">
      </div>
      <div class="col-12 col-md container-benefits__descriptions">
        <div class="d-flex column">
          <div class="col-auto w-100 mx-auto p-3">
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
          <div class="overflow-scroll d-md-none my-2">
            <div class="d-flex overflow-hidden container-benefits__row-images py-1">
              <div class="col container-benefits__image responsive">
                <img class="img-width" src="../assets/images/image1.jpg" alt="">
              </div>
              <div class="col container-benefits__image responsive">
                <img class="img-width" src="../assets/images/image3.jpg" alt="">
              </div>
              <div class="col container-benefits__image responsive">
                <img class="img-width" src="../assets/images/image2.jpg" alt="">
              </div>
            </div>
          </div>
          <div class="col-auto w-100 mx-auto align-right p-3">
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
      </div>
      <div class="col-3 container-benefits__image align-self-end">
        <img class="img-width" src="../assets/images/image3.jpg" alt="">
        <img class="img-width preview-absolute" src="../assets/images/image2.jpg" alt="">
      </div>
    </div>
    <div class="d-flex column">
        <p class="col h3 special">
          "I made designs with the heart"
        </p>
      <div class="col-9 mx-auto">
        <img class="img-width" src="../assets/images/image4.png" alt="">
      </div>
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