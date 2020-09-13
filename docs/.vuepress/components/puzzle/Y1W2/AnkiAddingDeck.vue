<template lang='pug'>

.puzzle
  task(
    bkg='' 
    :time='10'
    )
    
    template(v-slot:title='')
      | My First Anki Deck

    template(v-slot:puzzle='')
      ol
        li Download Anki #[a(href="https://apps.ankiweb.net/") here], and install it.
        li Download the atomic structure Anki deck here, and open it in Anki.
        li Study the deck #[strong using your keyboard shortcuts].

    template(v-slot:reflect='')
      p I made Anki decks for studying French, Spanish, Japanese, Mandarin #[i ab initio], and more.  The language decks features pronunciation, pinyin, and are categorized in multiple ways.  You can find some of these #[a(href="https://drive.google.com/drive/folders/1QSwxfcZ6PwQ2AWEgb-G5PXPFyRG6YxxK?usp=sharing") decks in your Google Folder].
      p If you were to make your own deck, consider making your bar lower: the default settings in Anki resets the learning progress on every error.  I find that this becomes punitive when you get to > 5000 cards.

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