<template>
  <router-view></router-view>
</template>

<script>
// import TheMain from './pages/TheMain.vue'

export default {
  name: 'App',
  components: {
    // TheMain,
  },
  created() {
    this.$store.dispatch('tryLogin')
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
