'use strict';

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
const g = 5;
const y = 3;
console.log(g + y);

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
