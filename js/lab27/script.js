"use strict";

/*
  Лабораторна робота 27
  Варіант 13: обробник пересування миші з тротлінгом.
*/

function throttle(callback, intervalMs) {
  let lastCallTime = 0;
  let timerId = null;

  return function throttledCallback(...args) {
    const now = Date.now();
    const remainingTime = intervalMs - (now - lastCallTime);

    if (remainingTime <= 0) {
      clearTimeout(timerId);
      timerId = null;
      lastCallTime = now;
      callback.apply(this, args);
      return;
    }

    if (timerId === null) {
      timerId = setTimeout(() => {
        lastCallTime = Date.now();
        timerId = null;
        callback.apply(this, args);
      }, remainingTime);
    }
  };
}

document.addEventListener("DOMContentLoaded", () => {
  const moveArea = document.querySelector("#move-area");
  const rawCountElement = document.querySelector("#raw-count");
  const handledCountElement = document.querySelector("#handled-count");
  const positionElement = document.querySelector("#position");

  let rawCount = 0;
  let handledCount = 0;

  const throttledMouseMove = throttle((event) => {
    handledCount += 1;
    handledCountElement.textContent = handledCount;

    const rect = moveArea.getBoundingClientRect();
    const x = Math.round(event.clientX - rect.left);
    const y = Math.round(event.clientY - rect.top);

    positionElement.textContent = `Координати: x = ${x}, y = ${y}`;
  }, 150);

  moveArea.addEventListener("mousemove", (event) => {
    rawCount += 1;
    rawCountElement.textContent = rawCount;
    throttledMouseMove(event);
  });
});
