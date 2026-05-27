//Варіант 13: клас Птах із властивістю висотаПольоту та методом летіти().
class Bird {
  constructor(name, flightHeight) {
    this.name = name;
    this.flightHeight = flightHeight;
  }

  fly() {
    return `${this.name} летить на висоті ${this.flightHeight} метрів.`;
  }
}

const falcon = new Bird("Сокіл", 1500);
const stork = new Bird("Лелека", 800);
const swallow = new Bird("Ластівка", 120);

console.log(falcon.fly());
console.log(stork.fly());
console.log(swallow.fly());

console.log("falcon instanceof Bird:", falcon instanceof Bird);
