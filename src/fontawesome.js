import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faFacebook, faInstagram, faTelegram, faWhatsapp
} from '@fortawesome/free-brands-svg-icons'

import {
  faXmark
} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faFacebook, faInstagram, faTelegram, faWhatsapp, faXmark)

Vue.component('font-awesome-icon', FontAwesomeIcon)