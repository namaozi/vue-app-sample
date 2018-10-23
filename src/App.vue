<template>
  <div id="app">
    <Home v-if="!isLogin"></Home>
    <Editor v-if="isLogin" :user="userData"></Editor>
    <Loading v-if="!isLogin"></Loading>
  </div>
</template>

<script>
  import Home from './components/Home.vue';
  import Editor from './components/Editor.vue';
  import Loading from './components/Loading.vue';
  import firebase from 'firebase';

  export default {
    name: 'app',
    data() {
      return {
        isLogin: false,
        userData: null,
      }
    },
    created: function () {
      firebase
        .auth()
        .onAuthStateChanged(user => {
          this.isLogin = !!user; // truthy
          this.userData = user || null;
        });
    },
    components: {
      Home: Home,
      Editor: Editor,
      Loading: Loading,
    }
  }
</script>
