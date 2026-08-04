# reduce()

## What is reduce()?

- Executes a callback function on every array element.
- Reduces an array into a single value.
- The final result can be:
  - Number
  - String
  - Array
  - Object
- Does not modify the original array.

---

## Syntax

```javascript
const result = array.reduce((accumulator, currentValue) => {
    return updatedAccumulator;
}, initialValue);
```

---

## Parameters

### accumulator

Stores the accumulated result after every iteration.

### currentValue

Current element being processed.

### initialValue

Starting value of the accumulator.

Examples:

```javascript
0     // Number
[]    // Array
{}    // Object
```

---

## Choosing the Correct Initial Value

| Final Result | Initial Value |
|--------------|---------------|
| Number | `0` |
| Array | `[]` |
| Object | `{}` |

Always ask:

> **What should my final result look like?**

---

## Common Use Cases

- Sum numbers
- Calculate averages
- Count matching items
- Find maximum or minimum values
- Group data
- Build lookup objects
- Transform arrays into objects
- Shopping cart totals

---

## Common Mistakes

### ❌ Using the wrong accumulator

```javascript
const result = users.reduce((acc, user) => {
    acc[user.role] = user.name;
    return acc;
}, []);
```

If the final result is an object, the accumulator should be:

```javascript
{}
```

---

### ❌ Forgetting to return the accumulator

```javascript
numbers.reduce((sum, number) => {
    sum + number;
}, 0);
```

Result:

```javascript
undefined
```

Correct:

```javascript
numbers.reduce((sum, number) => {
    return sum + number;
}, 0);
```

---

## What I Learned

- The accumulator can be a number, array, or object.
- Choose the accumulator based on the expected final result.
- `reduce()` is useful for much more than summing numbers.
- Think about the result first, then choose the initial value.