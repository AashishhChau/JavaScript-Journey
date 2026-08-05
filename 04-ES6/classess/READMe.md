# JavaScript ES6 - Classes

## What are Classes?

Classes were introduced in ES6 to create blueprints for objects.

Instead of creating multiple similar objects manually, a class allows us to create many objects using the same structure.

---

## Basic Syntax

```javascript
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
```

---

## Creating Objects

```javascript
const student1 = new Student("Ram", 20);
const student2 = new Student("Hari", 22);
```

Each object is called an **instance** of the class.

---

## Constructor

The constructor is a special method that runs automatically whenever a new object is created.

```javascript
constructor(name, age) {
    this.name = name;
    this.age = age;
}
```

---

## The `new` Keyword

The `new` keyword:

- Creates a new object
- Calls the constructor
- Assigns values
- Returns the new object

---

## `this` Keyword

`this` refers to the current object (instance) that calls the method.

Example:

```javascript
this.name
this.price
```

---

## Class Methods

```javascript
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    showDetails() {
        console.log(`Product: ${this.name}`);
    }
}
```

Methods define the behavior of objects.

---

## Example

```javascript
const laptop = new Product("Dell", 65000);

laptop.showDetails();
```

Output

```
Product: Dell
Price: 65000
```

---

## Real-life Analogy

Class → Blueprint

Object → House built from the blueprint

One class can create many objects.

---

## What I Learned

- Classes
- Constructor
- Object instances
- `new` keyword
- `this` keyword
- Class methods
- Blueprint vs Object concept