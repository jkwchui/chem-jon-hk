<template lang='pug'>

.puzzle
  task(
    bkg='410948696' 
    :time='5'
    )
    
    template(v-slot:title='')
      | Units: Conversions and Habits

    template(v-slot:puzzle='')
      p Convert #[span {{time}} {{unit}}] to seconds.
      p Use the sliders below to create eight questions of increasing difficulty.

      el-slider(
        v-model="time"
        :step="5"
        show-stops
        show-input
      )
      el-select(v-model='unit' 
                placeholder='Select unit')
        el-option(v-for='item in options' :key='item.value' :label='item.label' :value='item.value')

      AnswerBox(:correctAnswers = "getSeconds")

      p Aim to do each within 20 seconds.  You can use calculators to handle the arithmetic.

    template(v-slot:help='')
      p If you get some wrong, it is probably because you skipped steps.
      el-collapse(v-model="activeHint" accordion)
        el-collapse-item(title="Essential Habit 1" name="1")
          | Do this on paper.
        el-collapse-item(title="Essential Habit 2" name="2")
          | Break each conversion into steps.  Use a conversion factor to change hour to minutes, #[i then] convert minutes to seconds.  You trade speed for accuracy, and it is a good trade.  #[strong There is no prize for the first to be wrong.]
        el-collapse-item(title="Essential Habit 3" name="3")
          | Write out all units explicitly.  Cross out units.  What remains should be "sec".  If it is not, something is wrong with your set up.

    template(v-slot:reflect='')
      p Sometimes we even do the calculations #[i without] the numbers, just with units, to make sure that the calculations would work out.  This is called a #[a(href="https://en.wikipedia.org/wiki/Dimensional_analysis") Dimensional Analysis].
      p Good habits usually look trivial at the beginning.  However, they make hard things easy, and impossible things possible.
      p 25% of you will forget about the value of good habit before it becomes a habit.  When you work in a group, and you notice your friends skipping steps, point it out to them gently but firmly.  Be one another's angels 😇.
</template>

<script>

export default {
  components: { },
  data () {
    return {
      activeHint: '0',
      time: 10,
      unit: 'minutes',
      options: [{
          value: 'minutes',
          label: 'minutes'
        }, {
          value: 'hours',
          label: 'hours'
        }, {
          value: 'days',
          label: 'days'
        }, {
          value: 'weeks',
          label: 'weeks'
        }, {
          value: 'milliseconds',
          label: 'milliseconds'
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