<template>
  <div class="about">
    <p><nuxt-link :to="{ name: 'index' }">главная</nuxt-link> - обо мне</p>
    <!-- eslint-disable-next-line -->
    <div class="xs-mt-8" v-html="mdDocument.html" />
  </div>
</template>

<script>
export default {
  asyncData() {
    return {
      mdDocument: require('@/data/about.md').default
    }
  }
}
</script>

<style lang="stylus">
.about {
  li > ul, ul > li {
    mt(1)
  }
}
</style>
