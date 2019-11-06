<template>
  <div class="container-fluid-screen">
    <img :src="$icon(512)" alt="pocketguy.dev" />
  </div>
</template>

<style lang="stylus" scoped>
.container-fluid-screen
  width 100%
  height 100vh
  display flex
  flex-direction column
  align-items center
  justify-content center

  img
    max-width 100%
</style>
