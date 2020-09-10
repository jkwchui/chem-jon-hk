<template lang='pug'>

.puzzle
  task(
    bkg='330911620' 
    :time='8'
    )
    
    template(v-slot:title='')
      | The Pomodoro Method 🍅

    template(v-slot:puzzle='')
      p The classic Pomodoro Method uses a kitchen timer, and concentrate work into 25 minutes, followed by 5 minutes of rest.  Then you repeat.
      p Hey!  That's 30 minutes, and you have already created a 30 minute event in your calendar!  What a surprise.  Move the #[strong 🍅 Pomodoro 1: Chem] event to an hour that you are free.
      p Rename the event to #[strong 🍅 Pomodoro 1: Chem Session 2 HW] to show what you will be doing.  To save time in the future, you may also want to add relevant links in the description of the event.
      p Add a second Pomodoro immediately following the first one.  This creates a 1 hour block for doing the chem homework today (you will not need it).
      p On your phone, install a timer app that supports the Pomodoro method.  I use one called #[a(href="https://apps.apple.com/us/app/multitimer-multiple-timers/id973421278") MultiTimer (iOS)].  You can always try something else later.

    template(v-slot:help='')
      p Demonstration
      Vimeo(vid='455639396' name="sol")

    template(v-slot:reflect='')
      p Optimal durations of work-rest will be different for different kinds of task, and your personal situation.  My routine focus time is 35 minute, but this goes down when I am stressed.
      p Once I get going, I sometimes get in a flow.  In these rare, #[i glorious] occasions, I ignore the 🍅 and ride the flow.
      p Write down your experiences and modificiations.  #[b You will forget.]  To forget is human.

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