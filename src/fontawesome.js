import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faFacebook, faTwitter, faTelegram, faWhatsapp
} from '@fortawesome/free-brands-svg-icons'
// import {  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faFacebook, faTwitter, faTelegram, faWhatsapp)

Vue.component('font-awesome-icon', FontAwesomeIcon)