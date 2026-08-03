// =========================
// 1. Check if All Scores Passed
// =========================

const scores = [80, 90, 75, 88];

const allPassed = scores.every(score => score >= 70);

console.log(allPassed);

// Output:
// true

// =========================
// 2. Check if All Users Are Verified
// =========================

const users = [
    { name: "Ram", verified: true },
    { name: "Sita", verified: true },
    { name: "Hari", verified: false },
    { name: "Gita", verified: true }
];

const allVerified = users.every(user => user.verified);

console.log(allVerified);

// Output:
// false

// =========================
// 3. Check if Every Product Is In Stock
// =========================

const products = [
    { name: "Laptop", inStock: true },
    { name: "Mouse", inStock: true },
    { name: "Keyboard", inStock: true }
];

const allInStock = products.every(product => product.inStock);

console.log(allInStock);

// Output:
// true

// =========================
// 4. Check if All Emails Are Verified
// =========================

const accounts = [
    { emailVerified: true },
    { emailVerified: true },
    { emailVerified: false }
];

const emailsVerified = accounts.every(account => account.emailVerified);

console.log(emailsVerified);

// Output:
// false

// =========================
// 5. Check if All Prices Are Positive
// =========================

const prices = [100, 250, 80, 60];

const positivePrices = prices.every(price => price > 0);

console.log(positivePrices);

// Output:
// true

// =========================
// 6. Check if Every String Is Non-Empty
// =========================

const names = ["Ram", "Sita", "Hari"];

const hasNames = names.every(name => name.length > 0);

console.log(hasNames);

// Output:
// true