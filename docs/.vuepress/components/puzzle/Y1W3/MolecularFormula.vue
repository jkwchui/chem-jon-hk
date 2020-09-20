<template lang='pug'>

.puzzle
  task(
    bkg='' 
    :time='8'
    )
    
    template(v-slot:title='')
      | Molecular Formula

    template(v-slot:puzzle='')
      p Deduce the molecular formula of these molecules.  Click and drag to rotate them so you can see better.
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


    template(v-slot:help='')
      p Note that these are #[strong possible] answers --- you may have rotated your structural formula and have one that #[i looks] different.
      el-collapse(v-model="activeHint" accordion)
        el-collapse-item(title="Ethane" name="1")
          | Try multiplying in two steps.
        el-collapse-item(title="Isopropanol" name="2")
          | 20 = 10 x 2.
        el-collapse-item(title="cadaverine" name="3")
          | 20 = 10 x 2.
        el-collapse-item(title="benzene" name="4")
          | 20 = 10 x 2.
        el-collapse-item(title="aspirin" name="5")
          | 20 = 10 x 2.
        el-collapse-item(title="sexithiophene" name="6")
          | 20 = 10 x 2.
        el-collapse-item(title="cubane" name="7")
          | 20 = 10 x 2.
        el-collapse-item(title="caffeine" name="8")
          | 20 = 10 x 2.

    template(v-slot:reflect='')
      p C, C, C... seriously --- such "C"s!  Suppose successful simplifications... #[i si?] 🧐

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