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
      <div class="form" v-if="!submitted">
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
        <button v-on:click="saveForm" class="btn btn-success">Submit</button>
      </div>
      <div v-else>
        <h4>You submitted successfully!</h4>
        <button class="btn btn-success" v-on:click="newForm">Add</button>
      </div>
    </div>
  </section>
</template>

<script>
import http from "../http-common";

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
      submitted: false
    };
  },
  methods: {
    saveForm() {
      if (this.form.length > 4 || this.form.mail.length || this.form.number.length || this.form.affairs.length) {
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
            console.log(response.data);
            this.submitted = true;
          })
          .catch(e => {
            console.log(e);
          });
      }

    },
    newForm() {
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