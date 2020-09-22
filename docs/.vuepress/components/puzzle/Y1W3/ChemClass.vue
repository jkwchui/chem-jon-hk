<template lang='pug'>

.puzzle
  task(
    bkg='' 
    :time='15'
    )
    
    template(v-slot:title='')
      | How Chem Class Works

    template(v-slot:puzzle='')
      p So, how do classes work?  We will play through this with a Kahoot in teams.  If you are off-campus, try this in your own time by click on this button:

      a(
        href="https://kahoot.it/challenge/06675480?challenge-id=ff88f0eb-39aa-4fa0-aaf4-50945968a0e3_1600813646345" 
        class="el-button el-button--success"
        ) How Chem Class Works 🛠

      p The link is open until Saturday noon.  See some explanations of the answers in the [Help] tab.

    template(v-slot:help='')
      el-collapse(v-model="activeHint" accordion)
        el-collapse-item(title="Classroom rule (of thumb)" name="1")
          | I am permissive to actions in the classroom, and do not require you to sit up straight and follow too much formalities.  If you need to stand and move around, do that.  The rule-of-thumb is #[strong be considerate] and do not harm others.
          | FB / IG / snap / wtsapp etc are 🚫 because they distract #[i others] around you too.
          | You would never find Jon shouting at you or otherwise wielding the Teacher Power.  If you are someone who need someone screaming at you, you will need to find other motivations!
          | Still no shouting, but #[strong fairness] is very important.  Cheating and lying will absolutely not be tolerated.
        el-collapse-item(title="Supplies" name="2")
          | Bring the limited notes from recent weeks --- not everything!
          | Bring headphones.  Some instructions will continue to exist in the form of videos, and Jon gets really uncomfortable hearing his own voice from 16 places in the room.
        el-collapse-item(title="Forgetting" name="3")
          | To forget is human.  You need some disciplined, intelligent method if you want to keep something in memory.
        el-collapse-item(title="Studying" name="4")
          | You should set your own expectations.  Everyone #[i can] get a 7, but that may not be your goal.  The number of hours you engage with chem each week is approximately your final IB grade.  In other words, if you come to class for 3 hours, and practice for another 4 --- consistently and efficiently --- you can expect a seven at the end of the two years.
        el-collapse-item(title="Test and quizzes" name="5")
          | I treat quizzes and tests as instruments to stage and motivate your studies.  In general, your chemistry skills and knowledge will be tried in class first, then in quizzes, and finally in a test.  There should not be surprises when an assessment matters.
        el-collapse-item(title="Resources" name="6")
          | A huge amount of resources are available in both the Google Folder and the website.  (We cannot put interactive toys in the Google Drive.)  Explore.
          | Please #[strong do not share] material from the Google Folder.  There are materials that were paid for by the College, and would be a copyright violation if we pass access to others.

    template(v-slot:reflect='')
      p 323

</template>

<script>

export default {
  components: { },
  data () {
    return {
      activeHint: '0',
      input: '',
      molecules: [
        {'name': 'ethane', 'cid': '6324'},
        {'name': 'isopropanol', 'cid': '3776'},
        {'name': 'cadaverine', 'cid': '273'},
        {'name': 'benzene', 'cid': '241'},
        {'name': 'aspirin', 'cid': '2244'},
        {'name': 'sexithiophene', 'cid': '11340899'},
        {'name': 'cubane', 'cid': '136090'},
        {'name': 'caffeine', 'cid': '2519'},
      ]
    }
  }
}
</script>

<style scoped>

</style>