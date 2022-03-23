const taskInput = document.querySelector('.task-input');
const taskButton = document.querySelector('.task-button');
const listTasks = document.querySelector('.tasks-todo');

const validateInput = () => taskInput.value.trim().length > 0;

const addTask = () => {

    const inputIsValid = validateInput();

    if(!inputIsValid){
        return taskInput.classList.add("error");
    };

    const taskContent = document.createElement('div');
    taskContent.classList.add('task-content');

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

    listTasks.append(taskContent);
    taskContent.appendChild(addTaskItem);
    addTaskItem.appendChild(addParagraph);
    taskContent.appendChild(addIconsBox);
    addIconsBox.appendChild(doItem);
    addIconsBox.appendChild(deleteItem);
};

const inputColorChange = () => {
    const inputIsValid = validateInput();

    if(inputIsValid){
        return taskInput.classList.remove("error");
    }
};

taskButton.addEventListener('click', () => addTask());
taskInput.addEventListener('change', () => inputColorChange());

