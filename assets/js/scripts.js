const taskInput = document.querySelector('.task-input');
const taskButton = document.querySelector('.task-button');
const listTasks = document.querySelector('.tasks-todo');

const addTask = () => {

    const addElementDiv = document.createElement('div');
    addElementDiv.classList.add('task-item');

    const addParagraph = document.createElement('p');
    addParagraph.innerText = taskInput.value;

    const deleteItem = document.createElement('i');
    deleteItem.classList.add('fa-solid');
    deleteItem.classList.add('fa-trash-can');

    listTasks.appendChild(addElementDiv);
    addElementDiv.appendChild(addParagraph);
    addElementDiv.appendChild(deleteItem);
}

taskButton.addEventListener('click', () => addTask());
