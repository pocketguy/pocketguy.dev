<template>
  <div class="main">
    <nav class="navbar">
      <p class="brand">
        <nuxt-link :to="{ name: 'index' }">
          <img class="logo" src="@/assets/logo.svg" alt="pocketguy.dev" />
        </nuxt-link>
      </p>
      <ul class="nav">
        <li class="nav-item"></li>
        <li class="nav-item">
          <a class="nav-link" href="#">проекты</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">блог</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">github</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">контакты</a>
        </li>
        <li class="nav-item"></li>
      </ul>
    </nav>
    <nuxt />
    <footer class="footer">
      <ul class="nav">
        <li class="nav-item"></li>
        <li class="nav-item">
          <a class="nav-link" href="#">проекты</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">блог</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">github</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">контакты</a>
        </li>
        <li class="nav-item"></li>
      </ul>
      <p class="brand">
        <nuxt-link :to="{ name: 'index' }">
          <img class="logo" src="@/assets/logo.svg" alt="pocketguy.dev" />
        </nuxt-link>
      </p>
      <p class="text-center">
        copyright © {{ new Date().getFullYear() }} pocketguy@protonmail.com
      </p>
    </footer>
  </div>
</template>

<style lang="stylus" scoped>
.main {
  padding: rythm(4);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.footer {
  margin-top: auto;
}

.brand {
  padding: rythm(4);

  & + p {
    margin-top: 0;
  }

  .logo {
    display: block;
    margin: auto;
    height: rythm(8);
  }
}

.nav {
  list-style: none;
  display: flex;
  flex-direction: row;

  .nav-item {
    display: block;
    margin-top: 0;
    flex: 1;
    text-align: center;

    &::before {
      display: none;
    }

    .nav-link {
      letter-spacing: 1.5px;
    }
  }
}
</style>
