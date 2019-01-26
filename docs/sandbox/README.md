# A Grand Sandbox

[[toc]]

## Markdown features

### Table of contents

### Checkbox

[ ] Unfilled checkbox
[x] filled checkbox

### Footnote

#### Inline

Here is an inline note.^[Inlines notes are easier to write, since you don't have to pick an identifier and move down to type the note.]

#### Separate

Here is a footnote reference.[^1]

[^1]: Here is the footnote.

### Attributes / Classes

Through Markdown-it-attrs[^2].

### Abbreviations

*[HTML]: Hyper Text Markup Language
*[W3C]: World Wide Web Consortium

The HTML specification is maintained by the W3C.

[^2]: [NPM package](https://www.npmjs.com/package/markdown-it-attrs)

### Videos

Youtube

Vimeo

### Sup/superscript

23^rd^ October is Chemistry Day.

H~2~O is water.

## Bootstrap-vue components

## LaTeX / Chem

<LaTeX formula="x^2 + y^2 + \cancel{pxy} = z^2 + \cancel{pxy}" />

<Chem formula="H+\aq{} + OH^{-}\aq{} <=>> H2O\liquid{}" />

At triple point, <Chem formula="H2O\solid{} <=> H2O\liquid{} <=> H2O\gas{}" inline />.

## 3D molecules

### Through jsmol

???

### Through 3dmol.js

From PDB.

<Molecule pdb="1bl8" />

From PubChem.

<Molecule cid="2349" />

From local URL.

???

## Airtable pull
