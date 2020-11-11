
//Selectors

const main = document.querySelector("main");
const todoInput = document.querySelector('.todo__input');
const inputContainer = document.querySelector('.todo__input__container');
const todoButton = document.querySelector('.todo__input__button');
const todoList = document.querySelector('.todo__list');
const filterCompleted = document.querySelector('#completed');
const filterActive = document.querySelector('#active');
const filterAll = document.querySelector('#all');
const deleteAllButton = document.querySelector('.delete__button__all');
const darkSwitcher = document.querySelector('#dark-mode');

//Event Listeners

todoButton.addEventListener('click', addTodo);
document.addEventListener('DOMContentLoaded', getTodos);
filterCompleted.addEventListener('click', filterTodoCompleted);
filterActive.addEventListener('click', filterTodoActive);
filterAll.addEventListener('click', filterTodoAll);
deleteAllButton.addEventListener('click', deleteAllCompleted);
darkSwitcher.addEventListener('change', darkMode);
document.addEventListener('DOMContentLoaded', preferableDarkMode);



//Functions 

function addTodo(e) { 
  e.preventDefault();
  if (todoInput.value) {
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
      updateLS();
    });
    //Delete Listener
    newDeleteButton.addEventListener('click', function(event) {
      event.preventDefault();
      const todoGlobal = newDeleteButton.parentElement;
      todoGlobal.remove();
      updateLS();
    });
    updateLS(); //Update Local Storage
  }
}

function getTodos() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach(function(todo){ 
    var newDiv = document.createElement("div");;
    newDiv.classList.add('todo');
    var newInput = document.createElement("div");
    newInput.innerHTML = '<input class="complete-btn" type="checkbox"></input>';
    newDiv.appendChild(newInput);
    const newLi = document.createElement("li");
    newLi.innerText = todo.text;
    newLi.classList.add('todo__li');
    if (todo && todo.completed) { //If in local storage it's completed
      newLi.classList.toggle("completed"); 
      newInput.innerHTML = '<input class="complete-btn" type="checkbox" checked></input>';
    }
    newDiv.appendChild(newLi);
    var newDeleteButton = document.createElement("button");
    newDeleteButton.innerHTML = '<span class="material-icons">delete_outline</span>';
    newDeleteButton.classList.add('trash-btn')
    newDiv.appendChild(newDeleteButton);
    todoList.appendChild(newDiv)
    todoInput.value = "";
    newInput.addEventListener('click', function() {
      newLi.classList.toggle('completed');
      updateLS();
    });
    newDeleteButton.addEventListener('click', function(event) {
      event.preventDefault();
      const todoGlobal = newDeleteButton.parentElement;
      todoGlobal.remove();
      updateLS();
    });
    updateLS();
  })
}

function updateLS() {
  const todosLi = document.querySelectorAll("li");
  const todos = [];
  todosLi.forEach((newLi) => {
    todos.push({
      text: newLi.innerText,
      completed: newLi.classList.contains("completed")
    });
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}


//FILTER

function filterTodoAll(e) { //Filter function for all todo
  e.preventDefault();
  inputContainer.style.display = "flex";
  if (document.querySelector('.delete__button__all')) {
    var deleteButton = document.querySelector(".delete__button__all");
    deleteButton.remove();
  }
  const todos = todoList.childNodes;
  todos.forEach(function(todo) {
    todo.style.display = "flex";
  })
}

function filterTodoActive(e) { //Filter function for active todo
  e.preventDefault();
  inputContainer.style.display = "flex";
  if (document.querySelector('.delete__button__all')) {
    var deleteButton = document.querySelector(".delete__button__all");
    deleteButton.remove();
  }
  const todos = todoList.childNodes;
  todos.forEach(function(todo) {
    var todoChildrenLi = todo.querySelector('li');
    if (!todoChildrenLi.classList.contains("completed")) {
      todo.style.display = "flex";
    } else {
      todo.style.display = "none";
    }
  })
}

function filterTodoCompleted(e) { //Filter function for completed todo
  e.preventDefault();
  inputContainer.style.display = "none";
  const todos = todoList.childNodes;
  todos.forEach(function(todo) {
    var todoChildrenLi = todo.querySelector('li');
    if (todoChildrenLi.classList.contains("completed")) {
      todo.style.display = "flex";
    } else {
      todo.style.display = "none";
    }
  })
  if (!document.querySelector('.delete__button__all')) {
    var newDeleteButtonAll = document.createElement('div');
    main.appendChild(newDeleteButtonAll);
    newDeleteButtonAll.classList.add('delete__button__all');
    newDeleteButtonAll.innerHTML = "<span class='material-icons'>delete_outline</span>" + "<a>delete all</a>";
    /*
    newDeleteButtonAll.addEventListener("click", function() {
      const todos = todoList.childNodes;
      todos.forEach(function(todo) {
        var todoChildrenLi = todo.querySelector('li');
        if (todoChildrenLi.classList.contains("completed")) {
          todo.remove();
          updateLS();
        }
      })
      /*
      if (todo && todo.completed) {
      }
      })
      */

      
      /*
      var todoChildrenLiCompleted = document.getElementsByClassName('.todo__li completed');
      console.log(todoChildrenLiCompleted);
      for (var i = 0; i < todoChildrenLiCompleted.length; i++) {
        console.log("hey");
      }
      */

      /*
      const todos = todoList.childNodes;
      todos.forEach(function(todo) {
        var todoChildrenLi = todo.querySelector('li');
          var todoChildrenLiCompleted = document.getElementsByClassName('.todo__li completed');
          console.log(todoChildrenLiCompleted);
          for (var i = 0; i < todoChildrenLiCompleted.length; i++) {
            console.log("hey");
          }
          */
          //todo.remove();
          //todoChildrenLi.parentElement.remove();
          //updateLS();

  
    
  }
}

function deleteAllCompleted() {
  const todos = todoList.childNodes;
  todos.forEach(function(todo) {
    var todoChildrenLi = todo.querySelector('li');
    if (todoChildrenLi.classList.contains("completed")) {
      todo.remove();
      updateLS();
    }
  })
}


//Dark Mode Button

function darkMode(e) {
  if(e.target.checked) {
    document.body.classList.add('dark-mode');
    localStorage.setItem('mode', 'dark');
  } else {
    document.body.classList.remove('dark-mode');
    localStorage.removeItem('mode');
  }
}

function preferableDarkMode() { 
  if (localStorage.getItem('mode') === 'dark') {
    darkSwitcher.checked = true;
    document.body.classList.add('dark-mode');
  }
}
