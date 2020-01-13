<template>
  <div id="single-blog">
    <h1>{{blog.title}}</h1>
    <article>{{blog.content}}</article>
    <p>Author: {{blog.author}}</p>
    <ul>
        <li v-for="(cat,i) in blog.categories" v-bind:key="i">{{cat}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: {}
    };
  },
  created() {
    this.$http
      .get("https://vuejs-firebase-blog-server.firebaseio.com/posts/"+this.id+ ".json")
      .then(res => {
        //console.log("res", res);
        this.blog = res.data;
      });
  }
};
</script>

<style scoped>
#single-blog{
    max-width: 960px;
    margin: 0 auto;
}
</style>