# every()

## What is `every()`?

`every()` is an array method that checks whether **all elements** in an array satisfy a given condition.

It returns:

* `true` → if every element satisfies the condition.
* `false` → if at least one element does not satisfy the condition.

Unlike `find()` or `filter()`, `every()` returns a **boolean**.

---

## Syntax

```javascript
const result = array.every(element => {
    return condition;
});
```

---

## How `every()` Works

1. Starts from the first element.
2. Executes the callback function.
3. If the callback returns `true`, it continues to the next element.
4. If the callback returns `false`, `every()` immediately returns `false`.
5. If all callbacks return `true`, `every()` returns `true`.

---

## When to Use

* Check if all users are verified.
* Check if every student passed.
* Validate form fields.
* Check if every product is in stock.
* Ensure all permissions are granted.

---

## every() vs some()

| every()                                              | some()                                                   |
| ---------------------------------------------------- | -------------------------------------------------------- |
| Checks if **all** elements satisfy a condition       | Checks if **at least one** element satisfies a condition |
| Stops on the first `false`                           | Stops on the first `true`                                |
| Returns `true` only if every callback returns `true` | Returns `true` if any callback returns `true`            |

---

## Common Mistakes

### ❌ Using the wrong comparison

```javascript
const ages = [18, 20, 25];

const result = ages.every(age => age > 18);
```

Output:

```javascript
false
```

Because `18 > 18` is `false`.

### ✅ Correct

```javascript
const result = ages.every(age => age >= 18);
```

---

## Best Practices

* Use `every()` when every element must satisfy a condition.
* Return a boolean expression from the callback.
* Use meaningful variable names.
* Stop using `filter()` when you only need a `true` or `false` result.
* Remember that `every()` stops as soon as the callback returns `false`.

---

## Interview Questions

1. What does `every()` return?
2. When does `every()` stop iterating?
3. What happens if one element fails the condition?
4. What is the difference between `every()` and `some()`?
5. When would you use `every()` instead of `filter()`?
6. Does `every()` modify the original array?
7. Why is `every()` efficient for validation?
