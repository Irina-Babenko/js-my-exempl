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
//* напиши скрипт  який буде перероблювати масив та видаляти з нього всі єлементи, шо не є типом данних Number.

const arr = [3, 'hello', null, 42, false];
for (let i = arr.lenght - 1; i >= 0; i -= 1) {
  if (typeof arr[i] !== 'number') {
    arr.splice(i, 1);
  }
}
console.log(arr);
