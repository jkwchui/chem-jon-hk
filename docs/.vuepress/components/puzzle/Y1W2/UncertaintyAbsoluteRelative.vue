<template lang='pug'>

.puzzle
  task(
    bkg='458055066' 
    :time='15'
    )
    
    template(v-slot:title='')
      | Uncertainty, Absolute & Relative

    template(v-slot:puzzle='')
      p Convert the absolute uncertainties into relative uncertainties.  
      p #[span {{main}}] ± #[span {{pm}}]
      //- img(src="/image/IB_M20/subject-path.png")
      el-slider(
        v-model="main"
        :min="1"
        :max="500"
        :step="5"
        show-input
      )
      el-slider(
        v-model="pm"
        show-input
      )

      p The relative (percent) uncertainty is #[span {{main}}] ± ___%
      AnswerBox(:correctAnswers = "percent")

      p Go back to look at the durations for the pendulum swings.  How should we report the time it takes for the 0.25 m pendulum to swing?  How did you come up with the interval?  What could be some reasons that the pendulum #[i didn't] all took the same time to swing?

    template(v-slot:help='')
      p #[span {{main}}] ± (#[span {{pm}}] / #[span {{main}}] x 100%)

    template(v-slot:reflect='')
      p How do you go #[i backwards] from relative uncertainty to absolute uncertainties?
      Vimeo(vid='' name="sol")

</template>

<script>

export default {
  components: { },
  data () {
    return {
      activeHint: '0',
      main: 100,
      pm: 20,
    }
  },
  computed: {
    percent: function () {
      return [(this.pm / this.main * 100).toString()]
    }
  }
}
</script>

<style scoped>

</style>