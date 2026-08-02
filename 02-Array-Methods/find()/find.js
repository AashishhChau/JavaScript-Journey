// =========================
// 1. Find First Number Greater Than 10
// =========================

const numbers = [3, 8, 12, 15, 20];

const greaterThanTen = numbers.find(number => number > 10);

console.log(greaterThanTen);

// Output:
// 12

// =========================
// 2. Find User by ID
// =========================

const users = [
    { id: 1, name: "Ram" },
    { id: 2, name: "Sita" },
    { id: 3, name: "Hari" }
];

const user = users.find(user => user.id === 2);

console.log(user);

// Output:
// { id: 2, name: "Sita" }

// =========================
// 3. Find First Student
// =========================

const people = [
    { id: 1, name: "Ram", role: "admin" },
    { id: 2, name: "Sita", role: "student" },
    { id: 3, name: "Hari", role: "student" },
    { id: 4, name: "Gita", role: "teacher" }
];

const firstStudent = people.find(person => person.role === "student");

console.log(firstStudent);

// Output:
// { id: 2, name: "Sita", role: "student" }

// =========================
// 4. Product Search
// =========================

const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Mouse", price: 25 },
    { id: 3, name: "Keyboard", price: 50 }
];

const product = products.find(product => product.id === 3);

console.log(product);

// Output:
// { id: 3, name: "Keyboard", price: 50 }

// =========================
// 5. No Matching Element
// =========================

const employee = users.find(user => user.id === 5);

console.log(employee);

// Output:
// undefined

// =========================
// 6. Safe Property Access
// =========================

if (employee) {
    console.log(employee.name);
} else {
    console.log("Employee not found");
}

// Output:
// Employee not found