<template lang='pug'>

.puzzle
  task(
    bkg='' 
    :time='10'
    )
    
    template(v-slot:title='')
      | What is Color?

    template(v-slot:puzzle='')
      p This Toy shows the color for a particular wavelength.
      el-slider(
        v-model="wavelength"
        :min="400"
        :max="700"
        show-input
      )
      el-color-picker(v-model="rgb")
      p Light of 680 nm is ___ (color).
        AnswerBox(:correctAnswers = "['red', 'crimson', 'scarlet', 'ruby', 'cherry', 'carmine']")
      p If you have the colored pens, use it for your notes.
      ol
        li Arrange the colors in increasing wavelength
        li Add the colors in the color wheel, placing the complementary colors across each other.
      p Propose three ways different colors of emission can combine to "create" white light.  An example is shown.
      //- img(src="/image/IB_M20/subject-path.png")

    template(v-slot:help='')
      p If you are checking your color wheel against the internet, note that being radially symmetric, the color wheel could be rotated and still "works".
      p If you are checking your ordered line against the internet, make sure what you are comparing against is also in wavelength λ.  If you were looking at frequency (f, or ν) it would be opposite!
      p White and white is still white.

    template(v-slot:reflect='')
      p What about wavelengths longer than 700 nm, or shorter than 400 nm? 🧐
      hr
      p Some detergents that advertises as "#[a(href="https://hg.eu/uk/products/hg-whiter-than-white-special-detergent-for-white-wash") whiter than white]" contains a dye which absorbs invisible UV light, and emits blue-violet.  #[a(href="http://www.chemistry-blog.com/2012/08/23/whiter-than-white-how-does-it-work/") Why do they do this?]

</template>

<script>

export default {
  components: { },
  data () {
    return {
      activeHint: '0',
      wavelength: 500,
      someMul: 20
    }
  },
  computed: {
    rgb: function () {
      const [r, g, b] = this.wl2rgb(this.wavelength)
      return this.RGBToHex(Math.trunc(r*255), Math.trunc(g*255), Math.trunc(b*255))
    }
  },
  methods: {
    // https://stackoverflow.com/questions/56820706/how-to-convert-from-color-wavelength-to-rgb-or-hsl
    wl2rgb_pregamma: function (wl) {
      if (wl >= 380 && wl < 440) {
          const s = wl < 420 ? 0.3 + (0.7 * (wl - 380.0)) / (420.0 - 380.0) : 1.0;
          return [(s * -1 * (wl - 440)) / (440 - 380), 0, s];
        }
        if (wl >= 440 && wl < 490) {
          return [0, (wl - 440) / (490 - 440), 1];
        }
        if (wl >= 490 && wl < 510) {
          return [0, 1, (-1 * (wl - 510)) / (510 - 490)];
        }
        if (wl >= 510 && wl < 580) {
          return [(wl - 510) / (580 - 510), 1.0, 0.0];
        }
        if (wl >= 580 && wl < 645) {
          return [1, (-1 * (wl - 645)) / (645 - 580), 0];
        }
        if (wl > 700) {
          return [0.3 + (0.7 * (780 - wl)) / (780 - 700), 0, 0];
        }
        return [1, 0, 0];
    },
    wl2rgb: function(wl) {
      const gamma = 0.8;
      const [r, g, b] = this.wl2rgb_pregamma(wl);
      return [Math.pow(r, gamma), Math.pow(g, gamma), Math.pow(b, gamma)];
    },
    RGBToHex: function(r,g,b) {
      r = r.toString(16);
      g = g.toString(16);
      b = b.toString(16);

      if (r.length == 1)
        r = "0" + r;
      if (g.length == 1)
        g = "0" + g;
      if (b.length == 1)
        b = "0" + b;

      return "#" + r + g + b;
    }
  }
}
</script>

<style scoped>

</style>