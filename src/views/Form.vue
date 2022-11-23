<template>
  <section class="d-flex justify-content-center container">
    <div class="col-4">
      <div class="d-flex column justify-content-center">
        <div class="d-flex align-items-center my-3">
          <div class="col-4">
            <img src="../assets/images/star.png" alt="">
          </div>
          <div class="px-2">
            <p class="h5">Creatividad</p>
            <p>
              Amplios conocimientos de diseño
            </p>
          </div>
        </div>
        <div class="d-flex align-items-center my-3">
          <div class="px-2">
            <p class="h5 align-right">Tiempo</p>
            <p class="align-right">
              Cumplo con las expectativas en el tiempo deseado por mis clientes
            </p>
          </div>
          <div class="col-4">
            <div class="mx-auto w-auto">
              <img src="../assets/images/times.png" alt="">
            </div>
          </div>
        </div>
        <div class="d-flex align-items-center my-3">
          <div class="col-4">
            <img class="mx-auto" src="../assets/images/chat.png" alt="">
          </div>
          <div class="px-2">
            <p class="h5">Clientes satisfechos</p>
            <p>

            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-4">
      <div class="form">
        <p class="h5">Formulario de contacto</p>
        <div>
          <input type="text" id="name">
          <label for="name">Nombre y apellido</label>
        </div>
        <div>
          <input type="text" id="correo">
          <label for="correo">Correo</label>
        </div>
        <div>
          <input type="tel" id="telefono">
          <label for="telefono">Teléfono</label>
        </div>
        <div>
          <textarea id="asunto" cols="30" rows="10"></textarea>
          <label for="asunto">Teléfono</label>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FormContact',
  props: {
  }
}
</script>