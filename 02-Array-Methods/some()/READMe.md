# some()

## What is `some()`?

`some()` is an array method that checks whether **at least one element** in an array satisfies a given condition.

It returns:

* `true` → if at least one element matches.
* `false` → if no elements match.

Unlike `find()`, `some()` returns a **boolean**, not the element itself.

---

## Syntax

```javascript
const result = array.some(element => {
    return condition;
});
```

---

## How `some()` Works

1. Starts from the first element.
2. Executes the callback function.
3. If the callback returns `true`, `some()` immediately returns `true`.
4. Stops checking the remaining elements.
5. If no element matches, returns `false`.

---

## When to Use

* Check if at least one user is an admin.
* Check if a product is out of stock.
* Check if any student has passed.
* Validate form input.
* Determine if a specific condition exists in an array.

---

## `some()` vs `find()` vs `filter()`

| Method     | Returns                               |
| ---------- | ------------------------------------- |
| `some()`   | `true` or `false`                     |
| `find()`   | First matching element or `undefined` |
| `filter()` | Array of all matching elements        |

---

## Common Mistakes

### ❌ Forgetting `return`

```javascript
const result = numbers.some(number => {
    number > 5;
});
```

Output

```javascript
false
```

Because the callback returns `undefined` for every element.

---

### ✅ Correct

```javascript
const result = numbers.some(number => {
    return number > 5;
});
```

or

```javascript
const result = numbers.some(number => number > 5);
```

---

## Best Practices

* Use `some()` when you only need to know if a match exists.
* Return a boolean expression from the callback.
* Use meaningful parameter names.
* Prefer implicit return for simple arrow functions.
* Don't use `filter()` when you only need a `true` or `false` result.

---

## Interview Questions

1. What does `some()` return?
2. When does `some()` stop iterating?
3. What happens if no element matches?
4. What is the difference between `some()` and `find()`?
5. What is the difference between `some()` and `filter()`?
6. Does `some()` modify the original array?
7. Why is `some()` more efficient than `filter()` when checking for a condition?
