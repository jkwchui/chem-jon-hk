import BootstrapVue from '../../node_modules/bootstrap-vue';
import { library } from '../../node_modules/@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '../../node_modules/@fortawesome/vue-fontawesome';
import { fas } from '../../node_modules/@fortawesome/free-solid-svg-icons';

import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/bootstrap-vue/dist/bootstrap-vue.css'

export default ({
    Vue,
    options,
    router,
}) => {
    Vue.component('font-awesome-icon', FontAwesomeIcon);
    library.add(fas);
    Vue.use(BootstrapVue);
}