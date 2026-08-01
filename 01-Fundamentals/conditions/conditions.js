// =========================
// 1. if Statement
// =========================

const age = 20;

if (age >= 18) {
    console.log("Eligible to vote");
}

// Output:
// Eligible to vote

// =========================
// 2. if...else
// =========================

const number = 7;

if (number % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// Output:
// Odd

// =========================
// 3. if...else if...else
// =========================

const marks = 82;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 80) {
    console.log("Grade B");
} else if (marks >= 70) {
    console.log("Grade C");
} else {
    console.log("Fail");
}

// Output:
// Grade B

// =========================
// 4. switch Statement
// =========================

const day = 2;

switch (day) {
    case 1:
        console.log("Sunday");
        break;

    case 2:
        console.log("Monday");
        break;

    default:
        console.log("Invalid Day");
}

// Output:
// Monday

// =========================
// 5. Ternary Operator
// =========================

const age2 = 16;

const result = age2 >= 18 ? "Adult" : "Minor";

console.log(result);

// Output:
// Minor

// =========================
// 6. Truthy & Falsy
// =========================

if ("JavaScript") {
    console.log("Truthy");
}

if (0) {
    console.log("This won't execute");
}

// Output:
// Truthy

// =========================
// 7. Logical Operators in Conditions
// =========================

const hasLicense = true;
const driverAge = 22;

if (driverAge >= 18 && hasLicense) {
    console.log("Can Drive");
}

// Output:
// Can Drive