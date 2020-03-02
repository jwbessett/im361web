import Vue from 'vue/dist/vue.js'
import "./style.css";

var app = new Vue({
  el: '#app',
  data: {
    currentList: 'primary',
    tasks: [],
    taskName: "",
    secondTasks: [],
    secondTaskName: "",
    subTask: "",
    secondSubTask: ""
  },
  methods: {
    addTask: function(name, subName) {
      var subTask={
        checked: false,
        name: subName
      }
      this.tasks.push({name:name, subTasks:[subTask]})
    },

    addSecondTask: function(secondName, secondSubName) {
      var secondSubTask={
        checked: false,
        secondName: secondSubName
      }
      this.secondTasks.push({secondName:secondName, secondSubTasks:[secondSubTask]})
    }
  }
});

window.app = app;
