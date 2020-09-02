<template>
<div>
  <el-card class="box-card">
    <el-row :gutter="10">
    <el-col :span="11">
      <div class="grid-content bg-purple">
          <iframe src="https://player.vimeo.com/video/449149492" width="100%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
      </div>
    </el-col>
    <el-col :span="13">
      <div class="grid-content bg-purple">
        <el-card class="box-card">
          <div v-for="o in 4" :key="o" class="text item">
            {{'List item ' + o }}
          </div>
          <Duration v-bind:time="300000" />
        </el-card>
      </div>
    </el-col>
</el-row>
  </el-card>
  
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