<template lang='pug'>

.puzzle
  task(
    bkg='410948696' 
    :time='0.5'
    )
    
    template(v-slot:title='')
      | Units: Conversions and Habits

    template(v-slot:puzzle='')
      p Solve these without a calculator.  What is #[span {{someValue}}] x #[span {{someMul}}]?
      //- img(src="/image/IB_M20/subject-path.png")
      el-slider(
        v-model="someValue"
        :step="4"
        show-stops
        show-input
      )
      el-slider(
        v-model="someMul"
        :step="10"
        show-stops
        show-input
      )
      ul 
        li #[Difficulty(:stars="1")] 10 x 20
        li #[Difficulty(:stars="2")] 22 x 30
        li #[Difficulty(:stars="3")] 68 x 70
      p Can you do each of these within 10 seconds?

    template(v-slot:help='')
      p Have you #[b thought] about doing this in #[a(href="https://www.google.com") multiple] bites?
      el-collapse(v-model="activeHint" accordion)
        el-collapse-item(title="Step 1" name="1")
          | Try multiplying in two steps.
        el-collapse-item(title="Step 2" name="2")
          | 20 = 10 x 2.

    template(v-slot:reflect='')
      p #[span {{someValue}}] x #[span {{someMul}}] 
      p #[span {{someValue}}] x 10 x #[span {{someMul / 10}}]
      p #[span {{someValue * 10}}] x #[span {{someMul / 10}}]
      p #[span {{someValue * someMul}}]
      p Check that your answer has blah.
      Vimeo(vid='449149492' name="sol")

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