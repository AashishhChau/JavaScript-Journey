// =========================
// 1. Arithmetic Operators
// =========================

const a = 10;
const b = 3;

console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.333...
console.log(a % b);  // 1
console.log(a ** b); // 1000

// =========================
// 2. Assignment Operators
// =========================

let score = 10;

score += 5;
console.log(score); // 15

score -= 3;
console.log(score); // 12

score *= 2;
console.log(score); // 24

score /= 4;
console.log(score); // 6

// =========================
// 3. Comparison Operators
// =========================

console.log(5 > 3);     // true
console.log(5 < 3);     // false
console.log(5 >= 5);    // true
console.log(5 <= 4);    // false
console.log(5 === 5);   // true
console.log(5 !== 3);   // true

// =========================
// 4. Strict vs Loose Equality
// =========================

console.log(5 == "5");   // true
console.log(5 === "5");  // false

// =========================
// 5. Logical Operators
// =========================

const age = 20;
const hasLicense = true;

console.log(age >= 18 && hasLicense); // true
console.log(age >= 18 || false);      // true
console.log(!hasLicense);             // false

// =========================
// 6. Ternary Operator
// =========================

const result = age >= 18 ? "Adult" : "Minor";

console.log(result); // Adult

// =========================
// 7. Operator Precedence
// =========================

console.log(2 + 3 * 4);     // 14
console.log((2 + 3) * 4);   // 20