<template lang='pug'>

.puzzle
  task(
    bkg='410948696' 
    :time='10'
    )
    
    template(v-slot:title='')
      | Google Sheets Setup and Naming-of-Parts

    template(v-slot:puzzle='')
      p Open #[a(href="https://docs.google.com/spreadsheets/d/1Zj4hbDGX75IMb4LOo3xv-7-f9WLXqZn679qcx_-c0Tc/edit?usp=sharing") this Google Sheet], and make your own editable copy (File, Make a Copy).  Then find the answers to the following puzzles.
      ol 
        li C4
          AnswerBox(:correctAnswers = "['trace']")
        li Rainfall (in mm) on 2014.06.04
          AnswerBox(:correctAnswers = "['20.2']")
        li Sum of J2:J4
          AnswerBox(:correctAnswers = "['46.6']")
        li $AC$15
          AnswerBox(:correctAnswers = "['nice']")
        li Average temperature in 1900
          AnswerBox(:correctAnswers = "['22.0', '22']")
        li Sheet3!B2
          AnswerBox(:correctAnswers = "['1337 h4x0r']")

    template(v-slot:help='')
      ul 
        li Search.  Not everything is in the instruction.
        li If you did not #[i Make a Copy] you will not be able to edit the spreadsheet. Some parts will then be difficult or impossible to complete.
        li Is something hiding?

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