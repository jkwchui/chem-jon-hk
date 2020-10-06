<template lang='pug'>

.puzzle
  task(
    bkg='465283879' 
    :time='15'
    )
    
    template(v-slot:title='')
      | Mathematical Equations and Symbols

    template(v-slot:puzzle='')
      p 

    //- template(v-slot:help='')
    //-   p Have you #[b thought] about doing this in #[a(href="https://www.google.com") multiple] bites?
    //-   el-collapse(v-model="activeHint" accordion)
    //-     el-collapse-item(title="Step 1" name="1")
    //-       | Try multiplying in two steps.
    //-     el-collapse-item(title="Step 2" name="2")
    //-       | 20 = 10 x 2.

    //- template(v-slot:reflect='')
    //-   p #[span {{someValue}}] x #[span {{someMul}}] 
    //-   p #[span {{someValue}}] x 10 x #[span {{someMul / 10}}]
    //-   p #[span {{someValue * 10}}] x #[span {{someMul / 10}}]
    //-   p #[span {{someValue * someMul}}]
    //-   p Check that your answer has blah.
    //-   Vimeo(vid='457245328' name="sol")

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