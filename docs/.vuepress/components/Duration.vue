<template>
  <!-- <div class="content"> -->
    <el-button type="info" icon="el-icon-time" size="mini">
      {{ time }}
    </el-button>
  <!-- </div> -->
</template>

<script>

export default {
  components: { },
  data () {
      return {
      }
  },
  props: {
    time: String
  },
  methods: {
  }
}
</script>

<style scoped>

</style>