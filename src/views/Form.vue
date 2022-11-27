<template>
  <section class="d-flex justify-content-center container">
    <div class="col-4 mx-2">
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
    <div class="col-4 mx-2">
      <div class="form">
        <p class="h5 align-center py-2">Formulario de contacto</p>
        <div class="input-text d-flex">
          <input type="text" id="name" class="col-12">
          <label for="name">Nombre y apellido</label>
        </div>
        <div class="input-text d-flex">
          <input type="text" id="correo" class="col-12">
          <label for="correo">Correo</label>
        </div>
        <div class="input-text d-flex">
          <input type="tel" id="telefono" class="col-12">
          <label for="telefono">Teléfono</label>
        </div>
        <div class="input-text d-flex">
          <textarea id="asunto" cols="30" rows="10" class="col-12"></textarea>
          <label for="asunto">Asunto</label>
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