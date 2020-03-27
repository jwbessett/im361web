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
    addTask: function(name) {
      this.tasks.push({name:name}),
      this.taskName="",
      this.subTask="",
      this.modalOpened = false,
      this.noTasks = true
    },

    addSubTask: function(subname) {
      var subTask={
        checked: false,
        name: subName
      }
      this.tasks.push({subTasks:[subTask]})
    },

    removeTask: function(task) {
      this.events.splice(this.tasks.indexOf(task),1)
    },

    addSecondTask: function(secondName) {
      this.secondTasks.push({secondName:secondName}),
      this.secondTaskName="",
      this.secondSubTask="",
      this.modalOpened = false,
      this.noTasksSecond = true
    },

    addSecondSubTask: function(secondSubname) {
      var secondSubTask={
        checked: false,
        secondName: secondSubName
      }
      this.tasks.push({secondSubTasks:[secondSubTask]})
    },

    removeSecondTask: function(task) {
      this.events.splice(this.secondTasks.indexOf(secondTask),1)
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
