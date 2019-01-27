# Course Info

## Teaching sequence

Overall order of teaching is shown below.  Finer divisions are given in the subsequent subsections.

<mermaid>
graph TB
    subgraph Y1 Sep-Nov
    0["0 - Prerequisites"] --> 1["1 - Stoichiometry"]
    0 --> 11A["11A - Measurements"]
    0 --> 2
    1 --> 2["2/12 - Atomic Structure"]
    end
    subgraph Y1 Dec-Feb
    1 --> 5A["5.1-5.2 - Enthalpy & Heat Changes"]
    11A --> 5A
    2 --> 3["3 - Periodicity"]
    end
    subgraph Y1 Feb-May
    3 --> 4["4/14 - Structure & Bonding"]
    5A --> 5B["5.3-15 Hess' Law, Bond Enthalpy, Spontaneity"]
    3 --- 5A
    4 --> 10A["10.1 - Basic Organic - Functional Groups, Isomers"]
    5B --> 6["6/16 - Kinetics"]
    6 --> 7["7/17 - Equilibrium"]
    end
    subgraph Y1 Jun-Y2 Sep
    10A --> 10B["10.2 - Nomenclature, Reactions of alkenes"]
    3 --> 9A["9.1 - Oxidation numbers, balancing redox eqns"]
    7 --> 8["8 - Acids and Bases"]
    end
    subgraph Y2 Oct-Nov
    8 --> 18["18 - Acid-Base calculations"]
    7 --> 18
    9A --> 9B["9.2-19 - electrochemical cells"]
    end
    subgraph Y2 Nov-Jan
    10B --> 10C["10.2-20.3 - Organic Chemistry"]
    10C --> 11B["11B/21 - Spectroscopy"]
    end
    subgraph Y2 Feb-May
    10C --> D["Opt D - Med Chem"]
    11B --> D
    8 --> D
    end
    subgraph Practical
    L0["Lab treasure hunt"] --> L1["Water measurement"]
    11A --> L1
    L1 --> L2["Gravimetric analysis"]
    1 --> L2
    L2 --> L3["Acid-Base Titration"]
    1 --> L3
    L3 --> L4["Determining Molar Mass of Lithium"]
    3 --> L4
    L4 --> L5["Enthalpy of Reaction in Aq Solution"]
    5A --> L5
    L5 --> L6["Hess' Law"]
    5B --> L6
    L6 --> L7["Kinetics Circuit"]
    6 --> L7
    L7 --> L8["Titration Curve"]
    18 --> L8
    L8 --> L9["Determining an Activity Series"]
    9A --> L9
    L9 --> L10["Electrolytic cell"]
    9B --> L10
    L10 --> L11["Reactions of hydrocarbon"]
    10C --> L11
    L11 --> L12["Distillation"]
    10C --> L11
    L12 --> L13["Synthesis of Aspirin"]
    D --> L13
    end
    subgraph ICT
    ICT1["Spreadsheet 101"] --> ICT2["Spreadsheet 102"]
    ICT2 --> L1
    ICT2 --> ICT3["Visualizing Chemistry with Atomsmith"]
    1 --> ICT3
    ICT3 --> ICT4["Simulating reactions with Yenka Chemistry"]
    ICT4 --> L4
    ICT4 --> ICT5["Morse Curve from Ab Initio Molecular Modeling"]
    5A --> ICT5
    4 --> ICT5
    ICT5 --> ICT6["VSEPR from Ab Initio Methods"]
    4 --> ICT6
    ICT6 --> ICT7["Trends in Lattice Enthalpy"]
    5B --> ICT7
    ICT7 --> ICT8["Kinetics simulation with p5.js"]
    6 --> ICT8
    ICT8 --> ICT9["Equilibrium simulation with p5.js"]
    7 --> ICT9
    end
</mermaid>

::: tip For teachers

Reasons for course sequencing is described [here](../../jon/teaching/).

Description of activities can be found under the [IA](../IA/) and [skills](../skills/) tabs.

:::