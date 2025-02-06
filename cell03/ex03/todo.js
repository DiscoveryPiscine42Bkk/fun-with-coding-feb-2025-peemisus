
window.onload = function() {
    loadTasks();
};

function addTask() {
    let task = prompt("Enter a new TO DO:");
    if (task) {
        createTask(task);
        saveTasks();
    }
}

function createTask(task) {
    let taskDiv = document.createElement("div");
    taskDiv.className = "todo";
    taskDiv.textContent = task;
    taskDiv.onclick = function() { removeTask(taskDiv); };

    let list = document.getElementById("ft_list");

    list.insertBefore(taskDiv, list.firstChild);
}

function removeTask(taskDiv) {
    if (confirm("Do you really want to remove this TO DO?")) {
        taskDiv.remove();
        saveTasks();
    }
}

function saveTasks() {
    let tasks = [];
    document.querySelectorAll(".todo").forEach(todo => {
        tasks.push(todo.textContent);
    });

    document.cookie = "tasks=" + encodeURIComponent(JSON.stringify(tasks)) + "; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT";
}

function loadTasks() {
    let cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
        if (cookie.startsWith("tasks=")) {
            let taskList = JSON.parse(decodeURIComponent(cookie.substring(6)));
            taskList.reverse().forEach(task => createTask(task));
        }
    }
}
