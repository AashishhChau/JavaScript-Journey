// ==========================
// Basic Class
// ==========================

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const student1 = new Student("Ram", 20);

console.log(student1);

// ==========================
// Class with Methods
// ==========================

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    showDetails() {
        console.log(`Product: ${this.name}, Price: ${this.price}`);
    }
}

const laptop = new Product("Dell", 65000);

laptop.showDetails();