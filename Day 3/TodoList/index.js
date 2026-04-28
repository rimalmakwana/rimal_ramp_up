const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const counter = document.querySelector(".counter");
const errorMsg = document.getElementById("errorMsg");

let totalTasks = 0;
let completedTasks = 0;

function updateCounter() {
  counter.textContent = `${completedTasks} of ${totalTasks} tasks completed`;
}

function addTask() {
  const taskText = input.value.trim();

  if (taskText === "") {
    errorMsg.textContent = "Task cannot be empty!";
    return;
  }

  errorMsg.textContent = "";

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;

  const btnBox = document.createElement("div");

  const doneBtn = document.createElement("button");
  doneBtn.textContent = "Done";
  doneBtn.classList.add("done-btn");

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");

  btnBox.appendChild(doneBtn);
  btnBox.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(btnBox);

  taskList.appendChild(li);

  totalTasks++;
  updateCounter();

  input.value = "";

  doneBtn.addEventListener("click", function () {
    if (!span.classList.contains("completed")) {
      span.classList.add("completed");
      completedTasks++;
    } else {
      span.classList.remove("completed");
      completedTasks--;
    }

    updateCounter();
  });

  deleteBtn.addEventListener("click", function () {
    if (span.classList.contains("completed")) {
      completedTasks--;
    }

    totalTasks--;
    li.remove();
    updateCounter();
  });
}

addBtn.addEventListener("click", addTask);

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
