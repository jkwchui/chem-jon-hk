<template lang='pug'>

.puzzle
  task(
    bkg='' 
    :time='15'
    )
    
    template(v-slot:title='')
      | The Periodic Table

    template(v-slot:puzzle='')
      p Download and install the Periodic Table anki deck.

    template(v-slot:help='')
      Vimeo(vid='457245328' name="sol")

    template(v-slot:reflect='')
      p So far you have used a spaced repetition system to memorize #[i static] information.  How would this work for skills (like the uncertainty calculations) where you need to be able to apply it flexibly?

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