<template>
  <div id="app">
    <!-- <add-blog/> -->
    <show-blogs/>
    <list-b-logs/>
  </div>
</template>

<script>
import AddBlog from './components/AddBlog.vue'
import ShowBlogs from './components/ShowBlogs.vue'
import ListBLogs from './components/ListBlogs.vue'

export default {
  name: 'app',
  components: {
    ShowBlogs,
    ListBLogs
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;

}
</style>
