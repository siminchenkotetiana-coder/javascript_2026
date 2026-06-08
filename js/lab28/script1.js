// Масив для зберігання завдань
let tasks = [];

// Завантаження даних зі сховища при відкритті сторінки
if(localStorage.getItem("tasks")){
    tasks = JSON.parse(localStorage.getItem("tasks"));
    displayTasks();
}

// Функція додавання завдання
function addTask(){

    const input = document.getElementById("taskInput");

    const taskText = input.value.trim();

    if(taskText === ""){
        alert("Введіть завдання!");
        return;
    }

    tasks.push(taskText);

    saveTasks();

    displayTasks();

    input.value = "";
}

// Функція збереження у LocalStorage
function saveTasks(){

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );
}

// Відображення списку
function displayTasks(){

    const list =
        document.getElementById("taskList");

    list.innerHTML = "";

    tasks.forEach((task, index) => {

        const li =
            document.createElement("li");

        li.innerHTML =
            `${task}
            <button onclick="deleteTask(${index})">
            Видалити
            </button>`;

        list.appendChild(li);
    });
}

// Видалення завдання
function deleteTask(index){

    tasks.splice(index, 1);

    saveTasks();

    displayTasks();
}