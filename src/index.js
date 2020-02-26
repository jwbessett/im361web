import Vue from 'vue/dist/vue.js'
import "./style.css";

var app = new Vue({
  el: '#app',
  data: {
    currentList: 'primary',
    tasks: [],
    taskName: "",
    secondTasks: [],
    secondTaskName: ""
  },
  methods: {
    addTask: function(name) {
      var subTask={
        checked: false,
        name: "Task"
      }
      this.tasks.push({name:name, subTasks:[subTask]})
    },

    addSecondTask: function(secondName) {
      var secondSubTask={
        checked: false,
        secondName: "Task"
      }
      this.secondTasks.push({secondName:secondName, secondSubTasks:[secondSubTask]})
    }
  }
});

window.app = app;
