<template>
  <div>
    <el-tag
      v-if="type === 'Nature of Science'"
      type="primary"
      effect="dark"
      size="small"
    >
      <b>
        {{ id }}
      </b>
    </el-tag>

    <el-tag
      v-else-if="type === 'Understandings'"
      type="danger"
      effect="dark"
      size="small"
    >
      <b>
        {{ id }}
      </b>
    </el-tag>

    <el-tag
      v-else-if="type === 'Applications and skills'"
      type="success"
      effect="dark"
      size="small"
    >
      <b>
        {{ id }}
      </b>
    </el-tag>

    <el-tag
      v-else-if="type === 'Guidance' || type === 'International-mindedness'"
      type="info"
      effect="dark"
      size="small"
    >
      <b>
        {{ id }}
      </b>
    </el-tag>

    <el-tag
      v-else-if="type === 'Theory of Knowledge'"
      type="primary"
      effect="light"
      size="small"
    >
      <b>
        {{ id }}
      </b>
    </el-tag>

    <el-tag
      v-else-if="type === 'Utilization'"
      type="warning"
      effect="dark"
      size="small"
    >
      <b>
        {{ id }}
      </b>
    </el-tag>

    <el-tag
      v-else-if="type === 'Aims'"
      type="danger"
      effect="light"
      size="small"
    >
      <b>
        {{ id }}
      </b>
    </el-tag>

    {{ content }}
  </div>
</template>
<script>
// import topics from "../public/data/topic";
// import subsubtopics from "../public/data/subsubtopic";

export default {
  components: {},
  data() {
    return {};
  },
  props: {
    id: String,
    type: String,
    content: String
  },
  computed: {}
};
</script>
