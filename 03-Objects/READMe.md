# JavaScript Objects

## What is an Object?

An object is a collection of related data stored as key-value pairs.

Example:

```javascript
const user = {
    name: "Ram",
    age: 20,
    active: true
};
```

---

## Object Syntax

```javascript
const objectName = {
    key: value
};
```

---

## Accessing Properties

### Dot Notation

```javascript
user.name
```

### Bracket Notation

```javascript
user["name"]
```

Use bracket notation when the property name is stored in a variable.

Example:

```javascript
const property = "age";

console.log(user[property]);
```

---

## Updating Properties

```javascript
user.age = 21;
```

---

## Adding Properties

```javascript
user.city = "Kathmandu";
```

---

## Deleting Properties

```javascript
delete user.city;
```

---

## Checking if a Property Exists

```javascript
"name" in user
```

Returns:

```javascript
true
```

---

## Object.keys()

Returns an array containing all property names.

```javascript
Object.keys(user);
```

---

## Object.values()

Returns an array containing all property values.

```javascript
Object.values(user);
```

---

## Object.entries()

Returns an array of key-value pairs.

```javascript
Object.entries(user);
```

Example:

```javascript
[
    ["name", "Ram"],
    ["age", 20]
]
```

---

## Dot vs Bracket Notation

Use dot notation when the property name is fixed.

```javascript
user.name
```

Use bracket notation when using variables.

```javascript
user[property]
```

---

## Common Interview Questions

- Difference between dot and bracket notation
- Difference between Object.keys(), Object.values(), and Object.entries()
- Difference between deleting a property and assigning a new value
- When to use bracket notation

---

## What I Learned

- Objects store related data as key-value pairs.
- Objects are mutable.
- Properties can be updated, added, or deleted.
- Bracket notation supports dynamic property access.
- Object.keys(), Object.values(), and Object.entries() all return arrays.