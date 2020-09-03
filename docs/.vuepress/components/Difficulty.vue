<template>
  <el-rate
    :value="lvl"
    :colors="colors"
    disabled>
  </el-rate>
</template>
<script>

export default {
    components: { },
    props: {
      stars: Number
    },
    data () {
      return {
        colors: ['#6dbe45', '#f1c51b', '#d62e27']
      }
    },
    computed: {
      lvl: function() {
        return this.stars
      }
    }
}
</script>

<style scoped>

</style>