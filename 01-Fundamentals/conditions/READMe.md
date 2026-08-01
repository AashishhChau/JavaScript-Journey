# Conditionals

## What are Conditionals?

Conditional statements allow a program to make decisions based on whether a condition is `true` or `false`.

They control the flow of execution by running different blocks of code depending on the condition.

---

# `if` Statement

Executes a block of code only if the condition is `true`.

### Syntax

```javascript
if (condition) {
    // code
}
```

### Example

```javascript
const age = 20;

if (age >= 18) {
    console.log("Eligible to vote");
}
```

Output

```text
Eligible to vote
```

---

# `if...else`

Executes one block if the condition is `true`, otherwise executes another block.

### Example

```javascript
const age = 16;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
```

Output

```text
Minor
```

---

# `if...else if...else`

Used when checking multiple conditions.

### Example

```javascript
const marks = 82;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 80) {
    console.log("Grade B");
} else if (marks >= 70) {
    console.log("Grade C");
} else {
    console.log("Fail");
}
```

Output

```text
Grade B
```

---

# `switch` Statement

Useful when comparing one value against multiple possible cases.

### Syntax

```javascript
switch (value) {
    case option1:
        // code
        break;

    case option2:
        // code
        break;

    default:
        // code
}
```

### Example

```javascript
const day = 2;

switch (day) {
    case 1:
        console.log("Sunday");
        break;

    case 2:
        console.log("Monday");
        break;

    default:
        console.log("Invalid Day");
}
```

Output

```text
Monday
```

---

# Ternary Operator

A shorter alternative to `if...else`.

### Syntax

```javascript
condition ? valueIfTrue : valueIfFalse;
```

### Example

```javascript
const age = 20;

const message = age >= 18 ? "Adult" : "Minor";

console.log(message);
```

Output

```text
Adult
```

---

# Truthy & Falsy Values

### Falsy Values

* `false`
* `0`
* `""` (empty string)
* `null`
* `undefined`
* `NaN`

Everything else is considered **truthy**.

### Example

```javascript
if ("Hello") {
    console.log("Truthy");
}
```

Output

```text
Truthy
```

---

# When to Use

* `if` → Single condition.
* `if...else` → Two possible outcomes.
* `if...else if...else` → Multiple conditions.
* `switch` → Many fixed values.
* Ternary → Simple one-line decisions.

---

# Common Mistakes

### ❌ Using `=` instead of `===`

```javascript
if (age = 18) {
    console.log("Adult");
}
```

Always compare values using:

```javascript
if (age === 18) {
    console.log("Adult");
}
```

---

### ❌ Forgetting `break` in `switch`

```javascript
switch(day) {
    case 1:
        console.log("Sunday");

    case 2:
        console.log("Monday");
}
```

Without `break`, execution continues to the next case.

---

### ❌ Overusing Nested `if` Statements

Instead of:

```javascript
if (age >= 18) {
    if (hasLicense) {
        console.log("Can Drive");
    }
}
```

Prefer:

```javascript
if (age >= 18 && hasLicense) {
    console.log("Can Drive");
}
```

---

# Interview Questions

1. What are conditional statements?
2. What is the difference between `if`, `else if`, and `switch`?
3. When should you use a `switch` statement?
4. What is the ternary operator?
5. What are truthy and falsy values?
6. Why is `===` preferred over `==` in conditions?
