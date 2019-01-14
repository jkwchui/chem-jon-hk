<template>
    <div>
        $$\sum_{i=0}^n i^2 = \frac{(n^2+n)(2n+1)}{6}$$
    </div>
</template>

<script>
    export default {
        mounted() {
            var body = document.getElementsByTagName("body")[0], script;
            script = document.createElement("script");
            script.type = "text/x-mathjax-config";
            script.src="/js/mathJaxConfig.js";
            body.appendChild(script);
            script = document.createElement("script");
            script.type = "text/javascript";
            script.src = "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/latest.js?config=TeX-MML-AM_CHTML";
            body.appendChild(script);
        }
    }
</script>