<template>
  <div class="container main md-jc-c xs-py-4">
    <h1 class="xs-ta-c">pocketguy.dev</h1>
    <p class="xs-ta-c">сайт веб-разработчика</p>
    <div class="xs-d-f xs-fd-col md-fd-row md-ai-c">
      <div class="md-w-2 md-ml-auto xs-mt-4">
        <ul class="list-style-none">
          <li>
            <h2>
              <nuxt-link :to="{ name: 'projects' }">проекты</nuxt-link>
            </h2>
          </li>
          <li>
            <h2>
              <nuxt-link :to="{ name: 'blog' }">блог</nuxt-link>
            </h2>
          </li>
          <li>
            <h2>
              <nuxt-link :to="{ name: 'about' }">обо мне</nuxt-link>
            </h2>
          </li>
          <li>
            <h2>
              <nuxt-link :to="{ name: 'contacts' }">контакты</nuxt-link>
            </h2>
          </li>
        </ul>
      </div>
      <div class="md-w-3 xs-mt-4 xs-o--1 md-o-0">
        <img class="pocketguy-img" src="/icon.png" alt="pocketguy.dev icon" />
      </div>
      <div class="md-w-2 md-mr-auto xs-mt-4 xs-d-f md-jc-fe">
        <ul class="list-style-none">
          <li>
            <PSearch />
          </li>
          <li>
            <h2>
              <a href="#">in english</a>
            </h2>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import PSearch from '@/components/PSearch.vue'
export default {
  layout: 'clean',
  components: {
    PSearch
  },
  head() {
    return {
      title: 'pocketguy.dev',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: 'pocketguy.dev developer blog'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.list-style-none {
  li:before {
    display: none;
  }
}

.main {
  min-height: 100vh;
}

.container-fluid-screen {
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: rythm(32);

  .row {
    display: flex;
    flex-direction: row;
    margin-top: rythm(8);

    for fl in (1 .. 2) {
      .col-{fl} {
        flex: fl;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }
  }
}

.pocketguy-img {
  display: block;
  width: 100%;
}
</style>
