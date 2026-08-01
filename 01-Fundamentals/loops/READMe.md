# Loops

## What are Loops?

Loops allow you to execute a block of code repeatedly until a specified condition is met.

Instead of writing the same code multiple times, loops automate repetitive tasks.

---

# `for` Loop

Used when you know how many times you want to repeat a task.

### Syntax

```javascript
for (initialization; condition; increment) {
    // code
}
```

### Example

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

Output

```text
1
2
3
4
5
```

---

# `while` Loop

Executes as long as the condition is `true`.

### Example

```javascript
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
```

Output

```text
1
2
3
4
5
```

---

# `do...while` Loop

Executes the code **at least once**, even if the condition is `false`.

### Example

```javascript
let i = 6;

do {
    console.log(i);
    i++;
} while (i <= 5);
```

Output

```text
6
```

---

# `for...of` Loop

Used to iterate over iterable objects such as arrays and strings.

### Example

```javascript
const fruits = ["Apple", "Banana", "Mango"];

for (const fruit of fruits) {
    console.log(fruit);
}
```

Output

```text
Apple
Banana
Mango
```

---

# `for...in` Loop

Used to iterate over the properties (keys) of an object.

### Example

```javascript
const user = {
    name: "Aashish",
    age: 25
};

for (const key in user) {
    console.log(key, user[key]);
}
```

Output

```text
name Aashish
age 25
```

---

# `break`

Stops the loop immediately.

### Example

```javascript
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break;
    }

    console.log(i);
}
```

Output

```text
1
2
```

---

# `continue`

Skips the current iteration and moves to the next one.

### Example

```javascript
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }

    console.log(i);
}
```

Output

```text
1
2
4
5
```

---

# When to Use

* `for` → Fixed number of iterations.
* `while` → Unknown number of iterations.
* `do...while` → Execute at least once.
* `for...of` → Arrays, strings, and other iterables.
* `for...in` → Object properties.

---

# Common Mistakes

### ❌ Infinite Loop

```javascript
let i = 1;

while (i <= 5) {
    console.log(i);
}
```

The loop never ends because `i` is never incremented.

---

### ❌ Using `for...in` with Arrays

```javascript
const numbers = [10, 20, 30];

for (const index in numbers) {
    console.log(index);
}
```

Output

```text
0
1
2
```

`for...in` returns **indexes**, not values.

Use `for...of` instead.

---

### ✅ Correct

```javascript
const numbers = [10, 20, 30];

for (const number of numbers) {
    console.log(number);
}
```

Output

```text
10
20
30
```

---

# Interview Questions

1. What is a loop?
2. What is the difference between `for` and `while`?
3. What is the difference between `while` and `do...while`?
4. What is the difference between `for...of` and `for...in`?
5. What is the purpose of `break`?
6. What is the purpose of `continue`?
7. What causes an infinite loop?
