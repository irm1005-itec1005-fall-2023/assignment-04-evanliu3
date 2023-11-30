/* Assignment 04: Finishing a Todo List App
 *
 * 
 *
 */


//
// Variables
//

// Constants
let tasks = [];
let taskIdCounter = 1;

// DOM Elements
let taskListElement = document.getElementById("task-list");
let taskInputElement = document.getElementById("task-input");
let addButtonElement = document.getElementById("add-task");
let clearButtonElement = document.getElementById("clear-tasks");

// Functions
function displayTasks() {
  taskListElement.innerHTML = "";

  for (const task of tasks) {
    const taskItem = document.createElement("li");
    taskItem.innerHTML =
      `<h3>${task.description}</h3>
      <span class="task-id">${task.id}</span>
      <button data-id="${task.id}" class="remove-button">Remove</button>
      <button data-id="${task.id}" class="complete-button">Complete</button>`;

    if (task.completed) {
      const checkMark = document.createElement("span");
      checkMark.innerHTML = "✅";
      checkMark.classList.add("status-icon");
      taskItem.appendChild(checkMark);
      taskItem.classList.add("done");
    }

    taskListElement.appendChild(taskItem);
  }
}

function handleAddTask() {
  const taskDescription = taskInputElement.value.trim();

  if (taskDescription !== "") {
    createTask(taskDescription);
    taskInputElement.value = "";
    displayTasks();
  }
}

function handleTaskItemClick(event) {
  const taskId = parseInt(event.target.getAttribute("data-id"));

  if (event.target.classList.contains("remove-button")) {
    removeTask(taskId);
  } else if (event.target.classList.contains("complete-button")) {
    markTaskAsCompleted(taskId);
  }

  displayTasks();
}

function createTask(taskDescription) {
  let task = {
    id: taskIdCounter,
    description: taskDescription,
    completed: false,
  };

  tasks.push(task);
  taskIdCounter++;
}

function markTaskAsCompleted(taskId) {
  const taskIndex = tasks.findIndex((task) => task.id === taskId);

  if (taskIndex !== -1) {
    tasks[taskIndex].completed = true;
  }
}

function removeTask(taskId) {
  tasks = tasks.filter((task) => task.id !== taskId);
}

function clearAllTasks() {
  tasks = [];
  displayTasks();
}

// Event Listeners
addButtonElement.addEventListener("click", handleAddTask);
taskListElement.addEventListener("click", handleTaskItemClick);
clearButtonElement.addEventListener("click", clearAllTasks);

// Initial rendering
displayTasks();

/* Random CSS (style.css) */

body {
  font-family: 'Arial', sans-serif;
  background-color: #f8f8f8;
  color: #333;
  margin: 0;
  padding: 0;
}

header {
  background-color: #2c3e50;
  color: #ecf0f1;
  padding: 10px 0;
}

.nav-container {
  display: flex;
  justify-content: center;
}

.nav-title {
  font-size: 1.8em;
}

main {
  padding: 20px;
}

#tasks-container {
  background-color: #ecf0f1;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 10px;
}

h2 {
  color: #3498db;
}

.input-area {
  margin-bottom: 20px;
  display: flex;
  gap: 10px;
}

input {
  flex: 1;
  padding: 10px;
  font-size: 1em;
}

button {
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
  background-color: #3498db;
  color: #ecf0f1;
  border: none;
  border-radius: 5px;
}

button:hover {
  background-color: #2980b9;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  border-bottom: 1px solid #bdc3c7;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.done {
  background-color: #d4edda;
}
.status-icon {
  margin-left: 10px;
  color: #2ecc71;
}
#notification-area {
  margin-top: 20px;
  padding: 10px;
  background-color: #e74c3c;
  color: #ecf0f1;
  border-radius: 5px;
}
