<template>
    <vue-mathjax :formula="parsed"></vue-mathjax>
</template>

<script>
import { VueMathjax } from 'vue-mathjax'



    export default {
        beforeMount() {

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
            // formula: '$$\\ce{H2SO4\\aq{} <=> H+ + HSO4^-} = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$$'
            }
        },
        props: {
            formula: String,
            inline: Boolean
        },
        computed: {
            parsed: function () {
                if (this.inline === true)
                    return '$' + this.formula + '$'
                else
                    return '$$' + this.formula + '$$'
            }
        }
    }
</script>