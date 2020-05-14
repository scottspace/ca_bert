
<template>
  <div id="app">
    <div class="app-phone">
      <div class="phone-header">
        <p>I see  {{url}}</p>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/vue_gram_logo_cp.png" />
      </div>
      <phone-body 
        :posts="posts"
        :filters="filters" />
      <div class="phone-footer">
       <div class="home-cta">
        <i class="fas fa-home fa-lg"></i>
       </div>
       <div class="upload-cta">
        <i class="far fa-plus-square fa-lg"></i>
       </div>
      </div>
    </div>
  </div>
</template>

<script>
import PhoneBody from "./components/PhoneBody";
import posts from "./data/posts";
import filters from "./data/filters";
import Vue from 'vue';
import Router from  'vue-router';

Vue.use(Router);

const my_routes = [
  {'path': '/*',
  'name': 'my_name',
  'componnt': 'Main'}
];

let router  = new VueRouter({routes: my_routes});

export default {
  name: "App",
  computed: {
    url:  function () {
      return this.$router.currentRoute.path;
    }
  },
  data() {
    return {
      posts,
      filters,
      stories: {}
    };
  },
  components: {
    "phone-body": PhoneBody
  }
};
</script>

<style lang="scss" src="./styles/app.scss">
// Styles from stylesheet
</style>
