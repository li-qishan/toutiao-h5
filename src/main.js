import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 加載全局樣式
import './styles/index.less'

Vue.config.productionTip = false

// 创建VUE根实例  将router store 配置到根实例
// 把APP 組件 渲染到 #APP
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
