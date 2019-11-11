<template>
  <div>
    <h1>Блог</h1>
    <ul>
      <li v-for="page of pages" :key="page.slug">
        <h2 class="xs-d-inl">
          <nuxt-link :to="{ name: 'blog-slug', params: { slug: page.slug } }">
            {{ page.meta.title }}
          </nuxt-link>
        </h2>
      </li>
    </ul>
  </div>
</template>

<script>
const pages = {}

function importAll(r) {
  r.keys().forEach((key) => (pages[key] = r(key).default))
}

importAll(require.context('!!raw-loader!@/data/blog/', true, /.*\.md$/))

export default {
  data() {
    return {
      pages: Object.entries(pages).map(([k, v]) => {
        const render = this.$md(v)
        return {
          slug: k.split('.')[1].slice(1),
          meta: render.meta
        }
      })
    }
  }
}
</script>
