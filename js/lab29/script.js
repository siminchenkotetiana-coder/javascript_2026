// Масив для зберігання книг або фільмів
let favorites = [];

// Завантаження даних із LocalStorage
if(localStorage.getItem("favorites")){
    favorites = JSON.parse(localStorage.getItem("favorites"));
    displayItems();
}

// Додавання нового елемента
function addItem(){

    const input = document.getElementById("itemInput");
    const value = input.value.trim();

    if(value === ""){
        alert("Введіть назву!");
        return;
    }

    favorites.push(value);

    saveData();

    input.value = "";

    displayItems();
}

// Відображення списку
function displayItems(){

    const list = document.getElementById("list");

    list.innerHTML = "";

    favorites.forEach((item, index) => {

        const li = document.createElement("li");

        li.innerHTML = `
            ${item}
            <button class="deleteBtn"
            onclick="deleteItem(${index})">
            Видалити
            </button>
        `;

        list.appendChild(li);
    });
}

// Видалення елемента
function deleteItem(index){

    favorites.splice(index, 1);

    saveData();

    displayItems();
}

// Збереження в LocalStorage
function saveData(){

    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );
}