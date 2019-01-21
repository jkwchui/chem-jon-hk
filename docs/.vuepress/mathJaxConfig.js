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
            molar: ["{\\mathrm{mol \\cdot{} dm^{-3}}}"]

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