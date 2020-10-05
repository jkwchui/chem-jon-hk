<template lang='pug'>

.puzzle
  task(
    bkg='464833082' 
    :time='15'
    )
    
    template(v-slot:title='')
      | Drawing Diagrams in Miro

    template(v-slot:puzzle='')
      p Consider signing up for an educational license for #[a(href="https://www.miro.com") Miro].  We will use this as a collaboration tool in the future.
      ol 
        li Sketch the diagrams on paper; then
        li Convert it into a Miro drawing.  Use either the class drawing, or create your own board.

    template(v-slot:help='')
      p Consider going through your 4 weeks' notes and annotating all of this on your Miro board.
      p You can bring a half-A4 page crib sheet for your first test (H-20).  Start thinking about how you can use the page!

    template(v-slot:reflect='')
      p You may find it surprising that I referred to a structural formula (either kind) as having similar information content as that of a 3-dimensional representation.  "What about the lengths and angles?"  It turns out that many aspects of those are very predictable: you will learn about them as #[strong VSEPR] and #[strong bond lengths] in the future.
      hr
      p Most people say they hate group work.  I'd argue working in a group requires
      ol
        li #[strong Skills] that they have never learnt, and
        li #[strong Tools] that they have never had
      
      p #[i Anyone] would "hate cooking" if they are asked to invent it from stone age conditions.  We will try to build the skills and get the tools before sending you in the deep end.

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