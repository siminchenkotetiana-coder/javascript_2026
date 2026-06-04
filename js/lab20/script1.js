//Варіант 13: використати call для зміни значення this у функції.

function showUserInfo(role) {
  return `Користувач ${this.name} з міста ${this.city} має роль: ${role}.`;
}

const student = {
  name: "Олександр",
  city: "Запоріжжя",
};

const teacher = {
  name: "Ірина",
  city: "Київ",
};

const studentInfo = showUserInfo.call(student, "студент");
const teacherInfo = showUserInfo.call(teacher, "викладач");

console.log(studentInfo);
console.log(teacherInfo);


// Додаткове завдання: Об'єкт із вкладеним методом та перевірка this

const company = {
  brand: "TechAcademy",
  city: "Київ",
  // Вкладений об'єкт
  department: {
    name: "IT-відділ",
    // Вкладений метод
    getDetails(position) {
      return `Ласкаво просимо в ${this.name} компанії ${this.brand || 'Невідомо'}. Посада: ${position}.`;
    }
  }
};

// Перевірка при звичайному виклику через крапку
const directCall = company.department.getDetails("Розробник");
console.log("Звичайний виклик:", directCall);

// Виправляємо ситуацію за допомогою call, щоб прив'язати this до головного об'єкта `company`
const callWithCompany = company.department.getDetails.call(company, "Директор");
console.log("Виклик через call (контекст company):", callWithCompany);

// Комбінуємо дані (створюємо новий контекст, де є все)
const customContext = {
  name: "Маркетинг-відділ",
  brand: "DigitalAgency"
};

const callWithCustom = company.department.getDetails.call(customContext, "Менеджер");
console.log("Виклик через call (власний контекст):", callWithCustom);
