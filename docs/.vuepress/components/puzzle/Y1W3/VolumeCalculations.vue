<template lang='pug'>

.puzzle
  task(
    bkg='461280224' 
    :time='15'
    )
    
    template(v-slot:title='')
      | Unit Conversions: Volumes

    template(v-slot:puzzle='')
      p Convert #[span {{volume1}} {{unit1}}]#[sup 3] to nm#[sup 3].
      p Use the sliders below to create four questions of increasing difficulty.

      el-slider(
        v-model="volume1"
        :step="5"
        :max="1000"
        show-input
      )
      el-select(v-model='unit1' 
                placeholder='Select unit')
        el-option(v-for='item in options1' :key='item.value' :label='item.label' :value='item.value')

      AnswerBox(:correctAnswers = "getnm")

      p Convert #[span {{volume2}} {{unit2}}]#[sup 3] to dm#[sup 3].
      p Use the sliders below to create four questions of increasing difficulty.

      el-slider(
        v-model="volume2"
        :step="5"
        :max="1000"
        show-input
      )
      el-select(v-model='unit2' 
                placeholder='Select unit')
        el-option(v-for='item in options2' :key='item.value' :label='item.label' :value='item.value')

      AnswerBox(:correctAnswers = "getdm")

      hr

      p Use your graphical calculator for the next parts.
      p If we approximate a water molecule as a sphere, its diameter would be 2.75 Å.  What is its volume?
      AnswerBox(:correctAnswers = "['']")

      p How many water molecules can fit into 1 dm#[sup 3]?
      AnswerBox(:correctAnswers = "['']")

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
      p It is quite inconvenient to refer to such large number of objects.  Nowhere else in life do we ever need 10#[sup 20+].  I wonder if there is a way to simplify that? 🧐
</template>

<script>

export default {
  components: { },
  data () {
    return {
      activeHint: '0',
      volume1: 100,
      volume2: 100,
      unit1: 'nm',
      unit2: 'dm',
      options1: [{
          value: 'Å',
          label: 'Å'
        }, 
        {
          value: 'nm',
          label: 'nm'
        },
        {
          value: 'μm',
          label: 'μm'
      }],
      options2: [{
          value: 'cm',
          label: 'cm'
        }, {
          value: 'dm',
          label: 'dm'
        }, {
          value: 'm',
          label: 'm'
      }]
    }
  },
  computed: {
    getnm: function() {
      switch(this.unit1) {
        case "Å":
          return [(this.volume1 / 1000).toString()]
          break;
        case "nm":
          return [(this.volume1 * 1).toString()]
          break;
        case "μm":
          return [(this.volume1 * 1000000000).toString()]
          break;
        }
    },
    getdm: function() {
      switch(this.unit2) {
        case "cm":
          return [(this.volume2 / 1000).toString()]
          break;
        case "dm":
          return [(this.volume2 * 1).toString()]
          break;
        case "m":
          return [(this.volume2 * 1000).toString()]
          break;
        }
    }
  }
}
</script>

<style scoped>

</style>