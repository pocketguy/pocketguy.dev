<template>
  <div class="container main">
    <nav class="navbar">
      <p class="brand xs-ta-c">
        <nuxt-link :to="{ name: 'index' }" class="no-underline xs-d-block">
          <img class="logo" src="@/assets/logo.svg" alt="pocketguy.dev" />
        </nuxt-link>
      </p>
      <ul class="nav xs-d-f xs-fw-wrap">
        <li class="nav-item xs-w-6 md-w-2 xs-mt-0 md-ta-c md-ml-auto">
          <nuxt-link class="nav-link" :to="{ name: 'projects' }">
            проекты
          </nuxt-link>
        </li>
        <li class="nav-item xs-w-6 md-w-2 xs-mt-0 xs-ta-r md-ta-c">
          <nuxt-link class="nav-link" :to="{ name: 'blog' }">блог</nuxt-link>
        </li>
        <li class="nav-item xs-w-6 md-w-2 xs-mt-2 md-mt-0 md-ta-c">
          <nuxt-link class="nav-link" :to="{ name: 'about' }">
            обо мне
          </nuxt-link>
        </li>
        <li
          class="nav-item xs-w-6 md-w-2 xs-mt-2 md-mt-0 xs-ta-r md-ta-c md-mr-auto"
        >
          <nuxt-link class="nav-link" :to="{ name: 'contacts' }">
            контакты
          </nuxt-link>
        </li>
      </ul>
    </nav>
    <nuxt class="xs-mt-4 xs-pt-4" />
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

<style lang="stylus" scoped>
.main {
  min-height: 100vh;
  py(4);
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
