const text = document.getElementById("Input-text");
const addTaskButton = document.getElementById("add-task-btn");
const saveTaskButton = document.getElementById("edit-todo-btn");
const listBox = document.getElementById("listBox");
const saveInd = document.getElementById("saveIndex");

addTaskButton.addEventListener("click", (e) => {
e.preventDefault();
let todo = localStorage.getItem("todo");
if (todo === null) {
todoArray = [];
} else {
todoArray = JSON.parse(todo);
}
todoArray.push(text.value);
text.value = "";
localStorage.setItem("todo", JSON.stringify(todoArray));
displayTodo();
});
// deleting values
function deleteTodo(ind) {
let todo = localStorage.getItem("todo");
todoArray = JSON.parse(todo);
todoArray.splice(ind, 1);
localStorage.setItem("todo", JSON.stringify(todoArray));
displayTodo();
}



// updating the values

function edit(ind) {
saveInd.value = ind;
let todo = localStorage.getItem("todo");
todoArray = JSON.parse(todo);
text.value = todoArray[ind];
addTaskButton.style.display = "none";
saveTaskButton.style.display = "block";
}