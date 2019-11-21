<template>
  <div class="container main">
    <nav class="navbar">
      <p class="brand xs-ta-c">
        <nuxt-link :to="{ name: 'index' }" class="no-underline xs-d-block">
          <img class="logo" src="@/assets/logo.svg" alt="pocketguy.dev" />
        </nuxt-link>
      </p>
      <ul class="nav xs-d-f xs-fw-wrap">
        <li
          class="nav-item xs-w-6 md-w-2 xs-mt-0 md-ta-c md-ml-auto xs-o-1 md-o-0"
        >
          <nuxt-link
            v-if="shouldNotBeDisabled('projects')"
            class="nav-link"
            :to="{ name: 'category', params: { category: 'projects' } }"
          >
            проекты
          </nuxt-link>
          <mark v-else class="xs-pa-1">
            проекты
          </mark>
        </li>
        <li
          class="nav-item xs-w-6 md-w-2 xs-mt-2 md-mt-0 md-ta-c xs-o-3 md-o-0"
        >
          <nuxt-link
            v-if="shouldNotBeDisabled('posts')"
            class="nav-link"
            :to="{ name: 'category', params: { category: 'posts' } }"
            >блог</nuxt-link
          >
          <mark v-else class="xs-pa-1">
            блог
          </mark>
        </li>
        <li
          class="nav-item xs-w-6 md-w-2 xs-mt-0 xs-ta-r md-ta-c xs-o-2 md-o-0"
        >
          <nuxt-link
            v-if="shouldNotBeDisabled('about')"
            class="nav-link"
            :to="{ name: 'about' }"
          >
            обо мне
          </nuxt-link>
          <mark v-else class="xs-pa-1">
            обо мне
          </mark>
        </li>
        <li
          class="nav-item xs-w-6 md-w-2 xs-mt-2 md-mt-0 xs-ta-r md-ta-c md-mr-auto xs-o-4 md-o-0"
        >
          <nuxt-link
            v-if="shouldNotBeDisabled('contacts')"
            class="nav-link"
            :to="{ name: 'contacts' }"
          >
            контакты
          </nuxt-link>
          <mark v-else class="xs-pa-1">
            контакты
          </mark>
        </li>
      </ul>
    </nav>
    <nuxt class="xs-mt-8" />
    <footer class="footer xs-pt-4 xs-mt-auto xs-ta-c">
      <p>
        <a
          class="nav-link"
          href="https://github.com/pocketguy"
          rel="noopener noreferrer nofollow"
          target="_blank"
        >
          github
        </a>
      </p>
      <p>
        copyright © {{ new Date().getFullYear() }}
        <a href="mailto:pocketguy@protonmail.com">pocketguy@protonmail.com</a>
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  methods: {
    shouldNotBeDisabled(name) {
      if (this.$route.params.category) {
        return !this.$route.params.category.startsWith(name)
      } else {
        return !this.$route.name.startsWith(name)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.main {
  min-height: 100vh;
  py(12);
}

.brand {
  & + p {
    margin-top: 0;
  }

  .logo {
    d(block);
    ma(auto);
    height: rythm(8);
  }
}

.nav-item {
  &::before {
    display: none;
  }

  .nav-link {
    letter-spacing: 1.5px;
  }
}
</style>
