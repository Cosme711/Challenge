<template>
  <div class="rounded-lg bg-white sm:w-2/3 w-9/12 h-auto">
    <div class="p-8 border-b-2 border-black">
      <p class="text-blue text-4xl font-bold">{{ moment().format('MMM, Do') }}</p>
      <p class="text-black text-2xl mt-2">{{ moment().format('dddd') }}</p>
    </div>
    <div class="relative shadow-2xl">
      <input class="outline-none py-4 px-8 bg-white placeholder-black w-full border-0 focus:ring-0 no-underline" type="text" placeholder="Enter a new todo" v-model="data.inputContent" @keyup.enter="addTodo">
      <a class="absolute inset-y-0 right-5 flex items-center px-3 py-2 bg-black my-3 rounded text-white cursor-pointer" @click="addTodo">ADD</a>
    </div>
    <div>
      <ul>
        <li v-for="task in data.tasks" :key="task.id" 
          class="pl-8 py-4 border-b border-black border-opacity-50  flex items-center animate-addTodo"
        >
          <input class="h-4 w-4 outline-none border-2 text-black bg-white focus:ring-0 focus:ring-offset-0  " type="checkbox" 
            @click="completeTodo(task)"
            :checked="task.done"
          > 
          <p class="ml-4 font-mono text-blue leading-relaxed flex-1"
            :class="task.done ? 'animate-completeTodo' : ''"
          >{{ task.text }}</p>
          <span class="material-icons mr-8 text-black cursor-pointer" @click="deleteTodo(task)">delete_outline</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted } from "vue";

export default {
  name: 'Home',
  setup() {

    var moment = require("moment");

    const data = reactive({
      tasks: [],
      inputContent: '',
      checked: true
    })

    function addTodo() {
      if(data.inputContent) {
        data.tasks.push({done: false, text: data.inputContent});
        data.inputContent = "";
        saveTasks()
      }
    }

    function completeTodo(task) {
      task.done = !task.done
      saveTasks()
    }

    function deleteTodo(task) {
      data.tasks.splice(task, 1)
      saveTasks()
    }

    function saveTasks() {
      const parsed = JSON.stringify(data.tasks);
      localStorage.setItem('tasks', parsed);
    }


    onMounted(() => {
      if (localStorage.getItem('tasks')) {
        try {
          data.tasks = JSON.parse(localStorage.getItem('tasks'));
        } catch(e) {
          localStorage.removeItem('tasks');
        }
      }
    })

    return { data, moment, addTodo, completeTodo, deleteTodo }

  }
}
</script>
