<template>
  <div>
    <p><nuxt-link :to="{ name: 'index' }">главная</nuxt-link> - контакты</p>
    <!-- eslint-disable-next-line -->
    <div class="xs-mt-8" v-html="mdDocument.html" />
  </div>
</template>

<script>
import { headFromMdDocument } from '@/components/getHeadFromMdDocument'

export default {
  asyncData() {
    return {
      mdDocument: require('@/data/contacts.md').default
    }
  },
  head() {
    return headFromMdDocument(this.mdDocument)
  }
}
</script>
