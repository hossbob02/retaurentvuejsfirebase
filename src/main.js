import Vue from 'vue'
import App from './App.vue'
import router from './router'

//import './assets/js/bootstrap.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAlignRight} from '@fortawesome/free-solid-svg-icons'

library.add(faAlignRight)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
