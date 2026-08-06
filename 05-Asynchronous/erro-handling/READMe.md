# JavaScript Error Handling

## 📖 What is Error Handling?

Error Handling is a JavaScript mechanism that prevents an application from crashing when an unexpected error occurs.

Instead of stopping the entire program, JavaScript allows us to catch the error, display a useful message, and continue executing the application.

---

# Why do we need Error Handling?

Errors can happen because of:

- Typing mistakes
- Undefined variables
- Invalid user input
- Network failures
- Server errors
- Bugs in code

Without Error Handling, JavaScript stops execution when an error occurs.

---

# Runtime Errors vs Syntax Errors

## Syntax Error

Occurs before the program starts.

Example

```javascript
if(true){
console.log("Hello")
```

Missing closing brace.

The program will not run.

---

## Runtime Error

Occurs while the program is running.

Example

```javascript
console.log(username);
```

Output

```
ReferenceError: username is not defined
```

Runtime errors can be handled using `try...catch`.

---

# try...catch

Syntax

```javascript
try{

    // Code that might fail

}catch(error){

    // Executes if an error occurs

}
```

Flow

```
Program

↓

try

↓

Success?

↓

YES

↓

Continue

OR

↓

Error

↓

catch(error)

↓

Continue Program
```

---

# Error Object

The catch block receives an Error object.

```javascript
catch(error)
```

Useful properties

```javascript
error.name
error.message
error.stack
```

Example

```javascript
try{

    console.log(username);

}catch(error){

    console.log(error.name);
    console.log(error.message);

}
```

Output

```
ReferenceError
username is not defined
```

---

# throw

JavaScript lets us create our own errors.

Syntax

```javascript
throw new Error("Something went wrong");
```

Example

```javascript
const age = 15;

if(age < 18){

    throw new Error("Access Denied");

}
```

Output

```
Access Denied
```

---

# finally

The finally block always executes.

```javascript
try{

    console.log("Hello");

}catch(error){

    console.log(error);

}finally{

    console.log("Finished");

}
```

Output

```
Hello
Finished
```

Even if an error occurs, finally still runs.

---

# Error Handling with Fetch API

Network Error

```
fetch()

↓

Rejected Promise

↓

catch()
```

Example

```javascript
await fetch("https://wrong-url.com");
```

Output

```
TypeError: fetch failed
```

---

# HTTP Errors

404

500

401

These do NOT automatically go to catch.

Fetch still returns a Response Object.

Example

```javascript
const response = await fetch(url);

if(!response.ok){

    throw new Error(
        `HTTP Error: ${response.status}`
    );

}
```

---

# response.ok

Returns

```javascript
true
```

if request succeeds.

Returns

```javascript
false
```

for

- 404
- 401
- 500

---

# Common JavaScript Errors

## ReferenceError

```javascript
console.log(name);
```

Variable does not exist.

---

## TypeError

```javascript
null.toUpperCase();
```

Invalid operation on a value.

---

## SyntaxError

Invalid JavaScript syntax.

---

# Best Practices

✅ Always use try...catch with async/await

✅ Show meaningful error messages

✅ Throw custom errors when necessary

✅ Check response.ok when using Fetch

✅ Never ignore errors

---

# Common Mistakes

❌ Assuming fetch() goes to catch() for 404

Wrong

```javascript
await fetch(url);
```

Correct

```javascript
if(!response.ok){

    throw new Error();

}
```

---

❌ Forgetting try...catch around await

Wrong

```javascript
const users = await fetch(url);
```

Correct

```javascript
try{

    const users = await fetch(url);

}catch(error){

    console.log(error);

}
```

---

# Interview Questions

## What is Error Handling?

A mechanism that prevents an application from crashing by catching runtime errors.

---

## What does try do?

Runs code that may throw an error.

---

## What does catch do?

Receives and handles the thrown error.

---

## What does throw do?

Creates a custom Error manually.

---

## What is finally?

Code that always executes whether an error occurs or not.

---

## Does fetch() always execute catch() for 404?

No.

404 returns a Response Object.

You must check

```javascript
response.ok
```

---

# Summary

✔ Runtime Errors

✔ Syntax Errors

✔ try

✔ catch

✔ Error Object

✔ error.name

✔ error.message

✔ throw

✔ finally

✔ async/await Error Handling

✔ Fetch Error Handling

✔ response.ok

✔ Network Errors

✔ HTTP Errors

---

**Author:** Aashish Chaudhary