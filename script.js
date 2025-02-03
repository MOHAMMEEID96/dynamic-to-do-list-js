document.addEventListener("DOMContentLoaded", () => {
    // Select DOM elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create a new task item
        const li = document.createElement("li");
        li.textContent = taskText;

        // Create a remove button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn";
        removeButton.onclick = () => li.remove();

        // Append elements
        li.appendChild(removeButton);
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = "";
    }

    // Event listener for add button click
    addButton.addEventListener("click", addTask);

    // Event listener for pressing Enter key
    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
