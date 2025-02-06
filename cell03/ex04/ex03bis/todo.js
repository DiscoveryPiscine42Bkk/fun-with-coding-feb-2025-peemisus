$(document).ready(function() {
    loadTasks();
});

function addTask() {
    let task = prompt("Enter a new TO DO:");
    if (task) {
        createTask(task);
        saveTasks();
    }
}

function createTask(task) {
    let taskDiv = $("<div></div>").addClass("todo").text(task);
    taskDiv.on("click", function() { removeTask(taskDiv); });

    $("#ft_list").prepend(taskDiv);
}

function removeTask(taskDiv) {
    if (confirm("Do you really want to remove this TO DO?")) {
        taskDiv.remove();
        saveTasks();
    }
}

function saveTasks() {
    let tasks = [];
    $(".todo").each(function() {
        tasks.push($(this).text());
    });

    document.cookie = "tasks=" + encodeURIComponent(JSON.stringify(tasks)) + "; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT";
}

function loadTasks() {
    let cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
        if (cookie.startsWith("tasks=")) {
            let taskList = JSON.parse(decodeURIComponent(cookie.substring(6)));
            $.each(taskList.reverse(), function(index, task) {
                createTask(task);
            });
        }
    }
}
