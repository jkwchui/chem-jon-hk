<template lang='pug'>

.puzzle
  task(
    bkg='' 
    :time='10'
    )
    
    template(v-slot:title='')
      | Unit Conversions: Lengths

    template(v-slot:puzzle='')
      p Convert #[span {{length}} {{unit}}] to nanometers.
      p Use the sliders below to create eight questions of increasing difficulty.

      el-slider(
        v-model="length"
        :step="5"
        :max="1000"
        show-input
      )
      el-select(v-model='unit' 
                placeholder='Select unit')
        el-option(v-for='item in options' :key='item.value' :label='item.label' :value='item.value')

      AnswerBox(:correctAnswers = "getnm")

      p Aim to do each within 20 seconds.  You can use calculators to handle the arithmetic.

      hr

      p Consult your Data Booklet.  On which table do you find the atomic radii?
      AnswerBox(:correctAnswers = "['9', 'table 9']")

      p How many Å is the radii of a carbon (C) atom?
      AnswerBox(:correctAnswers = "['0.75']")

    template(v-slot:help='')
      p Once again, with feelings: #[strong if you get some wrong, it is probably because you skipped steps.]
      el-collapse(v-model="activeHint" accordion)
        el-collapse-item(title="Essential Habit 1" name="1")
          | Do this on paper.
        el-collapse-item(title="Essential Habit 2" name="2")
          | If necessary, break each conversion into steps.  Use a conversion factor to change to intermediate units.  You trade speed for accuracy, and it is a good trade.  #[strong There is no prize for the first to be wrong.]
        el-collapse-item(title="Essential Habit 3" name="3")
          | Write out all units and factor-of-ten explicitly.  Cross out units.  What remains should be "nm".  If it is not, something is wrong with your set up.

    template(v-slot:reflect='')
      p You will also see the micrometer μm called a #[i micron] μ.  This non-SI unit had been #[a(href="https://www.sizes.com/units/micron.htm") abolished for more than 50 years], but people still uses it  ¯\_(ツ)_/¯
</template>

<script>

export default {
  components: { },
  data () {
    return {
      activeHint: '0',
      length: 100,
      unit: 'Å',
      options: [{
          value: 'pm',
          label: 'pm'
        }, {
          value: 'Å',
          label: 'Å'
        }, {
          value: 'μm',
          label: 'μm'
        }, {
          value: 'cm',
          label: 'cm'
        }, {
          value: 'dm',
          label: 'dm'
        }]
    }
  },
  computed: {
    getnm: function() {
      switch(this.unit) {
        case "pm":
          return [(this.length / 1000).toString()]
          break;
        case "Å":
          return [(this.length / 10).toString()]
          break;
        case "μm":
          return [(this.length * 1000).toString()]
          break;
        case "cm":
          return [(this.length * 1000000).toString()]
          break;
        case "dm":
          return [(this.length * 10000000).toString()]
          break;
        }
      }
    }
}
</script>

<style scoped>

</style>