import Vue from 'vue/dist/vue.js'
import "./style.css";

var app = new Vue({
  el: '#app',
  data: {
    pageName: 'Home',
    task1Description: 'Take the dirty laundry down to the laundry room and put it in th washer',
    tasks: ["Task 1", "Task 2"],
    subTasks: ["Wash Clothes", "Dry Clothes"],
    isHiddenPrimary: false,
    isHiddenSecondary: true
  },
  computed: {

  }
});

window.app = app;
