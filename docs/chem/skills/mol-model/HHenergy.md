# Tutorial: Investigating the H-H bond

In this tutorial, I will show you how to do an *ab initio* quantum mechanical calculation using GAMESS.  After finishing this tutorial you will be able to determine:

* Energy of molecules at arbitrary conformations, and
* Optimal geometry of molecules

During this process you will learn to navigate the interface, create molecules, making measurements, modifying bond lengths, and submitting a job.

::: warning Off-campus access

The WebMO-GAMESS installation is only accessible on-campus.

If you are visiting this from another school, you would need your own WebMO-GAMESS build.

:::

::: danger Teacher's notes: in-progress writing

I show students how to do this step-by-step in class.  This page is secondary in importance and just gives students a reference for later.

:::

## Preparations

* A spreadsheet for collecting the data is [available here](https://docs.google.com/spreadsheets/d/1nQszPquVbAC9RbDCbrdCMJp7xnKyojHhNOTapb9I2kw/edit?usp=sharing)
  * If you are my student, a special copy was created for your class, and can be found in your Google Drive
  * If you are accessing this from elsewhere, you would need to make your own copy (`File` -> `Make a Copy`)

* A browser window pointing to [http://172.17.0.100/~jkwchui/cgi-bin/webmo/login.cgi](http://172.17.0.100/~jkwchui/cgi-bin/webmo/login.cgi)
  * Username: `Student`
  * Password: `lpcuwc`

## The Interface

### Job Manager

### Molecule builder

## Creating a hydrogen molecule

### Measuring the bond length

## Adjusting the bond length

## Submitting your first calculation

### Parameters

* **Job Name**.  How this job shows up on the Job Manager.  I recommend the format `[Your name] - [molecule] - [parameters]`.  Example: `Jon Chui - H2 - 1350 pm`
* **Calculation**.  The *kind* of calculation that is being done.  `Molecular energy` means calculating the energy of the molecule in that particular situation.
* **Theory**.  The assumptions that go into the calculation.  How should atoms be modelled?  Are they "just mechanical spheres of different sizes", or are they formed of electrons and nuclei?  What mathematical model should the computer use to describe electrons?  To describe this mathematically, do you want a function *f(molecule, parameters)* or *g(molecule, parameters)* or *h(molecule, parameters)*?
* **Basis set**.  What math should we use to approximate orbitals?  This is one of the parameters that you would provide to the function *f(molecule, {basis set, [other parameters]})*.

For your first job use the following defaults:

* **Job name**: `[your name] - H2 - [length]`
* **Calculation**: `Molecular energy`
* **Theory**: `RHF`
* **Basis set**: `Routine: 6-31G(d)`
* **Charge**: `0`
* **Multiplicity**: `Singlet`

Click on the blue arrow on the right to advance.

## Viewing output

The desired output for this calculation is under `RHF Energy`, expressed in Hartree.  Hartree is an energy unit for objects at atomic level, and can be converted to kJ/mol.  This is done for you in the spreadsheet.