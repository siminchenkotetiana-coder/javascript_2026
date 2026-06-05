"use strict";

/*
  Лабораторна робота 26
  Варіант 13: кнопка після натискання видаляє саму себе.
*/

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("#remove-me");
  const info = document.querySelector("#info");

  button.addEventListener(
    "click",
    (event) => {
      event.currentTarget.remove();
      info.textContent = "Кнопку натиснуто, і вона видалила сама себе.";
    },
    { once: true }
  );
});
