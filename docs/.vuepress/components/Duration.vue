<template>
    <vac :left-time=this.time :auto-start="false" ref="clock">
      
      <span
        slot="prev"
        slot-scope="vac">
        <el-button-group>
          <el-button type="success" icon="el-icon-video-play" size="mini"
            @click="() => {
              vac.startCountdown()
            }"
            :disabled="vac.state === 'process' || vac.state === 'finished'"></el-button>

          <el-button type="primary" icon="el-icon-refresh" size="mini"
            @click="() => {
              vac.startCountdown(true)
            }"
            :disabled="vac.state !== 'finished' && vac.state !== 'stopped'"></el-button>

          <el-button type="warning" icon="el-icon-video-pause" size="mini"
            @click="() => {
              vac.pauseCountdown()
            }"
            :disabled="vac.state !== 'process'"></el-button>

          <el-button type="danger" icon="el-icon-close" size="mini"
            @click="() => {
              vac.stopCountdown()
            }"
            :disabled="vac.state !== 'process'"></el-button>
        </el-button-group>
      </span>
    
      <span
        slot="process"
        slot-scope="{ timeObj, state }">
          
            {{ `${timeObj.m}:${timeObj.s}` }}
          
      </span>
      
  </vac>
</template>

<script>

export default {
  components: { },
  data () {
      return {
      }
  },
  props: {
    time: Number
  },
  methods: {
  }
}
</script>

<style scoped>

</style>