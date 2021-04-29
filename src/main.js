import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import Login from './components/Login.vue'
import Work from './components/Work.vue'
import Book from './components/Book.vue'
import Reader from './components/Reader.vue'
import CNNode from './components/CNNode.vue'

const routes=[
  {
    path:"/login",
    component:Login
  },
  {
    path:"/work",
    component:Work
  },
  {
    path:"/book",
    component:Book
  },
  {
    path:"/reader",
    component:Reader
  },
  {
    path:"/cnnode",
    component:CNNOde
  }
 

]

const router= new VueRouter({
  routes
})

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
