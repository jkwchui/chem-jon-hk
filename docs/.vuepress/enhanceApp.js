import BootstrapVue from '../../node_modules/bootstrap-vue';
import {
    library
} from '../../node_modules/@fortawesome/fontawesome-svg-core';
import {
    FontAwesomeIcon
} from '../../node_modules/@fortawesome/vue-fontawesome';
import {
    fas
} from '../../node_modules/@fortawesome/free-solid-svg-icons';

import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/bootstrap-vue/dist/bootstrap-vue.css'

// import './mathJaxConfig.js'
// import '../../node_modules/mathjax/MathJax.js'

// import {
//     VueMathjax
// } from 'vue-mathjax'

window.MathJax = {
    extensions: ["tex2jax.js"],
    TeX: {
        equationNumbers: {
            autoNumber: "AMS"
        },
        extensions: ["mhchem.js", "cancel.js", "color.js"],
        Macros: {
            gas: ["{\\color{Red}\\mathrm{_{(g)}}}"],
            liquid: ["{\\color{SandyBrown}\\mathrm{_{(l)}}}"],
            solid: ["{\\color{DarkSlateGrey}\\mathrm{_{(s)}}}"],
            aq: ["{\\color{SteelBlue}\\mathrm{_{(aq)}}}"],
            cmc: ["{\\mathrm{cm^{3}}}"],
            dmc: ["{\\mathrm{dm^{3}}}"],

        }
    },
    tex2jax: {
        inlineMath: [
            ['$', '$'],
            ["\\(", "\\)"]
        ],
        displayMath: [
            ['$$', '$$'],
            ["\\[", "\\]"]
        ],
        processEscapes: true
    },
    mhchem: {
        legacy: false
    },
    AuthorInit: function () {
        // MathJax.Ajax.config.path["siunitx"] = "../siunitx.js";
    }
};

export default ({
    Vue,
    options,
    router,
}) => {
    Vue.component('font-awesome-icon', FontAwesomeIcon);
    library.add(fas);
    Vue.use(BootstrapVue);
    // Vue.use(VueMathjax);
}