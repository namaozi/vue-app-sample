<template>
  <div id="editor">
    <h1>エディタ</h1>
    <span>{{ user.displayName }}</span>
    <button @click="logout">ログアウト</button>
  </div>
</template>

<script>
  import firebase from 'firebase';
  export default {
    name: 'editor',
    props: [
      'user',
    ],
    data() {
      return {};
    },
    methods: {
      logout: function () {
        firebase.auth().signOut();
      }
    }
  };
</script>
