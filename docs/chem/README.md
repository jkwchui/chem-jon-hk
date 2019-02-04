# IB Chemistry

These pages support the learning and teaching of chemistry at a Year 11-13 / first-year university level.  Specifically this caters to the International Baccalaureate diploma which I have taught and examined for a number of years.

## What's special?

There are excellent books and websites by knowledgeable teachers and chemists that I admire.  What do I hope to bring to the table?

### Dimensions and Agency

A media has two qualities, *dimensionality* and *agency*.  Dimensionality describes the availability of information at any instant:

1. **1D** communications presents ideas sequentially, one piece of information articulated at a time.  Verbal and written prose are 1D.
2. **2D** presents idea on a plane.  Images are 2D, and can thus convey additional size / distance / arrangement relationships that simply is not possible in 1D.
3. True **3D** involves physical models, or AR/VR.  Pseudo 3D allows user rotation of an object that is presented in a 2D plane.
4. **2D + _t_** shows additionally images that evolve through time.  Anime and movies falls in this category.
5. **3D + _t_** presents an evolving 3D model.

*Agency* describes who chooses what is being presented.

* **Author-directive** tells what the author wishes to say, whereas
* **Reader-directive** answers what the reader wishes to know.

Existing works are mostly blends of 90% 1D + 10% 2D:

1. 90% words, which is by nature sequentially and holds one idea at a time, and
2. 10% pictures
   1. for changes, these pictures often describes *states*, conditions before and after the interesting things happening

They are also purely author-directive: any reader will find the book to be identical.  The media constrains what could be said.

What I wish to try is to push up the dimensionality, and blend some reader-directive.  Chemistry involves shapes that transforms in time, and the most closely we can align the representations, the most the learning can be translated to the real world.  I propose to do this by, as possible, blending 

* **visual** representations, and
* **animations** that try to capture *transitions*, the exact moments where the interesting things are happen*ing*
* **interactions**, exploring phenomena by watching it change in real time, connecting different levels of abstract representations (graphs, pictures, symbols).  Numbers that the user can change and explore.

For example, instead of *describing* that

>  electron, with the same charge, repels each other

Or images that *suggests* motion:

> ![Electron repulsion](./electronRepulsion.svg =300x)

We will present two electrons trapped together:

<anim-electronRepulsionSimple />

Clicking on the walls let the electrons free.  Try!

[INSERT number question]

This is what I wish I had when I learnt chemistry.  In the 90's I made these same repelling e^-^ in Flash; the attempt quickly crumbled under its own weight.  I have a better workflow now.

[INSERT WARDLEY MAP OF NICHE: vert: Visibility, hor: evolution]

### IB specific info

The primary audience are my students and I specify the timeline and logistics for them.

The secondary audience are teachers.  The IB diploma is seeing rapid adoption, and many colleagues are new to the curriculum.  It is, for example, not clear how the various topics hang together, and one of the most frequent questions on teacher forums is the order of teaching.  Several years later I have my preference and you may find these --- expressed as maps --- useful as a starting point.  For example, Measurements could be dissected into the following interdependent chunks:

<mermaid>
graph LR
  classDef default fill:#f9f,stroke:#333,stroke-width:4px;
  NL("number line") --> SF1("1: count sig figs")
  NL --> G0("Terms")
  Ex("Exact numbers") --> SF1
  Ex --> U2
  subgraph Sig figs
    SF1 --> SF2("2: combine sig figs")
    click SF2 "./sigfig.html#skill-2-combining-numbers"
  end
  subgraph Uncertainties
    U0("Notation") --> U1("Abs and Rel Uncert")
    U1 --> U2("Combine uncert")
    U3("Instr. uncert") --> U2
    U4("Reprod. uncert") --> U2
    U2 --> U5("Reporting")
    SF2 --> U4
    SF2 --> U1
  end
  subgraph Graphs
    G0 --> G1("Curve fit")
    G1 --> G2("Fitness of fits")
  end
  subgraph Evaluation
    Ev0("Lit values") --> Ev1("Syst errors")
    U5 --> Ev1
    U5 --> Ev2("Random errors")
    Ev1 --> Ev3("Goodness of results")
    Ev2 --> Ev3
    G2 --> Ev3
  end
</mermaid>

This is implicit in experienced teacher's heads but I haven't seen it expressed on paper.

Additional notes on pedagogy, thinking behind explanation, and caveats are hidden on the page and can be viewed by toggling on the Teacher slider.  

For more resources I suggest you to subscribe to our Teacher Resource Exchange.  Instructions for access can be found on the myIB forums.