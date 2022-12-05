<template>
  <section class="d-flex column md-row justify-content-center container mx-auto">
    <div class="col-9 col-sm-6 col-md-4 mx-auto">
      <div class="d-flex column justify-content-center">
        <div class="d-flex align-items-center my-3">
          <div class="col-2 col-md-4">
            <img src="../assets/images/star.png" alt="" class="img-width">
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
          <div class="col-2 col-md-4">
            <div class="mx-auto w-auto">
              <img src="../assets/images/times.png" alt="" class="img-width">
            </div>
          </div>
        </div>
        <div class="d-flex align-items-center my-3">
          <div class="col-2 col-md-4">
            <img src="../assets/images/chat.png" alt="" class="mx-auto img-width">
          </div>
          <div class="px-2">
            <p class="h5">Clientes satisfechos</p>
            <p>

            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-9 col-sm-6 col-md-4 mb-3 mx-auto p-relative">
      <div class="form">
        <p class="h5 align-center py-2">Formulario de contacto</p>
        <div class="input-text d-flex">
          <input type="text" id="name" class="col-12" required v-model="form.name">
          <label for="name">Nombre y apellido</label>
        </div>
        <div class="input-text d-flex">
          <input type="email" id="correo" class="col-12" required v-model="form.mail">
          <label for="correo">Correo</label>
        </div>
        <div class="input-text d-flex">
          <input type="tel" id="telefono" class="col-12" required v-model="form.number">
          <label for="telefono">Teléfono</label>
        </div>
        <div class="input-text d-flex">
          <textarea id="asunto" cols="30" rows="10" class="col-12" v-model="form.affairs"></textarea>
          <label for="asunto">Asunto</label>
        </div>
        <p v-if="msj" class="h-3 align-center">{{ msj }}</p>
        <div class="form-btn">
          <button @click="saveForm" :disabled="submitted" :class="['btn primary mx-auto', {'disabled' : submitted}]">
            Enviar
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import http from "../http-common";
import {validarMail} from '@/funciones/funciones.js';

export default {
  name: 'FormContact',
  data() {
    return {
      form: {
        id: 0,
        name: "",
        mail: "",
        number: "",
        affairs: ""
      },
      msj: '',
      submitted: false
    };
  },
  methods: {
    saveForm() {
      if (this.form.name.length > 4 && validarMail(this.form.mail) && this.form.number.length && this.form.affairs.length) {
        var data = {
          name: this.form.name,
          mail: this.form.mail,
          number: this.form.number,
          affairs: this.form.affairs
        };

        http
          .post("/form", data)
          .then(response => {
            this.form.id = response.data.id;
            this.msj = 'Tu petición se ha enviando';
            this.submitted = true;
          })
          .catch(e => {
            console.log(e);
          });
        setTimeout(() => {
          this.newForm()
        }, 5000);
      } else {
        this.msj = 'Verifica todos los datos';
      }
    },
    newForm() {
      this.msj = '';
      this.submitted = false;
      this.form = {
        id: 0,
        name: "",
        mail: "",
        number: "",
        affairs: ""
      };
    }
  }
}
</script>