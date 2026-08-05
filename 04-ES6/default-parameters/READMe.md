# JavaScript ES6 - Default Parameters

## What are Default Parameters?

Default parameters allow a function parameter to have a default value if no argument (or `undefined`) is provided.

They were introduced in ES6 to make function definitions cleaner and reduce the need for manual checks.

---

## Basic Syntax

```javascript
const greet = (name = "Guest") => {
    return `Hello ${name}`;
};

console.log(greet());
console.log(greet("Aashish"));
```

Output

```
Hello Guest
Hello Aashish
```

---

## Example

```javascript
const multiply = (a, b = 2) => {
    return a * b;
};

console.log(multiply(5));
console.log(multiply(5, 3));
```

Output

```
10
15
```

If the second argument is omitted, the default value is used.

---

## Default Parameters and `undefined`

```javascript
const greet = (name = "Guest") => {
    return `Hello ${name}`;
};

console.log(greet(undefined));
```

Output

```
Hello Guest
```

The default value is used because the argument is `undefined`.

---

## Default Parameters and `null`

```javascript
const greet = (name = "Guest") => {
    return `Hello ${name}`;
};

console.log(greet(null));
```

Output

```
Hello null
```

`null` is considered a real value, so the default value is **not** used.

---

## Important Rule

Default parameters are used only when:

- The argument is omitted.
- The argument is `undefined`.

They are **not** used for:

- `null`
- `0`
- `false`
- `""` (empty string)

---

## Advantages

- Cleaner code
- Less manual checking
- Easier to read
- Reduces boilerplate
- Commonly used in React and Node.js

---

## What I Learned

- Default parameter syntax
- When default values are used
- Difference between `undefined` and `null`
- Benefits of using default parameters