# JavaScript ES6 - Destructuring

## What is Destructuring?

Destructuring is an ES6 feature that allows you to extract values from arrays or properties from objects into separate variables.

It makes code shorter, cleaner, and easier to read.

---

# Object Destructuring

```javascript
const user = {
    name: "Ram",
    age: 20
};

const { name, age } = user;
```

Output

```
Ram
20
```

---

# Renaming Variables

```javascript
const employee = {
    name: "Hari"
};

const { name: employeeName } = employee;

console.log(employeeName);
```

Output

```
Hari
```

---

# Default Values

```javascript
const student = {
    name: "Sita"
};

const { age = 20 } = student;

console.log(age);
```

Output

```
20
```

Default values are only used when the property is `undefined` or does not exist.

---

# Nested Destructuring

```javascript
const employee = {
    personal: {
        name: "Hari"
    },
    company: {
        department: "IT"
    }
};

const {
    personal: { name },
    company: { department }
} = employee;

console.log(name);
console.log(department);
```

Output

```
Hari
IT
```

---

# Array Destructuring

```javascript
const fruits = ["Apple", "Banana", "Mango"];

const [firstFruit, secondFruit] = fruits;

console.log(firstFruit);
console.log(secondFruit);
```

Output

```
Apple
Banana
```

---

# Skipping Elements

```javascript
const numbers = [10, 20, 30, 40];

const [first, , third] = numbers;

console.log(first);
console.log(third);
```

Output

```
10
30
```

---

# Rest Operator in Array Destructuring

```javascript
const colors = ["Red", "Green", "Blue", "Yellow"];

const [firstColor, ...remainingColors] = colors;

console.log(firstColor);
console.log(remainingColors);
```

Output

```
Red
["Green", "Blue", "Yellow"]
```

The rest operator collects all remaining elements into a new array.

---

# Object vs Array Destructuring

| Object | Array |
|--------|-------|
| Uses `{}` | Uses `[]` |
| Matches property names | Matches index positions |

---

# Rest vs Spread

Rest (`...`)

- Collects remaining values into one array.

Spread (`...`)

- Expands an array or object into individual elements.

Remember:

> **Rest collects. Spread expands.**

---

# Common Interview Questions

- What is destructuring?
- Does destructuring modify the original object or array?
- Difference between object and array destructuring.
- Why use renaming?
- When are default values applied?
- Difference between rest and spread.
- Why must the rest operator be the last element?

---

# What I Learned

- Extract values from objects and arrays.
- Rename variables while destructuring.
- Use default values.
- Perform nested destructuring.
- Skip array elements.
- Collect remaining values using the rest operator.