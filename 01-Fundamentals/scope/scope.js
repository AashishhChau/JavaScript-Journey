// =========================
// 1. Global Scope
// =========================

const country = "Nepal";

function showCountry() {
    console.log(country);
}

showCountry();

// Output:
// Nepal

// =========================
// 2. Function Scope
// =========================

function test() {
    var message = "Hello";
    console.log(message);
}

test();

// Output:
// Hello

// console.log(message);

// ReferenceError

// =========================
// 3. Block Scope
// =========================

if (true) {
    let age = 25;
    console.log(age);
}

// Output:
// 25

// console.log(age);

// ReferenceError

// =========================
// 4. var in a Loop
// =========================

for (var i = 0; i < 3; i++) {}

console.log(i);

// Output:
// 3

// =========================
// 5. let in a Loop
// =========================

for (let j = 0; j < 3; j++) {}

// console.log(j);

// ReferenceError

// =========================
// 6. Global Variable Inside Function
// =========================

let language = "JavaScript";

function printLanguage() {
    console.log(language);
}

printLanguage();

// Output:
// JavaScript

// =========================
// 7. Function Scope Example
// =========================

function greet() {
    var name = "Aashish";
    console.log(name);
}

greet();

// Output:
// Aashish

// console.log(name);

// ReferenceError