# JavaScript ES6 - Spread Operator (...)

## What is the Spread Operator?

The spread operator (`...`) expands the elements of an array or the properties of an object.

**Remember:**

- Rest → Collects
- Spread → Expands

---

# Copying an Array

```javascript
const numbers = [1, 2, 3];

const copy = [...numbers];

console.log(copy);
```

Output

```
[1, 2, 3]
```

The original array is not modified.

---

# Merging Arrays

```javascript
const frontend = ["HTML", "CSS"];
const backend = ["Node.js", "Express"];

const fullStack = [...frontend, ...backend];

console.log(fullStack);
```

Output

```
["HTML", "CSS", "Node.js", "Express"]
```

---

# Copying an Object

```javascript
const user = {
    name: "Ram",
    age: 20
};

const copiedUser = {
    ...user
};

console.log(copiedUser);
```

Output

```
{
    name: "Ram",
    age: 20
}
```

---

# Updating an Object

```javascript
const user = {
    name: "Ram",
    age: 20
};

const updatedUser = {
    ...user,
    age: 21
};

console.log(updatedUser);
```

Output

```
{
    name: "Ram",
    age: 21
}
```

If duplicate properties exist, the last property overrides the previous one.

---

# Merging Objects

```javascript
const personal = {
    name: "Ram"
};

const contact = {
    email: "ram@gmail.com"
};

const profile = {
    ...personal,
    ...contact
};

console.log(profile);
```

Output

```
{
    name: "Ram",
    email: "ram@gmail.com"
}
```

---

# Common Use Cases

- Copy arrays
- Merge arrays
- Copy objects
- Update objects
- Merge objects
- React state updates

---

# Important Notes

- Spread does **not** modify the original array or object.
- Spread expands existing elements or properties.
- Duplicate object properties are overwritten by the last occurrence.

---

# Difference Between Rest and Spread

| Rest | Spread |
|------|--------|
| Collects values | Expands values |
| Used mainly in destructuring and function parameters | Used to copy and merge arrays/objects |

---

# What I Learned

- Copy arrays using spread.
- Merge multiple arrays.
- Copy objects.
- Update object properties immutably.
- Merge objects.
- Understand duplicate property behavior.
- Difference between rest and spread operators.