<template lang='pug'>

.puzzle
  task(
    bkg='458050792' 
    :time='10'
    )
    
    template(v-slot:title='')
      | My First Anki Deck

    template(v-slot:puzzle='')
      ol
        li Download Anki #[a(href="https://apps.ankiweb.net/") here], and install it.
        li Download the #[a(href="https://drive.google.com/file/d/1miQrtcMa1iJ5Zs9CoD0kzDjH0Ae_D_fR/view?usp=sharing") Atomic Structure 1 Anki deck here], and open it in Anki.
        li In #[i Preferences], change to use the "V2 experimental scheduler".
        li Study the deck #[strong using your keyboard shortcuts].

    template(v-slot:reflect='')
      p I made Anki decks for studying French, Spanish, Japanese, Mandarin #[i ab initio], and more.  The language decks features pronunciation, pinyin, and are categorized in multiple ways.  You can find some of these #[a(href="https://drive.google.com/drive/folders/1QSwxfcZ6PwQ2AWEgb-G5PXPFyRG6YxxK?usp=sharing") decks in your Google Folder].  You can use them for your own learning, but please do not share with others.

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