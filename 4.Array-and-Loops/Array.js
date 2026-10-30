const todoList = [{ name: "make bread", dueDate: "2025-10-24" }];

renderTodoList();

function renderTodoList() {
  let todoHtml = "";
  for (let i = 0; i < todoList.length; i++) {
    const mainObj = todoList[i];
    const { name, dueDate } = mainObj;
    const html = `<div>${name}</div> <div>${dueDate}</div><button class='delete' onclick="
    todoList.splice(${i}, 1);
    renderTodoList()
    ">Delete</button>`;

    todoHtml += html;
  }
  document.querySelector(".empty").innerHTML = todoHtml;
}

const addTodo = () => {
  const inputEl = document.querySelector(".text-input");
  const inputDate = document.querySelector(".date");
  const name = inputEl.value;
  const date = inputDate.value;

  todoList.push({
    name: name,
    dueDate: date,
  });
  console.log(todoList);

  inputEl.value = "";

  renderTodoList();
};
