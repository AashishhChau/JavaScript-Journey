# filter()

## What is `filter()`?

`filter()` is an array method that creates a **new array** containing only the elements that satisfy a given condition.

The callback function is executed for every element in the array. If the callback returns `true`, the element is kept; if it returns `false`, the element is removed.

---

## Syntax

```javascript
const newArray = array.filter(element => {
    return condition;
});
```

---

## How `filter()` Works

1. Iterates through every element of the array.
2. Executes the callback function for each element.
3. If the callback returns `true`, the element is added to the new array.
4. If the callback returns `false`, the element is skipped.
5. Returns a new filtered array without modifying the original array.

---

## When to Use

* Get even or odd numbers.
* Filter users based on age.
* Find published courses.
* Filter active users.
* Search products by category.
* Remove unwanted or invalid data.

---

## `filter()` vs `map()`

| `filter()`                     | `map()`                                    |
| ------------------------------ | ------------------------------------------ |
| Returns only matching elements | Returns every element after transformation |
| Array length can be smaller    | Array length always stays the same         |
| Returns existing elements      | Returns transformed elements               |

---

## Truthy & Falsy

`filter()` doesn't require the callback to explicitly return `true` or `false`.

It accepts any value and converts it to a boolean internally.

Example:

```javascript
const values = [0, "", "Hello", null, 25, false];

const result = values.filter(value => value);

console.log(result);
```

Output

```javascript
["Hello", 25]
```

Falsy values are removed because JavaScript converts them to `false`.

---

## Common Mistakes

### ❌ Forgetting `return`

```javascript
const evenNumbers = numbers.filter(number => {
    number % 2 === 0;
});
```

Output

```javascript
[]
```

Because the callback returns `undefined` for every element.

---

### ✅ Correct

```javascript
const evenNumbers = numbers.filter(number => {
    return number % 2 === 0;
});
```

---

### ❌ Returning the Wrong Value

```javascript
users.filter(user => user.age);
```

This checks whether `user.age` is truthy, **not** whether the user is an adult.

---

### ✅ Correct

```javascript
users.filter(user => user.age >= 18);
```

---

## Best Practices

* Use meaningful parameter names.
* Return a boolean expression.
* Do not modify the original array.
* Use `filter()` only when selecting elements.
* Use `map()` when transforming elements.

---

## Interview Questions

1. What is `filter()`?
2. Does `filter()` modify the original array?
3. What does the callback function return?
4. What is the difference between `filter()` and `map()`?
5. What happens if you forget to use `return`?
6. Can `filter()` return an empty array?
7. Why does `filter(Boolean)` work?
8. When would you use `filter()` in a React application?
