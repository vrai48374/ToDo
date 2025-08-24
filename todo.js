let input = document.getElementById("todoInput");
let bt = document.getElementById("addBtn");
let ul = document.getElementById("todoList");

// Load todos on page load
window.onload = function () {
    let todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.forEach(todo => {
        createTodoElement(todo.text, todo.completed);
    });
};

// Save to localStorage
function saveToLocalStorage() {
    let todos = [];
    document.querySelectorAll("#todoList li").forEach(li => {
        let text = li.querySelector("span").textContent;
        let completed = li.querySelector("span").classList.contains("completed");
        todos.push({ text, completed });
    });
    localStorage.setItem("todos", JSON.stringify(todos));
}

// Create a todo DOM element
function createTodoElement(text, completed = false) {
    let li = document.createElement("li");
    let sp = document.createElement("span");
    sp.textContent = text;
    if (completed) sp.classList.add("completed");
    li.appendChild(sp);

    // Complete button
    let cbutton = document.createElement("button");
    cbutton.textContent = "Complete";
    cbutton.className = "complete-btn";
    cbutton.addEventListener("click", function () {
        sp.classList.toggle("completed");
        saveToLocalStorage();
    });
    li.appendChild(cbutton);

    // Delete button
    let dbutton = document.createElement("button");
    dbutton.textContent = "Delete";
    dbutton.className = "delete-btn";
    dbutton.addEventListener("click", function () {
        li.remove();
        saveToLocalStorage();
    });
    li.appendChild(dbutton);

    ul.appendChild(li);
    saveToLocalStorage();
}

// Add new todo
bt.addEventListener("click", function () {
    if (input.value === "") return;
    createTodoElement(input.value);
    input.value = "";
});
