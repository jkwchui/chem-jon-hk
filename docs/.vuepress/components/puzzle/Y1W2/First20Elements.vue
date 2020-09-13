<template lang='pug'>

.puzzle
  task(
    bkg='' 
    :time='15'
    )
    
    template(v-slot:title='')
      | Learning the First 20 Elements

    template(v-slot:puzzle='')
      p Invent something personally meaningful to help you memorize the first two rows.

    template(v-slot:help='')
      p We all stand on shoulders of giants.
      el-collapse(v-model="activeHint" accordion)
        el-collapse-item(title="Structure" name="1")
          | If you have something that would help you with groups, that would be extra helpful.
        el-collapse-item(title="Adaptations" name="2")
          | Consider adapting from #[a(href="https://en.wikipedia.org/wiki/List_of_chemistry_mnemonics") the standard lists].
        el-collapse-item(title="Make it memorable" name="3")
          | ...but do not just use them.  The best mnemonics are personal, filthy, and disgusting.

    template(v-slot:reflect='')
      p There is a class of powerful, #[i generalized] technique called Memory Palaces (which is what the memory champions use to memorize π to 10000 decimals).  We will try to construct one when all of you have been on campus.

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