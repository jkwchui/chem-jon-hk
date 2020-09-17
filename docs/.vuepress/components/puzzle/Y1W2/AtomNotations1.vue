<template lang='pug'>

.puzzle
  task(
    bkg='458813769'
    :time='5'
    )
    
    template(v-slot:title='')
      | Replacing Drawings with Symbols (Atoms / Atomic Ions)

    template(v-slot:puzzle='')
      p How many protons are in #[strong B]?
      AnswerBox(:correctAnswers = "['5']")

      p How many neutrons are in #[sup 11]B?
      AnswerBox(:correctAnswers = "['6']")

      p How many electrons are in #[sup 11]#[sub 5]B#[sup 2+]?
      AnswerBox(:correctAnswers = "['3']")

      p In #[sup 127]#[sub 53]X#[sup -], element X is ___.
      AnswerBox(:correctAnswers = "['i', 'iodine']")

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