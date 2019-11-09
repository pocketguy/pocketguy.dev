<template>
  <div class="container main justify-center py-2">
    <h1 class="text-center mt-0">pocketguy.dev</h1>
    <p class="text-center">сайт веб-разработчика</p>
    <div class="row">
      <div class="col-md-2 align-center ml-auto">
        <ul class="list-style-none">
          <li>
            <h2>
              <a href="#">проекты</a>
            </h2>
          </li>
          <li>
            <h2>
              <a href="#">блог</a>
            </h2>
          </li>
          <li>
            <h2>
              <a href="#">обо мне</a>
            </h2>
          </li>
          <li>
            <h2>
              <a href="#">контакты</a>
            </h2>
          </li>
        </ul>
      </div>
      <div class="col-md-3">
        <img class="pocketguy-img" src="/icon.png" alt="pocketguy.dev icon" />
      </div>
      <div class="col-md-2 align-center justify-end">
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
