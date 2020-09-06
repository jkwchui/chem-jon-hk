<template lang='pug'>

.puzzle
  task(
    bkg='410948696' 
    :time='10'
    )
    
    template(v-slot:title='')
      | Using Google Calendar

    template(v-slot:puzzle='')
      p Set up your Google Calendars by
      ol 
        li adding all 8 classes, and
        li de-activating your free blocks
      p The list of Google Calendars are as follows:
      ul
        li #[a(href="https://calendar.google.com/calendar?cid=Y19oMGs2bW83dDByOTRlYWVsOWplNTRmY2k4Z0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t") block A]
        li #[a(href="https://calendar.google.com/calendar?cid=Y19lYjlxbTgyMmI5cWE3ZnZ2MWJwNWs5bzVsa0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t") block B]
        li #[a(href="https://calendar.google.com/calendar?cid=Y19kZ3Jycm9jMWtoOGpudm1oMzk3Zzg5azcyY0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t") block C]
        li #[a(href="https://calendar.google.com/calendar?cid=Y185MjN2dW01MDhiNHJ0NTBpNjdyYnFwcGdwMEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t") block D]
        li #[a(href="https://calendar.google.com/calendar?cid=Y19tODNyZ3AwNjRuMTFsdW52MmppYjRiMnVub0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t") block E]
        li #[a(href="https://calendar.google.com/calendar?cid=Y192NDYyam4xbGM1NTg2aWM0ajFydGZ2ZmV1c0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t") block F]
        li #[a(href="https://calendar.google.com/calendar?cid=Y18xNjRnaTdycTEzN2Nia2JobDJpNXZmbGc2NEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t") block G]
        li #[a(href="https://calendar.google.com/calendar?cid=Y19zMWhxYmxvOXN0NDZibXYwcDNvN3Z0N3M0a0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t") block H]
      p If the Director of Studies (Beta Chau) has already sent you the #[i Y1 Assessment Calendar] and #[i College Calendar], add them in now.
      p Change the colors of the calendars.  Make sure each can be easily seen.
      p Explore the four different calendar views (week, day, month, schedule).
      p How many block D slots are there in the whole year?  (The actual number of classes is about three-quarter this number.)
      AnswerBox(:correctAnswers = "['123']")
      p Create an event called #[strong 🍅 Pomodoro 1: Chem] in your personal schedule.  Make it 30 minutes long.  This can be for any time; you will move it in the next Puzzle.

    template(v-slot:reflect='')
      p Confession time 😯!  I use Google Calendars as a reference, but I #[i prefer] to do all my central planning on paper 📝.  Why would Jon do that?  (I mean, besides being old as the dinosaurs🦕?)  What are the pros and cons of using paper vs digital planners? 

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