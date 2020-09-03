<template>
<div>

  <h2>
    <slot name="title">
    </slot>
  </h2>

  <center><iframe :src="this.bkgsrc" width="740" height="420" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></center>

  <el-tabs type="border-card" tab-position="bottom">
    <el-tab-pane label="Do">
      <slot name="do" />
      <div>
        <Duration :time='this.time + " sec"' />
        <Timer :time='this.time * 1000' />
      </div>
    </el-tab-pane>
    <el-tab-pane label="Help" v-if="this.hasHelp">
      <slot name="help" />
    </el-tab-pane>
    <el-tab-pane label="Reflect">
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
      bkgsrc: function() {
        return "https://player.vimeo.com/video/" + this.bkg
      },
      time_ms: function() {
        return Number*1000
      },
      hasHelp: function() {
        return this.$slots.help
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