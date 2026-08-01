# Array Methods

## map()

### What is map()?

- Creates a new array.
- Does not modify the original array.
- Returns a new value for every element.
- The new array has the same length as the original.

### Syntax

```javascript
const newArray = array.map(item => {
    return transformedItem;
});
```

### When to use

- Transform numbers
- Convert strings
- Extract object properties
- Format API data

### Common mistakes

❌ Forgetting `return`

```javascript
numbers.map(num => {
    num * 2;
});
```

Output:

```javascript
[undefined, undefined, undefined]
```

✅ Correct

```javascript
numbers.map(num => {
    return num * 2;
});
```