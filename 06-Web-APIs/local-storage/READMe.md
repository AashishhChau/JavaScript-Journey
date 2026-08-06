# Local Storage in JavaScript

## 📖 What is Local Storage?

Local Storage is a browser feature that allows JavaScript to store data inside the user's browser.

Unlike normal JavaScript variables, Local Storage keeps data even after:

- Refreshing the page
- Closing the browser
- Restarting the computer

The data remains until it is:

- Removed manually
- Removed by JavaScript
- Browser data is cleared

---

# Why do we need Local Storage?

Normal JavaScript variables live only in memory.

Example:

```javascript
let username = "Aashish";
```

If you refresh the page,

```text
username ❌ disappears
```

Sometimes websites need to remember information.

Examples:

- Dark Mode
- Shopping Cart
- Language Preference
- User Settings
- Small Todo Applications

Local Storage solves this problem.

---

# Where is Local Storage stored?

Inside the user's browser.

NOT on the server.

```
Browser

↓

Local Storage

↓

Data
```

---

# Browser Storage vs Server Storage

| Local Storage | Server |
|---------------|--------|
| Browser stores data | Server stores data |
| Works offline | Requires internet |
| User can clear it | User cannot directly remove it |
| Good for preferences | Good for important application data |

---

# Local Storage Life Cycle

```
JavaScript

↓

localStorage.setItem()

↓

Browser Storage

↓

Refresh

↓

Browser still has data

↓

localStorage.getItem()

↓

Data Returned
```

---

# Local Storage stores only Strings

This is one of the most important things to remember.

```javascript
localStorage.setItem("age",25);
```

Actually stores

```
"25"
```

NOT

```
25
```

---

# Converting back into Number

```javascript
const age = localStorage.getItem("age");

const numberAge = Number(age);
```

---

# Methods

## 1. setItem()

Stores data.

Syntax

```javascript
localStorage.setItem(key,value);
```

Example

```javascript
localStorage.setItem("name","Aashish");
```

---

## 2. getItem()

Reads data.

Syntax

```javascript
localStorage.getItem(key);
```

Example

```javascript
const name = localStorage.getItem("name");
```

---

## 3. removeItem()

Removes one key.

```javascript
localStorage.removeItem("name");
```

---

## 4. clear()

Removes everything.

```javascript
localStorage.clear();
```

---

# Objects in Local Storage

Objects cannot be stored directly.

Wrong

```javascript
localStorage.setItem("user", user);
```

Output

```
[object Object]
```

---

# JSON.stringify()

Converts

```
Object

↓

String
```

Example

```javascript
const userString = JSON.stringify(user);
```

---

# JSON.parse()

Converts

```
String

↓

Object
```

Example

```javascript
const user = JSON.parse(userString);
```

---

# Complete Flow

Saving

```
Object

↓

JSON.stringify()

↓

String

↓

Local Storage
```

Reading

```
Local Storage

↓

String

↓

JSON.parse()

↓

Object
```

---

# Checking if Data Exists

```javascript
const theme = localStorage.getItem("theme");

if(theme===null){
    console.log("Theme not found");
}
```

---

# Best Practices

✅ Store only small amounts of data.

✅ Store preferences.

✅ Convert objects using JSON.

✅ Convert numbers using Number().

---

# Avoid Storing

❌ Passwords

❌ Banking Information

❌ Sensitive Personal Data

---

# Common Mistakes

### Forgetting JSON.stringify()

```javascript
localStorage.setItem("user",user);
```

Wrong

---

### Forgetting JSON.parse()

```javascript
const user = localStorage.getItem("user");
```

Still a String.

---

### Forgetting Number()

```javascript
"25"+5

↓

255
```

Correct

```javascript
Number("25")+5

↓

30
```

---

# Interview Questions

### What is Local Storage?

Browser storage used to store key-value pairs permanently.

---

### Does Local Storage expire?

No.

---

### Does Local Storage store objects?

No.

Convert objects using JSON.stringify().

---

### Difference between JSON.stringify() and JSON.parse()?

JSON.stringify()

Object → String

JSON.parse()

String → Object

---

### Does Local Storage store numbers?

No.

Everything is stored as a String.

---

# Practice

- Save your name.
- Save your age.
- Convert age back into number.
- Store an object.
- Retrieve the object.
- Remove one item.
- Clear Local Storage.

---

# Summary

✔ What Local Storage is

✔ Why we use it

✔ Browser Storage vs Server Storage

✔ setItem()

✔ getItem()

✔ removeItem()

✔ clear()

✔ Local Storage stores only strings

✔ Number()

✔ JSON.stringify()

✔ JSON.parse()

✔ Store Objects

✔ Retrieve Objects

✔ Check if data exists

---

## Folder Structure

```
08-local-storage/
│
├── README.md
└── local-storage.js
```

---

**Author:** Aashish Chaudhary