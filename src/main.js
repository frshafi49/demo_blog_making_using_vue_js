import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import Routes from './route'

//using moduels
Vue.use(VueAxios, axios)
Vue.use(VueRouter)
Vue.config.productionTip = false


const router = new VueRouter({
  routes: Routes
})

// custom global directives starts


// Vue.directive('rainbow', {
//   bind(el, binding, vnode) {
//     el.style.color = '#' + Math.random().toString().slice(2, 8);
//   }
// })


Vue.directive('theme', {
  bind(el, binding, vnode) {
    if (binding.value == 'wide') {
      el.style.maxWidth = '1200px'
    } else if (binding.value == 'narrow') {
      el.style.maxWidth = '560px'
    }

    if (binding.arg == 'column') {
      el.style.background = '#ddd',
        el.style.padding = '20px'
    }

  }
});

// custom dircetive ends


// global Filters starts

// filter to uppacese string
Vue.filter('to-uppercase',val=>{
  return val.toUpperCase();
});


// Vue.filter('snippet',val=>{
//   return val.slice(0,100) + '...';
// });

//Filter ends



new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
