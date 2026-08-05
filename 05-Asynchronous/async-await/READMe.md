# JavaScript Async/Await

## 📖 Introduction

`async` and `await` are modern JavaScript features introduced in ES8 (2017) that make asynchronous code easier to read and write.

Instead of chaining multiple `.then()` methods, `async/await` allows asynchronous code to look like synchronous code while remaining non-blocking.

---

# Why Async/Await?

Without `async/await`:

```javascript
fetch("/users")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
```

With `async/await`:

```javascript
const response = await fetch("/users");
const data = await response.json();

console.log(data);
```

The second version is cleaner and easier to understand.

---

# async Keyword

The `async` keyword is placed before a function.

```javascript
async function greet() {

}
```

An `async` function **always returns a Promise**, even if it returns a normal value.

Example

```javascript
async function greet() {
    return "Hello";
}
```

JavaScript automatically converts it into:

```javascript
Promise.resolve("Hello");
```

---

# await Keyword

`await` pauses the execution of the current async function until the Promise settles.

Example

```javascript
const result = await promise;
```

`await` does **not** block the entire JavaScript program. It only pauses the current async function.

---

# Rules

- `await` can only be used inside an `async` function.
- Every `async` function returns a Promise.
- `await` waits until a Promise is fulfilled or rejected.
- `await` makes asynchronous code easier to read.

---

# Example

```javascript
async function getAge() {
    return 25;
}

async function showAge() {
    const age = await getAge();
    console.log(age);
}

showAge();
```

Output

```
25
```

---

# Benefits

- Cleaner syntax
- Easier debugging
- Better readability
- Avoids long Promise chains
- Makes asynchronous code look synchronous

---

# Real-World Uses

- Fetch API
- Database Operations
- User Authentication
- File Uploads
- Reading Files
- REST APIs

---

# Key Points

- `async` always returns a Promise.
- `await` only works inside an async function.
- `await` pauses only the current async function.
- `async/await` is built on top of Promises.