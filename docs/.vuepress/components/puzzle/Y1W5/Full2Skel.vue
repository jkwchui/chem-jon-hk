<template lang='pug'>

.puzzle
  task(
    bkg='464829190' 
    :time='10'
    )
    
    template(v-slot:title='')
      | From Full Structural Formula to Skeletal Structural Formula

    template(v-slot:puzzle='')
      p Try the examples in your notes.

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