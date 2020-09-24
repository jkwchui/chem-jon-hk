<template lang='pug'>

.puzzle
  task(
    bkg='461216770' 
    :time='15'
    )
    
    template(v-slot:title='')
      | Representing 3D molecules in 2D

    template(v-slot:puzzle='')
      p What color is used to show a carbon atom?
      AnswerBox(:correctAnswers = "['black', 'gray']")

      p What color is used to show a nitrogen atom?
      AnswerBox(:correctAnswers = "['blue']")

      p What color is used to show an oxygen atom?
      AnswerBox(:correctAnswers = "['red']")

      p What color is used to show a hydrogen?
      AnswerBox(:correctAnswers = "['white']")

      p What color is used to show a sulphur?
      AnswerBox(:correctAnswers = "['yellow']")

      p What color is used to show a chlorine?
      AnswerBox(:correctAnswers = "['green']")

      p Draw the full structural formula of these molecules.  Click and drag to rotate them so you can see better.
      el-select(
        v-model="input" 
        placeholder="Select a molecule"
      )
        el-option(
          v-for="item in molecules"
          :key="item.cid"
          :label="item.name"
          :value="item.cid"
        )
      Molecule(
        v-bind:cid="input"
        :key="input"
      )

      p See the [Help] tab for the answers as well as what these molecules do.

    template(v-slot:help='')
      p Note that these are #[strong possible] answers --- you may have rotated your structural formula and have one that #[i looks] different.
      Vimeo(vid='461220489' name="solution")

    template(v-slot:reflect='')
      p The software used in the intro video is called #[a(href="https://www.samson-connect.net/") SAMSON (Software for Adaptive Modeling and Simulation Of Nanosystems)], and is a kind of #[i molecular modeling] tool.  You will learn to operate these in the future.

</template>

<script>

export default {
  components: { },
  data () {
    return {
      activeHint: '0',
      input: '',
      molecules: [
        {'name': 'ethane', 'cid': '6324'},
        {'name': 'isopropanol', 'cid': '3776'},
        {'name': 'cadaverine', 'cid': '273'},
        {'name': 'benzene', 'cid': '241'},
        {'name': 'aspirin', 'cid': '2244'},
        {'name': 'sexithiophene', 'cid': '11340899'},
        {'name': 'cubane', 'cid': '136090'},
        {'name': 'caffeine', 'cid': '2519'},
      ]
    }
  }
}
</script>

<style scoped>

</style>