# JavaScript Promises

## 📖 Introduction

A **Promise** is an object that represents the eventual completion or failure of an asynchronous operation.

Instead of blocking the execution while waiting for a task to finish, JavaScript continues executing other code and notifies us when the asynchronous task is completed.

---

## Why Promises?

Promises help handle asynchronous operations such as:

- API Requests
- Database Operations
- User Authentication
- File Uploads & Downloads
- Timers

Without Promises, asynchronous code becomes difficult to manage and leads to callback nesting (Callback Hell).

---

# Promise States

Every Promise has **three states**.

## 1. Pending ⏳

The asynchronous task is still running.

Example:

- Waiting for API response
- Downloading a file
- User login request

---

## 2. Fulfilled ✅

The task completed successfully.

Example:

```javascript
resolve("User Logged In");
```

---

## 3. Rejected ❌

The task failed.

Example:

```javascript
reject("Invalid Password");
```

---

# Creating a Promise

```javascript
const promise = new Promise((resolve, reject) => {

});
```

The Promise constructor receives two functions:

- `resolve()` → Success
- `reject()` → Failure

---

# resolve()

`resolve()` completes the Promise successfully.

Example

```javascript
const promise = new Promise((resolve, reject) => {
    resolve("Login Successful");
});
```

---

# reject()

`reject()` marks the Promise as failed.

```javascript
const promise = new Promise((resolve, reject) => {
    reject("Login Failed");
});
```

---

# then()

`.then()` executes when the Promise is fulfilled.

```javascript
promise.then(result => {
    console.log(result);
});
```

The value passed into `resolve()` becomes the parameter of `.then()`.

---

# catch()

`.catch()` executes when the Promise is rejected.

```javascript
promise.catch(error => {
    console.log(error);
});
```

The value passed into `reject()` becomes the parameter of `.catch()`.

---

# Promise Chaining

Multiple `.then()` methods can be chained together.

Each returned value is automatically passed to the next `.then()`.

Example

```javascript
const promise = new Promise(resolve => {
    resolve(5);
});

promise
    .then(number => number * 2)
    .then(result => result + 10)
    .then(finalResult => console.log(finalResult));
```

Output

```
20
```

---

# Flow of Promise

```
Pending
   │
   ├────────── resolve()
   │              │
   │              ▼
   │           then()
   │
   └────────── reject()
                  │
                  ▼
               catch()
```

---

# Real-World Examples

- User Login
- Fetching API Data
- Uploading Images
- Downloading Files
- Database Queries

---

# Key Points

- Promise handles asynchronous operations.
- Every Promise starts in the Pending state.
- `resolve()` triggers `.then()`.
- `reject()` triggers `.catch()`.
- Promise chaining passes returned values to the next `.then()`.
- Promises improve code readability compared to callbacks.