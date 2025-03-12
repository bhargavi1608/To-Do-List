function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    // Create a task card
    let taskCard = document.createElement("div");
    taskCard.classList.add("task-card");

    let taskText = document.createElement("span");
    taskText.innerText = taskInput.value;

    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.onclick = function () {
        taskList.removeChild(taskCard);
    };

    // Append text and button to the card
    taskCard.appendChild(taskText);
    taskCard.appendChild(deleteButton);

    // Append the card to the task list
    taskList.appendChild(taskCard);

    // Clear input field
    taskInput.value = "";
}
