// =========================
// 1. let - Reassignment
// =========================

let age = 25;

age = 26;

console.log(age);

// Output:
// 26

// =========================
// 2. const - Cannot Reassign
// =========================

const country = "Nepal";

console.log(country);

// Output:
// Nepal

// =========================
// 3. var - Redeclaration
// =========================

var city = "Kathmandu";

var city = "Pokhara";

console.log(city);

// Output:
// Pokhara

// =========================
// 4. const Array - Mutation
// =========================

const numbers = [1, 2];

numbers.push(3);

console.log(numbers);

// Output:
// [1, 2, 3]

// =========================
// 5. const Array - Reassignment
// =========================

const arr = [1, 2];

// arr = [...arr, 3];

// TypeError:
// Assignment to constant variable.

// =========================
// 6. Primitive Reassignment
// =========================

let score = 50;

score = 75;

console.log(score);

// Output:
// 75

// =========================
// 7. Declared but Not Assigned
// =========================

let value;

console.log(value);

// Output:
// undefined

// =========================
// 8. Declare → Assign → Reassign
// =========================

let marks;

marks = 10;

marks = 20;

console.log(marks);

// Output:
// 20