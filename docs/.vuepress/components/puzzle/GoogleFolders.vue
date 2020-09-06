<template lang='pug'>

.puzzle
  task(
    bkg='410948696' 
    :time='15'
    )
    
    template(v-slot:title='')
      | Organizing Google Drive

    template(v-slot:puzzle='')
      p Check that you are signed in to Google Drive with your College email address.
      p Create folders with the following structure:
      el-tree(:data="data" :props="defaultProps" @node-click="handleNodeClick")
      p In "Shared with me", drag "Student View" into your chemistry folder.
      p Search #[i(class="el-icon-video-search")] the chem Google Drive to answer the following questions.
      p You have access to ___ years of IB past papers.
      AnswerBox(:correctAnswers = "['19']")
      p The chemistry textbooks is divided into ___ PDF files.
      AnswerBox(:correctAnswers = "['21']")
      p The graduate's comments (previous puzzle) is contained in a folder named ___.
      AnswerBox(:correctAnswers = "['0']")
      p Install the #[a(href="https://support.google.com/drive/answer/7329379") Google Drive File Stream] application on your computer.  This synchronizes the Cloud and local content, and you can then access your Google Drive when you are offline.

    template(v-slot:help='')
      p Demonstration:
      Vimeo(vid='449149492' name="GoogleDrive")

    template(v-slot:reflect='')
      p Are there other setup you can do now, so that your College life becomes more organized later?
      p Hint: the same structure also works for emails and stuff in real life.
      p Do I care you know how many chapters are in the textbook?  Of course not.  But you would have seen some other folders while searching for the answers, and #[strong that] is the point.  Jon is sneaky like that ¯\_(ツ)_/¯
      
</template>

<script>

export default {
  components: { },
  data() {
    return {
      data: [{
        label: 'Academics',
        children: [{
          label: 'Chemistry',
          children: [{
            label: 'IA'
          }]
        },
        {label: 'Subject 2'},
        {label: 'Subject 3'},
        {label: 'Subject 4'},
        {label: 'Subject 5'},
        {label: 'Subject 6'},
        {label: 'Extended Essay'},
        {label: 'ToK'}]
      }, {
        label: 'EOTC',
        children: [
          {label: 'QC1'},
          {label: 'QC2'},
        ]
      }, 
      { label: 'Residence'},
      { label: 'Admin'},
      { label: 'Personal'} 
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    };
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    }
  }
}
</script>

<style scoped>

</style>