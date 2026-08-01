// =========================
// 1. String
// =========================

const name = "Aashish";

console.log(name);
console.log(typeof name);

// Output:
// Aashish
// string

// =========================
// 2. Number
// =========================

const age = 25;

console.log(age);
console.log(typeof age);

// Output:
// 25
// number

// =========================
// 3. Boolean
// =========================

const isStudent = true;

console.log(isStudent);
console.log(typeof isStudent);

// Output:
// true
// boolean

// =========================
// 4. Undefined
// =========================

let city;

console.log(city);
console.log(typeof city);

// Output:
// undefined
// undefined

// =========================
// 5. Null
// =========================

const score = null;

console.log(score);
console.log(typeof score);

// Output:
// null
// object

// =========================
// 6. BigInt
// =========================

const bigNumber = 12345678901234567890n;

console.log(bigNumber);
console.log(typeof bigNumber);

// Output:
// bigint

// =========================
// 7. Symbol
// =========================

const id = Symbol("id");

console.log(id);
console.log(typeof id);

// Output:
// symbol

// =========================
// 8. Object
// =========================

const user = {
    name: "Aashish",
    age: 25
};

console.log(user);
console.log(typeof user);

// Output:
// object

// =========================
// 9. Array
// =========================

const numbers = [1, 2, 3];

console.log(numbers);
console.log(typeof numbers);

// Output:
// [1, 2, 3]
// object

// =========================
// 10. Function
// =========================

function greet() {
    return "Hello";
}

console.log(greet());
console.log(typeof greet);

// Output:
// Hello
// function