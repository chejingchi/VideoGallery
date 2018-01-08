// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router/';
import VueTouch from 'vue-touch';

Vue.config.productionTip = false;

Vue.use(VueTouch, {name: 'v-touch'});

// axios.interceptors.request.use(function (config) {    // 这里的config包含每次请求的内容
//     // config.headers.Authorization = `WSSE realm="SDP", profile="UsernameToken", type="Appkey"`;
//     // config.headers.XWSSE = `UsernameToken Username="d8300e89c2194ea78147f47fe383389a", PasswordDigest=******, Nonce="2bc53722735", Created="2017-09-11T01:04:29Z"`;
//     console.log(config)
//   return config;
// }, function (err) {
//   return Promise.reject(err);
// });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  data: {
    Bus: new Vue()
  }
});

