<template>
  <div id="app">
    <!-- <add-blog/> -->
    <show-blogs/>
  </div>
</template>

<script>
import AddBlog from './components/AddBlog.vue'
import ShowBlogs from './components/ShowBlogs.vue'

export default {
  name: 'app',
  components: {
    ShowBlogs
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;

}
</style>
