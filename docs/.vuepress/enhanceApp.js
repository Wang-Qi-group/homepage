// import Vue from 'vue'
import iView from 'iview';
// import 'iview/dist/styles/iview.css';
import '../../my-theme/dist/iview.css'
import locale from 'iview/dist/locale/en-US';


export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  // ...apply enhancements to the app
  Vue.use(iView, { locale })
}
