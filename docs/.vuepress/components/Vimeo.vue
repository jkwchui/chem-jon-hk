<template>

<div style="padding:56.25% 0 0 0;position:relative;"><iframe :src="bkg_src" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>

</template>
<script>
export default {
    props: {
        vid: String
    },
	data() {
		return {
		}
	},
	methods: {
	},
	computed: {
		bkg_src: function() {
			return "https://player.vimeo.com/video/" + this.vid + "?color=f1c51b&byline=0&portrait=0"
		}
	}
}
</script>

<style lang="scss">
</style> 