# Scope

## What is Scope?

Scope determines **where a variable can be accessed** in a JavaScript program.

A variable is only available within the scope in which it is declared.

JavaScript has three main types of scope:

* Global Scope
* Function Scope
* Block Scope

---

## Global Scope

A variable declared outside any function or block is in the global scope.

It can be accessed from anywhere in the program.

### Example

```javascript
const country = "Nepal";

function showCountry() {
    console.log(country);
}

showCountry();
```

Output

```javascript
Nepal
```

---

## Function Scope

Variables declared with `var` inside a function can only be accessed within that function.

### Example

```javascript
function test() {
    var message = "Hello";
    console.log(message);
}

test();
```

Output

```javascript
Hello
```

Trying to access it outside the function:

```javascript
function test() {
    var message = "Hello";
}

console.log(message);
```

Output

```javascript
ReferenceError
```

---

## Block Scope

Variables declared with `let` and `const` only exist inside the block (`{}`) where they are declared.

### Example

```javascript
if (true) {
    let age = 25;
    console.log(age);
}
```

Output

```javascript
25
```

Trying to access it outside the block:

```javascript
if (true) {
    let age = 25;
}

console.log(age);
```

Output

```javascript
ReferenceError
```

---

## When to use

* Use `const` whenever the value does not change.
* Use `let` when reassignment is required.
* Keep variables inside the smallest possible scope.
* Avoid creating unnecessary global variables.

---

## Common Mistakes

### ❌ Accessing a block scoped variable outside its block

```javascript
if (true) {
    let name = "Aashish";
}

console.log(name);
```

Output

```javascript
ReferenceError
```

---

### ❌ Assuming `var` is block scoped

```javascript
for (var i = 0; i < 3; i++) {}

console.log(i);
```

Output

```javascript
3
```

Because `var` is **function scoped**, not block scoped.

---

### ❌ Accessing a function variable outside the function

```javascript
function demo() {
    var age = 25;
}

console.log(age);
```

Output

```javascript
ReferenceError
```

---

## Interview Questions

1. What is scope in JavaScript?
2. What is the difference between global, function, and block scope?
3. Why is `let` block scoped but `var` is not?
4. Why does `console.log(i)` work after a `for` loop with `var` but not with `let`?
5. Why should global variables be avoided?
