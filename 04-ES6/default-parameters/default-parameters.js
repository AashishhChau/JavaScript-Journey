// ==========================
// Basic Example
// ==========================

const greet = (name = "Guest") => {
    return `Hello ${name}`;
};

console.log(greet());
console.log(greet("Aashish"));

// ==========================
// Multiply Example
// ==========================

const multiply = (a, b = 2) => {
    return a * b;
};

console.log(multiply(5));
console.log(multiply(5, 3));
console.log(multiply(8));
console.log(multiply(8, 10));

// ==========================
// undefined vs null
// ==========================

console.log(greet(undefined));
console.log(greet(null));