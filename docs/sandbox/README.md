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

## Element UI components

From Element UI.[^EUI]

[^EUI]: [Element UI documentation](http://element.eleme.io/?ref=madewithvuejs.com#/en-US/component/installation)

### Stepped slider

<el-steps :active="2" align-center>
  <el-step title="Step 1" description="Some description"></el-step>
  <el-step title="Step 2" description="Some description"></el-step>
  <el-step title="Step 3" description="Some description"></el-step>
  <el-step title="Step 4" description="Some description"></el-step>
</el-steps>

### Icons

<i class="el-icon-edit"></i>

### Buttons

<el-row>
  <el-button round>Round</el-button>
  <el-button type="primary" round>Primary</el-button>
  <el-button type="success" round>Success</el-button>
  <el-button type="info" round>Info</el-button>
  <el-button type="warning" round>Warning</el-button>
  <el-button type="danger" round>Danger</el-button>
</el-row>

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

<AirtableTopic />

## Mermaid.js

### Flowcharts

<mermaid>
graph LR
    Start --> Stop
</mermaid>