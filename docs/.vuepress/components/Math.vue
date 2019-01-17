<template>
    <vue-mathjax :formula="formula"></vue-mathjax>
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
            formula: '$$\\ce{H2SO4\\aq{} <=> H+ + HSO4^-} = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$$'
            }
        }
    }
</script>