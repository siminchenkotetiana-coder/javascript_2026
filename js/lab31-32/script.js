function startRace() {

    document.getElementById("result").textContent =
        "Виконується очікування...";

    const promise1 = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Проміс 1 завершився через 3000 мс");
        }, 3000);
    });

    const promise2 = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Проміс 2 завершився через 1000 мс");
        }, 1000);
    });

    const promise3 = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Проміс 3 завершився через 2000 мс");
        }, 2000);
    });

    Promise.race([promise1, promise2, promise3])
        .then(result => {
            document.getElementById("result").textContent =
                "Переможець: " + result;
            console.log(result);
        })
        .catch(error => {
            document.getElementById("result").textContent =
                "Помилка: " + error;
        })
        .finally(() => {
            console.log("Виконання завершено");
        });
}