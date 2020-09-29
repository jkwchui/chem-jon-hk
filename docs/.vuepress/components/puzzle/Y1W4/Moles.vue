<template lang='pug'>

.puzzle
  task(
    bkg='462530637' 
    :time='15'
    )
    
    template(v-slot:title='')
      | Moles as a Unit for Counting

    template(v-slot:puzzle='')
      p It's difficult for me to set interactive puzzles for you, because there is no simple way for you to enter scientific notations, and you are not fluent enough with sig figs to get them right.  
      p To work around this, use the "E" notation: enter "5.55 x 10#[3]" as "5.55e3", and keep #[strong three] sig fig for your answers.

      p How many neon atoms are in #[strong 0.500 mol of Ne atoms]?
      AnswerBox(:correctAnswers = "['3.01e23']")

      p How many neon atoms are in #[strong 1000 mol of Ne atoms]?
      AnswerBox(:correctAnswers = "['6.02e26']")

      p How many wheels are in #[strong 0.5 dozens of bicycles]?
      AnswerBox(:correctAnswers = "['12']")

      p How many hydrogen atoms are in #[strong 0.500 mol of water molecules]?
      AnswerBox(:correctAnswers = "['6.02e23']")

      p How many neutrons are in 0.500 mol #[sup 2]H?
      AnswerBox(:correctAnswers = "['3.01e23']")

      p What is the alternative symbol for #[sup 2]H?
      AnswerBox(:correctAnswers = "['d']")

      p How many neutrons are in 0.500 mol H#[sub 2]?
      AnswerBox(:correctAnswers = "['0']")

    template(v-slot:help='')
      p One molecule can contain more than one atom, and one atom can contain more than one sub-atomic particle.
      p Unless specified, assume the most common isotope.

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