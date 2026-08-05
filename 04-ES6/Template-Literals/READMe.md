# JavaScript ES6 - Template Literals

## What are Template Literals?

Template literals are a modern way to create strings in JavaScript using **backticks (` `)** instead of single (`'`) or double (`"`) quotes.

They make string interpolation, multi-line strings, and embedding expressions much easier.

---

## Syntax

```javascript
const name = "Ram";

console.log(`Hello ${name}`);
```

Output

```
Hello Ram
```

---

## Variable Interpolation

```javascript
const student = "Aashish";
const course = "BSc Computing";
const age = 25;

console.log(`My name is ${student}. I study ${course} and I am ${age} years old.`);
```

Output

```
My name is Aashish. I study BSc Computing and I am 25 years old.
```

---

## Expressions

```javascript
const price = 1500;
const quantity = 3;

console.log(`Total Price: ${price * quantity}`);
```

Output

```
Total Price: 4500
```

JavaScript evaluates the expression first, then inserts the result into the string.

---

## Method Calls

```javascript
const firstName = "Aashish";
const lastName = "Chaudhary";

console.log(`Full Name: ${firstName.toUpperCase()} ${lastName.toUpperCase()}`);
```

Output

```
Full Name: AASHISH CHAUDHARY
```

Methods and function calls can also be used inside `${}`.

---

## Multi-line Strings

```javascript
const message = `Hello
Welcome to JavaScript`;

console.log(message);
```

Output

```
Hello
Welcome to JavaScript
```

No need for `\n`.

---

## Advantages

- Cleaner syntax
- Better readability
- Variable interpolation
- Supports expressions
- Supports function/method calls
- Supports multi-line strings
- Easier to maintain than string concatenation (`+`)

---

## What I Learned

- Backticks (` `)
- `${}` interpolation
- Embedding variables
- Embedding expressions
- Using methods inside template literals
- Multi-line strings
- Difference between template literals and string concatenation