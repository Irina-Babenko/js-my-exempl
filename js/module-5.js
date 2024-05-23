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
