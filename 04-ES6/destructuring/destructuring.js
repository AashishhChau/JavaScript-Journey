// ==========================
// Object Destructuring
// ==========================

const user = {
    name: "Ram",
    age: 20,
    city: "Kathmandu"
};

const { name, age, city } = user;

console.log(name);
console.log(age);
console.log(city);

// ==========================
// Renaming Variables
// ==========================

const employee = {
    name: "Hari",
    salary: 50000,
    department: "IT"
};

const {
    name: employeeName,
    salary
} = employee;

console.log(employeeName);
console.log(salary);

// ==========================
// Default Values
// ==========================

const student = {
    name: "Sita"
};

const {
    name: studentName,
    age: studentAge = 20
} = student;

console.log(studentName);
console.log(studentAge);

// ==========================
// Nested Destructuring
// ==========================

const companyEmployee = {
    id: 101,
    personal: {
        name: "Hari",
        age: 25
    },
    company: {
        department: "IT",
        location: "Kathmandu"
    }
};

const {
    personal: { name: empName },
    company: { department }
} = companyEmployee;

console.log(empName);
console.log(department);

// ==========================
// Array Destructuring
// ==========================

const fruits = ["Apple", "Banana", "Mango"];

const [firstFruit, secondFruit] = fruits;

console.log(firstFruit);
console.log(secondFruit);

// ==========================
// Skipping Elements
// ==========================

const numbers = [10, 20, 30, 40];

const [firstNumber, , thirdNumber] = numbers;

console.log(firstNumber);
console.log(thirdNumber);

// ==========================
// Rest Operator
// ==========================

const colors = ["Red", "Green", "Blue", "Yellow", "Black"];

const [firstColor, ...remainingColors] = colors;

console.log(firstColor);
console.log(remainingColors);