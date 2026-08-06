# Fetch API in JavaScript

## 📖 What is Fetch API?

The Fetch API is a modern JavaScript interface used to send HTTP requests and receive responses from a server. It allows applications to communicate with REST APIs and external services without reloading the web page.

Unlike older approaches such as **XMLHttpRequest (XHR)**, the Fetch API provides a cleaner and Promise-based syntax, making asynchronous programming easier and more readable.

The Fetch API is built into modern browsers and is widely used in frontend frameworks such as **React**, **Vue**, and **Angular**.

---

# Why do we need Fetch API?

Web applications constantly communicate with servers to exchange data.

For example:

- Logging in a user
- Registering a new account
- Loading products from an e-commerce website
- Fetching weather information
- Displaying blog posts
- Retrieving user profiles
- Sending form data to the server

Instead of storing all data inside JavaScript files, applications request the latest data from a server whenever it is needed.

---

# Why is Fetch API Asynchronous?

Servers need time to process requests.

The browser also needs time to:

- Send the request
- Wait for the server
- Receive the response
- Parse the returned data

If JavaScript waited synchronously, the entire webpage would freeze until the server responded.

To avoid blocking the main thread, **Fetch API works asynchronously** and immediately returns a **Promise**.

---

# What does fetch() return?

The `fetch()` function **does not return the actual data immediately**.

Instead, it returns a **Promise**.

```javascript
const responsePromise = fetch(url);
```

Flow:

```
fetch()

↓

Promise

↓

Response Object
```

The Promise resolves once the server responds.

---

# What is the Response Object?

When the Promise returned by `fetch()` resolves, it provides a **Response Object**.

The Response Object contains useful information about the server response, such as:

- Status code
- Status text
- Headers
- Response body
- Response type
- URL

Example:

```javascript
const response = await fetch(url);

console.log(response.status);
console.log(response.ok);
```

The Response Object **does not contain the actual JSON data directly**.

---

# Why do we use response.json()?

The data returned by the server is usually in **JSON format**.

The Response Object only stores the raw response.

To convert it into a JavaScript object or array, we use:

```javascript
const data = await response.json();
```

---

# What does response.json() return?

Many beginners think `response.json()` returns data immediately.

It does **not**.

It returns another **Promise**.

Flow:

```
Response Object

↓

response.json()

↓

Promise

↓

JavaScript Object / Array
```

That's why we use either:

- `.then()`
- `await`

to receive the final data.

---

# Request Lifecycle

```
Client

↓

fetch()

↓

Promise

↓

Response Object

↓

response.json()

↓

Promise

↓

JavaScript Object / Array

↓

Display Data
```

---

# Two Ways to Use Fetch API

## 1. Promise Chaining

```javascript
fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
```

---

## 2. Async/Await

```javascript
const response = await fetch(url);
const data = await response.json();
```

Async/Await is easier to read and is the preferred approach in modern JavaScript.

---