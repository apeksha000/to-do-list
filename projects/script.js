const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

function createTaskElement(task) {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    const taskText = document.createElement('span');
    const deleteButton = document.createElement('button');

    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');
    taskText.textContent = task;
    deleteButton.textContent = 'Delete';

    checkbox.addEventListener('change', function() {
        if (this.checked) {
            li.classList.add('completed');
        } else {
            li.classList.remove('completed');
        }
    });

    deleteButton.addEventListener('click', function() {
        li.remove();
    });

    li.appendChild(checkbox);
    li.appendChild(taskText);
    li.appendChild(deleteButton);

    return li;
}

function addTask() {
    const task = taskInput.value.trim();
    if (task !== '') {
        const taskElement = createTaskElement(task);
        taskList.appendChild(taskElement);
        taskInput.value = '';
    }
}

addButton.addEventListener('click', addTask);
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});