<template>
  <div v-theme:column="'narrow'" id="show-blogs">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="search blogs" />
    <div class="single-blog" v-for="(blog,i) in filteredBlog" v-bind:key="i">
      <router-link v-bind:to="'/blog/'+ blog.id ">
        <h2>{{blog.title | to-uppercase}}</h2>
      </router-link>
      <article>{{blog.content | snippet }}</article>
    </div>
  </div>
</template>

<script>
import searchMixin from "../mixins/searchMixin";

export default {
  data() {
    return {
      blogs: [],
      search: ""
    };
  },
  created() {
    this.$http
      .get("https://vuejs-firebase-blog-server.firebaseio.com/posts.json")
      .then(res => {
        let data = res.data;
        // console.log("data", data);
        let blogsArray = [];
        for (let key in data) {
          // console.log(data[key]);
          data[key].id = key;
          blogsArray.push(data[key]);
        }
        // console.log('blogs array',blogsArray);
        this.blogs = blogsArray;

      });
  },

  computed: {
    // filteredBlog:function(){
    //   return this.blogs.filter((blog)=>{
    //     return blog.title.match(this.search);
    //   })
    // }
  },

  // filters registering locally
  filters: {
    toUppercase(val) {
      return val.toUpperCase();
    }
  },

  // directives registering locally
  directives: {
    rainbow: {
      bind(el, binding, vnode) {
        el.style.color =
          "#" +
          Math.random()
            .toString(16)
            .slice(2, 8);
      }
    }
  },

  mixins: [searchMixin]
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