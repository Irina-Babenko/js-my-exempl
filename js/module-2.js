//! if
//* выполняет определенный блок только в том случае если заданы истинные параметры - true.

//?
let pRice = 0;
const subscription = 'pro';

if (subscription === 'pro') {
  pRice = 100;
}

console.log(pRice); // 100

//?
let prIce = 0;
const suBscription = 'free';

if (suBscription === 'pro') {
  prIce = 100;
}

console.log(prIce); //0

//?
function checkAge(age) {
  if (age >= 18) {
    return 'You are an adult';
  }
  return 'undefined';
}
console.log(checkAge(17));
/*
//! if...else
function checkStorage(available, ordered) {
  if (available >= ordered) {
    return 'Order is processed, our manager will contact you';
  } else 
  {
    return 'Not enough goods in stock!';
    }
}
*/
//! else...if          почему в приоритете ставить === 0 в позицию if?
function checkStorage(available, ordered) {
  if (ordered === 0) {
    return 'There are no products in the order!';
  } else if (available >= ordered) {
    return 'The order is accepted, our manager will contact you';
  } else if (ordered >= available) {
    return 'Your order is too large, there are not enough items in stock!';
  }
}

console.log(checkStorage(100, 50));
console.log(checkStorage(70, 0));
console.log(checkStorage(200, 250));

//! тернарный оператор
/*const a = 5;
const b = 10;
const biggerNumber = a > b ? a : b; 

console.log(biggerNumber); // 10 */

function checkPassword(password) {
  const correctPassword = 'jqueryismyjam';
  return password === correctPassword
    ? 'Access granted'
    : 'Access denied, wrong password!';
}

console.log(checkPassword('jqueryismyjam'));

//! switch
//! break

function getSubscriptionPrice(type) {
  switch (type) {
    case 'starter':
      return 0;
    case 'professional':
      return 20;
    case 'organization':
      return 50;
    default:
      return 'Invalid subscription type!';
  }
}

//! Преобразование типов: логическое
//! 6 случаев , которые приводятся к false :
/* 1. 0
2. ""
3. Nan
4. null
5. underfined
6.false */

//!
//?  оператор &&
const a = 20;
console.log(a > 10 && a < 30);

function isNumberInRange(start, end, number) {
  return number >= start && number <= end;
}

//? оператор || (или)
function checkAccess(subType) {
  return subType == 'pro' || subType == 'vip';
}

//!
//? оператор ( ! ) (нет)
function toggleModalVisibility(isVisible) {
  return !isVisible;
}

//! Методы строк  slice()

/*str.slice(startIndex, endIndex);

function getSubstring(string, length) {
  return string.slice(0, length);
} */

//! toLowerCase() - все символы приобразовываются в нижний регистр
//! toUpperCase() - все символы приобразовываются в верхний регистр
/*const brandName = 'samsung';
const userInput = 'saMsUng';
const lowercaseInput = userInput.toLowerCase();

function normalizeInput(input, to) {
  return to === 'upper' ? input.toUpperCase() : input.toLowerCase();
}

console.log(normalizeInput("This ISN'T SpaM", 'lower')); */

//! includes()
//* str. includes (substring)

function checkForName(fullName, firstName) {
  // Приводим строки к одному регистру перед сравнением
  const fullNameLower = fullName.toLowerCase();
  const firstNameLower = firstName.toLowerCase();

  // Проверяем вхождение имени в полное имя
  return fullNameLower.includes(firstNameLower);
}

// Примеры вызова функции
console.log(checkForName('John Doe', 'john')); // Выведет: true
console.log(checkForName('John Doe', 'Jane')); // Выведет: false

//! startsWith() и endsWith()

//! indexOf()

//! trim()
