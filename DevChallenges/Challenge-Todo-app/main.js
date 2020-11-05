
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
    var newDiv = document.createElement("div");;
    newDiv.classList.add('todo');
    //Create Input
    var newInput = document.createElement("div");
    newInput.innerHTML = '<input class="complete-btn" type="checkbox"></input>';
    newDiv.appendChild(newInput);
    //Create li
    const newLi = document.createElement("li");
    newLi.innerText = todoInput.value;
    newLi.classList.add('todo__li');
    newDiv.appendChild(newLi);
    // Add todo to local storage
    saveLocalTodos(todoInput.value);
    //Create Delete Button
    var newDeleteButton = document.createElement("button");
    newDeleteButton.innerHTML = '<span class="material-icons">delete_outline</span>';
    newDeleteButton.classList.add('trash-btn')
    newDiv.appendChild(newDeleteButton);
    //Append to list 
    todoList.appendChild(newDiv)
    //Clear Todo Input Value
    todoInput.value = "";
    //Check Listener
    newInput.addEventListener('click', function() {
      newLi.classList.toggle('completed');
    });
    //Delete Listener
    newDeleteButton.addEventListener('click', function(event) {
      const item = event.target;
      const todo = item.parentElement;
      removeLocalTodos(todo);
      const todoGlobal = newDeleteButton.parentElement;
      todoGlobal.remove();
    });
}

function deleteAll() { 
  localStorage.clear();
  document.location.reload(true);
}

function saveLocalTodos(todo) { // Save in localStorage a Todo
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function removeLocalTodos(todo){ //Remove a Todo to the local storage
  let todos;
  if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }
  const todoIndex = todo.parentElement.children[1].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}




function filterTodoAll() { //Filter function for all todo
  event.preventDefault();
  const todos = todoList.childNodes;
  todos.forEach(function(todo) {
      todo.style.display = "flex";
  }) 
}

function filterTodoActive() { //Filter function for active todo
  event.preventDefault();
  const todos = todoList.childNodes;
  todos.forEach(function(todo) {
        var todoChildrenLi = todo.querySelector('li');
        if (!todoChildrenLi.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
            todo.style.display = "none";
        }
    });
}

function filterTodoCompleted() { //Filter function for completed todo
  event.preventDefault();
  const todos = todoList.childNodes;
  todos.forEach(function(todo) {
        var todoChildrenLi = todo.querySelector('li');
        if (todoChildrenLi.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
            todo.style.display = "none";
        }
    });
}

function getTodos(){ //get todo to local storage
  let todos;
  if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }
  todos.forEach(function(todo){
    //Create Div
    var newDiv = document.createElement("div");;
    newDiv.classList.add('todo');
    //Create Input
    var newInput = document.createElement("div");
    newInput.innerHTML = '<input class="complete-btn" type="checkbox"></input>';
    newDiv.appendChild(newInput);
    //Create li
    const newLi = document.createElement("li");
    newLi.innerText = todo;
    newLi.classList.add('todo__li');
    newDiv.appendChild(newLi);
    //Create Delete Button
    var newDeleteButton = document.createElement("button");
    newDeleteButton.innerHTML = '<span class="material-icons">delete_outline</span>';
    newDeleteButton.classList.add('trash-btn')
    newDiv.appendChild(newDeleteButton);
    //Append to list 
    todoList.appendChild(newDiv)
    //Check Listener
    newInput.addEventListener('click', function() {
      newLi.classList.toggle('completed');
    });
    //Delete Listener
    newDeleteButton.addEventListener('click', function(event) {
    const item = event.target;
    const todo = item.parentElement;
    removeLocalTodos(todo);
    const todoGlobal = newDeleteButton.parentElement;
    todoGlobal.remove();
    });
  })
} 
