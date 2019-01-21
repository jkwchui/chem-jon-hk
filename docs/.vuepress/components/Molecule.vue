<template>
    <div class="content">
        <div style="height: 600px; width: 600px; position: relative;" class='viewer_3Dmoljs' v-bind:data-pdb="pdb" data-backgroundcolor='0xffffff' v-bind:data-style="renderstyle" data-surface1='opacity:.4;color:yellow'></div>
    </div>
</template>

<script>
export default {
  mounted() {
    var body = document.getElementsByTagName("body")[0], script;
    script = document.createElement("script");
    script.src="https://3Dmol.csb.pitt.edu/build/3Dmol-min.js";
    body.appendChild(script);
  },
  data () {
    return {
    // formula: '$$\\ce{H2SO4\\aq{} <=> H+ + HSO4^-} = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$$'
      }
  },
  props: {
    pdb: String,
    renderstyle: String
  }
}

</script>

<style scoped>
.mol-container {
  width: 60%;
  height: 400px;
  position: relative;
}
</style>