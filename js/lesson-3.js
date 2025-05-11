console.log('МОДУЛЬ 3');

console.log('Завдання 1:')

// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить 
// квадрати кожного елементу вхідного масиву. 
// Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [1, 2, 3, 4, 5]
//!  Через for
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    squaredNumbers.push(numbers[i] ** 2);
}

//! Через WHILE
//const numbers = [1, 2, 3, 4, 5];
//const squaredNumbers = [];
//let i = 0;

//while (i < numbers.length) {
//    squaredNumbers.push(numbers[i] ** 2);
//    i++;
//}


console.log(squaredNumbers);

console.log('Завдання 2:')

// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//  { id: 1, values: [1, 2, 3] },
//  { id: 2, values: [4, 5, 6] },
//  { id: 3, values: [7, 8, 9] },
// ];

const data = [
    { id: 1, values: [1, 2, 3] },
    { id: 2, values: [4, 5, 6] },
    { id: 3, values: [7, 8, 9] },
];

const allValues = data.flatMap(obj => obj.values);

console.log(allValues); 



console.log('Завдання 3:')

// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

const people = [
 { name: 'John', age: 27 },
 { name: 'Jane', age: 31 },
 { name: 'Bob', age: 19 },
];

//? через  for
let hasYoungPerson = false;

for (let i = 0; i < people.length; i++) {
    if (people[i].age < 20) {
        hasYoungPerson = true;
        break;
    }
}

//? через some 
//const hasYoungPerson = people.some(person => person.age < 20);

console.log(hasYoungPerson);


console.log('Завдання 4:')

// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

const number = [2, 4, 6, 8, 10];

//? filter()
//const allEven = number.filter(num => num % 2 === 0).length === number.length;

//? every()
const allEven = number.every(num => num % 2 === 0);


console.log(allEven);


console.log('Завдання 5:')

// Знайдіть перше непарне число

 //const numbers = [2, 1, 6, 8, 9, 10, 12];
const numbeR = [2, 1, 6, 8, 9, 10, 12];

//? find()
// firstOdd = numbeR.find(num => num % 2 !== 0);

//? filter()
const firstOdd = numbeR.filter(num => num % 2 !== 0)[0];


console.log(firstOdd);


console.log('Завдання 6:')

// Відсортуйте масив чисел [4, 2, 5, 1, 3] 
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];
const numbersArray = [4, 2, 5, 1, 3];
//? sort()
const sortedArraY = numbersArray.sort((a, b) => a - b);



console.log(sortedArraY);

console.log('Завдання 7:')

// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ['banana', 'orange', 'apple', 'pear'];
const stringArray = ['banana', 'orange', 'apple', 'pear'];
const sortedArray = stringArray.sort();

console.log(sortedArray);


console.log('Завдання 8:')

//  Відсортуйте масив об'єктів за віком у порядку зростання. 
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

//const users = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];
const users = [
    { name: 'John', age: 27 },
    { name: 'Jane', age: 31 },
    { name: 'Bob', age: 19 },
];

const sortedUsers = users.sort((a, b) => a.age - b.age);




console.log(sortedUsers);


console.log('Завдання 9:')

// Дано масив об'єктів. 
// Створіть новий масив, що містить тільки об'єкти, в яких 
// вік більше 20 років. 
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

//const user = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ]
const usersData = [
    { name: 'John', age: 27 },
    { name: 'Jane', age: 31 },
    { name: 'Bob', age: 19 },
];

const filteredUsers = users.filter(user => user.age > 20);

console.log(filteredUsers);





console.log('Завдання 10')

// Дано масив чисел [1, 2, 3, 4, 5]. 
// Застосуйте метод для обчислення суми елементів масиву.

 const numberTask = [1, 2, 3, 4, 5];
 let sum = 0;

 for (let i = 0; i < numberTask.length; i++) {
     sum += numberTask[i];
 }
 
 console.log(sum); 
 


console.log('Завдання 11')

 // Розроби клас Calculator, який дозволяє виконувати арифметичні 
 //  операції над числом за допомогою методів класу, підтримуючи  
 // ланцюжковий виклик (method chaining).
 //
 // Вимоги до класу Calculator
 // - Метод number(value)
 // Встановлює початкове значення для наступних обчислень.
 // Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод getResult, Повертає поточний результат усіх операцій.
 // Не змінює значення, просто повертає його.
 
 // - метод add - Додає value до поточного значення.
 // Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод substruct - Віднімає value від поточного значення. Повертає this.
 
// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод multiply -Множить поточне значення на value. Повертає this.
 
 // Об'єкт класу може проводити послідовні операції у вигляді ланцюжка
 
 // Приклад використання:
 // const calc = new Calculator();


// const result = calc
//   .number(10)   // Встановлюємо початкове значення 10
//   .add(5)       // Додаємо 5 (10 + 5 = 15)
//   .subtract(3)  // Віднімаємо 3 (15 - 3 = 12)
//   .multiply(4)  // Множимо на 4 (12 * 4 = 48)
//   .divide(2)    // Ділимо на 2 (48 / 2 = 24)
//   .getResult(); // Отримуємо результат: 24


//   console.log(result); // 24

class Calculator {
    constructor() {
        this.result = 0;
    }

    number(value) {
        this.result = value;
        return this;
    }

    getResult() {
        return this.result;
    }

    add(value) {
        this.result += value;
        return this;
    }

    subtract(value) {
        this.result -= value;
        return this;
    }

    multiply(value) {
        this.result *= value;
        return this;
    }

    divide(value) {
        if (value === 0) {
            throw new Error("Ділення на нуль неможливе!");
        }
        this.result /= value;
        return this;
    }
}

//!//
const calc = new Calculator();

const result = calc
    .number(10)   // Встановлюємо початкове значення 10
    .add(5)       // Додаємо 5 (10 + 5 = 15)
    .subtract(3)  // Віднімаємо 3 (15 - 3 = 12)
    .multiply(4)  // Множимо на 4 (12 * 4 = 48)
    .divide(2)    // Ділимо на 2 (48 / 2 = 24)
    .getResult(); // Отримуємо результат: 24

console.log(result); 

console.log('Завдання 12')
 // Напиши клас Client який створює об'єкт з властивостями login email.
 // Оголоси приватні властивості #login #email, доступ до яких зроби 
 // через геттер та сеттер login email
 class Client {
    #login;
    #email;

    constructor(login, email) {
        this.#login = login;
        this.#email = email;
    }

    get login() {
        return this.#login;
    }

    set login(newLogin) {
        this.#login = newLogin;
    }

    get email() {
        return this.#email;
    }

    set email(newEmail) {
        this.#email = newEmail;
    }
}

//!//
const client = new Client("BombordiloCrocodilo", "tralalelo@tralala.com");

console.log(client.login);
console.log(client.email); 
client.login = "BombordiloCrocodilo";
client.email = "tralalelo@tralala.com";

console.log(client.login); 
console.log(client.email);

console.log('Завдання 13')  //!Chat GPT
  //  Наслідування у класах!
  // Cтворіть клас `Person`, який містить наступні властивості:
  //  - `name` - ім'я людини;
  //  - `age`- вік людини;
  //  - `gender` - стать людини;
  //  - `email`- електронна пошта людини.
  
  // Крім того, клас `Person` має мати метод `getDetails()`,
  // який повертає об'єкт з ім'ям, віком, статтю 
  //та електронною поштою людини.
  
  // 
  // Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
  //  - salary - зарплата співробітника;
  //  - department - відділ, в якому працює співробітник.
  // Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з зарплатою співробітника та 
  // відділом, в якому він працює.
  class Person {
    constructor(name, age, gender, email) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.email = email;
    }

    getDetails() {
        return {
            name: this.name,
            age: this.age,
            gender: this.gender,
            email: this.email
        };
    }
}

class Employee extends Person {
    constructor(name, age, gender, email, salary, department) {
        super(name, age, gender, email); // Викликаємо конструктор батьківського класу
        this.salary = salary;
        this.department = department;
    }

    getEmployeeDetails() {
        return {
            ...this.getDetails(), // Використовуємо метод `getDetails()` з `Person`
            salary: this.salary,
            department: this.department
        };
    }
}

// Приклад використання:
const employee = new Employee("John Doe", 30, "Male", "john.doe@example.com", 5000, "IT");

console.log(employee.getDetails()); 
// { name: 'John Doe', age: 30, gender: 'Male', email: 'john.doe@example.com' }

console.log(employee.getEmployeeDetails()); 
// { name: 'John Doe', age: 30, gender: 'Male', email: 'john.doe@example.com', salary: 5000, department: 'IT' }