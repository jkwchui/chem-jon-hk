# Bootstrap example

Some works.

[ ] What about
[x] What about this

H~2~O

29^th^

<b-img src="https://picsum.photos/1024/400/?image=41" fluid alt="Responsive image" />
</div>

<b-alert show>Default Alert</b-alert>

<b-button disabled variant="success">Disabled</b-button>

<b-button variant="success">Not Disabled</b-button>

 <div role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-btn block href="#" v-b-toggle.accordion1 variant="info">Accordion 1</b-btn>
      </b-card-header>
      <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <p class="card-text">
            I start opened because <code>visible</code> is <code>true</code>
          </p>
          <p class="card-text">
            {{ text }}
          </p>
        </b-card-body>
      </b-collapse>
    </b-card>
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-btn block href="#" v-b-toggle.accordion2 variant="info">Accordion 2</b-btn>
      </b-card-header>
      <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <p class="card-text">
            {{ text }}
          </p>
        </b-card-body>
      </b-collapse>
    </b-card>
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-btn block href="#" v-b-toggle.accordion3 variant="info">Accordion 3</b-btn>
      </b-card-header>
      <b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <p class="card-text">
            {{ text }}
          </p>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>

Here is a footnote reference,[^1] and another.[^longnote]

[^1]: Here is the footnote.
[^longnote]: Here's one with multiple blocks.

  Subsequent paragraphs are indented to show that they belong to the previous footnote.

Here is an inline note.^[Inlines notes are easier to write, since you don't have to pick an identifier and move down to type the note.]

{{ 4+5 }}

$$ x^2= 3+4 $$

<LaTeX formula="x^2 - 2x\aq" />

The equation <LaTeX formula="\ce{H2O\liquid{} <=> H+\aq{} + OH^{-}\aq{}}" inline v-b-popover.hover="'I am popover content!'" title="Popover Title"/> shows the <span v-b-tooltip.hover title="I'm a tooltip!">autoionization of water</span>.

The equation <LaTeX formula="\ce{H2O\liquid{} <=> H+\aq{} + OH^{-}\aq{}}" /> shows the autoionization of water.

## header {.style-me}

paragraph {data-toggle=modal}

## second level

<Boostrap/>

@[vimeo](288282144)
