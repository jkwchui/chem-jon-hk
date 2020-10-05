<template lang='pug'>

.puzzle
  task(
    bkg='464829190' 
    :time='10'
    )
    
    template(v-slot:title='')
      | From Full Structural Formula to Skeletal Structural Formula

    template(v-slot:puzzle='')
      p The other way of "compressing" the full structural formula is the #[strong condensed] structural formula.  In a condensed structural formula you write out the formula as a string, e.g., CH#[sub 3]CH#[sub 2]CHOHCH#[sub 3].
      p While we often condense #[i part] of the structure like a -CH#[sub 3] or -OH fragment, we don't usually use it in full because it is not capable of showing cyclic structures.
      p Try the examples in your notes.

    template(v-slot:help='')
      img(src="/image/Y1W5/Y1-W5-S1_F2S_soln.png")

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