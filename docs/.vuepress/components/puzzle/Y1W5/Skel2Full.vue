<template lang='pug'>

.puzzle
  task(
    bkg='464829717' 
    :time='10'
    )
    
    template(v-slot:title='')
      | From Skeletal Structural Formula to Full Structural Formula

    template(v-slot:puzzle='')
      p Try the examples in your notes.

    template(v-slot:help='')
      img(src="/image/Y1W5/Y1-W5-S1_S2F_soln.png")

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