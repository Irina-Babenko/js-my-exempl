//! практика модуль 4

//* Створіть об'єкт calculator із трьома методами:
//*read(a, b) - приймає два аргументи та зберігає їх як властивості об'єкта
//*sum() - повертає суму збережених значень
//*mult() - перемножує збережені значення та повертає результат

// const calculator = {
//   read(a, b) {
//     this.valu1 = a;
//     this.valu2 = b;
//   },
//   sum() {
//     return this.valu1 + this.valu2;
//   },
//   mult() {
//     return this.valu1 * this.valu2;
//   },
// };

// calculator.read(2, 5);
// console.log(calculator);

// console.log(calculator.sum());

// console.log(calculator.mult());

//!
//* Task - 1
//* Створи функцію яка буде приймати 3 параметри та формувати об'єкт покупки
//* 1 Назва продукту
// *2 Кількість одиниць
// *3 Ціна за 1 одиницю товару
// *Функція має повертати сформований об'єкт з ключами name, price, quantity, totalPrice.
//*
// function createBascet(product, quantity, price) {
//   return {
//     product,
//     quantity,
//     price,
//     totalPrice: quantity * price,
//   };
// }
// console.log(createBascet('pizza', 3, 120));

//!
//* Task - 2
//* Створи функцію для ведення статистики комп'ютерного клубу. Функція приймає 1 параметр це об'єкт користувачів де ключ це ім'я користувача, а значення це час оренди у хвилинах.
//* Функція повертає рядок з інформацією про те скільки було користувачів та який середній час оренди комп'ютер.

//*

// const players = {
//   Den: 60,
//   Kate: 130,
//   William: 45,
//   Matthew: 120,
//   Ethan: 40,
//   David: 55,
// };

// function getTime(obj) {
//   const values = Object.values(obj);
//   let total = 0;

//   for (const value of values) {
//     total += value;
//   }
//   console.log(total);
//   return `Count of players ${values.length}, average time ${
//     total / values.length
//   }`;
// }

// console.log(getTime(players));

//!
// Task - 3
// 1 Створити функцію яка буде приймати 2 параметри
//    1 параметр масив
//    2 параметр назва книги
// Функція повертає Імена юзерів (формат стрінги) в яких є дана книга ("Harry Potter") \\\ "Anna, Oleksii"

// 2 Порахувати вік всіх юзерів у яких є ключ age.

//*
// const friends = [
//   { name: 'Anna', books: ['Bible', 'Harry Potter'], age: 21 },
//   { name: 'Bob', books: ['War and peace', 'Romeo and Juliet'], age: 26 },
//   { name: 'Alice', books: ['War and peace', 'Romeo and Juliet'] },
//   {
//     name: 'Oleksii',
//     books: ['Bible', 'War and peace', 'Harry Potter', 'Romeo and Juliet'],
//     age: 26,
//   },
// ];

// function getUsers(arr, bookName) {
//   const userNemes = [];

//   for (const user of arr) {
//     if (user.books.includs(bookName)) {
//       userNemes.push(user.name);
//     }
//   }
//   return userNemes.join(', ');
// }

// console.log(getUsers(friends, 'Harry Potter'));

//!
// Є об'єкт, у якому зберігаються обрані товари у кошику.
// Напишіть код для визначення загальної суму замовлення
// і збережіть його результат у змінній totalCost.
// Якщо об'єкт cart порожній, то результат має бути 0.

// const cart = {
//   apple: 50,
//   banana: 30,
//   orange: 40,
// };

// const values = Object.values(cart);
// console.log(values);

// let totalCost = 0;

//  for (const value of values) {
//    totalCost += value;
//  }

// for (const key in cart) {
//   totalCost += cart[key];
// }

// console.log(totalCost);

//! лекция 1

//! ОБЬЕКТ

// const book = {
//   name: 'Alice',
//   skills: {
//     title: 'The Last Kingdom',
//     автор: 'Bernard Cornwell',
//     genres: ['historical prose', 'adventure'],
//     public: true,
//     rating: 8.38,
//   },
// };

//! Обращение к свойствам обьекта

//* через точку, если свойство вложенное

// console.log('public', book.skills.public);

//* через квадратные скобки

// console.log(book['name']);

//* еси нужно использовать натацию квадратных скобок

// console.log('public', book.skills.public);
// console.log('public', user['skills'].public);

//! Смена значения свойств

// const user = {
//   name: 'Alice',
//   skills: {
//     html: false,
//     css: true,
//     react: false,
//   },
// };

// user.city = 'Lviv';
// user['age'] = 28;
// console.log(user);

//! Object.freeze

//* помогает защитить обьект, в таком случае смена имени какого либо из свойств не возможна

// const user = {
//   name: 'Alice',
//   skills: {
//     html: false,
//     css: true,
//     react: false,
//   },
// };

// Object.freeze(user);
// console.log(user);

//! Методы обьектов
//! this

// const user = {
//   name: 'Alice',
//   skills: {
//     html: false,
//     css: true,
//     react: false,
//   },

//   sayHello(city) {
//     console.log(this);
//     console.log('Hello my name ${this.name}');
//   },
// };
// user.sayHello('Lviv');

//! Цикл for...in

// const user = {
//   name: 'Alice',
//   skills: {
//     html: false,
//     css: true,
//     react: false,
//   },
// };

// for (const key in user) {
//   // console.log(key);
//   console.log(key, user[key]);
// }

//! Метод Object.keys()
//* работает только с собственными свойствами

// const user = {
//   name: 'Alice',
//   skills: {
//     html: false,
//     css: true,
//     react: false,
//   },
// };

// const keys = Object.keys(user);
// console.log(keys);

//! Метод Object.values()
//* получаем только имена свойств значений

// const user = {
//   name: 'Alice',
//   skills: {
//     html: false,
//     css: true,
//     react: false,
//   },
// };

// const values = Object.values(user);
// console.log(values);

//! Метод Object.entries()
//* работает тольк с собственными свойствами

// const user = {
//   name: 'Alice',
//   skills: {
//     html: false,
//     css: true,
//     react: false,
//   },
// };

// const entries = Object.entries(user);
// console.log(entries);

//! Деструктуризация масива

// const arr = [1, 2, 3, 4, 5];

// const [first, second, therd] = arr;

// console.log(first);

// const [, , , , last] = arr;
// console.log(last);

//! Деструктуризация объекта

// const user = {
//   name: 'Test name',
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };
// const skills = ['html', 'css', 'js'];

// const { skills: userSkills } = user;
// console.log(skills);

//! Глубокая деструктуризация объекта
//* Глубокая деструктуризация позволяет извлекать значения из вложенных объектов и массивов в одну операцию.

// const user = {
//   name: 'Test name',
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };

// const {
//   skills: { html: skillsHTML, css, js },
// } = user;

// console.log(skillsHTML);
// console.log(css);

//! деструктуризация объекта в цикле

//* Деструктуризация объекта в цикле позволяет извлекать значения свойств объекта и использовать их внутри цикла.
//* Использование деструктуризации:

//* В цикле for...of мы используем деструктуризацию объекта, чтобы извлечь значения name и age из каждого объекта в массиве users.
//* Использование извлеченных значений:

//* Внутри цикла мы используем извлеченные значения name и age для создания строки с информацией о каждом пользователе.

// const users = [
//   { name: 'John', age: 30 },
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 35 },
// ];

// for (const { name, age } of users) {
//   console.log(`${name} is ${age} years old`);
// }

//! операция rest и spread
//* Операция Rest:
//* Операция rest используется для сбора всех оставшихся элементов массива или свойств объекта в одну переменную.

// const [first, second, ...rest] = [1, 2, 3, 4, 5];
// console.log(first); // 1
// console.log(second); // 2
// console.log(rest); // [3, 4, 5]

//* Операция Spread:
//* Операция spread используется для распаковки элементов массива или свойств объекта.
// const arr1 = [1, 2, 3];
// const arr2 = [...arr1, 4, 5, 6];
// console.log(arr2); // [1, 2, 3, 4, 5, 6]
