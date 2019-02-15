<template>
    <div>

      <!-- http://element.eleme.io/#/en-US/component/tag -->
      <!-- http://element.eleme.io/#/en-US/component/tooltip -->

    </div>
</template>
<script>

// data files under /public/data/*.csv
// probably would want to permanently convert to .json for easier access
// Under sandbox there is working code for pulling in CSV

export default {
    components: { },
    data () {
        return {
          level: 'core',
          option: false
        }
    },
    props: {
      topic: '',
      subtopic: '',
      subsubtopic: '',
      lang: 'en'
    }
}
</script>

<style scoped>

</style>