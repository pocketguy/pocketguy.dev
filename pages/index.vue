<template>
  <div class="container-fluid-screen">
    <h1>pocketguy.dev</h1>
    <p>
      <img src="/icon.png" alt="pocketguy.dev" />
    </p>
    <p>
      <nuxt-link :to="{ name: 'typo' }">typography</nuxt-link>
    </p>
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
.container-fluid-screen {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 400px;
  }
}
</style>
