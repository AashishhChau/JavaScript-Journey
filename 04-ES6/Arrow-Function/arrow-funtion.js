// ==========================
// Basic Arrow Function
// ==========================

const multiply = (a, b) => a * b;

console.log(multiply(5, 4));

// ==========================
// No Parameters
// ==========================

const sayHello = () => "Hello JavaScript";

console.log(sayHello());

// ==========================
// One Parameter
// ==========================

const square = (number) => number * number;

console.log(square(6));

// ==========================
// Explicit Return
// ==========================

const subtract = (a, b) => {
    return a - b;
};

console.log(subtract(10, 4));

// ==========================
// Returning Objects
// ==========================

const createProduct = (name, price) => ({
    name,
    price
});

console.log(createProduct("Laptop", 1200));