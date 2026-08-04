// =========================
// Create Object
// =========================

const book = {
    title: "JavaScript Basics",
    author: "John Doe",
    pages: 350,
    available: true
};

console.log(book.title);
console.log(book.author);
console.log(book.pages);
console.log(book.available);

// =========================
// Update Object
// =========================

const student = {
    name: "Ram",
    age: 20,
    course: "BSc Computing"
};

student.age = 21;
student.course = "MERN Stack";

console.log(student);

// =========================
// Add Property
// =========================

student.city = "Kathmandu";

console.log(student);

// =========================
// Bracket Notation
// =========================

const property = "age";

console.log(student[property]);

// =========================
// Delete Property
// =========================

const product = {
    name: "Laptop",
    price: 1200,
    stock: 15,
    brand: "Dell"
};

delete product.stock;

console.log(product);

// =========================
// Property Exists
// =========================

console.log("price" in product);
console.log("stock" in product);

// =========================
// Object.keys()
// =========================

const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2023,
    color: "White"
};

console.log(Object.keys(car));
console.log(Object.keys(car).length);

// =========================
// Object.values()
// =========================

const laptop = {
    brand: "Dell",
    model: "Inspiron",
    ram: "8GB",
    price: 65000
};

console.log(Object.values(laptop));
console.log(Object.values(laptop).length);

// =========================
// Object.entries()
// =========================

const phone = {
    brand: "Samsung",
    model: "S24",
    color: "Black",
    price: 95000
};

console.log(Object.entries(phone));
console.log(Object.entries(phone).length);