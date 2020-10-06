<template lang='pug'>

.puzzle
  task(
    bkg='465289975' 
    :time='15'
    )
    
    template(v-slot:title='')
      | Chemical Equations

    template(v-slot:puzzle='')
      p Try the worksheet (Part 1 only), and check your answers here (<- hmm.  Where is my PDF?)

    template(v-slot:help='')
      p 

    template(v-slot:reflect='')
      p 

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