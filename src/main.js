import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'


// axios
import axios from "axios"
// axios.defaults.headers.post['Content-Type'] = 'application/json';
Vue.prototype.$axios=axios;

Vue.config.productionTip = false
// 过滤器   货币
Vue.filter('MoneyFormat', (money)=>{
  if (money && money != null) {
    money = String(money);
    var left = money.split('.')[0], right = money.split('.')[1];
    right = right ? (right.length >= 2 ? '.' + right.substr(0, 2) : '.' + right + '0') : '.00';
    var temp = left.split('').reverse().join('').match(/(\d{1,3})/g);
    return (Number(money) < 0 ? '-' : '') + temp.join(',').split('').reverse().join('') + right;
  } else if (money === 0) { // 注意===在这里的使用，如果传入的money为0,if中会将其判定为boolean类型，故而要另外做===判断
    return '0.00';
  } else {
    return '';
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


// console.log(Vue,router,this)
// var router = router
// 全局路由守卫
router.beforeEach((to, from, next) => {
  var pattrouter = /^\/member\/+/;
  if(sessionStorage.getItem('isLogin')){
    next(true);
  }else{
    if(!pattrouter.test(to.path)){
      next(true);
    }else{
      next("/login");
    }
  }
})
