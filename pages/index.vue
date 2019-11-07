<template>
  <div class="container-fluid-screen">
    <h1>pocketguy.dev</h1>
    <p>сайт веб-разработчика</p>
    <div class="row">
      <div class="col-1">
        <ul class="list-style-none">
          <li>
            <h2><a href="#">проекты</a></h2>
          </li>
          <li>
            <h2><a href="#">блог</a></h2>
          </li>
        </ul>
      </div>
      <div class="col-2">
        <p>
          <img src="/icon.png" alt="pocketguy.dev icon" />
        </p>
      </div>
      <div class="col-1 text-right">
        <ul class="list-style-none">
          <li>
            <h2><a href="#">github</a></h2>
          </li>
          <li>
            <h2><a href="#">контакты</a></h2>
          </li>
        </ul>
      </div>
    </div>
    <h2>
      <nuxt-link :to="{ name: 'typo' }">типографика</nuxt-link>
    </h2>
  </div>
</template>

<script>
export default {
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

.container-fluid-screen {
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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

  img {
    max-width: 100%;
    max-height: 400px;
  }
}
</style>
