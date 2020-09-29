<template lang='pug'>

.puzzle
  task(
    bkg='185198996'
    :time='15'
    )
    
    template(v-slot:title='')
      | Significant Figures as Implicit Uncertainty

    template(v-slot:puzzle='')
      p If you are on-campus, we will work through this together.  You do not need to watch the video.
      p If you are off-campus, watch the first 16:30 of the above video.
      
      p Identify the number of significant figures in the following:
      p 555
      AnswerBox(:correctAnswers = "['3']")

      p 5505
      AnswerBox(:correctAnswers = "['4']")

      p 0.5505
      AnswerBox(:correctAnswers = "['4']")

      p 5.505 x 10#[sup 5]
      AnswerBox(:correctAnswers = "['4']")

      p 5.55 ± 0.005
      AnswerBox(:correctAnswers = "['3']")

      p 50
      AnswerBox(:correctAnswers = "['2 or 3', '3 or 2']")

      p 0.50
      AnswerBox(:correctAnswers = "['2']")

    template(v-slot:help='')
      p An alternative way to handling significant figures is to systematically convert all values to scientific notation.

    template(v-slot:reflect='')
      p Seeing significant figures ("sig fig", "s.f.") needs to become a background process.  #[i Every] number you encounter needs to be thought of in this framework.
      p A common time to slip up is when you get a number from a calculator.  Beware of those #[i 1.54699389492]!

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