<template>
  <div class="container-fluid-screen">
    <img :src="$icon(512)" alt="pocketguy.dev" />
    <h1>pocketguy.dev</h1>
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
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
  }
}
</style>
