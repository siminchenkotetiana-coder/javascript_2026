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
