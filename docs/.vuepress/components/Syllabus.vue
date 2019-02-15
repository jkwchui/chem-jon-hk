<template>
    <div>

      <el-tooltip placement="top">
        <div slot="content">
          <div v-if="showParent">
             <!-- info about parent -->
             <hr />
          </div>

          <b>{{ subsubtopic }} - {{ content }}</b>
          
          <div v-if="showChildren">
            <hr />
             <!-- info about parent -->
          </div>
        </div>

        <el-button 
          v-if="level === 'HL'" 
          color="#DE6328" 
          icon="el-icon-edit">
            {{ subsubtopic }}
        </el-button>
        <el-button 
          v-else 
          color="#009B90" 
          icon="el-icon-edit">
            {{ subsubtopic }}
        </el-button>

      </el-tooltip>
      <!-- http://element.eleme.io/#/en-US/component/tag -->
      <!-- http://element.eleme.io/#/en-US/component/tooltip -->

    </div>
</template>
<script>

import topics from '../public/data/topic.json'
import subtopics from '../public/data/subtopic.json'
import subsubtopics from '../public/data/subsubtopic.json'

export default {
    components: { },
    data () {
        return {
        }
    },
    props: {
      topic: '',
      subtopic: '',
      subsubtopic: '',
      lang: 'en',
      showParent: true,
      showChildren: true
    },
    computed: {
      content: function () {
        return
      },
      level: function () {
        return
      },
      option: function () {
        return
      } 
    }
}
</script>

<style scoped>

</style>