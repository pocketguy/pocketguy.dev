<template>
  <div class="main">
    <nav>
      <p class="brand h1">pocketguy.dev</p>
      <ul class="nav">
        <li class="nav-item"></li>
        <li class="nav-item">
          <a class="nav-link" href="#">Проекты</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Блог</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">GitHub</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Контакты</a>
        </li>
        <li class="nav-item"></li>
      </ul>
    </nav>
    <nuxt />
  </div>
</template>

<style lang="stylus" scoped>
.main {
  padding-top: rythm(4);
}

.brand {
  text-align: center;
  padding: rythm(4);
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
    }
  }
}
</style>
