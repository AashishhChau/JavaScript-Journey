# Hoisting & Temporal Dead Zone (TDZ)

## What is Hoisting?

Hoisting is JavaScript's behavior of moving **declarations** to the top of their scope before the code is executed.

> **Important:** Only declarations are hoisted, not initializations.

---

## `var` Hoisting

Variables declared with `var` are hoisted and initialized with `undefined`.

### Example

```javascript
console.log(a);

var a = 10;
```

JavaScript interprets it as:

```javascript
var a;

console.log(a);

a = 10;
```

Output

```text
undefined
```

---

## `let` Hoisting

Variables declared with `let` are also hoisted, but they are **not initialized** immediately.

Accessing them before their declaration throws a `ReferenceError`.

### Example

```javascript
console.log(age);

let age = 25;
```

Output

```text
ReferenceError: Cannot access 'age' before initialization
```

---

## `const` Hoisting

`const` behaves like `let`.

It is hoisted but remains uninitialized until its declaration.

### Example

```javascript
console.log(country);

const country = "Nepal";
```

Output

```text
ReferenceError: Cannot access 'country' before initialization
```

---

# What is the Temporal Dead Zone (TDZ)?

The **Temporal Dead Zone (TDZ)** is the period between entering a scope and the point where a `let` or `const` variable is declared.

During this time, the variable exists but **cannot be accessed**.

### Example

```javascript
{
    console.log(score);

    let score = 100;
}
```

Output

```text
ReferenceError
```

After the declaration:

```javascript
{
    let score = 100;

    console.log(score);
}
```

Output

```text
100
```

---

# Function Declaration Hoisting

Function declarations are fully hoisted.

They can be called before they are declared.

### Example

```javascript
greet();

function greet() {
    console.log("Hello");
}
```

Output

```text
Hello
```

---

# Function Expression

Function expressions are **not** fully hoisted.

If assigned to `let` or `const`, they follow TDZ rules.

### Example

```javascript
sayHello();

const sayHello = function () {
    console.log("Hello");
};
```

Output

```text
ReferenceError
```

---

# Arrow Function

Arrow functions are also function expressions.

### Example

```javascript
sayHi();

const sayHi = () => {
    console.log("Hi");
};
```

Output

```text
ReferenceError
```

---

# When to Remember Hoisting

* Understanding interview questions
* Debugging variable initialization errors
* Reading legacy JavaScript code
* Understanding execution order

---

# Common Mistakes

### ❌ Thinking only `var` is hoisted

```javascript
console.log(age);

let age = 20;
```

`let` is also hoisted.

The difference is that it stays inside the **Temporal Dead Zone**.

---

### ❌ Believing JavaScript executes from top to bottom without preparation

Before execution, JavaScript creates memory for declarations.

Understanding this explains why hoisting happens.

---

### ❌ Confusing hoisting with initialization

```javascript
var age;

age = 25;
```

The declaration is hoisted.

The assignment is **not**.

---

# Interview Questions

1. What is hoisting?
2. Is `let` hoisted?
3. Is `const` hoisted?
4. What is the Temporal Dead Zone (TDZ)?
5. Why does `var` print `undefined` while `let` throws a `ReferenceError`?
6. Are function declarations hoisted?
7. Are function expressions hoisted?
8. Are arrow functions hoisted?
