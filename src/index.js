import Vue from 'vue/dist/vue.js'
import "./style.css";

var app = new Vue({
  el: '#app',
  data: {
    task1Label: 'Do Laundry',
    task1Description: 'Take the dirty laundry down to the laundry room and put it in th washer',
    task1Sub1: 'Wash clothes',
    task1Sub2: 'Dry clothes',
    task1Sub3: 'Fold clothes'
  }
});

window.app = app;
