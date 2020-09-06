<template lang='pug'>

.puzzle
  task(
    bkg='410948696' 
    :time='8'
    )
    
    template(v-slot:title='')
      | Using Colors

    template(v-slot:puzzle='')
      p Try using #[i hatching] and #[i stippling] to create different intensities.
      p Can you provide shading to make the red... box(?) in your notes look 3-dimensional?

    template(v-slot:help='')
      p If you have a hard time seeing this object, I have taken a picture of it for you:
      p TODO IMAGE MODELING + RENDER
      p Consider shadows.

    template(v-slot:reflect='')
      p We used red for "alert" and green for "things are OK".  Why?
      |
      p If your answer is that these come from traffic light, then that just brings it one step back: why was red used for stop, and green for go?
      p Is this just convention, or are we #[i wired] to feel a certain ways when we see particular colors?
      |
      p #[i If] perception of colors triggers feelings in us biologically, what prevents malicious actors to use colors to influence how we feel?

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