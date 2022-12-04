<template>
  <section class="container d-flex column md-row justify-content-center mx-auto">
    <div class="col-md-6 order-1 order-md-0 d-flex column sm-row flex-wrap justify-content-center p-3">
      <div class="col col-sm-6 col-md-12 d-flex align-items-center justify-content-center my-2 my-md-3">
        <div class="col-3 col-md-2">
          <img class="mx-auto img-width p-1" src="../assets/images/ubicacion.png" alt="">
        </div>
        <div class="col px-2">
          <p class="h5">Ubicación</p>
          <p>
            Venezuela Carabobo
            <span class="d-block">
              Naguanagua El Cafetal
            </span>
          </p>
        </div>
      </div>
      <div class="col col-sm-6 col-md-12 d-flex align-items-center justify-content-center my-2 my-md-3">
        <div class="col-3 col-md-2">
          <img class="mx-auto img-width p-1" src="../assets/images/redes.png" alt="">
        </div>
        <div class="col px-2">
          <p class="h5">Contacto</p>
          <p>
            @m_mendoza_designs
            <span class="d-block">
              +58 426 544 1619
            </span>
          </p>
        </div>
      </div>
      <div class="col col-md-12 d-flex align-items-center justify-content-center justify-content-md-start my-2 my-md-3">
        <div class="col-3 col-sm-2">
          <img class="mx-auto img-width p-1" src="../assets/images/email.png" alt="">
        </div>
        <div class="col-auto px-2">
          <p class="h5">Correo</p>
          <p>
            M_MendozaDesigns@gmail.com
          </p>
        </div>
      </div>
    </div>
    <div class="col-md-5 p-3 order-md-1">
      <div class="about-me__image p-relative mx-auto">
        <img class="img-width" src="../assets/images/about-me.png" alt="">
        <div class="about-me__logo">
          <i class="logo__big" />
        </div>
      </div>
      <p class="about-me__text mx-auto mx-lg-0 w-fit">
        Soy acuario
        <span class="d-block">
          casa en piscis
        </span>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutMe',
  props: {
  }
}
</script>