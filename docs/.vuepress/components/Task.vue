<template>
<div>
  <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
    <el-radio-button label="top">top</el-radio-button>
    <el-radio-button label="right">right</el-radio-button>
    <el-radio-button label="bottom">bottom</el-radio-button>
    <el-radio-button label="left">left</el-radio-button>
  </el-radio-group>

  <el-tabs type="border-card" :tab-position="tabPosition" style="height: 200px;">
    <el-tab-pane icon="el-icon-edit" label="User">User</el-tab-pane>
    <el-tab-pane label="Config">Config</el-tab-pane>
    <el-tab-pane label="Role">Role</el-tab-pane>
    <el-tab-pane label="Task">Task</el-tab-pane>
  </el-tabs>
</div>
</template>
<script>

export default {
    components: { },
    data() {
      return {
        tabPosition: 'left'
      };
    }
}
</script>

<style scoped>

</style>