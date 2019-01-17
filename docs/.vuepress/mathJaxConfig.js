window.MathJax = {
    extensions: ["tex2jax.js"],
    TeX: {
        equationNumbers: {
            autoNumber: "AMS"
        },
        extensions: ["mhchem.js", "cancel.js", "color.js"],
        Macros: {
            gas: ["{\\color{red}\\mathrm{_{(g)}}}"],
            liquid: ["{\\color{orange}\\mathrm{_{(l)}}}"],
            solid: ["{\\color{gray}\\mathrm{_{(s)}}}"],
            aq: ["{\\color{lightblue}\\mathrm{_{(aq)}}}"],
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
};