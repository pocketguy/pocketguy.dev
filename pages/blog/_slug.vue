<template>
  <div v-html="html"></div>
</template>

<script>
export default {
  data() {
    const file = require(`!!raw-loader!@/data/blog/${this.$route.params.slug}.md`)
      .default
    return this.$md(file)
  }
}
</script>
