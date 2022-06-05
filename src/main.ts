import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import { store, setupLoginstate } from './store'

// import Element from 'element-plus'

import 'normalize.css'
import './assets/css/index.less'
import 'element-plus/dist/index.css'
import globalRegister from './global/index'

setupLoginstate()

const app = createApp(App)
globalRegister(app)
app.use(router)
app.use(store)

app.mount('#app')
