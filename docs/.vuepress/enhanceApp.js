import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import '../../theme/index.css'
import Ring from './components/Ring.vue'
import locale from 'element-ui/lib/locale/lang/en'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  // ...apply enhancements to the app
  Vue.use(ElementUI, { locale })
  // Vue.use(vueAnimate)
  Vue.component('ring', Ring)
  // Vue.component('abstract-hue', abstractHue)
  // Vue.component('abstract-saturation', abstractSaturation)
  // Vue.component('ring-blue', ringBlue)
  // Vue.component('ring-green', ringGreen)
}
