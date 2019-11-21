<template>
  <div>
    <p class="xs-to-el xs-ws-nowrap xs-ov-h">
      <nuxt-link :to="{ name: 'index' }">главная</nuxt-link> - {{ categoryT }}
    </p>
    <h1>{{ categoryCapitalized }}</h1>
    <ul>
      <li v-for="entry of data" :key="entry.slug">
        <h2 class="xs-d-inl">
          <nuxt-link
            :to="{
              name: 'category-slug',
              params: { category, slug: entry.slug }
            }"
          >
            {{ entry.document.meta.title }}
          </nuxt-link>
        </h2>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    categoryT() {
      if (this.category === 'projects') return 'проекты'
      if (this.category === 'posts') return 'блог'
      return this.category
    },
    categoryCapitalized() {
      return this.categoryT.charAt(0).toUpperCase() + this.categoryT.slice(1)
    },
    description() {
      if (this.category === 'projects')
        return `Проекты pocketguy.dev. Запущенные и работающие сайты, веб-приложения, технологии, описание работы и архитектуры.`

      if (this.category === 'blog')
        return `Блог pocketguy.dev. Интересное из мира python, js, devops. Обучающие статьи.`
      return null
    }
  },
  asyncData({ route }) {
    const category = route.params.category.toLowerCase()
    let r = null
    if (category === 'projects') {
      r = require.context(`@/data/projects/?metaOnly`, true, /.*\.md$/)
    } else if (category === 'posts') {
      r = require.context(`@/data/posts/?metaOnly`, true, /.*\.md$/)
    }
    let data = {}
    r.keys().forEach((key) => (data[key] = r(key).default))
    data = Object.entries(data).map(([k, v]) => {
      return {
        path: k,
        slug: k.slice(2, -3),
        document: v
      }
    })
    return {
      data,
      category
    }
  },
  head() {
    return {
      title: this.categoryT,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        }
      ]
    }
  }
}
</script>
