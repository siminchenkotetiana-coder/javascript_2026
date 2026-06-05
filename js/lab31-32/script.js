function createPromise(name, delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`${name} завершився першим`);
        }, delay);
    });
}

function startRace() {
    const promise1 = createPromise("Promise 1", 3000);
    const promise2 = createPromise("Promise 2", 1000);
    const promise3 = createPromise("Promise 3", 2000);

    Promise.race([promise1, promise2, promise3])
        .then(result => {
            document.getElementById("result").textContent = result;
        });
}