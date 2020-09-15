<template lang='pug'>

.puzzle
  task(
    bkg='' 
    :time='10'
    )
    
    template(v-slot:title='')
      | What is Color?

    template(v-slot:prepuzzle='')
      | <style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='https://www.youtube.com/embed/jjy-eqWM38g' frameborder='0' allowfullscreen></iframe></div>

    template(v-slot:puzzle='')
      p This Toy shows the color for a particular wavelength, measured in nanometers.  (For those of you with some design experience, the hex color code is shown inside.)
      el-slider(
        v-model="wavelength"
        :min="400"
        :max="700"
        :step="5"
        show-input
      )
      //- el-button(:style="backgroundColor:{{rgb}}")

      el-button(
        :style="myStyle"
        round
      ) {{ rgb }}

      p Light of 680 nm is ___ (color).
        AnswerBox(:correctAnswers = "['red', 'crimson', 'scarlet', 'ruby', 'cherry', 'carmine']")
      
      hr

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
      wavelength: 450,
      someMul: 20,
      lookup: [
        {
          "wl": 400,
          "hex": "#8200b4"
        },
        {
          "wl": 405,
          "hex": "#8100c7"
        },
        {
          "wl": 410,
          "hex": "#7d00da"
        },
        {
          "wl": 415,
          "hex": "#7500ec"
        },
        {
          "wl": 420,
          "hex": "#6900ff"
        },
        {
          "wl": 425,
          "hex": "#5400ff"
        },
        {
          "wl": 430,
          "hex": "#3c00ff"
        },
        {
          "wl": 435,
          "hex": "#2200ff"
        },
        {
          "wl": 440,
          "hex": "#0000ff"
        },
        {
          "wl": 445,
          "hex": "#0028ff"
        },
        {
          "wl": 450,
          "hex": "#0046ff"
        },
        {
          "wl": 455,
          "hex": "#0061ff"
        },
        {
          "wl": 460,
          "hex": "#007aff"
        },
        {
          "wl": 465,
          "hex": "#0092ff"
        },
        {
          "wl": 470,
          "hex": "#00a9ff"
        },
        {
          "wl": 475,
          "hex": "#00bfff"
        },
        {
          "wl": 480,
          "hex": "#00d5ff"
        },
        {
          "wl": 485,
          "hex": "#00eaff"
        },
        {
          "wl": 490,
          "hex": "#00ffff"
        },
        {
          "wl": 495,
          "hex": "#00ffca"
        },
        {
          "wl": 500,
          "hex": "#00ff92"
        },
        {
          "wl": 505,
          "hex": "#00ff54"
        },
        {
          "wl": 510,
          "hex": "#00ff00"
        },
        {
          "wl": 515,
          "hex": "#1eff00"
        },
        {
          "wl": 520,
          "hex": "#35ff00"
        },
        {
          "wl": 525,
          "hex": "#4aff00"
        },
        {
          "wl": 530,
          "hex": "#5dff00"
        },
        {
          "wl": 535,
          "hex": "#6fff00"
        },
        {
          "wl": 540,
          "hex": "#81ff00"
        },
        {
          "wl": 545,
          "hex": "#92ff00"
        },
        {
          "wl": 550,
          "hex": "#a2ff00"
        },
        {
          "wl": 555,
          "hex": "#b3ff00"
        },
        {
          "wl": 560,
          "hex": "#c2ff00"
        },
        {
          "wl": 565,
          "hex": "#d2ff00"
        },
        {
          "wl": 570,
          "hex": "#e1ff00"
        },
        {
          "wl": 575,
          "hex": "#f0ff00"
        },
        {
          "wl": 580,
          "hex": "#ffff00"
        },
        {
          "wl": 585,
          "hex": "#ffef00"
        },
        {
          "wl": 590,
          "hex": "#ffdf00"
        },
        {
          "wl": 595,
          "hex": "#ffce00"
        },
        {
          "wl": 600,
          "hex": "#ffbe00"
        },
        {
          "wl": 605,
          "hex": "#ffac00"
        },
        {
          "wl": 610,
          "hex": "#ff9b00"
        },
        {
          "wl": 615,
          "hex": "#ff8900"
        },
        {
          "wl": 620,
          "hex": "#ff7600"
        },
        {
          "wl": 625,
          "hex": "#ff6300"
        },
        {
          "wl": 630,
          "hex": "#ff4e00"
        },
        {
          "wl": 635,
          "hex": "#ff3900"
        },
        {
          "wl": 640,
          "hex": "#ff2000"
        },
        {
          "wl": 645,
          "hex": "#ff0000"
        },
        {
          "wl": 650,
          "hex": "#ff0000"
        },
        {
          "wl": 655,
          "hex": "#ff0000"
        },
        {
          "wl": 660,
          "hex": "#ff0000"
        },
        {
          "wl": 665,
          "hex": "#ff0000"
        },
        {
          "wl": 670,
          "hex": "#ff0000"
        },
        {
          "wl": 675,
          "hex": "#ff0000"
        },
        {
          "wl": 680,
          "hex": "#ff0000"
        },
        {
          "wl": 685,
          "hex": "#ff0000"
        },
        {
          "wl": 690,
          "hex": "#ff0000"
        },
        {
          "wl": 695,
          "hex": "#ff0000"
        },
        {
          "wl": 700,
          "hex": "#ff0000"
        }
      ]
    }
  },
  computed: {
    rgb: function () {
      var pair = this.lookup.filter(
        (pair) => (pair.wl === this.wavelength)
      )
      return pair[0].hex
    },
    myStyle: function() {
      return {'backgroundColor': this.rgb}
    },
  }
}
</script>

<style scoped>

</style>