
//Selectors
const todoInput = document.querySelector('.todo__input');
const todoButton = document.querySelector('.todo__input__button');
const todoList = document.querySelector('.todo__list');
const deleteAllInput = document.getElementById('deleteAll');
const filterCompleted = document.querySelector('#completed');
const filterActive = document.querySelector('#active');
const filterAll = document.querySelector('#all');
const main = document.querySelector("main");



//Event Listeners

document.addEventListener('DOMContentLoaded', getTodos);
todoButton.addEventListener('click', addTodo);
deleteAllInput.addEventListener('click', deleteAll);
filterCompleted.addEventListener('click', filterTodoCompleted);
filterActive.addEventListener('click', filterTodoActive);
filterAll.addEventListener('click', filterTodoAll);


//Functions 

function addTodo(event) {
    event.preventDefault(); //Disable Prevent Default
    //Create Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add('todo');
    //Create li
    const newTodo = document.createElement("li");
    newInput = '<input type="checkbox"></input>';
    newDeleteButton = '<span class="material-icons">delete_outline</span>'
    newTodo.innerHTML = newInput + todoInput.value + newDeleteButton; 
    newInput1 = newInput;
    newTodo.classList.add('todo__li');
    todoDiv.appendChild(newTodo);
    //Add Todo to Local Storage
    saveLocalTodos(todoInput.value);
    //Clear Todo Input Value
    todoInput.value = "";
    todoList.appendChild(todoDiv);
    //Check Button
    const checkListener = newTodo.querySelector('input');
    checkListener.addEventListener('input', function() {
        todoDiv.classList.toggle('completed');
    });
    //Delete Button 
    const deleteListener = newTodo.querySelector('span');
    deleteListener.addEventListener('click', function(){
      const todo = deleteListener.parentElement;
      todo.remove();
      removeLocalTodos(todo);
    });
}



function deleteAll() {
  localStorage.clear();
  document.location.reload(true);
}

function filterTodoAll() {
  event.preventDefault();
  const todos = todoList.childNodes;
  todos.forEach(function(todo) {
      todo.style.display = "flex";
  })
}

function filterTodoActive() {
  event.preventDefault();
  const todos = todoList.childNodes;
  todos.forEach(function(todo) {
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
            todo.style.display = "none";
        }
    });
}

function filterTodoCompleted() {
  event.preventDefault();
  const todos = todoList.childNodes;
  todos.forEach(function(todo) {
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
            todo.style.display = "none";
        }
    });
  /*
  const newDivDelete = document.createElement("div");
  newDivDelete.classList.add("delete__button")
  main.appendChild(newDivDelete);
  */
}

function getTodos(){
  let todos;
  if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }
  todos.forEach(function(todo){
  //Create Div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add('todo');
  //Create li
  const newTodo = document.createElement("li");
  newInput = '<input type="checkbox"></input>';
  newDeleteButton = '<span class="material-icons">delete_outline</span>';
  newTodo.innerHTML = newInput + todo + newDeleteButton;
  newTodo.classList.add('todo__li');
  todoDiv.appendChild(newTodo);
  todoList.appendChild(todoDiv);
  //Check Button
  const checkListener = newTodo.querySelector('input');
  checkListener.addEventListener('input', function() {
      todoDiv.classList.toggle('completed');
  });
  //Delete Button 
  const deleteListener = newTodo.querySelector('span');
  deleteListener.addEventListener('click', function(){
    const todoGlobal = deleteListener.parentElement;
    todoGlobal.remove();
    removeLocalTodos(todo);
  });
  })
}

function saveLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}



function removeLocalTodos(todo){
  let todos;
  if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }
  const todoIndex = todo.children[0].innerText;  
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}


