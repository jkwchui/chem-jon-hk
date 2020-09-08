<template lang='pug'>

.puzzle
  task(
    bkg='410948696' 
    :time='5'
    )
    
    template(v-slot:title='')
      | S.I. Units and the Scientific Notation

    template(v-slot:puzzle='')
      p Invent and complete eight problems in your notes.
      p Convert #[span {{time}} {{unit}}] to seconds.
      p Use the sliders below to create your own questions.

      el-slider(
        v-model="time"
        :step="5"
        show-stops
        show-input
      )
      el-select(v-model='unit' 
                placeholder='Select unit')
        el-option(v-for='item in options' :key='item.value' :label='item.label' :value='item.value')

      //- AnswerBox(:correctAnswers = "getSeconds")

      p Aim to do each within 20 seconds.  You can use calculators to handle the arithmetic.

    template(v-slot:help='')
      p Unlike with minutes and hours, here you have little intuition, and the habits above becomes essential.
      p Let's repeat it: If you get some wrong, it is probably because you skipped steps.
      el-collapse(v-model="activeHint" accordion)
        el-collapse-item(title="Essential Habit 1" name="1")
          | Do this on paper.
        el-collapse-item(title="Essential Habit 2" name="2")
          | Break each conversion into steps.  Use a conversion factor to change hour to minutes, #[i then] convert minutes to seconds.  You trade speed for accuracy, and it is a good trade.  #[strong There is no prize for the first to be wrong.]
        el-collapse-item(title="Essential Habit 3" name="3")
          | Write out all units explicitly.  Cross out units.  What remains should be "sec".  If it is not, something is wrong with your set up.

    template(v-slot:reflect='')
      h3 😡😡😡
      p 😡: YOU DIDN'T GIVE US AN ANSWER CHECKING BOX!!1!!!1!
      p 😂: How did that affect your learning?
      p 😡: RaarRRARAR!!!1!!!!
      p 😂: Remember how important it is to get feedback, so you know you are on the right track.  #[strong NEVER JUST DO STUFF.]  Always make sure you get feedback so you can learn from it.
      p 😡: RaarRRARAR!!!1!!!!
      p 😂: Ok ok... how about we teach you how to build this answer checker?
      
</template>

<script>

export default {
  components: { },
  data () {
    return {
      activeHint: '0',
      time: 10,
      unit: 'ms',
      options: [{
          value: 'ms',
          label: 'ms'
        }, {
          value: 'µs',
          label: 'µs'
        }, {
          value: 'ns',
          label: 'ns'
        }, {
          value: 'ps',
          label: 'ps'
        }, {
          value: 'fs',
          label: 'fs'
        }]
    }
  },
  computed: {
    getSeconds: function() {
      switch(this.unit) {
        case "minutes":
          return [(this.time * 60).toString()]
          break;
        case "hours":
          return [(this.time * 3600).toString()]
          break;
        case "days":
          return [(this.time * 86400).toString()]
          break;
        case "weeks":
          return [(this.time * 604800).toString()]
          break;
        case "milliseconds":
          return [(this.time / 1000).toString()]
          break;
        }
      }
    }
}
</script>

<style scoped>

</style>