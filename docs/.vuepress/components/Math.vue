<template>
    <div>
        $$\sum_{i=0}^n i^2 = \frac{(n^2+n)(2n+1)}{6}$$
        $$ \ce{H2O\gas{}} $$
        <div>
        <textarea v-model="formula" cols="30" rows="10"></textarea>
            <vue-mathjax :formula="formula"></vue-mathjax>
            <vue-mathjax :formula="formula2"></vue-mathjax>
        </div>
    </div>
</template>

<script>
import { VueMathjax } from 'vue-mathjax'
    export default {
        beforeMount() {
            var body = document.getElementsByTagName("body")[0], script;
            script = document.createElement("script");
            script.type = "text/x-mathjax-config";
            script.src="../siunitx.js";
            body.appendChild(script);
            script = document.createElement("script");
            script.type = "text/javascript";
            script.src = "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/latest.js?config=TeX-AMS_SVG";
            body.appendChild(script);
        },
        components: {
            'vue-mathjax': VueMathjax
        },
        data () {
            return {
            formula: '$$\\ce{H2SO4 <=> H+ + HSO4^-} = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$$',
            formula2: '$$\\sum_{i=0}^n \\cancel{i^2} = \\dfrac{(n^2+n)(2n+1)}{6}$$',
            msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>