<template lang='pug'>

.puzzle
  task(
    bkg='410948696' 
    :time='3.5'
    )
    
    template(v-slot:title='')
      | Title of the puzzle

    template(v-slot:puzzle='')
      p A puzzle to solve in here.
      img(src="/image/IB_M20/subject-path.png")
      ol 
        li a list
        li written
        li in markdown
          li some sub list

    template(v-slot:help='')
      p Have you #[b thought] about doing this in #[a(href="https://www.google.com") multiple] bites?
      el-collapse(v-model="activeHint" accordion)
        el-collapse-item(title="Step 1" name="1")
          | Step one is this.
        el-collapse-item(title="Step 2" name="2")
          | Step TWOOO is this.

    template(v-slot:reflect='')
      | Check that your answer has blah.
      center
        iframe(src='https://player.vimeo.com/video/449149492' width='700' height='420' frameborder='0' allow='autoplay; fullscreen' allowfullscreen='')

</template>

<script>

export default {
    components: { },
    data () {
        return {
          activeHint: '0'
        }
    }
}
</script>

<style scoped>

</style>