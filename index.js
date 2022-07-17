const todos = document.querySelector("#todo_list");
const button = document.querySelector(".submit");
const button_2 = document.querySelector(".initialiaztion");
const todoInput = document.querySelector("#todo_input");
const msg = document.querySelector("#msg");

// 이벤트 리스너
button.addEventListener("click", onSubmit);
button_2.addEventListener("click", onInit);

function onSubmit(e) {
  e.preventDefault();

  if (todoInput.value === "") {
    msg.style.display = "block";
    setTimeout(() => (msg.style.display = "none"), 2000);
    return;
  }

  e.target.style.background = "red";

  const li = document.createElement("li");
  li.appendChild(document.createTextNode(todoInput.value));

  li.classList.add("item");
  todos.appendChild(li);

  todoInput.value = "";
}

function onInit(e) {
  if (li != null) {
    todos.querySelector.remove();
  }
}
