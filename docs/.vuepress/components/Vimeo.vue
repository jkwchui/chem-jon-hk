<template>

<vimeo-player 
      ref="player" 
      :options="{ responsive: true }"
      :video-id="id">
</vimeo-player>

</template>
<script>
export default {
    props: {
        id: String
    },
	data() {
		return {
			playerReady: false
		}
	},
	methods: {
		onReady() {
			this.playerReady = true
		},
		play () {
			this.$refs.player.play()
		},
		pause () {
			this.$refs.player.pause()
		}
	}
}
</script>

<style lang="scss">
.vimeo {
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  // max-height: 200px;
  position: absolute;
}
</style> 