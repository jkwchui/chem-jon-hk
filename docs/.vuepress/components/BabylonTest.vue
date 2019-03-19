<template lang="pug">
    Scene
      Box(:position="[0, 0, 5]")
</template>

<script>
import { Scene, Box } from 'vue-babylonjs';

export default {
    name: "Babylone",
    components: { Scene, Box },
}
</script>