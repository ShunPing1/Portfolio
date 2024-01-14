import './assets/main.css'
import './assets/css/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// fontawesome 加入
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {fas} from '@fortawesome/free-solid-svg-icons'
const app = createApp(App)
// fontawesome 引用
library.add(faShoppingCart, faInstagram, faFacebookSquare, fas)
app.component('font-awesome-icon', FontAwesomeIcon) //使用kebab-case
app.config.productionTip = false

app.use(router)
app.mount('#app')
