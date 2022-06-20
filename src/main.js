import Vue from 'vue'
import App from './App.vue'
//引入路由
import router from '@/Router/index'
//三级联动组件
import Nav from '@/components/TypeNav/Nav'
Vue.config.productionTip = false
//全局使用
Vue.component(Nav.name,Nav)
//引入store
import store from './store'
//引入路由
new Vue({
  render: h => h(App),
  router:router,
  //表示vue组件上面多了一个$store属性
  store,
  //配置全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this
  }
}).$mount('#app')
//引入mock文件
import  '@/mock/mockServe'
//全局引入轮播图
import 'swiper/css/swiper.css'
//引入全局轮播图组件
import Carousel from '@/components/Carousel/index'
// //注册为全局组件
Vue.component(Carousel.name,Carousel)
//引入分页器，注册为全局组件
import Pagination from '@/components/Pagination/Pagination'
Vue.component(Pagination.name,Pagination)