<template lang='pug'>

.puzzle
  task(
    bkg='' 
    :time='10'
    )
    
    template(v-slot:title='')
      | Drawing Atoms

    template(v-slot:puzzle='')
      p With help from your Data Booklet, draw a helium (He; 2 protons 2 neutrons), Neon (Ne; 10 protons, 10 neutrons), Neon isotope with 11 neutrons, and Argon (Ar; 18 protons, 21 neutrons) atom in your notes.  Use the cartoon notation, and the scale bar for reference; try using shading to show the three-dimensional nature of the electron cloud.

    template(v-slot:help='')
      p Be careful about the difference between the radius and the diameter!

    template(v-slot:reflect='')
      p Drawing just one atom can take awhile.
      p Even if a robot can draw it for us, it's still tedious to count all the purple and gray circles.
      p What can we do to simplify this?

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