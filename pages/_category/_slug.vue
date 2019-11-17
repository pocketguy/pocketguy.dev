<template>
  <div>
    <p class="xs-to-el xs-ws-nowrap xs-ov-h">
      <nuxt-link :to="{ name: 'index' }">главная</nuxt-link> -
      <nuxt-link :to="{ name: 'category', params: { category } }">{{
        categoryT
      }}</nuxt-link>
      -
      {{ mdDocument.meta.title.toLowerCase() }}
    </p>
    <!-- eslint-disable-next-line -->
    <div class="xs-pt-8" v-html="mdDocument.html"></div>
  </div>
</template>

<script>
export default {
  computed: {
    categoryT() {
      if (this.category === 'projects') return 'проекты'
      if (this.category === 'blog') return 'блог'
      return this.category
    },
    categoryCapitalized() {
      return this.categoryT.charAt(0).toUpperCase() + this.categoryT.slice(1)
    }
  },
  asyncData({ route }) {
    const category = route.params.category
    const slug = route.params.slug
    let mdDocument = null
    if (category === 'projects') {
      mdDocument = require(`@/data/projects/${slug}.md`).default
    } else if (category === 'blog') {
      mdDocument = require(`@/data/posts/${slug}.md`).default
    }
    return {
      mdDocument,
      category
    }
  },
  head() {
    return {
      title: this.mdDocument.meta.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.mdDocument.meta.description
        }
      ]
    }
  }
}
</script>
