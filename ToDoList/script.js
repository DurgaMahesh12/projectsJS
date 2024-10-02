document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const addBtn = document.getElementById('add-btn');

    // Add task
    addBtn.addEventListener('click', () => {
        const taskValue = taskInput.value.trim();
        if (taskValue) {
            addTask(taskValue);
            taskInput.value = '';
        }
    });

    // Add task to list
    function addTask(taskText) {
        const listItem = document.createElement('li');
        listItem.classList.add('task-item');
        listItem.innerHTML = `
            <span class="task-text">${taskText}</span>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        `;

        // Add edit functionality
        listItem.querySelector('.edit-btn').addEventListener('click', () => {
            const newText = prompt('Edit your task:', taskText);
            if (newText) {
                listItem.querySelector('.task-text').textContent = newText;
            }
        });

        // Add delete functionality
        listItem.querySelector('.delete-btn').addEventListener('click', () => {
            listItem.remove();
        });

        taskList.appendChild(listItem);
    }
});
