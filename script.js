let yearOfBirth = +prompt("Введите год рождения?");
let name = prompt("Имя");
let surname = prompt("Фамилия");
const thisYear = 2023;
let howOld = thisYear - yearOfBirth;
console.log(`User Bio : ${name} ${surname}, ${howOld} years old`);
