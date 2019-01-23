# Colophon

## Stack

This website is built with [Vuepress](http://vuepress.vuejs.org/) using components from [BootstrapVue](https://bootstrap-vue.js.org/). A variety of `markdown-it` extensions were used.

- Math <LaTeX formula="\pi" inline/> and chemistry <Chem formula="C6H12O6\aq" inline/> typeset using [MathJax](https://www.mathjax.org/) with Martin Hensel's [mhchem](https://mhchem.github.io/MathJax-mhchem/) extension.
- Charts made in [graph.js](https://www.chartjs.org/)
- Search by [Algolia DocSearch](https://github.com/algolia/docsearch)
- 3D molecules by [3Dmol.js](http://3dmol.csb.pitt.edu/)
  - biological structures pulled from [Protein Data Bank](http://www.rcsb.org) and
  - (computed) small molecule structures from [PubChem](http://pubchem.ncbi.nlm.nih.gov/)
- Typography:
  - Headers: Myriad Pro Semi Condensed
  - Body: Cronos Pro

## Deployment

The repo lives on [Github](https://github.com/jkwchui/chem-jon-hk) and is deployed to [Netlify](http://www.netlify.com).

## Data sources

Dynamic data is ingested from Airtable databases using their (very well documented) API.

## Development

I primarily work in Visual Studio Code with Adobe Illustrator. The writing is supplemented on an iPad Pro, where I use Working Copy to pull from the repository and GoCoEdit to edit the files.
