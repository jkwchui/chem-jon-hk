<template lang='pug'>

.puzzle
  task(
    bkg='410948696' 
    :time='10'
    )
    
    template(v-slot:title='')
      | Google Sheets: Conditional Formatting

    template(v-slot:puzzle='')
      p Open this Google Sheet and Make a Copy.
      p Use conditional formatting to visualize the grades and identify if there are tests where students performed differently than their usual selves.

    template(v-slot:reflect='')
      p Surprisingly, this usage of colors, even though they add meaning and makes interpretation easier, is rather heavily frowned upon.  This probably comes from #[i conventions] of print, where it used to be all black-and-white.
      p When you try to conditionally color your tables for other teachers, they might ask you to take the color away: #[i "it's just not professional"].
      p What should you do?  What would you do?  Why?

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