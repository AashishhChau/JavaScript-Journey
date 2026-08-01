// =========================
// 1. Function Declaration
// =========================

function greet(name) {
    return `Hello ${name}`;
}

console.log(greet("Aashish"));

// Output:
// Hello Aashish

// =========================
// 2. Function Expression
// =========================

const add = function (a, b) {
    return a + b;
};

console.log(add(5, 10));

// Output:
// 15

// =========================
// 3. Arrow Function
// =========================

const multiply = (a, b) => a * b;

console.log(multiply(5, 6));

// Output:
// 30

// =========================
// 4. Even or Odd
// =========================

function evenOdd(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}

console.log(evenOdd(5));

// Output:
// Odd

// =========================
// 5. Can Vote
// =========================

function canVote(age) {
    return age >= 18;
}

console.log(canVote(20));

// Output:
// true

// =========================
// 6. Positive Number
// =========================

function isPositive(num) {
    return num > 0;
}

console.log(isPositive(7));
console.log(isPositive(-2));

// Output:
// true
// false

// =========================
// 7. Primitive Example
// =========================

function changeValue(x) {
    x = x + 5;
    return x;
}

let num = 10;

console.log(changeValue(num));
console.log(num);

// Output:
// 15
// 10

// =========================
// 8. Object Example
// =========================

function changeUser(user) {
    user.name = "Ram";
}

const person = {
    name: "Aashish"
};

changeUser(person);

console.log(person.name);

// Output:
// Ram

// =========================
// 9. Object Reassignment
// =========================

function updateArray(arr) {
    arr.push(4);

    arr = [100, 200];

    arr.push(300);
}

const numbers = [1, 2, 3];

updateArray(numbers);

console.log(numbers);

// Output:
// [1, 2, 3, 4]