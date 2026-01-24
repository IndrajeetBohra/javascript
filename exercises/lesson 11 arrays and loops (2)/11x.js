const todoList = JSON.parse(localStorage.getItem("todoList"));
// || [
//   {
//     name: "make dinner",
//     dueDate: "2026-01-22",
//   },
//   {
//     name: "wash dishes",
//     dueDate: "2026-01-22",
//   },
// ];

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>       
      <button onclick="
        todoList.splice(${i},1);        
        renderTodoList();
        saveToStorage();
      " class="delete-todo-button">Delete</button>
      
    `;
    todoListHTML += html;
  }
  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}

function addTodo() {
  const nameInputElement = document.querySelector(".js-name-input");
  const name = nameInputElement.value;
  const dateInputElement = document.querySelector(".js-due-date-input");
  const dueDate = dateInputElement.value;
  todoList.push({
    // name: name, dueDate: dueDate //shorthand property below
    name,
    dueDate,
  });
  nameInputElement.value = "";
  dateInputElement.value = "";
  renderTodoList();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem("todoList", JSON.stringify(todoList));
}
