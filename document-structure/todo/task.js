// Получаем элементы из DOM
const taskInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');
const tasksForm = document.getElementById('tasks__form');

// Функция для создания новой задачи
function createTaskElement(taskTitle) {
    const taskElement = document.createElement('div');
    taskElement.classList.add('task');

    const titleElement = document.createElement('div');
    titleElement.classList.add('task__title');
    titleElement.textContent = taskTitle;

    const removeLink = document.createElement('a');
    removeLink.href = '#';
    removeLink.classList.add('task__remove');
    removeLink.textContent = '×';

    // Добавляем обработчик события для удаления задачи
    removeLink.addEventListener('click', function(event) {
        event.preventDefault();
        tasksList.removeChild(taskElement);
        saveTasks();
    });

    taskElement.appendChild(titleElement);
    taskElement.appendChild(removeLink);

    return taskElement;
}

// Функция для добавления задачи
function addTask(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    const taskTitle = taskInput.value.trim();
    
    if (taskTitle) {
        const taskElement = createTaskElement(taskTitle);
        tasksList.appendChild(taskElement);
        taskInput.value = ''; // Очищаем поле ввода
        saveTasks(); // Сохраняем задачи в локальное хранилище
    }
}

// Функция для сохранения задач в локальное хранилище
function saveTasks() {
    const tasks = [];
    
    // Получаем все задачи из списка и сохраняем их в массив
    document.querySelectorAll('.task__title').forEach(task => {
        tasks.push(task.textContent);
    });

    localStorage.setItem('tasks', JSON.stringify(tasks)); // Сохраняем массив задач в локальное хранилище
}

// Функция для загрузки задач из локального хранилища
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    
    tasks.forEach(taskTitle => {
        const taskElement = createTaskElement(taskTitle);
        tasksList.appendChild(taskElement);
    });
}

// Добавляем обработчик события на форму
tasksForm.addEventListener('submit', addTask);

// Загружаем задачи при загрузке страницы
loadTasks();