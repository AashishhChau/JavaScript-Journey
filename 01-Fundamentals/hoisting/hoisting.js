// =========================
// 1. var Hoisting
// =========================

console.log(a);

var a = 10;

// Output:
// undefined

// =========================
// 2. let Hoisting
// =========================

// console.log(age);

let age = 25;

// ReferenceError

// =========================
// 3. const Hoisting
// =========================

// console.log(country);

const country = "Nepal";

// ReferenceError

// =========================
// 4. Temporal Dead Zone
// =========================

// console.log(score);

let score = 100;

// ReferenceError

console.log(score);

// Output:
// 100

// =========================
// 5. Function Declaration
// =========================

greet();

function greet() {
    console.log("Hello");
}

// Output:
// Hello

// =========================
// 6. Function Expression
// =========================

// sayHello();

const sayHello = function () {
    console.log("Hello");
};

// ReferenceError

// =========================
// 7. Arrow Function
// =========================

// sayHi();

const sayHi = () => {
    console.log("Hi");
};

// ReferenceError