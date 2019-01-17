window.MathJax = {
    extensions: ["tex2jax.js"],
    TeX: {
        equationNumbers: {
            autoNumber: "AMS"
        },
        extensions: ["mhchem.js", "cancel.js", "color.js"],
        Macros: {
            gas: ["{\\color{Red}\\mathrm{_{(g)}}}"],
            liquid: ["{\\color{GoldenRod}\\mathrm{_{(l)}}}"],
            solid: ["{\\color{DarkSlateGrey}\\mathrm{_{(s)}}}"],
            aq: ["{\\color{SteelBlue}\\mathrm{_{(aq)}}}"],
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