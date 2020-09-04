<template>

<vimeo-player 
	ref="name" 
	:options="{ responsive: true }"
	:video-id="vid">
</vimeo-player>

</template>
<script>
export default {
    props: {
		name: String,
        vid: String
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