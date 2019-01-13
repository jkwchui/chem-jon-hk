import BootstrapVue from 'bootstrap-vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default ({
    Vue,
    options,
    router,
}) => {
    (function () {
        var body = document.getElementsByTagName("body")[0], script;
        script = document.createElement("script");
        script.type = "text/x-mathjax-config";
        script.src="/js/mathJaxConfig.js";
        body.appendChild(script);
        script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/latest.js?config=TeX-MML-AM_CHTML";
        body.appendChild(script);
    })();
    Vue.component('font-awesome-icon', FontAwesomeIcon);
    library.add(fas);
    Vue.use(BootstrapVue);
}