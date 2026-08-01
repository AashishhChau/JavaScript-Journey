# Functions

## What is a Function?

A function is a reusable block of code that performs a specific task.

Instead of writing the same code multiple times, you can write it once inside a function and call it whenever needed.

---

## Function Declaration

A function declaration is hoisted, meaning it can be called before it is declared.

### Syntax

```javascript
function functionName(parameters) {
    // code
}
```

### Example

```javascript
function greet() {
    return "Hello";
}

console.log(greet());
```

Output

```text
Hello
```

---

## Function Expression

A function can also be stored inside a variable.

Unlike function declarations, function expressions are **not fully hoisted**.

### Example

```javascript
const greet = function () {
    return "Hello";
};

console.log(greet());
```

Output

```text
Hello
```

---

## Arrow Function

Arrow functions provide a shorter syntax for writing functions.

### Example

```javascript
const greet = () => {
    return "Hello";
};

console.log(greet());
```

### Short Syntax

If the function contains only one expression, `return` and braces can be omitted.

```javascript
const greet = () => "Hello";
```

---

# Parameters vs Arguments

## Parameter

A parameter is a variable declared in the function definition.

```javascript
function greet(name) {
    return `Hello ${name}`;
}
```

Here, `name` is the **parameter**.

---

## Argument

An argument is the actual value passed to the function when it is called.

```javascript
greet("Aashish");
```

Here, `"Aashish"` is the **argument**.

---

# return vs console.log()

## return

* Sends a value back to the caller.
* Allows the returned value to be stored or reused.
* Ends the function execution immediately.

### Example

```javascript
function multiply(a, b) {
    return a * b;
}

const answer = multiply(5, 4);

console.log(answer);
```

Output

```text
20
```

---

## console.log()

* Prints a value to the console.
* Does **not** return anything.
* A function without an explicit `return` returns `undefined`.

### Example

```javascript
function multiply(a, b) {
    console.log(a * b);
}

console.log(multiply(5, 4));
```

Output

```text
20
undefined
```

---

# Passing Primitive Values

Primitive values are passed by value.

Changing the parameter inside the function does not affect the original variable.

### Example

```javascript
function changeValue(x) {
    x = x + 5;
}

let num = 10;

changeValue(num);

console.log(num);
```

Output

```text
10
```

---

# Passing Objects

Objects are passed by sharing a reference to the same object.

Changing an object's property affects the original object.

### Example

```javascript
function changeUser(user) {
    user.name = "Ram";
}

const person = {
    name: "Aashish"
};

changeUser(person);

console.log(person.name);
```

Output

```text
Ram
```

---

# Reassigning an Object Parameter

Reassigning the parameter creates a new local reference.

The original object remains unchanged.

### Example

```javascript
function updateUser(user) {
    user = {
        name: "Hari"
    };
}

const person = {
    name: "Aashish"
};

updateUser(person);

console.log(person.name);
```

Output

```text
Aashish
```

---

# When to Use Functions

* Reuse code
* Improve readability
* Avoid duplication
* Organize application logic
* Break large problems into smaller pieces

---

# Common Mistakes

### ❌ Forgetting `return`

```javascript
function add(a, b) {
    a + b;
}
```

Output

```text
undefined
```

---

### ✅ Correct

```javascript
function add(a, b) {
    return a + b;
}
```

---

### ❌ Confusing Parameters and Arguments

```javascript
function greet(name) {}
```

`name` is the parameter.

```javascript
greet("Ram");
```

`"Ram"` is the argument.

---

### ❌ Expecting Primitive Values to Change

```javascript
function update(x) {
    x = 100;
}

let value = 10;

update(value);

console.log(value);
```

Output

```text
10
```

---

# Interview Questions

1. What is a function?
2. What is the difference between a function declaration and a function expression?
3. What is an arrow function?
4. What is the difference between parameters and arguments?
5. What is the difference between `return` and `console.log()`?
6. Why does a function return `undefined`?
7. How are primitive values passed to a function?
8. How are objects passed to a function?
9. Why does changing an object's property affect the original object?
10. Why doesn't reassigning an object parameter affect the original object?
