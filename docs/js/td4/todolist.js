let tasks = [];
let savedLists = {};

function addTask() {
    const taskName = document.getElementById("taskName").value.trim();
    if (taskName) {
        tasks.push({ name: taskName, completed: false });
        document.getElementById("taskName").value = "";
        renderTasks();
    }
}

function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.onchange = () => toggleTask(index);
        
        const taskText = document.createElement("span");
        taskText.textContent = task.name;
        if (task.completed) taskText.style.textDecoration = "line-through";
        
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "🗑️🚮";
        deleteButton.classList.add("delete-button");
        deleteButton.onclick = () => deleteTask(index);
        
        li.appendChild(checkbox);
        li.appendChild(taskText);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function deleteCompleted() {
    tasks = tasks.filter(task => !task.completed);
    renderTasks();
}

function saveTasks() {
    const saveName = document.getElementById("saveName").value.trim();
    if (saveName) {
        savedLists[saveName] = [...tasks];
        document.getElementById("saveName").value = "";
        updateLoadOptions();
        alert("Liste sauvegardée !");
    }
}

function updateLoadOptions() {
    const loadSelect = document.getElementById("loadSave");
    loadSelect.innerHTML = "";
    for (let key in savedLists) {
        const option = document.createElement("option");
        option.value = key;
        option.textContent = key;
        loadSelect.appendChild(option);
    }
}

function loadTasks() {
    const selectedList = document.getElementById("loadSave").value;
    if (selectedList && savedLists[selectedList]) {
        tasks = [...savedLists[selectedList]];
        renderTasks();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    updateLoadOptions();
    renderTasks();
});