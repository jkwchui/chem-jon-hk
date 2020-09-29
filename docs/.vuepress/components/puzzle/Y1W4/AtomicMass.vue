<template lang='pug'>

.puzzle
  task(
    bkg='462536536' 
    :time='15'
    )
    
    template(v-slot:title='')
      | Isotopes and Atomic Mass

    template(v-slot:puzzle='')
      p Identify the number of neutrons in #[sup 81]Br.
      AnswerBox(:correctAnswers = "['46']")

      p The natural abundance of bromine is 51% #[sup 79]Br and 49% #[sup 81]Br.  What is the atomic mass of bromine?
      AnswerBox(:correctAnswers = "['80', '79.9', '79.90']")

    template(v-slot:help='')
      p Use your data booklet to find the atomic number of bromine.

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