# 11A: Measurements

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

## Number line

## Significant figures

[Sig fig](./sigfig.html)

## Uncertainties

[Uncertainties](./uncertainty.html)

## Instrument & Replicate Uncertainty

## Accuracy & Precision

## Improvements

<Subsubtopic id='11.1.NoS' type='Nature of Science' content='Making quantitative measurements with replicates to ensure reliability—precision, accuracy, systematic, and random errors must be interpreted through replication. (3.2, 3.4)' />	11.1.NoS	Nature of Science	Making quantitative measurements with replicates to ensure reliability—precision, accuracy, systematic, and random errors must be interpreted through replication. (3.2, 3.4)	Precision, Reliability, Repeatability, Reproducibility, random error																					
<Subsubtopic id='11.1.U1' type='Understandings' content='Qualitative data includes all non-numerical information obtained from observations not from measurement' />	11.1.U1	Understandings	Qualitative data includes all non-numerical information obtained from observations not from measurement	Qualitative results																					
<Subsubtopic id='11.1.U2' type='Understandings' content='Quantitative data are obtained from measurements, and are always associated with random errors/uncertainties, determined by the apparatus, and by human limitations such as reaction times.' />	11.1.U2	Understandings	Quantitative data are obtained from measurements, and are always associated with random errors/uncertainties, determined by the apparatus, and by human limitations such as reaction times.	absolute uncertainty, Reaction time, Significant figures, Quantitative results																					
<Subsubtopic id='11.1.U3' type='Understandings' content='Propagation of random errors in data processing shows the impact of the uncertainties on the final result.' />	11.1.U3	Understandings	Propagation of random errors in data processing shows the impact of the uncertainties on the final result.	Relative uncertainty																					
<Subsubtopic id='11.1.U4' type='Understandings' content='Experimental design and procedure usually lead to systematic errors in measurement, which cause a deviation in a particular direction' />	11.1.U4	Understandings	Experimental design and procedure usually lead to systematic errors in measurement, which cause a deviation in a particular direction	Outlier, Percentage error, Reaction time, Systematic errors																					
<Subsubtopic id='11.1.U5' type='Understandings' content='Repeat trials and measurements will reduce random errors but not systematic errors.' />	11.1.U5	Understandings	Repeat trials and measurements will reduce random errors but not systematic errors.	Percentage error, Systematic errors																					
<Subsubtopic id='11.1.AS1' type='Applications and skills' content='Distinction between random errors and systematic errors.' />	11.1.AS1	Applications and skills	Distinction between random errors and systematic errors.	Literature value, ﻿Accuracy, Percentage error, Systematic errors																					
<Subsubtopic id='11.1.AS2' type='Applications and skills' content='Record uncertainties in all measurements as a range (+) to an appropriate precision.' />	11.1.AS2	Applications and skills	Record uncertainties in all measurements as a range (+) to an appropriate precision.	absolute uncertainty, random error, Significant figures																					
<Subsubtopic id='11.1.AS3' type='Applications and skills' content='Discussion of ways to reduce uncertainties in an experiment' />	11.1.AS3	Applications and skills	Discussion of ways to reduce uncertainties in an experiment	Control variable																					
<Subsubtopic id='11.1.AS4' type='Applications and skills' content='Propagation of uncertainties in processed data, including the use of percentage uncertainties.' />	11.1.AS4	Applications and skills	Propagation of uncertainties in processed data, including the use of percentage uncertainties.																						
<Subsubtopic id='11.1.AS5' type='Applications and skills' content='Discussion of systematic errors in all experimental work, their impact on the results and how they can be reduced.' />	11.1.AS5	Applications and skills	Discussion of systematic errors in all experimental work, their impact on the results and how they can be reduced.	﻿Accuracy, Best-fit line																					
<Subsubtopic id='11.1.AS6' type='Applications and skills' content='Estimation of whether a particular source of error is likely to have a major or minor effect on the final result.' />	11.1.AS6	Applications and skills	Estimation of whether a particular source of error is likely to have a major or minor effect on the final result.																						
<Subsubtopic id='11.1.AS7' type='Applications and skills' content='Calculation of percentage error when the experimental result can be compared with a theoretical or accepted result.' />	11.1.AS7	Applications and skills	Calculation of percentage error when the experimental result can be compared with a theoretical or accepted result.	Literature value, Relative uncertainty, Percentage error, Systematic errors																					
<Subsubtopic id='11.1.AS8' type='Applications and skills' content='Distinction between accuracy and precision in evaluating results.' />	11.1.AS8	Applications and skills	Distinction between accuracy and precision in evaluating results.	﻿Accuracy, Precision, random error																					
<Subsubtopic id='11.1.G1' type='Guidance' content='The number of significant figures in a result is based on the figures given in the data. When adding or subtracting, the final answer should be given to the least number of decimal places. When multiplying or dividing the final answer is given to the least number of significant figures.' />	11.1.G1	Guidance	The number of significant figures in a result is based on the figures given in the data. When adding or subtracting, the final answer should be given to the least number of decimal places. When multiplying or dividing the final answer is given to the least number of significant figures.	scientific notation																					
<Subsubtopic id='11.1.G2' type='Guidance' content='Note that the data value must be recorded to the same precision as the random error.' />	11.1.G2	Guidance	Note that the data value must be recorded to the same precision as the random error.	random error																					
<Subsubtopic id='11.1.G3' type='Guidance' content='SI units should be used throughout the programme' />	11.1.G3	Guidance	SI units should be used throughout the programme	SI Units																					
<Subsubtopic id='11.1.IM1' type='International-mindedness' content='As a result of collaboration between seven international organizations, including IUPAC, the International Standards Organization (ISO) published the Guide to the Expression of Uncertainty in Measurement in 1995. This has been widely adopted in most countries and has been translated into several languages.' />	11.1.IM1	International-mindedness	As a result of collaboration between seven international organizations, including IUPAC, the International Standards Organization (ISO) published the Guide to the Expression of Uncertainty in Measurement in 1995. This has been widely adopted in most countries and has been translated into several languages.																						
<Subsubtopic id='11.1.ToK1' type='Theory of Knowledge' content='Science has been described as a self-correcting and communal public endeavour. To what extent do these characteristics also apply to the other areas of knowledge?' />	11.1.ToK1	Theory of Knowledge	Science has been described as a self-correcting and communal public endeavour. To what extent do these characteristics also apply to the other areas of knowledge?																						
<Subsubtopic id='11.1.Uz1' type='Utilization' content='Crash of the Mars Climate Orbiter spacecraft.' />	11.1.Uz1	Utilization	Crash of the Mars Climate Orbiter spacecraft.																						
<Subsubtopic id='11.1.Uz2' type='Utilization' content='Original results from CERN regarding the speed of neutrinos were flawed.' />	11.1.Uz2	Utilization	Original results from CERN regarding the speed of neutrinos were flawed.																						
<Subsubtopic id='11.1.Aims1' type='Aims' content='Aim 6: The distinction and different roles of Class A and Class B glassware could be explored' />	11.1.Aims1	Aims	Aim 6: The distinction and different roles of Class A and Class B glassware could be explored																						
<Subsubtopic id='11.1.Aims2' type='Aims' content='Aim 8: Consider the moral obligations of scientists to communicate the full extent of their data, including experimental uncertainties. The “cold fusion” case of Fleischmann and Pons in the 1990s is an example of when this was not fulfilled.' />	11.1.Aims2	Aims	Aim 8: Consider the moral obligations of scientists to communicate the full extent of their data, including experimental uncertainties. The “cold fusion” case of Fleischmann and Pons in the 1990s is an example of when this was not fulfilled.																						
<Subsubtopic id='11.2.NoS' type='Nature of Science' content='The idea of correlation—can be tested in experiments whose results can be displayed graphically. (2.8)' />	11.2.NoS	Nature of Science	The idea of correlation—can be tested in experiments whose results can be displayed graphically. (2.8)																						
<Subsubtopic id='11.2.U1' type='Understandings' content='Graphical techniques are an effective means of communicating the effect of an independent variable on a dependent variable, and can lead to determination of physical quantities.' />	11.2.U1	Understandings	Graphical techniques are an effective means of communicating the effect of an independent variable on a dependent variable, and can lead to determination of physical quantities.	Dependent variable, Independent variable																					
<Subsubtopic id='11.2.U2' type='Understandings' content='Sketched graphs have labelled but unscaled axes, and are used to show qualitative trends, such as variables that are proportional or inversely proportional.' />	11.2.U2	Understandings	Sketched graphs have labelled but unscaled axes, and are used to show qualitative trends, such as variables that are proportional or inversely proportional.	Trend																					
<Subsubtopic id='11.2.U3' type='Understandings' content='Drawn graphs have labelled and scaled axes, and are used in quantitative measurements.' />	11.2.U3	Understandings	Drawn graphs have labelled and scaled axes, and are used in quantitative measurements.	Quantitative results																					
<Subsubtopic id='11.2.AS1' type='Applications and skills' content='Drawing graphs of experimental results including the correct choice of axes and scale.' />	11.2.AS1	Applications and skills	Drawing graphs of experimental results including the correct choice of axes and scale.	Histogram																					
<Subsubtopic id='11.2.AS2' type='Applications and skills' content='Interpretation of graphs in terms of the relationships of dependent and independent variables.' />	11.2.AS2	Applications and skills	Interpretation of graphs in terms of the relationships of dependent and independent variables.	Histogram, Dependent variable, Independent variable																					
<Subsubtopic id='11.2.AS3' type='Applications and skills' content='Production and interpretation of best-fit lines or curves through data points, including an assessment of when it can and cannot be considered as a linear function.' />	11.2.AS3	Applications and skills	Production and interpretation of best-fit lines or curves through data points, including an assessment of when it can and cannot be considered as a linear function.	Scatter plot																					
<Subsubtopic id='11.2.AS4' type='Applications and skills' content='Calculation of quantities from graphs by measuring slope (gradient) and intercept, including appropriate units.' />	11.2.AS4	Applications and skills	Calculation of quantities from graphs by measuring slope (gradient) and intercept, including appropriate units.	Histogram, Intercept (of a graph)																					
<Subsubtopic id='11.2.IM1' type='International-mindedness' content='Charts and graphs, which largely transcend language barriers, can facilitate communication between scientists worldwide.' />	11.2.IM1	International-mindedness	Charts and graphs, which largely transcend language barriers, can facilitate communication between scientists worldwide.																						
<Subsubtopic id='11.2.ToK1' type='Theory of Knowledge' content='Graphs are a visual representation of data, and so use sense perception as a way of knowing. To what extent does their interpretation also rely on the other ways of knowing, such as language and reason?' />	11.2.ToK1	Theory of Knowledge	Graphs are a visual representation of data, and so use sense perception as a way of knowing. To what extent does their interpretation also rely on the other ways of knowing, such as language and reason?																						
<Subsubtopic id='11.2.Uz1' type='Utilization' content='Graphical representations of data are widely used in diverse areas such as population, finance and climate modelling. Interpretation of these statistical trends can often lead to predictions, and so underpins the setting of government policies in many areas such as health and education.' />	11.2.Uz1	Utilization	Graphical representations of data are widely used in diverse areas such as population, finance and climate modelling. Interpretation of these statistical trends can often lead to predictions, and so underpins the setting of government policies in many areas such as health and education.																						
<Subsubtopic id='11.2.Aims1' type='Aims' content='Aim 7: Graph-plotting software may be used, including the use of spreadsheets and the derivation of best-fit lines and gradients.' />	11.2.Aims1	Aims	Aim 7: Graph-plotting software may be used, including the use of spreadsheets and the derivation of best-fit lines and gradients.	Scatter plot																					