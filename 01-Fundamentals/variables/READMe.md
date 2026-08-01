# Variables

## What are Variables?

Variables are containers used to store data in JavaScript.

JavaScript provides three ways to declare variables:

* `var`
* `let`
* `const`

---

## `var`

### Features

* Function scoped
* Can be redeclared
* Can be reassigned
* Hoisted and initialized with `undefined`

### Example

```javascript
var age = 25;

age = 26;

var age = 30;

console.log(age);
```

Output

```javascript
30
```

---

## `let`

### Features

* Block scoped
* Cannot be redeclared in the same scope
* Can be reassigned
* Hoisted but not initialized (Temporal Dead Zone)

### Example

```javascript
let age = 25;

age = 26;

console.log(age);
```

Output

```javascript
26
```

---

## `const`

### Features

* Block scoped
* Cannot be redeclared
* Cannot be reassigned
* Must be initialized during declaration

### Example

```javascript
const country = "Nepal";

console.log(country);
```

---

## `const` with Objects & Arrays

`const` prevents reassignment, **not mutation**.

Objects and arrays can still be modified.

### Example

```javascript
const numbers = [1, 2];

numbers.push(3);

console.log(numbers);
```

Output

```javascript
[1, 2, 3]
```

---

## When to use

* Use `const` by default.
* Use `let` only when reassignment is needed.
* Avoid `var` in modern JavaScript unless working with legacy code.

---

## Common Mistakes

### ❌ Reassigning a `const`

```javascript
const numbers = [1, 2];

numbers = [1, 2, 3];
```

Error

```javascript
TypeError: Assignment to constant variable.
```

---

### ❌ Thinking `const` arrays are immutable

```javascript
const numbers = [1, 2];

numbers.push(3);
```

This is **valid** because the array itself is not reassigned.

---

### ❌ Using `var` instead of `let` or `const`

```javascript
var age = 25;
```

Prefer

```javascript
const age = 25;
```

or

```javascript
let age = 25;
```
