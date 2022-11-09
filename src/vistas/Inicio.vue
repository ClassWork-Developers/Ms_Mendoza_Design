<template>
  <section>
    <div class="landing-page">
      <span class="landing-page__content background"></span>
      <div class="landing-page__content">
        <p class="h1 bold">Ms_Mendoza_Design</p>
        <p class="text__description">asdasdasd</p>
        <div class="d-flex align-items-center">
          <div>
            <button class="btn ghost-gradient">
              <span class="ghost-text">
                Ver contenido
              </span>
            </button>
          </div>
          <div>
            <button class="btn primary">
              Contactame
            </button>
          </div>
        </div>
      </div>
      <div class="landing-page__logo">
        <i class="logo__big" />
      </div>
    </div>
    <div class="container d-flex column align-items-center">
      <p class="text__special h4">¿Qué puedo hacer por ti?</p>
      <div class="container__benefits">
        <div class="preview-benefits">
          <img class="img-width" src="../assets/images/image1.jpg" alt="">
        </div>
        <div>
          <p class="text__description"> Texto descriptivo</p>
        </div>
      </div>
      <div class="container__benefits">
        <div>
          <p class="text__description"> Texto descriptivo</p>
        </div>
        <div class="preview-benefits">
          <img class="img-width" src="../assets/images/image1.jpg" alt="">
        </div>
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