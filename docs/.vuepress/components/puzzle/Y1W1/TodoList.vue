<template lang='pug'>

.puzzle
  task(
    bkg='456389598' 
    :time='8'
    )
    
    template(v-slot:title='')
      | Expert TODO lists

    template(v-slot:puzzle='')
      p Your homework this week will involve the Hong Kong rainfall data in a separate tab from #[a(href="https://docs.google.com/spreadsheets/d/1u2LVT1TsfAZGBrFl34LueRh0z11A1CNbgVXk2xc8jtU/edit?usp=sharing") the previous spreadsheet].
      p You need to use a color scale to visualize it, and add a "danger" color for when the rain was incredibly heavy.
      p Then you need to identify the month with the most rainy days and heaviest rainfall.
      p Your task here is #[strong NOT] to do the homework, but to break down the homework into a sensible TODO list.

    template(v-slot:reflect='')
      p There is no correct answer here.  How much you need to break down a task depends on your familiarity with the task.  What you need to do is to reflect on the accuracy of your TODO list while you are using it.  You get better with experience.

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