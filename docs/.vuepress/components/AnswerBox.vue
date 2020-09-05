<template>
  <div>
    <el-input
      placeholder="Enter attempt here"
      v-model="input"
      size="large"
      clearable>
    </el-input>
    <transition name="bounce" mode="out-in">
      <el-button 
        v-if="checkAnswer === null"
        icon="el-icon-question" 
        type="primary"
        key="empty"
        circle>
      </el-button>
      <el-button 
        v-if="checkAnswer === true" 
        icon="el-icon-success"
        type="success"
        key="correct"
        circle>
      </el-button>
      <el-button 
        v-if="checkAnswer === false" 
        icon="el-icon-error"
        type="danger"
        key="incorrect"
        circle>
      </el-button>
    </transition>
  </div>
</template>
<script>

export default {
    components: { },
    props: {
      correctAnswer: String
    },
    data () {
        return {
          input: ''
        }
    },
    computed: {
      checkAnswer: function() {
        if(this.input === this.correctAnswer)
          return true
        else if (this.input === '')
          return null
        else
          return false
      }
    }
}
</script>

<style scoped>
.bounce-enter-active {
  animation: bounce-in .2s;
}
.bounce-leave-active {
  animation: bounce-in .2s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
.el-input
{
  width: 180px
}
</style>