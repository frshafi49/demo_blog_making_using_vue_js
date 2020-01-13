<template>
  <div id="app">
    <add-blog/>
  </div>
</template>

<script>
import AddBlog from './components/AddBlog.vue'


export default {
  name: 'app',
  components: {
    AddBlog
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;

}
</style>
