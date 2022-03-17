const taskInput = document.querySelector('.task-input');
const taskButton = document.querySelector('.task-button');
const listTasks = document.querySelector('.tasks-todo');

const addTask = () => {

    const addTaskItem = document.createElement('div');
    addTaskItem.classList.add('task-item');

    const addParagraph = document.createElement('p');
    addParagraph.innerText = taskInput.value;

    const addIconsBox = document.createElement('div');
    addIconsBox.classList.add('icons-box');

    const doItem = document.createElement('i');
    doItem.classList.add('fa-solid');
    doItem.classList.add('fa-check');

    const deleteItem = document.createElement('i');
    deleteItem.classList.add('fa-solid');
    deleteItem.classList.add('fa-trash-can');

    listTasks.appendChild(addTaskItem);
    addTaskItem.appendChild(addParagraph);
    listTasks.appendChild(addIconsBox);
    addIconsBox.appendChild(doItem);
    addIconsBox.appendChild(deleteItem);
}

taskButton.addEventListener('click', () => addTask());
