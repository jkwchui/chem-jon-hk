# Session 2: Many Many

[[toc]]

Until now you have learnt separate parts of a larger puzzle w.r.t. both chemistry:

1. to see *individual* molecules *statically*,
2. to make calculations involving *large number* of molecules

...and measurements:

1. to make *single* measurements repeatedly (e.g., with a volumetric pipette), and
2. to show a *range* of measurements using either
   1. significant figures (implicit), or
   2. uncertainties (explicit)

Today you will learn to:

1. see and graph speeds of many particles, and
2. calculate the uncertainty from repeated measurements

## Visualizing Multiple Particles in Time

### Using Live Lab

Start by exploring the **Live Lab** feature in [AtomSmith](https://www.atomsmith.co), following the instructions in the printed notes.

### Viewing the Kinetic Energy Distribution

When you are done, click on `Options` -> `Open Kinetic Theory Chart`:

![](/image/Y1W6/AtomSmith_LiveLab_KEgraph.png)

This opens up a graph that shows the speeds (actually, kinetic energy) of the atoms.  Yours would be empty initially.  Return to `Simulation` and allow the simulation to run, and observe the distribution that is formed.  Does it look like the following?  If not, why not?

![](/image/Y1W6/AtomSmith_LiveLab_KEgraph2.png)

### Extended Explorations

Here are some suggestions for further exploring the kinetic energy---multiple particles display.  Use only a single type of particle.  You may need the simulation to run for longer periods.

1. Are the kinetic energies distributed symmetrically around a mean?
2. Is there a mathematical relationship between temperature and the mean?
3. Try the simulation using water as the particle.  Observe the additional rotational motion available.
   1. Lower the temperature.  Does the system behave equally at every temperature?  

## Calculate the uncertainty from repeated measurements

When repeated measurements are made, you naturally (?) end up recording multiple values:

![](/image/Y1W6/range.png)

When a larger number of measurements is made, you may be able to plot a histogram that looks like the following:

![](/image/Y1W6/50copies.png)

Which you would have seen from the pendulum period measurements from before.

You have learnt that you could designed a range of values using uncertainties.  But how do you convert multiple values into an uncertainty of the form X ± U?

You do this in two steps.  The first is to calculate the **mean** X; this would be the value before the uncertainty symbol (±).  For the above, this would be 

<LaTeX formula="X = \dfrac{105.7 + 115.3 + 116.6 + 102.0 + 102.5 + 127.6 + 128.2}{7}" />

For this course, we accept two different ways of determining the uncertainty:

1. As a standard deviation, and
2. Relating to the maximum and minimum values

Both of these would be woeful simplifications if you are a statistician --- but hey, we aren't, so this is good enough (for now).

### As Standard Deviation

Most measurements, when collected in large enough numbers, result in a symmetric bell curve.  This is called a [normal distribution](https://en.wikipedia.org/wiki/Normal_distribution) or a *Gaussian distribution*.  The next graph shows four different normal distributions: the blue, red, and yellow would have the same average but different "bell width".

![](/image/Y1W6/normal_distribution.png)

When there is a normal distribution, statisticians would use a [standard deviation](https://en.wikipedia.org/wiki/Standard_deviation) to describe the width of the bell.

![](/image/Y1W6/stdev.png)

The lower the standard deviation, the narrower the bell would be.  In other words, the lower the uncertainty.

Mathematically the standard deviation is calculated as:

<LaTeX formula="s = \sqrt{\frac{1}{N-1}\sum_{i=1}^N \left(x_i - \bar{x}\right)^2}" />

...but for IB chemistry we will **NOT** be calculating this by hand.  Instead, we will simply use the graphical calculator or the spreadsheet function `STDEV()`, placing the values for which you want to calculate the standard deviation inside the bracket.  This value would be what we quote as the uncertainty.

### Relating to the maximum and minimum values

What happens if we do not have a spreadsheet available *and* don't know how to do the standard deviation on a calculator?  Well, we would then take a further simplification by estimating the uncertainty U as 

<LaTeX formula="U = \dfrac{(max - min)}{2\sqrt{n}}" />

where *max* and *min* are the maximum and minimum measurements, and *n* the number of times a measurement have been made.

Using our previous set of numbers as an example:

![](/image/Y1W6/range.png)

The uncertainty would be estimated as

<LaTeX formula="U = \dfrac{(128.2 - 102.0)}{2\sqrt{7}} = " />

### Your turn

I have prepared several different data samples [in this spreadsheet](https://docs.google.com/spreadsheets/d/16dVWCUeselokQMvl3qpwK6TTY6LDSTGmedVgUh1qIzI/edit?usp=sharing).  Make a copy for your own use (`File` -> `Make a Copy`.  Remember to put it in an appropriate folder!)  This tests your ability to manipulate data in spreadsheets.

![](/image/Y1W6/spreadsheet.png)

::: warning Spreadsheet skills

If you skipped the spreadsheet tutorials and homework from earlier weeks, you will probably be stuck.  Go back and make sure you can do everything from those tutorials first.

:::

1. Plot a histogram for Sample B.  (Sample A has been done for you as an example.)
2. Plot a histogram that contains *all* samples.  This will allow you to compare them visually.  (Hover over the graph to highlight it against the others.)
3. Calculate the mean in cells `B2-H2`
4. Calculate the standard deviation in `B3-H3` using the `STDEV()` function.
5. Construct a formula in `B4` that would calculate the uncertainty using the Max/Min method.  Consider using parenthesis so you are clear about the logic of the formula.  You may need to ask Professor Google for how to find the maximum, minimum, and number of items in a list.
6. Adjust the uncertainties to somewhat meaningful number of significant figures.
7. Compare and contrast the two methods.  Are they equivalent?  What does that say about uncertainty?

These are skills you will use for writing up the lab report.

::: tip Solutions

Check the `solution` tab for a completed attempt.

:::

<!-- 
<puzzle-template />
<puzzle-template />
<puzzle-template /> -->
<!-- 
### Homework

Complete  by **(Wed) 21:00**.  This should take no more than *n** minutes. -->