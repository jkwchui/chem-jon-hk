<template lang='pug'>

.puzzle
  task(
    bkg='' 
    :time='15'
    )
    
    template(v-slot:title='')
      | Drawing Histograms with Google Sheets

    template(v-slot:puzzle='')
      p The spreadsheet with pendulum swing data from your class is #[a(href="https://docs.google.com/spreadsheets/d/1o7_oGP9fY002_v_mhiKGJfM-EemJBUnvPJDxoIYF1yE/edit?usp=sharing") here].  Make a Copy.
      p Insert a new column, and in this Column D, calculate the average time it requires to make one swing.
      p Plot a histogram using column C.
      p Adjust the bin size.  Use good taste and judgment.

    template(v-slot:help='')
      Vimeo(vid='' name="sol")

    template(v-slot:reflect='')
      p Introspect.  What does "good taste and judgment" mean?  Is there a way to turn this subjective aesthetic into an objective algorithm?

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