# find()

## What is `find()`?

`find()` is an array method that returns the **first element** in an array that satisfies a given condition.

If no element matches the condition, it returns `undefined`.

Unlike `filter()`, `find()` returns **only one element**, not an array.

---

## Syntax

```javascript
const result = array.find(element => {
    return condition;
});
```

---

## How `find()` Works

1. Starts from the first element.
2. Executes the callback function.
3. If the callback returns `true`, `find()` immediately returns that element.
4. Stops searching after the first match.
5. If no match is found, returns `undefined`.

---

## When to Use

* Find a user by ID.
* Find a product by ID.
* Find an order.
* Find the first active account.
* Find a specific course.

---

## `find()` vs `filter()`

| `find()`                                     | `filter()`                        |
| -------------------------------------------- | --------------------------------- |
| Returns the first matching element           | Returns all matching elements     |
| Stops after the first match                  | Checks every element              |
| Returns an object/value or `undefined`       | Returns an array                  |
| More efficient when only one match is needed | Use when all matches are required |

---

## Common Mistakes

### ❌ Forgetting `return`

```javascript
const result = numbers.find(number => {
    number > 10;
});
```

Output

```javascript
undefined
```

Because the callback returns `undefined` on every iteration.

---

### ✅ Correct

```javascript
const result = numbers.find(number => {
    return number > 10;
});
```

or

```javascript
const result = numbers.find(number => number > 10);
```

---

## Best Practices

* Use meaningful variable names.
* Use `find()` when only one element is needed.
* Check for `undefined` before accessing properties.
* Prefer implicit return for simple arrow functions.

---

## Interview Questions

1. What does `find()` return?
2. What happens if no element matches?
3. What is the difference between `find()` and `filter()`?
4. Does `find()` modify the original array?
5. Why is `find()` usually more efficient than `filter()` for a single match?
6. Why can `user.name` throw a `TypeError` after using `find()`?
7. When would you choose `find()` in a MERN application?
