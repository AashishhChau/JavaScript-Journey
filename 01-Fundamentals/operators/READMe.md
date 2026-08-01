# Operators

## What are Operators?

Operators are symbols that perform operations on values and variables.

JavaScript provides different types of operators for calculations, comparisons, assignments, and logical operations.

---

# Arithmetic Operators

Used to perform mathematical calculations.

| Operator | Description         | Example  |
| -------- | ------------------- | -------- |
| `+`      | Addition            | `5 + 3`  |
| `-`      | Subtraction         | `5 - 3`  |
| `*`      | Multiplication      | `5 * 3`  |
| `/`      | Division            | `6 / 2`  |
| `%`      | Modulus (Remainder) | `7 % 2`  |
| `**`     | Exponentiation      | `2 ** 3` |

### Example

```javascript
const a = 10;
const b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);
```

---

# Assignment Operators

Used to assign values to variables.

| Operator | Example  |
| -------- | -------- |
| `=`      | `x = 5`  |
| `+=`     | `x += 2` |
| `-=`     | `x -= 2` |
| `*=`     | `x *= 2` |
| `/=`     | `x /= 2` |

### Example

```javascript
let score = 10;

score += 5;

console.log(score);
```

Output

```text
15
```

---

# Comparison Operators

Used to compare two values.

| Operator | Description           |
| -------- | --------------------- |
| `==`     | Equal (loose)         |
| `===`    | Strict equal          |
| `!=`     | Not equal             |
| `!==`    | Strict not equal      |
| `>`      | Greater than          |
| `<`      | Less than             |
| `>=`     | Greater than or equal |
| `<=`     | Less than or equal    |

### Example

```javascript
console.log(5 > 3);
console.log(5 === 5);
console.log(5 !== 3);
```

Output

```text
true
true
true
```

---

# Logical Operators

Used to combine or invert boolean expressions.

| Operator | Description |   |            |
| -------- | ----------- | - | ---------- |
| `&&`     | Logical AND |   |            |
| `        |             | ` | Logical OR |
| `!`      | Logical NOT |   |            |

### Example

```javascript
const age = 20;
const hasLicense = true;

console.log(age >= 18 && hasLicense);
```

Output

```text
true
```

---

# Ternary Operator

A shorter alternative to an `if...else` statement.

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

# Strict vs Loose Equality

### Loose Equality (`==`)

Performs type conversion before comparison.

```javascript
5 == "5";
```

Output

```text
true
```

---

### Strict Equality (`===`)

Compares both value and data type.

```javascript
5 === "5";
```

Output

```text
false
```

---

# When to Use

* Arithmetic → Mathematical calculations.
* Assignment → Update variable values.
* Comparison → Conditions and decision making.
* Logical → Combine multiple conditions.
* Ternary → Simple conditional expressions.

---

# Common Mistakes

### ❌ Using `==` instead of `===`

```javascript
5 == "5";
```

Prefer

```javascript
5 === "5";
```

---

### ❌ Forgetting Operator Precedence

```javascript
2 + 3 * 4;
```

Output

```text
14
```

Multiplication executes before addition.

---

### ❌ Misusing the Modulus Operator

```javascript
7 % 2;
```

Output

```text
1
```

The modulus operator returns the **remainder**, not the quotient.

---

# Interview Questions

1. What are operators in JavaScript?
2. What is the difference between `==` and `===`?
3. What is the difference between `!=` and `!==`?
4. What is the modulus operator used for?
5. What are logical operators?
6. What is the ternary operator?
7. What is operator precedence?
