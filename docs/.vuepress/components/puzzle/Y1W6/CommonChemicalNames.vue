<template lang='pug'>

.puzzle
  task(
    bkg='183513077' 
    :time='30'
    )
    
    template(v-slot:title='')
      | Common Chemical Names

    template(v-slot:puzzle='')
      ol 
        li Annotate #[i your] notes with the reasoning.  
        li Consider pausing the video, and go back to the #[strong Molecule Library] in AtomSmith to see the 3-dimensional structure of the chemical species; sketch the skeletal structural formula where appropriate.
        li Download and study #[a(href="https://drive.google.com/file/d/1wxaJqXdzSVoDTgYnicnrCJqtIXsCiMwX/view?usp=sharing") the Anki deck] from your Google Drive (IB chemistry -> chem-0-common chemicals.apkg)
        //- img(src="/image/IB_M20/subject-path.png")

    template(v-slot:reflect='')
      p #[span {{someValue}}] x #[span {{someMul}}] 
      p #[span {{someValue}}] x 10 x #[span {{someMul / 10}}]
      p #[span {{someValue * 10}}] x #[span {{someMul / 10}}]
      p #[span {{someValue * someMul}}]
      p Check that your answer has blah.
      Vimeo(vid='457245328' name="sol")

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