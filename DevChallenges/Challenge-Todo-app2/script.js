const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUL = document.getElementById("todos");
const deleteAllInput = document.getElementById('deleteAll');
deleteAllInput.addEventListener('click', deleteAll);
document.addEventListener("DOMContentLoaded", getTodos);



form.addEventListener("submit", (e) => {
    e.preventDefault();

    addTodo();
});

function addTodo(todo) {
    let todoText = input.value;
    if (todoText) {

    //Create Div
    var newDiv = document.createElement("div");;
    newDiv.classList.add('todo');
    //Create Input
    var newInput = document.createElement("div");
    newInput.innerHTML = '<input class="complete-btn" type="checkbox"></input>';
    newDiv.appendChild(newInput);
    //Create li
    const todoEl = document.createElement("li");
    if (todo && todo.completed) {
        todoEl.classList.add("completed");
    }
    todoEl.innerText = todoText;
    todoEl.classList.add('todo__li');
    //Create Delete Button
    var newDeleteButton = document.createElement("button");
    newDeleteButton.innerHTML = '<span class="material-icons">delete_outline</span>';
    newDeleteButton.classList.add('trash-btn')
    newDiv.appendChild(newDeleteButton);
        //Append to list 
        todosUL.appendChild(newDiv)
        newDiv.appendChild(todoEl);
        newInput.addEventListener("click", () => {
            todoEl.classList.toggle("completed");
            updateLS();
        });

        todoEl.addEventListener("contextmenu", (e) => {
            e.preventDefault();

            todoEl.remove();

            updateLS();
        });

        todosUL.appendChild(todoEl);

        input.value = "";

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
    todos.forEach(function(todo) {
      //Create Div
      var newDiv = document.createElement("div");;
      newDiv.classList.add('todo');
      //Create list
      const newTodo = document.createElement("li");
      newTodo.innerText = todo.text;
      newTodo.classList.add("todo-item");
      if (todo && todo.completed) {
        todoEl.classList.add("completed");
    }
      newDiv.appendChild(newTodo);
      input.value = "";
      //Create Completed Button
      const completedButton = document.createElement("button");
      completedButton.innerHTML = `<i class="fas fa-check"></i>`;
      completedButton.classList.add("complete-btn");
      newDiv.appendChild(completedButton);
      //Create trash button
      const trashButton = document.createElement("button");
      trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
      trashButton.classList.add("trash-btn");
      newDiv.appendChild(trashButton);
      //attach final Todo
      todosUL.appendChild(newDiv)
    });
  }



function updateLS() {
    const todosEl = document.querySelectorAll("li");

    const todos = [];

    todosEl.forEach((todoEl) => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains("completed"),
        });
    });

    localStorage.setItem("todos", JSON.stringify(todos));
}




function deleteAll() { 
    localStorage.clear();
    document.location.reload(true);
  }
  