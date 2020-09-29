<template lang='pug'>

.puzzle
  task(
    bkg='462537729' 
    :time='15'
    )
    
    template(v-slot:title='')
      | Molar Mass

    template(v-slot:puzzle='')
      p Calculate the molar masses for each of the molecular formula you have done in the previous week.  Round your answers to 3 or 4 sig fig.  The answers are in the help section.

    template(v-slot:help='')
      el-collapse(v-model="activeHint" accordion)
        el-collapse-item(title="Ethane" name="1")
          | C#[sub 2]H#[sub 6], 30.07 g/mol
        el-collapse-item(title="Isopropanol" name="2")
          | C#[sub 3]H#[sub 8]O, 60.1 g/mol
        el-collapse-item(title="cadaverine" name="3")
          | C#[sub 4]H#[sub 14]N#[sub 2], 102.18 g/mol
        el-collapse-item(title="benzene" name="4")
          | C#[sub 6]H#[sub 6], 78.11 g/mol
        el-collapse-item(title="aspirin" name="5")
          | C#[sub 9]H#[sub 8]O#[sub 4], 180.16 g/mol
        el-collapse-item(title="sexithiophene" name="6")
          | C#[sub 24]H#[sub 14]S#[sub 6], 494.8 g/mol
        el-collapse-item(title="cubane" name="7")
          | C#[sub 8]H#[sub 8], 104.15 g/mol
        el-collapse-item(title="caffeine" name="8")
          | C#[sub 8]H#[sub 10]N#[sub 4]O#[sub 2], 194.19

    template(v-slot:reflect='')
      p This is easy until the #[i empirical] formula is introduced.  Then students get confused and calculate some meaningless number.  To defend against that error, ask yourself the meaning of what you are trying to find, instead of memorizing a formula.

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