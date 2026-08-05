// ==========================
// Copying Arrays
// ==========================

const fruits = ["Apple", "Banana", "Mango"];

const copiedFruits = [...fruits];

console.log(copiedFruits);

// ==========================
// Merging Arrays
// ==========================

const frontend = ["HTML", "CSS"];
const javascript = ["JavaScript"];
const backend = ["Node.js", "Express"];

const mernRoadmap = [
    ...frontend,
    ...javascript,
    ...backend
];

console.log(mernRoadmap);

// ==========================
// Copying Objects
// ==========================

const user = {
    name: "Ram",
    age: 20
};

const copiedUser = {
    ...user
};

console.log(copiedUser);

// ==========================
// Updating Objects
// ==========================

const product = {
    name: "Laptop",
    price: 1200,
    stock: 10
};

const updatedProduct = {
    ...product,
    stock: 15,
    category: "Electronics"
};

console.log(updatedProduct);

// ==========================
// Merging Objects
// ==========================

const basicInfo = {
    name: "Ram",
    age: 22
};

const contactInfo = {
    email: "ram@gmail.com",
    phone: "9800000000"
};

const addressInfo = {
    city: "Kathmandu",
    country: "Nepal"
};

const userProfile = {
    ...basicInfo,
    ...contactInfo,
    ...addressInfo
};

console.log(userProfile);