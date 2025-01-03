const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Add Task
todoButton.addEventListener('click', () => {
    const taskText = todoInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const todoItem = document.createElement('li');
    todoItem.classList.add('todo-item');

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    todoItem.appendChild(taskSpan);

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit-button');
    editButton.addEventListener('click', () => editTask(taskSpan));
    todoItem.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', () => deleteTask(todoItem));
    todoItem.appendChild(deleteButton);

    todoList.appendChild(todoItem);
    todoInput.value = '';
});

// Edit Task
function editTask(taskSpan) {
    const newTaskText = prompt('Edit your task:', taskSpan.textContent);
    if (newTaskText !== null && newTaskText.trim() !== '') {
        taskSpan.textContent = newTaskText.trim();
    }
}

// Delete Task
function deleteTask(todoItem) {
    todoList.removeChild(todoItem);
}
