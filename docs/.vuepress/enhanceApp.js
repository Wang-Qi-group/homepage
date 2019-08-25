// import Vue from 'vue'
import iView from 'iview';
// import 'iview/dist/styles/iview.css';
import '../../my-theme/dist/iview.css'
import locale from 'iview/dist/locale/en-US';
// import vueAnimate from '@deveodk/vue-animate'
// You need a specific loader for CSS files like https://github.com/webpack/css-loader
// import '@deveodk/vue-animate/dist/@deveodk/vue-animate.css'
import Ring from './components/Ring.vue'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  // ...apply enhancements to the app
  Vue.use(iView, { locale })
  Vue.use(vueAnimate)
  Vue.component('ring', Ring)
  Vue.component('abstract-hue', abstractHue)
  Vue.component('abstract-saturation', abstractSaturation)
  Vue.component('ring-blue', ringBlue)
  Vue.component('ring-green', ringGreen)
}
