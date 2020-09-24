<template lang='pug'>

.puzzle
  task(
    bkg='461270763' 
    :time='8'
    )
    
    template(v-slot:title='')
      | Molecular Formula

    template(v-slot:puzzle='')
      p Deduce the molecular formula of these molecules.  If you have not completed the previous puzzle I suggest you to do them first.
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
      p Be careful of the ordering!
      el-collapse(v-model="activeHint" accordion)
        el-collapse-item(title="Ethane" name="1")
          | C#[sub 2]H#[sub 6]
        el-collapse-item(title="Isopropanol" name="2")
          | C#[sub 3]H#[sub 8]O
        el-collapse-item(title="cadaverine" name="3")
          | C#[sub 4]H#[sub 14]N#[sub 2]
        el-collapse-item(title="benzene" name="4")
          | C#[sub 6]H#[sub 6]
        el-collapse-item(title="aspirin" name="5")
          | C#[sub 9]H#[sub 8]O#[sub 4]
        el-collapse-item(title="sexithiophene" name="6")
          | C#[sub 24]H#[sub 14]S#[sub 6]
        el-collapse-item(title="cubane" name="7")
          | C#[sub 8]H#[sub 8]
        el-collapse-item(title="caffeine" name="8")
          | C#[sub 8]H#[sub 10]N#[sub 4]O#[sub 2]

    template(v-slot:reflect='')
      p Is there a way to simplify the full structural formula without  losing information? 🧐
      p Yes there is --- there is actually #[strong two] ways to do that!  They are called:
      ol
        li Skeletal structural formula (preferred), and
        li Condensed structural formula
      p Look for them in future episodes.

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