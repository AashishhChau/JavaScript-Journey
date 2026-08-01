# Data Types

## What are Data Types?

Data types define the kind of value a variable can store. JavaScript is a **dynamically typed language**, meaning you don't need to specify a data type when declaring a variable.

---

## Primitive Data Types

Primitive data types store a single value and are immutable.

| Data Type | Example                 |
| --------- | ----------------------- |
| String    | `"Aashish"`             |
| Number    | `25`, `3.14`            |
| Boolean   | `true`, `false`         |
| Undefined | `let x;`                |
| Null      | `null`                  |
| BigInt    | `12345678901234567890n` |
| Symbol    | `Symbol("id")`          |

### Example

```javascript
const name = "Aashish";
const age = 25;
const isStudent = true;
let city;
const score = null;
const bigNumber = 12345678901234567890n;
const id = Symbol("id");
```

---

## Reference Data Types

Reference types store references to objects in memory.

* Object
* Array
* Function

### Example

```javascript
const user = {
    name: "Aashish",
    age: 25
};

const numbers = [1, 2, 3];

function greet() {
    return "Hello";
}
```

---

## Checking Data Types

Use the `typeof` operator to check a variable's data type.

```javascript
console.log(typeof "Hello");      // string
console.log(typeof 25);           // number
console.log(typeof true);         // boolean
console.log(typeof undefined);    // undefined
console.log(typeof {});           // object
console.log(typeof []);           // object
console.log(typeof function(){}); // function
```

---

## Special Case: `null`

```javascript
console.log(typeof null);
```

Output

```text
object
```

This is a well-known historical bug in JavaScript.

---

## When to Use

* **String** → Text
* **Number** → Numeric values
* **Boolean** → True/False conditions
* **Object** → Store related data
* **Array** → Store collections of values
* **Function** → Reusable logic

---

## Common Mistakes

### ❌ Confusing `null` and `undefined`

```javascript
let a;
const b = null;
```

* `undefined` → Variable declared but not assigned.
* `null` → Intentional empty value.

---

### ❌ Expecting `typeof []` to return `"array"`

```javascript
typeof [];
```

Output

```text
object
```

Arrays are a special type of object.

---

## Interview Questions

1. What are JavaScript data types?
2. What is the difference between primitive and reference data types?
3. What is the difference between `null` and `undefined`?
4. Why does `typeof null` return `"object"`?
5. Why does `typeof []` return `"object"`?
6. How do you check a variable's data type?
