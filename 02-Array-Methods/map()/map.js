// =========================
// 1. Multiply Numbers
// =========================

const numbers = [2, 4, 6, 8];

const tripledNumbers = numbers.map(num => num * 3);

console.log(tripledNumbers);

// =========================
// 2. Uppercase Names
// =========================

const names = ["ram", "sita", "hari"];

const upperCaseNames = names.map(name => name.toUpperCase());

console.log(upperCaseNames);

// =========================
// 3. Add 13% VAT
// =========================

const prices = [100, 250, 400, 550];

const pricesWithVAT = prices.map(price => price * 1.13);

console.log(pricesWithVAT);

// =========================
// 4. Extract Student Names
// =========================

const students = [
    { name: "Ram", marks: 70 },
    { name: "Sita", marks: 85 },
    { name: "Hari", marks: 60 }
];

const studentNames = students.map(student => student.name);

console.log(studentNames);

// =========================
// 5. Apply 10% Discount
// =========================

const products = [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 20 },
    { name: "Keyboard", price: 50 }
];

const discountedProducts = products.map(product => ({
    name: product.name,
    price: product.price * 0.9
}));

console.log(discountedProducts);