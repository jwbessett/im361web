import Vue from 'vue/dist/vue.js'

var app = new Vue({
  el: '#app',
  data: {
    message: 'i dont like grapefruit',
    counter: 0
  }
});

window.app = app;
