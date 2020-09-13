<template>
<div>

  <h2>
    <slot name="title">
    </slot>
  </h2>

  <center><Vimeo :vid="this.background" :name="this.background"/></center>

  <el-tabs type="border-card" tab-position="bottom">
    <el-tab-pane label="Puzzle">
      <slot name="puzzle" />
      <div>
        <Duration :time='this.time + " min"' />
        <Timer :time='this.time * 60 * 1000' />
      </div>
    </el-tab-pane>
    <el-tab-pane label="Help" v-if="this.hasHelp">
      <slot name="help" />
    </el-tab-pane>
    <el-tab-pane label="Reflect" v-if="this.hasReflect">
      <slot name="reflect" />
    </el-tab-pane>
  </el-tabs>
  
</div>
</template>
<script>

export default {
    components: { },
    data() {
      return {
      };
    },
    props: {
      bkg: String,
      time: Number
    },
    computed: {
      hasHelp: function() {
        return this.$slots.help
      },
      hasReflect: function() {
        return this.$slots.reflect
      },
      background: function() {
        if (this.bkg === '')
          return "457245328"
        else return this.bkg
      }
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