<template lang='pug'>

.puzzle
  task(
    bkg='410948696' 
    :time='20'
    )
    
    template(v-slot:title='')
      | What You Will Learn

    template(v-slot:puzzle='')
      p When you are ready to start the activity, start the timer by clicking the #[i(class="el-icon-video-play")] button.  This time is just a suggestion.  Do the same thing for all the other puzzle boxes.
      ol 
        li Think, and add short keywords to Table A.  Spend no more than 5 minutes on this.
        li Click on the "Help" tab to see what what alumni thinks.  If these encounters with them created new thoughts in you, update your list.
        li In Table A, add numbers next to each keyword to show its priority.
        li Re-write the list in Table B. You are free to create your own categories (headings).  Make this a sorted list, placing the most important keyword on the top.  

    template(v-slot:help='')
      p This is what Memo (Venezuela) thinks.
      Vimeo(vid='455197750' name="Memo")
      p Read what Mert (Bosnia), Paul (Germany), Musab (Pakistan), and Pi (Myanmar) thinks in #[a(href="https://docs.google.com/document/d/13vQmf_9Xboex1HLLnhVPRx-xLBUX5AcS9EzoOlt7AXc/edit?usp=sharing") this Google Doc].

    template(v-slot:reflect='')
      p Your list is unique to you.  What --- or who --- shaped your ways of thinking?
      p You will re-visit this memory capsule at the end of your two years.  At that time, perhaps what is most interesting is not #[i whether] you have accomplished these goals, but if they remain important to you. Would you have discovered other values in these two years?
      

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