<template>
  <div class="sm:w-2/3 w-11/12 bg-white rounded-lg">
    <div class="p-8 border-b-2 border-black">
      <p class="text-blue text-3xl sm:text-4xl font-bold">{{ moment().format('MMM, Do') }}</p>
      <p class="text-black text-2xl mt-2">{{ moment().format('dddd') }}</p>
    </div>
    <div class="flex shadow-2xl">
      <input class="py-4 pl-8 pr-2 w-full bg-white placeholder-black border-0 focus:ring-0 no-underline outline-none" 
        type="text" 
        placeholder="Enter a new todo" 
        v-model="data.inputContent" 
        @keyup.enter="addTodo"
      >
      <a class="m-3 my-3 px-3 py-2 flex items-center bg-black text-white rounded cursor-pointer" 
        @click="addTodo"
      >ADD</a>
    </div>
    <div>
      <ul>
        <li v-for="task in data.tasks" :key="task.id" 
          class="py-4 h-auto flex items-center border-b border-black border-opacity-50 animate-addTodo"
        >
          <input class="ml-5 h-4 w-4 border-2 text-black bg-white focus:ring-0 focus:ring-offset-0 outline-none" type="checkbox" 
            @click="completeTodo(task)"
            :checked="task.done"
          > 
          <p class="mx-5 flex-1 font-mono text-blue break-all leading-relaxed"
            :class="task.done ? 'animate-completeTodo' : ''"
          >{{ task.text }}</p>
          <span class="mr-5 material-icons text-black cursor-pointer" 
            @click="deleteTodo(task)"
          >delete_outline</span>
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
        saveTasks();
      }
    }

    function completeTodo(task) {
      task.done = !task.done;
      saveTasks();
    }

    function deleteTodo(task) {
      data.tasks.splice(task, 1);
      saveTasks();
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

    return { moment, data, addTodo, completeTodo, deleteTodo }

  }
}
</script>
