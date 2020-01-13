<template>
  <div id="app">
    <app-header/>
    <router-view/>
  </div>
</template>

<script>
// import AddBlog from './components/AddBlog.vue'
// import ShowBlogs from './components/ShowBlogs.vue'
// import ListBLogs from './components/ListBlogs.vue'
import AppHeader from './components/Header.vue'

export default {
  name: 'app',
  components: {
    // ShowBlogs,
    // ListBLogs
    AppHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;

}
</style>
