//! function decloration

//! function expression

//! док коммент
//*вызов доп.коммент происходит через - /**
//* в фигурных скобках прописываем тип дпнных которые предпологаем получить

/**
 * Bue product, log message
 * @param {string} productName
 * @param {number} productQty
 * @param {number} price - price per one item
 * @return {string|number}
 */

//! arrow function - стрелочная функция

//* нельзя вызвать функцию перед её инициализацией

//* приимущество стрелочной функции в том, что её можно задавать как явной так и не явной

// const buyProduct = (productName, productQty, price) => {
//   console.log(
//     `You buy ${productQty} ${productName}'s, cost per item ${price}, total cost ${
//       productQty * price
//     }`,
//   );

//   return 'hello world';
// };

// buyProduct('apple', 10, 35);
//!
//* явное возвращение стрелочной функции

//* в теле функции должна быть указана команда ретерн

// const getTotalPrice = (qty, price) => {
//   return qty * price;
// };

// console.log(getTotalPrice(3, 150));

//!
//* неявное возвращение стрелочной функции

//* в неявном возвращении стрелочной функции мы можем приобразовывать типы данных (т.е. намбер приобразовать в стринг)

// const getTotalPrice = (qty, price) => (qty * price).toString();

// console.log(typeof getTotalPrice(3, 150));

//! callback function

//* это возможность предать ссылку на любую другую функцию при необходимости

// function add(a, b) {
//   return a + b;
// }
// console.log(add(5, 5)); //вызов функции
// console.log(add); // ссылка на функцию

//
// function logResult(a, b, callback) {
//   console.log(callback);
//   const result = callback(a, b);
//   console.log(`Resalt is ${result}`);
// }

// logResult(4, 5, add);
// logResult(4, 5, sum);

// function add(a, b) {
//   return a + b;
// }

// function sum(a, b) {
//   return a * b;
// }

//! инлайновая  callback function

// function logResult(a, b, callback) {
//   console.log(callback);
//   const result = callback(a, b);
//   console.log(`Resalt is ${result}`);
// }

// logResult(4, 5, (a, b) => a + b);
// logResult(4, 5, (a, b) => a * b);

//! forEach метод

//* есть возможность использовать только на масиивах

// const products = ['Apple', 'Banana', 'Orange', 'Mango', 'Watermellon'];

// products.forEach((product, idx, arr) => {
//   console.log('product', product);
//   console.log('idx', idx);
//   console.log('arr', arr);
// });

// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });

//   return totalPrice;
// };

// console.log(calculateTotalPrice([12, 85, 37, 4]));

//! ПРАКТИКА

//* task-1

//* Напишіть наступні функції:
//* createProduct(obj, callback) - приймає об'єкт товару без id, а також коллбек. Функція створює об'єкт товару,
//* додаючи йому унікальний ідентифікатор у властивість id та викликає коллбек передаючи йому створений об'єкт.
//* logProduct(product) - колббек що приймає об'єкт продукту і логуючий його в консоль
//* logTotalPrice(product) - колббек, що приймає об'єкт продукту і логіює загальну вартість товару в консоль

// function createProduct(obj, callback) {
//   const product = {
//     id: Date.now(),
//     ...obj,
//   };

//   callback(product);
// }

// function logProduct(product) {
//   console.log('Product', product);
// }

// function logTotalPrice({ price, quantity }) {
//   console.log(`Product total price ${price * quantity}`);
// }

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);

//* task-2

//* Напишіть функцію яка буде отримувати 2 параметри.
//* 1 - масив чисел.
//* 2 - функцію яка має опрацювати кожен елемент масиву.
//*
//* Функція повертає новий масив кожен елемент якого є результатом виконання колбек функції

// function each(arr, action) {
//   const items = [];

//   arr.forEach((elem) => {
//     const result = action(elem);
//     items.push(result);
//   });

//   return items;
// }

// console.log(each([64, 49, 36, 25, 16], (value) => value * 2));
// console.log(each([64, 49, 36, 25, 16], (value) => value - 10));
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], (value) => Math.ceil(value)));
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], (value) => Math.floor(value)));

//!

//! map

// const names = users.map((item, idx, arr) => {
//   return item.name;
// });

// console.log(names);

// const users = [
//   { id: 1, name: 'John', age: 28, skills: ['JavaScript', 'HTML', 'CSS'] },
//   { id: 2, name: 'Alice', age: 32, skills: ['Python', 'Data Analysis'] },
//   { id: 3, name: 'Bob', age: 24, skills: ['JavaScript', 'React', 'Node.js'] },
//   { id: 4, name: 'Emily', age: 40, skills: ['Java', 'Spring'] },
//   { id: 5, name: 'David', age: 22, skills: ['C++', 'C#'] },
// ];

//! flatMap

// const result = users.flatMap(({ skills }) => {
//   return skills;
// });
// console.log(result);

//! flat

// const numbers = [1, 2, 3, 4, [5, 6, [(7, 8)]]];
// const result = numbers.flat(2); // 2 означает уровень вложения

// console.log(result);

//! filter

// const users = [
//   { id: 1, name: 'John', age: 28, skills: ['JavaScript', 'HTML', 'CSS'] },
//   { id: 2, name: 'Alice', age: 32, skills: ['Python', 'Data Analysis'] },
//   { id: 3, name: 'Bob', age: 24, skills: ['JavaScript', 'React', 'Node.js'] },
//   { id: 4, name: 'Emily', age: 40, skills: ['Java', 'Spring'] },
//   { id: 5, name: 'David', age: 22, skills: ['C++', 'C#'] },
// ];

// const result = users.filter((user, idx, arr) => {});

// const result = arr.filter((skill, idx, array) => array.indexOf(skill) === idx); // уникальній массив без повторяющихся єлементов

//! finde

// const result = users.finde((user) => user.skills.includes('HTML'));
// console.log(result);

//! findeIndex

// const idx = users.findIndex((user) => user.id === 3);
// console.log(idx);

//! some
// const isKnow = users.some((user) => user.skills.includes('Python'));
// console.log(isKnow);

//! every

// const result = users.every((user) => user.age > 20 && user.age < 70);
// console.log(result);

//! sort

// const result = users.sort((a, b) => a.age - b.age);
// console.log(result);

//! reduce
// const result = users.reduce((acc, item) => {}, 0);
// acc += item.age;
// console.log(result);

//! ПРАКТИКА

//* Task-1
//* Напишіть функцію, яка використовує метод map, щоб створити новий масив об'єктів, в якому буде інформація про середній бал кожного студента.

// const students = [
//   { name: 'John', grades: [80, 85, 90] },
//   { name: 'Alice', grades: [90, 95, 92] },
//   { name: 'Bob', grades: [70, 80, 75] },
//   { name: 'Emily', grades: [95, 92, 88] },
//   { name: 'David', grades: [] },
// ];

// const studentsGrades = students.map((student) => student.grades);
// console.log(studentsGrades);

// function getAverage(arr) {
//   return arr.map(({ name, grades }) => {
//     const total = grades.reduce((acc, value) => acc + value, 0);
//     return {
//       name,
//       average: grades.length ? Math.round(total / grades.length) : total,
//     };
//   });
// }
// console.log(getAverage(students));

//* Task-2
//* Напишіть функцію, яка використовує метод filter, щоб створити новий масив, в якому будуть тільки студенти які старше 20 років

// const students = [
//   { name: 'John', age: 20, gpa: 3.8 },
//   { name: 'Alice', age: 21, gpa: 3.2 },
//   { name: 'Bob', age: 19, gpa: 3.5 },
//   { name: 'Emily', age: 22, gpa: 3.9 },
//   { name: 'David', age: 20, gpa: 3.7 },
// ];

// function getAdult(arr) {
//   return arr.filter(({ age }) => age > 20).map(({ name }) => name);
// }
// console.log(getAdult(students));

//* Task-3
//* Напишіть функцію, яка використовує метод find, щоб знайти книжку за її назвою (title).
//* Якщо книгу не знайдено повертається рядок 'Not found'.

// const books = [
//   {
//     title: 'JavaScript: The Good Parts',
//     author: 'Douglas Crockford',
//     year: 2008,
//   },
//   {
//     title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
//     author: 'Robert C. Martin',
//     year: 2008,
//   },
//   {
//     title: 'The Pragmatic Programmer: Your Journey to Mastery',
//     author: 'Andrew Hunt, David Thomas',
//     year: 1999,
//   },
//   {
//     title: 'Design Patterns: Elements of Reusable Object-Oriented Software',
//     author: 'Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides',
//     year: 1994,
//   },
//   {
//     title: 'Refactoring: Improving the Design of Existing Code',
//     author: 'Martin Fowler',
//     year: 1999,
//   },
// ];

// function getBook(arr, title) {
//   const book = arr.find(({ title: bookTitle }) => bookTitle === title);

//   return book || 'Not found';
// }

// console.log(
//   getBook(
//     books,
//     'Design Patterns: Elements of Reusable Object-Oriented Software',
//   ),
// );
