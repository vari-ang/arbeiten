import Vue from 'vue'
import App from './App.vue'
import _ from 'lodash'
import VueRouter from 'vue-router'
import Routes from './router/routes'

Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

/* Directive to convert numbers as stars icon */
Vue.directive('rating', {
  bind(el, binding, vnode) {
    if(binding.value == 0) {
      el.innerHTML = '<i class="material-icons star">star_border</i><i class="material-icons star">star_border</i><i class="material-icons star">star_border</i><i class="material-icons star">star_border</i><i class="material-icons star">star_border</i>';
    }
    else if(binding.value == 0.5) {
      el.innerHTML = '<i class="material-icons star">star_half</i><i class="material-icons star">star_border</i><i class="material-icons star">star_border</i><i class="material-icons star">star_border</i><i class="material-icons star">star_border</i>';
    }
    else if(binding.value == 1) {
      el.innerHTML = '<i class="material-icons star">star</i><i class="material-icons star">star_border</i><i class="material-icons star">star_border</i><i class="material-icons star">star_border</i><i class="material-icons star">star_border</i>';
    }
    else if(binding.value == 1.5) {
      el.innerHTML = '<i class="material-icons star">star</i><i class="material-icons star">star_half</i><i class="material-icons star">star_border</i><i class="material-icons star">star_border</i><i class="material-icons star">star_border</i>'
    }
    else if(binding.value == 2) {
      el.innerHTML = '<i class="material-icons star">star</i><i class="material-icons star">star</i><i class="material-icons star">star_border</i><i class="material-icons star">star_border</i><i class="material-icons star">star_border</i>';
    }
    else if(binding.value == 2.5) {
      el.innerHTML = '<i class="material-icons star">star</i><i class="material-icons star">star</i><i class="material-icons star">star_half</i><i class="material-icons star">star_border</i><i class="material-icons star">star_border</i>';
    }
    else if(binding.value == 3) {
      el.innerHTML = '<i class="material-icons star">star</i><i class="material-icons star">star</i><i class="material-icons star">star</i><i class="material-icons star">star_border</i><i class="material-icons star">star_border</i>';
    }
    else if(binding.value == 3.5) {
      el.innerHTML = '<i class="material-icons star">star</i><i class="material-icons star">star</i><i class="material-icons star">star</i><i class="material-icons star">star_half</i><i class="material-icons star">star_border</i>';
    }
    else if(binding.value == 4) {
      el.innerHTML = '<i class="material-icons star">star</i><i class="material-icons star">star</i><i class="material-icons star">star</i><i class="material-icons star">star</i><i class="material-icons star">star_border</i>';
    }
    else if(binding.value == 4.5) {
      el.innerHTML = '<i class="material-icons star">star</i><i class="material-icons star">star</i><i class="material-icons star">star</i><i class="material-icons star">star</i><i class="material-icons star">star_half</i>';
    }
    else if(binding.value == 5) {
      el.innerHTML = '<i class="material-icons star">star</i><i class="material-icons star">star</i><i class="material-icons star">star</i><i class="material-icons star">star</i><i class="material-icons star">star</i>';
    }

  }
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
