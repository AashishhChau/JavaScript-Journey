// =========================
// 1. Check for Adult
// =========================

const ages = [12, 15, 17, 20, 16];

const hasAdult = ages.some(age => age >= 18);

console.log(hasAdult);

// Output:
// true

// =========================
// 2. Check for Admin User
// =========================

const users = [
    { name: "Ram", isAdmin: false },
    { name: "Sita", isAdmin: false },
    { name: "Hari", isAdmin: true },
    { name: "Gita", isAdmin: false }
];

const hasAdmin = users.some(user => user.isAdmin);

console.log(hasAdmin);

// Output:
// true

// =========================
// 3. Check for Product Over $100
// =========================

const products = [
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 50 },
    { name: "Laptop", price: 1200 }
];

const expensiveProduct = products.some(product => product.price > 100);

console.log(expensiveProduct);

// Output:
// true

// =========================
// 4. No Matching Element
// =========================

const scores = [40, 50, 60, 70];

const hasPerfectScore = scores.some(score => score === 100);

console.log(hasPerfectScore);

// Output:
// false

// =========================
// 5. Check String Length
// =========================

const names = ["Ram", "Sita", "Hari"];

const hasLongName = names.some(name => name.length > 4);

console.log(hasLongName);

// Output:
// false

// =========================
// 6. Check for Empty String
// =========================

const values = ["JavaScript", "", "React"];

const hasEmptyString = values.some(value => value === "");

console.log(hasEmptyString);

// Output:
// true