<template>
<div>

  <h2>Title</h2>

  <center><iframe src="https://player.vimeo.com/video/449149492" width="740" height="420" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></center>

  <el-tabs type="border-card" tab-position="bottom">
    <el-tab-pane label="Do">
      Problem for solving
      <div>
        <Timer v-bind:time='555555' />
      </div>
    </el-tab-pane>
    <el-tab-pane label="Help">Hint</el-tab-pane>
    <el-tab-pane label="Learn">Reflection</el-tab-pane>
  </el-tabs>
  
</div>
</template>
<script>

export default {
    components: { },
    data() {
      return {
      };
    }
}
</script>

<style scoped>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
</style>