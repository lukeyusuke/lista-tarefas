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

    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item');

    const taskParagraph = document.createElement('p');
    taskParagraph.innerText = taskInput.value;

    const addIconsBox = document.createElement('div');
    addIconsBox.classList.add('icons-box');

    const doItem = document.createElement('i');
    doItem.classList.add('fa-solid');
    doItem.classList.add('fa-check');

    const deleteItem = document.createElement('i');
    deleteItem.classList.add('fa-solid');
    deleteItem.classList.add('fa-trash-can');

    deleteItem.addEventListener('click', () => deleteTask(taskContent, taskParagraph));

    listTasks.appendChild(taskContent);
    taskContent.appendChild(taskItem);
    taskItem.appendChild(taskParagraph);
    taskContent.appendChild(addIconsBox);
    addIconsBox.appendChild(doItem);
    addIconsBox.appendChild(deleteItem);

    taskInput.value = "";
};

const deleteTask = (taskContent, taskParagraph) => {
    const tasks = taskContent.childNodes;
    console.log(tasks);

    for(const task of tasks){
        const currentTaskIsBeingClicked = task.firstChild.isSameNode(taskParagraph);

        if(currentTaskIsBeingClicked){
            taskContent.remove();
        }
    }
};

const inputColorChange = () => {
    const inputIsValid = validateInput();

    if(inputIsValid){
        return taskInput.classList.remove("error");
    }
};

taskButton.addEventListener('click', () => addTask());
taskInput.addEventListener('change', () => inputColorChange());

