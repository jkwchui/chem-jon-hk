<template lang='pug'>

.puzzle
  task(
    bkg='410948696' 
    :time='15'
    )
    
    template(v-slot:title='')
      | What You Will Learn

    template(v-slot:puzzle='')
      p When you are ready to start the activity, start the timer by clicking the #[i(class="el-icon-video-play")] button.  This time is just a suggestion.  Do the same thing for all the other puzzle boxes.
      ol 
        li Think, and add short keywords to Table A.  Spend no more than 5 minutes on this.
        li Click on the "Help" tab to see what what alumni thinks.  If these encounters with them created new thoughts in you, update your list.
        li Add numbers next to each keyword to show the priority of each keyword.
        li Re-write the list in Table B, placing the most important keyword on the top.  You are free to create your own categories.

    template(v-slot:help='')
      p This is what Memo (Venezuela) thinks.
      Vimeo(vid='449149492' name="Memo")
      p Read what Mert (Bosnia), Paul (Germany), Musab (Pakistan), and Pi (Myanmar) thinks in #[a(href="https://docs.google.com/document/d/13vQmf_9Xboex1HLLnhVPRx-xLBUX5AcS9EzoOlt7AXc/edit?usp=sharing") this Google Doc].

    template(v-slot:reflect='')
      p Your list is unique to you.  What --- or who --- helped shaped these ways of thinking?
      p You will re-visit this memory capsule at the end of your two years.  In that time, perhaps what is most interesting is not #[i whether] you have accomplished these goals, but if they still remain important to you, and if you have discovered other importance in these two years.
      

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