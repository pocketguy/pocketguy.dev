<template>
  <div class="container main">
    <nav class="navbar">
      <p class="brand xs-ta-c">
        <nuxt-link :to="{ name: 'index' }" class="no-underline xs-d-block">
          <img class="logo" src="@/assets/logo.svg" alt="pocketguy.dev" />
        </nuxt-link>
      </p>
      <ul class="nav xs-d-f xs-fw-wrap">
        <li class="nav-item xs-w-6 md-w-2 xs-px-2 xs-mt-0 md-ta-c md-ml-auto">
          <a class="nav-link" href="#">проекты</a>
        </li>
        <li class="nav-item xs-w-6 md-w-2 xs-px-2 xs-mt-0 xs-ta-r md-ta-c">
          <a class="nav-link" href="#">блог</a>
        </li>
        <li class="nav-item xs-w-6 md-w-2 xs-px-2 xs-mt-2 md-mt-0 md-ta-c">
          <a class="nav-link" href="#">github</a>
        </li>
        <li
          class="nav-item xs-w-6 md-w-2 xs-px-2 xs-mt-2 md-mt-0 xs-ta-r md-ta-c md-mr-auto"
        >
          <a class="nav-link" href="#">контакты</a>
        </li>
      </ul>
    </nav>
    <nuxt class="xs-mt-4 xs-pt-4" />
    <footer class="footer xs-pt-4 xs-mt-auto">
      <p class="text-center">
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
