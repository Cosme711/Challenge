
//Selectors
const todoInput = document.querySelector('.todo__input');
const todoButton = document.querySelector('.todo__input__button');
const todoList = document.querySelector('.todo__list');
const deleteAllInput = document.getElementById('deleteAll');
const filterCompleted = document.querySelector('#completed');
const filterActive = document.querySelector('#active');
const filterAll = document.querySelector('#all');
const main = document.querySelector("main");
let darkSwitcher = document.querySelector('#dark-mode');
const inputContainer = document.querySelector('.todo__input__container');

//Event Listeners

document.addEventListener('DOMContentLoaded', getTodos);
document.addEventListener('DOMContentLoaded', preferableDarkMode);
todoButton.addEventListener('click', addTodo);
deleteAllInput.addEventListener('click', deleteAll);
filterCompleted.addEventListener('click', filterTodoCompleted);
filterActive.addEventListener('click', filterTodoActive);
filterAll.addEventListener('click', filterTodoAll);
darkSwitcher.addEventListener('change', darkMode);



//Functions 

function addTodo(e) { 
    e.preventDefault(); //Disable Prevent Default
    let todoText = todoInput.value;


    if (todoText) {

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
    updateLS();
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
        //Create Div
        var newDiv = document.createElement("div");;
        newDiv.classList.add('todo');
        //Create Input
        var newInput = document.createElement("div");
        newInput.innerHTML = '<input class="complete-btn" type="checkbox"></input>';
        newDiv.appendChild(newInput);
        //Create li
        const newLi = document.createElement("li");
        newLi.innerText = todo.text;
        newLi.classList.add('todo__li');
        if (todo && todo.completed) {
          newLi.classList.toggle("completed");
          newInput.innerHTML = '<input class="complete-btn" type="checkbox" checked></input>';
        }
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
        console.log
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


function deleteAll() { 
  localStorage.clear();
  document.location.reload(true);
}






function filterTodoAll() { //Filter function for all todo
  event.preventDefault();
  //newDeleteButtonAll.style.display = "none";
  inputContainer.style.display = "flex";
  const todos = todoList.childNodes;
  todos.forEach(function(todo) {
      todo.style.display = "flex";
  })
}

function filterTodoActive() { //Filter function for active todo
  //newDeleteButtonAll.style.display = "none";
  event.preventDefault();
  inputContainer.style.display = "flex";
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
  inputContainer.style.display = "none";
  const todos = todoList.childNodes;
  todos.forEach(function(todo) {
        var todoChildrenLi = todo.querySelector('li');
        if (todoChildrenLi.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
            todo.style.display = "none";
        }
    });
  if (!document.querySelector('.delete__button__all')) {
    var newDeleteButtonAll = document.createElement('div');
    main.appendChild(newDeleteButtonAll);
    newDeleteButtonAll.classList.add('delete__button__all');
    newDeleteButtonAll.innerHTML = "<span class='material-icons'>delete_outline</span>" + "<a>delete all</a>";
  }
}



function darkMode() {
  if(event.target.checked) {
    document.body.classList.add('dark-mode');
    localStorage.setItem('mode', 'dark');
} else {
    document.body.classList.remove('dark-mode');
    localStorage.removeItem('mode');
}
}

function preferableDarkMode() { //Get user preferable mode
  if (localStorage.getItem('mode') === 'dark') {
    darkSwitcher.checked = true;
    document.body.classList.add('dark-mode');
  };
}
