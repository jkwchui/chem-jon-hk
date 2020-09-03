<template>
  <!-- <div class="content"> -->
    <el-button type="primary" icon="el-icon-time" size="small" round>
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