//! Массивы
// const array = ['hello world', null, true, 15];
// console.log(firstEl);

//!
// const firstEl = array[0];
// const lastIndx = array.lenght - 1;
// const lastEl = array[lastIdx];
// console.log(firstEl);
// console.log(lastEl);

//! Цикл for

// for (let i = 0; i < array.length; i += 1) {
//   const item = array[i];
//   console.log(item);
// }

//! Цикл for of
// for (const item of array) {
//   console.log(iten);
// }

//! Примитивы и значения
// let a = 1;

// let b = a;

// a += 1;

// console.log('a', a);
// console.log('b', b);

// const a = [1, 2, 3];
// const b = a;
// console.log(a === b);

//! Методы работы с массивами
//! push pop
// const a = [1, 2, 3];
// console.log(a.push(99, 4, 5, 6, 7, 8));
// console.log(a);
// a.pop();
// a.pop();
// console.log(a);

//! unshift shift

// const a = [1, 2, 3];
//a.unshift(4, 5, 6);
// console.log(a.unshift(0));
// console.log(a);

// console.log(a.shift());
// console.log(a);

//! slice
//const a = [1, 2, 3, 'hello'];
//a.slice(0, 2);
//console.log(a.slice(0, 2));

//console.log(a);

//! splice
// const a = [1, 2, 3, 'hello'];
// a.splice(2, 2, '&');
// console.log(a);

//! includes
//const a = [1, 2, 3, 'hello'];
//console.log(a.includes(2));

//! indexOF
// const a = [1, 2, 3, 'hello'];
// console.log(a.indexOf(2));

//! concat
// const a = [1, 2, 3, 'hello'];
// console.log(a.concat([4, 5], [6, 7]));

//! join () - массив в строку
// function getLength(array) {
//   return array.join('').length;
// }
//console.log(getLength(['Mango', 'hurries', 'to', 'the', 'train']));
// console.log(getLength(['M', 'a', 'n', 'g', 'o']));

//! split() - строку в массив
// function calculateEngravingPrice(message, pricePerWord) {
//   const words = message.split(' ');

// Получаем количество слов в массиве и умножаем на цену гравировки за слово
//   const totalPrice = words.length * pricePerWord;

// Возвращаем общую стоимость гравировки
//   return totalPrice;
// }
// console.log(calculateEngravingPrice('JavaScript is in my blood', 10));

//! //! //! //! //!
//! Task-1
//* напиши скрипт  який буде перероблювати масив та видаляти з нього всі єлементи, шо не є типом данних Number.

// const arr = [3, 'hello', null, 42, false];
// for (let i = arr.lenght - 1; i >= 0; i -= 1) {
//   if (typeof arr[i] !== 'number') {
//     arr.splice(i, 1);
//   }
// }
// console.log(arr);

// for (let i = arr.length - 1; i >= 0; i -= 1) {
//   console.log(arr[i] !== 'number');
//   {
//     arr.splice(i, 1);
//   }
// }

// console.log(arr);

//! Task-2
//* Потрібно створити функцію яка буде приймати 1 параметр
//* Функція повина відібрати з масиву тільки ті елементи що дублюються в ньому та повернути їх в вигляді нового масиву як результат виконання функції

// function getCommonElements(arr) {
//   const result = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr.includes(arr[i], i + 1)) {
//       result.push(arr[i]);
//     }
//   }

//   return result;
// }
// console.log(getCommonElements([1, 2, 3, 2, 1, 2, 17, 19]));

//! Task-3
//*Потрібно створити функцію яка буде приймати 2 параметри
//*1 параметр це масив всіх юзерів
//*2 параметр це масив з чоловічими іменами.
//*Функція повина відібрати з масиву всіх юзерів лише жіночі імена та повернути їх в результаті свого виканання.

// const users = [
//   'Artem',
//   'Anna',
//   'Larisa',
//   'Maksim',
//   'Svetlana',
//   'David',
//   'Roman',
//   'Olga',
// ];
// const men = ['Artem', 'Maksim', 'David', 'Roman'];

// function getWomen(users, men) {
//   const women = [];
//   for (const user of users) {
//     if (!men.includes(user)) {
//       women.push(user);
//     }
//   }

//   return women;
// }

// console.log(getWomen(users, men));

//! //! //!

// function calculateTotalPrice(order) {
//   let totalPrice = 0;

//   for (let i = 0; i < order.length; i++) {
//     totalPrice += order[i];
//   }

//   return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));

// function getEvenNumbers(start, end) {
//   let evenNumbers = [];

//   for (let i = start; i <= end; i++) {
//     if (i % 2 === 0) {
//       evenNumbers.push(i);
//     }
//   }

//   return evenNumbers;
// }

// console.log(getEvenNumbers(2, 5));

//! includes()

// function checkStorage(storage, item) {
//   const lowerCaseItem = item.toLowerCase();

//   for (const product of storage) {
//     if (product.toLowerCase() === lowerCaseItem) {
//       return `${item} is available to order!`;
//     }
//   }

//   return 'Sorry! We are out of stock!';
// }

// console.log(checkStorage(['apple', 'plum', 'pear'], 'orange'));

//! Типы функций
//! Function expression

// const foo = function (a, b) {};
// foo(10, 15);

//! Псевдомасивы

//*H/W

// function slugify(title) {
//   return title.toLowerCase().split(' ').join('-');
// }

// console.log(slugify('Arrays for begginers')); // "arrays-for-begginers"
// console.log(slugify('English for developer')); // "english-for-developer"
// console.log(slugify('Ten secrets of JavaScript')); // "ten-secrets-of-javascript"
// console.log(slugify('How to become a JUNIOR developer in TWO WEEKS')); // "how-to-become-a-junior-developer-in-two-weeks"

//*
// function makeArray(firstArray, secondArray, maxLength) {
//   const newArray = [...firstArray, ...secondArray];

//   if (newArray.length > maxLength) {
//     return newArray.slice(0, maxLength);
//   } else {
//     return newArray;
//   }
// }

// console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)); // [ "Mango" , "Poly" , "Ajax" ]
// console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4)); // [ "Mango" , "Poly" , "Houston" , " Ajax" ]
// console.log(makeArray(['Mango'], [' Ajax', 'Chelsea', 'Poly', 'Houston'], 3)); // [ "Mango" , "Ajax" , "Chelsea" ]
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2)); // [ "Earth" , "Jupiter" ]
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4)); // [ "Earth " , "Jupiter" , "Neptune" , "Uranus" ]
// console.log(
//   makeArray([' Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0),
// ); // []

//*
// function filterArray(numbers, value) {
//   const filteredArray = [];

//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > value) {
//       filteredArray.push(numbers[i]);
//     }
//   }

//   return filteredArray;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
