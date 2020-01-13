<template>
  <div id="show-blogs">
    <h1>All Blog Articles</h1>

    <div class="single-blog" v-for="(blog,i) in blogs" v-bind:key="i">
      <h2>{{blog.title}}</h2>
      <article>{{blog.body}}</article>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: []
    };
  },
  created() {
    this.$http.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      console.log("data", res.data);

      this.blogs = res.data.slice(0, 10);
      console.log("blogs", this.blogs);
    });
  }
};
</script>

<style scoped>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}

.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>