import Vue from 'vue/dist/vue.js'

var app = new Vue({
  el: '#app',
  data: {

});

function addText() {
  var text = document.createElement("P");
  text.innerText = "This will be a new task";
  document.body.appendChild(text);
}

window.app = app;
