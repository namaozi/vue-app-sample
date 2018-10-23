import Vue from 'vue'
import App from './App.vue'
import firebase from "firebase";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyByjqg3qsTR6Z6rHeg9V5cFwjq1m8thiTc",
  authDomain: "namaozi-markdown-id.firebaseapp.com",
  databaseURL: "https://namaozi-markdown-id.firebaseio.com",
  projectId: "namaozi-markdown-id",
  storageBucket: "namaozi-markdown-id.appspot.com",
  messagingSenderId: "284598629230"
};
firebase.initializeApp(config);

new Vue({
  el: '#app',
  render: h => h(App)
})
