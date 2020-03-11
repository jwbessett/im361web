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
    secondSubTask: "",
    modalOpened: false,
    noTasks: false,
    noTasksSecond: false
  },
  methods: {
    addTask: function(name, subName) {
      var subTask={
        checked: false,
        name: subName
      }
      this.tasks.push({name:name, subTasks:[subTask]}),
      this.taskName="",
      this.subTask="",
      this.modalOpened = false,
      this.noTasks = true
    },

    addSecondTask: function(secondName, secondSubName) {
      var secondSubTask={
        checked: false,
        secondName: secondSubName
      }
      this.secondTasks.push({secondName:secondName, secondSubTasks:[secondSubTask]}),
      this.secondTaskName="",
      this.secondSubTask="",
      this.modalOpened = false,
      this.noTasksSecond = true
    },

    openModal: function() {
      this.modalOpened = true
    },

    toastLevel: function(task) {
      return Math.min(task.subTasks.filter(subTask => subTask.checked).length,10);
    }
  }
});

window.app = app;
