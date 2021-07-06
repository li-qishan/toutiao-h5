import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 加载有赞Vant 组件库
import Vant from 'vant'

// 加载样式
import 'vant/lib/index.css'

// 加載全局樣式
import './styles/index.less'

// 自动设置REM 基准值 html标签字体大小
import 'amfe-flexible'

// 全局注册组件库
Vue.use(Vant)

Vue.config.productionTip = false

// 创建VUE根实例  将router store 配置到根实例
// 把APP 組件 渲染到 #APP快速上手
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
