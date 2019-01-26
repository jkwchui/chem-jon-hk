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
</mermaid>

::: tip For teachers

Why I sequence the course this way is discussed [here](../../jon/teaching/)

:::