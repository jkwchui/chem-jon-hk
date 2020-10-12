<template lang='pug'>

.puzzle
  task(
    bkg='465283879' 
    :time='25'
    )
    
    template(v-slot:title='')
      | Mathematical Equations and Symbols

    template(v-slot:puzzle='')
      p Try the questions in the PDF worksheet titled #[strong Molar Mass calculations].  You can download a copy #[a(href="/resources/worksheets/1-mole_mass_calculations.pdf") here].

    template(v-slot:help='')
      p Check your answers against the solution #[a(href="/resources/worksheets/1-mole_mass_calculations_solution.pdf") here].  
      p Note an error in answer to 4c.  The coefficient to oxygen should be 3/2.

    //- template(v-slot:reflect='')
    //-   p #[span {{someValue}}] x #[span {{someMul}}] 
    //-   p #[span {{someValue}}] x 10 x #[span {{someMul / 10}}]
    //-   p #[span {{someValue * 10}}] x #[span {{someMul / 10}}]
    //-   p #[span {{someValue * someMul}}]
    //-   p Check that your answer has blah.
    //-   Vimeo(vid='457245328' name="sol")

</template>

<script>

export default {
  components: { },
  data () {
    return {
      activeHint: '0',
      someValue: 10,
      someMul: 20
    }
  }
}
</script>

<style scoped>

</style>