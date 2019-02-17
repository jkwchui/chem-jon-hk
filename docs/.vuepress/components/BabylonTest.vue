<template lang="pug">

Scene
  Box(:position="[0, 0, 5]")

</template>
<script>

import { Entity, Scene, Box } from 'vue-babylonjs';
export default {
  mixins: [Entity],
  components: { Scene, Box },
  data () {
      return {
      }
  }
}
</script>

<style scoped>

</style>