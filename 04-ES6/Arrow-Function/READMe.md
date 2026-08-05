# JavaScript ES6 - Arrow Functions

## What are Arrow Functions?

Arrow functions provide a shorter and cleaner syntax for writing function expressions in JavaScript.

Introduced in ES6, they are widely used in modern JavaScript and React applications.

---

# Syntax

### Traditional Function

```javascript
function add(a, b) {
    return a + b;
}
```

### Arrow Function

```javascript
const add = (a, b) => {
    return a + b;
};
```

---

# Implicit Return

If the function returns only one expression, the `return` keyword and curly braces can be omitted.

```javascript
const multiply = (a, b) => a * b;

console.log(multiply(5, 4));
```

Output

```
20
```

---

# Explicit Return

Use curly braces and the `return` keyword when the function contains multiple statements.

```javascript
const subtract = (a, b) => {
    return a - b;
};

console.log(subtract(10, 4));
```

Output

```
6
```

---

# Parameters

### No Parameters

```javascript
const greet = () => "Hello";
```

### One Parameter

```javascript
const square = number => number * number;
```

or

```javascript
const square = (number) => number * number;
```

### Multiple Parameters

```javascript
const add = (a, b) => a + b;
```

---

# Returning Objects

### Explicit Return

```javascript
const createProduct = (name, price) => {
    return {
        name,
        price
    };
};
```

### Implicit Return

```javascript
const createProduct = (name, price) => ({
    name,
    price
});
```

Parentheses tell JavaScript to treat the braces as an object literal instead of a function body.

---

# Implicit vs Explicit Return

### Implicit Return

- Short
- Clean
- Best for a single expression

### Explicit Return

- Uses `return`
- Better for multiple statements
- Easier for complex logic

---

# Advantages

- Shorter syntax
- Easier to read
- Less boilerplate
- Commonly used in React
- Frequently used with array methods like `map()`, `filter()`, and `reduce()`

---

# What I Learned

- Arrow function syntax
- Zero, one, and multiple parameters
- Implicit return
- Explicit return
- Returning objects
- Object property shorthand
- Difference between implicit and explicit return