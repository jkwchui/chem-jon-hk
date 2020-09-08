<template lang='pug'>

.puzzle
  task(
    bkg='455649778' 
    :time='15'
    )
    
    template(v-slot:title='')
      | Google Sheets: Formula

    template(v-slot:puzzle='')
      p You already have the skills from Spreadsheet 101; here you will use it to create your own Answer Checker for the previous puzzle.  A finished example is shown above.
      ol 
        li Create a new Google Sheet in an appropriate folder. Give it an appropriate name.
        li Set column A to be the time input.
        li Cell A2 will be the only numerical input;
        li Write formula in A3:A6 so they reflect the value of A2.
        li Set column B to be the units; type ms, ..., fs in B2:B6.
        li Set column C to be the conversion.  Type the conversion factors in C2:C6.  Use scientific notation.
        li Set column D to be the calculated result.
        li Write the appropriate formula in D2, then auto-fill the rest.
        li Use your newly-developed calculator to check your own answers.
      hr
      p The challenge: Can you modify this to convert between any pair of units, for example, from fs to ns?  Note that this would require using advanced spreadsheet functions that we will #[strong NOT] teach in this course. 

    template(v-slot:help='')
      p Here is the solution --- pause the video when the video got your unstuck, and try to get through as much as you can independently.
      Vimeo(vid='455646478' name="solution")      

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