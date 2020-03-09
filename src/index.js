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
    modalOpened: false
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
      this.modalOpened = false
    },

    addSecondTask: function(secondName, secondSubName) {
      var secondSubTask={
        checked: false,
        secondName: secondSubName
      }
      this.secondTasks.push({secondName:secondName, secondSubTasks:[secondSubTask]}),
      this.secondTaskName="",
      this.secondSubTask=""
    },

    openModal: function() {
      this.modalOpened = true
    }
  }
});

window.app = app;
