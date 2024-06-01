'use strict';

// const book = {
//   updateAuthor(newAuthor) {},
// };

// book.updateAuthor('Jacob');
// showThis();

// function greet(str) {
//   console.log(` ${str} , ${this.username} , your room is ${this.room} !`);
// }

// const mango = {
//   username: 'Mango',
//   room: 27,
// };

// const poly = {
//   username: 'Poly',
//   room: 191,
// };

// greet.call(mango, 'Welcome'); // "Welcome, Mango, your room is 27!"
// greet.call(poly, 'Aloha'); // "Aloha, Poly, your room is 191!"

// function greet(name) {
//   console.log(`Hello, ${name} ! I am ${this.person} `);
// }

// const person = 'John';
// const context = {
//   person: 'Alice',
// };

// greet.call(context, 'Bob');

//! ПРАКТИКА

//* task-1

// Напишіть функцію sayHi(), яка приймає в якості параметра масив імен,
// перебирає масив і додає до кожного ім'я привітання.
// Функція повертає новий масив  ["Ivan привіт!", "Maria привіт!", "Anna привіт!"]

//const names = ['Ivan', 'Maria', 'Anna'];

// const sayHi = (names) => {
//   return names.map((name) => `${name} Hi!`);
// };

// const names = ['Ivan', 'Maria', 'Anna'];
// const greetedNames = sayHi(names);

// console.log(greetedNames);

// //* task-2
// // Перевірити чи всі студенти старші 18 років.
// const students = [
//   { name: 'Alex', age: 20 },
//   { name: 'Stas', age: 17 },
//   { name: 'Mike', age: 22 },
//   { name: 'Den', age: 20 },
// ];

//* const ifadult = students.every((student) => student.age > 18);
// const ifadult = students.every(({ age }) => age > 18);

// console.log(ifadult);

//* task-3
// Напиши функцію, котра приймає масив користувачів і id.
// У масиві користувачів потрібно знайти людину з заданим id
// і повернути його ім'я.
//Якщо користувача не було знайдено
// функція повертає повідомлення
// "Користувача з таким id не знайдено"

// const users = [
//   { id: 1, name: 'John' },
//   { id: 2, name: 'Pete' },
//   { id: 3, name: 'Mary' },
// ];

// const getUserById = (users, id) => {
//   const user = users.find((user) => user.id === id);

//   // Проверить, найден ли пользователь
//   if (user) {
//     return user.name;
//   } else {
//     return 'Користувача з таким id не знайдено';
//   }
// };

// console.log(getUserById(users, 1));

//* task-4
// Зібрати в allTopics масив всіх предметів всіх курсів.
//Виконати фільтрацію, залишивши в allTopics тільки унікальні елементи.
// const courses = [
//   {
//     name: 'Basic HTML+CSS',
//     topics: ['VSCode', 'HTML', 'CSS', 'GitHub', 'GitHub Desctop'],
//   },
//   {
//     name: 'Intermediate HTML+CSS',
//     topics: ['VSCode', 'HTML', 'CSS', 'GitHub', 'Git', 'Terminal'],
//   },
//   {
//     name: 'Basic JavaScript',
//     topics: [
//       'VSCode',
//       'Type system',
//       'Loops',
//       'Function',
//       'Git',
//       'Conditions',
//       'Classes',
//       'GitHub',
//       'DOM',
//     ],
//   },
//   {
//     name: 'Intermediate JavaScript',
//     topics: [
//       'VSCode',
//       'NPM',
//       'Bundlers',
//       'Transpiling',
//       'Git',
//       'Promises',
//       'AJAX',
//       'GitHub',
//     ],
//   },
// ];

// let allTopics = courses.flatMap((course) => course.topics);
// allTopics = [...new Set(allTopics)];
// console.log(allTopics);

//* task-5

//Напишіть функцію getTotalBoysYears() яка порахує загальний вік хлопців.

// const friends = [
//   {
//     passport: '03005988',
//     name: 'Joseph Francis Tribbiani Jr',
//     age: 32,
//     sex: 'm',
//   },
//   { passport: '03005989', name: 'Chandler Muriel Bing', age: 33, sex: 'm' },
//   { passport: '03005990', name: 'Ross Eustace Geller', age: 33, sex: 'm' },
//   { passport: '03005991', name: 'Rachel Karen Green', age: 31, sex: 'f' },
//   { passport: '03005992', name: 'Monica Geller', age: 31, sex: 'f' },
//   { passport: '03005993', name: 'Phoebe Buffay', age: 34, sex: 'f' },
// ];

// function getTotalBoysYears(friends) {
//   return friends
//     .filter((friend) => friend.sex === 'm')
//     .reduce((total, boy) => total + boy.age, 0);
// }

// console.log(getTotalBoysYears(friends));

//* task-6
// Є об'єкт і функція для підрахунку суми чисел.
// Виведіть у консоль результат виконання функції, якщо a = 3, b = 5.

// const obj = { num: 2 };
// function add(a, b) {
//   return this.num + a + b;
// }

// const result = add.call(obj, 3, 5);
// console.log(result);

//* task-7
// Є два об'єкти, які описують деякі характеристики телефонів.
// Потрібно викликати метод showInfo, щоб він логував інформацію про кожний телефон,
// передаючи аргументом країну-виробник телефону.
// "HUAWEI" - "China", "SAMSUNG" - "South Korea".

// const tel = {
//   regNumber: 'AE8345FEDAS',
//   brand: 'HUAWEI',
//   showInfo(country) {
//     console.log(`${country} ${this.regNumber} ${this.brand}`);
//   },
// };
// const tel_2 = {
//   regNumber: 'AO8518FEGHT',
//   brand: 'SAMSUNG',
// };

// tel.showInfo('China');
// tel.showInfo.call(tel_2, 'South Korea');

//* task-8
//Напиши клас Rectangle який створює об'єкт
//з ​​властивостями height, width
//і методом calculateArea() для підрахунку прлощі прямокутника.

// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }

//   calculateArea() {
//     return this.height * this.width;
//   }
// }

// const rectangle_1 = new Rectangle(5, 7);
// console.log(rectangle_1.calculateArea());

//* task-9
// Створіть клас Car, який має конструктор для зберігання марки та
// року виробництва автомобіля.
// 1. Додайте метод, який обчислює вік автомобіля на основі поточного року
// та року виробництва і виведе в кнсоль рядок `Вік автомобіля: age років`
// 2. Додайте перевірку, якщо вік автомобіля більше ніж 5 років, виводимо
// повідомлення "Автомобіль потребує технічного обслуговування."
// в іншому випадку - "Автомобіль не потребує технічного обслуговування зараз."
// 3. Додайте перевірку, якщо рік виробництва перевищює поточний рік,
// вивести повідомлення "Помилка: Рік виробництва не може бути пізнішим за поточний рік."

// class Car {
//   constructor(brand, year) {
//     this.brand = brand;
//     this.yaer = year;
//   }

//   calculateAge(carentYear) {
//     if (this.yaer > carentYear) {
//       console.log(
//         'Помилка: Рік виробництва не може бути пізнішим за поточний рік.',
//       );
//       return;
//     }
//     const age = carentYear - this.yaer;
//     console.log(`Вік автомобіля: ${age} років`);
//     if (age > 5) {
//       console.log('Автомобіль потребує технічного обслуговування.');
//     } else {
//       console.log('Автомобіль не потребує технічного обслуговування.');
//     }
//   }
// }

// const car_1 = new Car('Audi', 2025);
// car_1.calculateAge(2024);

//* task-10
//Напиши клас Client який створює об'єкт
//з d​ластивостями login, email
//Оголоси приватні властивості #login #email,
//доступ до яких зроби через геттер та сеттер login email

// class Client {
//   #login;
//   #email;

//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }

//*    Getter for login
//   get login() {
//     return this.#login;
//   }

//*   Setter for login
//   set login(newLogin) {
//     this.#login = newLogin;
//   }

//*    Getter for email
//   get email() {
//     return this.#email;
//   }

//*   Setter for email
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const client = new Client('user123', 'user123@example.com');
// console.log(client.login);
