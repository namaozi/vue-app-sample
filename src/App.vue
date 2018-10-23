<template>
  <div id="app">
    <Home v-if="!isLogin"></Home>
    <Editor v-if="isLogin" :user="userData"></Editor>
    <Loading v-if="isLoading"></Loading>
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
        isLoading: false,
        userData: null,
      }
    },
    created: function () {
      this.authenticate();
    },
    methods: {
      /**
       * googleアカウントで認証する
       * ログイン状態でなければログインボタンを出す
       */
      authenticate: function () {
        this.isLoading = true;
        firebase.auth().onAuthStateChanged(user => {
            this.isLogin = !!user; // truthy
            this.userData = user || null;
            this.isLoading = false;
          }
        );
      }
    },
    components: {
      Home: Home,
      Editor: Editor,
      Loading: Loading,
    }
  }
</script>
