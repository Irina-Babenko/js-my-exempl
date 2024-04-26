//!

//*Компиляция — программа, переводящая написанный на языке программирования текст в набор машинных кодов.
//*Интерполяция - это способ соединения строк через вставку значений переменных в строку-шаблон с помощью знака $ и {}.

//! кавычки

//* (``) косые (шаблонные) - интерполяция(преобразование), вызова функции, любой операции
//* ('') одинарные - текст, текст шаблона в который помещен текст
//* ("") парные - текст, текст внутри текста

//! литерал

//*числовой литерал - это число, записанное в коде программы. // 10
//*строчный литерал - это последовательность символов, заключенных в кавычки. //"JavaScript is awesome!"

//? 'use strict' - // код в строгом режиме

//! вывод данных

//? ex.:
console.log('JavaScript is awesome!'); // JavaScript is awesome!

//! переменная

//* переменная - это контейнер
//* тип данных - то что хранится в контейнере
//* const - ключевое слово для оглашения переменной, значение которой не меняется
//* let - ключевое слово для оглашения переменной, ограниченная область видимости, значение меняется

//? ex.:
const age = 20;
console.log(age); //20

//? ex.: переопределение переменной
let x = 5;
x = 10;
console.log(x); //10

//? ex.: переопределение переменной
let username = 'Mango';
username = 'Poly';
console.log(username);

////! типы данных (8)

//! NUMBER
//* числовой тип данных представляет собой значение в виде целых чисел или чисел с плаввющей запятой.

//? ex.:
let userAge = 20;
let userHeight = 1.83;
console.log(userAge);
console.log(typeof userAge);
console.log(userHeight);
console.log(typeof userHeight);

//* infinity - математическа бесконечная, получается в результате деления на ноль, также может быть с отрицательным значением.
let getInfinity = 16 / 0;
console.log(getInfinity);

let gInfinity = -58 / 0;
console.log(gInfinity);

//* NaN
//если в математическом выражении есть NaN то результатом вычеслений с его участием будет  NaN.
let getNan = 'text' / 10;
console.log(getNan);

let exempNan = 'text' / 10 + 5;
console.log(exempNan);

//! BigInt
//* очень большое математическое значение
const bigInteger = 123456789123456789123456789n;
console.log(bigInteger);

//! STRING
//* тип данных - строка, всегда заключен в ковчки '' или "" или `` если содержит мат.операцию
let userSize = 30;
let userSizeInfo = `Возраст: ${userSize}`;
console.log(userSizeInfo);
console.log(typeof userSizeInfo);

//! BOOLEAN
//* логический тип данных, имеет два значения: true и false.
//* true = 1
//* false = 0
let trueOrFalse = 8 > 5;
console.log(trueOrFalse); //true

//! SUMBOL
//* символ - уникальный, не поддающийся подделке индитификатор
/* let id = Sumbol('id');
console.log(typeof id); */ //Sumbol

//! UNDERFINED
//* примитивное значение, автоматически присваивается переменным которые были только обьявлены без установленых значений
let nameUser;
console.log(typeof nameUser); //undefined

//! NULL
//* это значение, специально обозначенное как примитив, так как по поведению это в самом деле видимый примитив. Но при этом от null унаследованы все остальные Объекты, его тип это объект
typeof null === 'object';

let value = null;
console.log(value); // null

//?
// const mAssege = prompt("Введить ім'я");
// console.log(mAssege);

//! OBJECT
//* относится к структуре данных, содержит в себе данные и инструкции по работе с ними, могут обозначать реальные вещи, например: машину, яблоко, человека
let userInfo = {
  name: 'Max',
  age: 30,
};
console.log(userInfo);
console.log(typeof userInfo); //object

//! oператор typeof
//* используется для определения типа данных значения или выражения
//* примері с typeof указані выше

//! арифметические операции
//* (+)
const d = 5;
const n = 3;
console.log(d + n);

//* (-)
const w = 5;
const v = 3;
console.log(w - v);

//* (*)
const i = 5;
const r = 3;
console.log(i * r);

//* (/)
const q = 5;
const s = 3;
console.log(q / s);

//* (**) возводим в степень
const z = 8;
const f = 5;
console.log(z ** f);

//* (%) остаток от деления
const u = 8;
const p = 5;
console.log(u % p);

//! оператор инверсии "!" = "не", т.е. console.log(!false); // "true"

//! конкатенация строк
//* к строке и любому другому типу данных, результатом будет новая строка, содержащая объединение исходных значений

console.log('Mango' + 55); // "Mango55"

console.log(1 + '2' + 4); // "124"

console.log(1 + 2 + '4'); // "34"

const userName = 'Poly';
const message = 'Welcome Poly!';
console.log('Welcome ' + userName + '!');

//! преобразование типов: строки
//! явное
console.log(String(false)); // "false"
console.log(String(null)); // "null"
console.log(String(undefined)); // "undefined"

//! не явное
console.log('5' + false); // "5false"
console.log('5' + null); // "5null"
console.log('5' + undefined); // "5undefined"

//! шаблонные строки

//? ex.:
const guestName = 'Mango';
const roomNumber = 207;
const greeting = `Welcome ${guestName} , ваш номер номера является ${roomNumber} !`;
console.log(greeting); // "Welcome Mango, ваш номер номер 207!"

//? ex.:
const productName = 'Droid';
const pricePerItem = 3500;
const meSsage = `You picked ${productName}, price per item is ${pricePerItem} credits`;
console.log(meSsage);

//? ex.:
const pricePerDroid = 800;
const orderedQuantity = 6;
const deliveryFee = 50;
const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
const mesSage = `You ordered droids worth ${totalPrice} credits`;
console.log(mesSage);

//! длина строчки
//! length
const proDuctName = 'Repair droid';
console.log(proDuctName.length); // 12
console.log('Repair droid'.length); // 12

//! индексация строк
//! string[index]
//* индексация элементов строки начинается с нуля. Первый символ имеет индекс 0, второй-индекс 1, третий-2 и так далее.
const product = 'Repair droid';
console.log(product[11]); // 'd'

//* последний єлемент строки
const lastElementIndex = product.length - 1;
console.log(product[lastElementIndex]); // 'd'

//* последний єлемент строки без промежуточной переменной
console.log(product[product.length - 1]); // 'd'

//! дробное число
//! toFixed()
//* округления результата до определенного числа знаков после точки
/* console.log(( 0 . 1 + 0 . 2 ).toFixed( 1 )); // "0.3" */

//! ФУНКЦИЯ function
// Объявление функции multiply
function doStuff() {
  // Тело функции
  console.log('Log inside multiply function');
}
// Вызовы функции multiply = имя +()
doStuff(); // 'Log inside multiply function'

//? ex.:
function sayHi() {
  console.log('Hello, this is my first function!');
}
sayHi();

//! параметры и аргументы
// Объявление параметров x, y, z
function multiply(x, y, z) {
  console.log(`Result: ${x * y * z}`);
}

// Передача аргументов
multiply(2, 3, 5); // "Result: 30"
multiply(4, 8, 12); // "Result: 384"

//? ex.:
function add(a, b, c) {
  /*const result = a + b + c;*/
  console.log(`Addition result equals ${a + b + c}`);
}
add(15, 27, 10);

//! возврата значения
//! return
//?
function muLtiply(x, y, z) {
  const product = x * y * z;
  // Возвращаем результат выражения умножения
  return product;
}

//?
function multiply(x, y, z) {
  return x * y * z;
}
const result = multiply(2, 3, 5);
console.log(result); // 30

//?               не поняла єтот пример
function makeMessage(username) {
  console.log(`Hello ${username} `);
  /* return `Hello ${username} `; */
}
makeMessage('Jacob'); // в консоле будет "Hello Jacob" но єто не значение результата работы функции // значение которое возвращается будет  undefined

//?
function add(a, b, c) {
  return a + b + c;
}
add(15, 27, 10); //

//! область видимости функции
//* Глобальная переменная
/*const value = "I'm a global variable";

function foo() {
  //* Можно обратиться к глобальной переменной
  console.log(value); // "I'm a global variable"
} */

/*foo();
//* Можно обратиться к глобальной переменной
console.log(value);
// "I'm a global variable"

function foo() {
  // Локальная переменная
  const value = "I'm a local variable";
  // Можно обратиться к локальной переменной
  console.log(value); // "I'm a local variable"
} */

//* локальная область видимости
/*foo();
console.log(value); // ReferenceError: value is not defined
// Ошибка: локальная переменная не видна за пределами
функции;
*/

//? exempel lesson - 1
//! parsInt
const str = '257.a32px';
console.log(Number.parseInt(str)); //257
