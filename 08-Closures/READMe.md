# JavaScript Closures

Closures are one of the most important concepts in JavaScript. They allow a function to remember and access variables from its surrounding lexical scope even after the outer function has finished executing.

---

## 1. What is a Closure?

A **closure** is created when an inner function remembers and can access variables from the scope where it was created, even after that outer scope has finished executing.

### Simple Definition

> A closure allows a function to remember variables from its surrounding scope even after the outer function has finished executing.

---

# 2. Basic Closure Example

```javascript
function outer() {
    let name = "Aashish";

    function inner() {
        console.log(name);
    }

    inner();
}

outer();
```

Output:

```text
Aashish
```

### Why?

The `inner()` function can access the `name` variable from `outer()`.

```text
outer()
  ↓
name = "Aashish"
  ↓
inner()
  ↓
console.log(name)
  ↓
Aashish
```

Technically, this is a closure because `inner()` closes over `name`.

However, the more important closure behavior appears when the inner function is returned and called **after the outer function has finished**.

---

# 3. The Real Power of Closures

```javascript
function outer() {
    let count = 0;

    function inner() {
        count++;
        console.log(count);
    }

    return inner;
}

const counter = outer();

counter();
counter();
counter();
```

Output:

```text
1
2
3
```

### What happens?

```text
outer()
  ↓
count = 0
  ↓
return inner
  ↓
outer() finishes
  ↓
counter stores inner function
  ↓
counter()
  ↓
count = 1
  ↓
counter()
  ↓
count = 2
  ↓
counter()
  ↓
count = 3
```

Even though `outer()` has finished executing, `inner()` still has access to `count`.

That is the key behavior of a closure.

---

# 4. Closures Preserve State

A closure can preserve state between function calls.

```javascript
function createCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());
```

Output:

```text
1
2
3
```

The same `count` variable is preserved between calls.

### Mental Model

```text
counter
  ↓
Closure
  ↓
count
  ↓
0 → 1 → 2 → 3
```

The function does not receive a new `count` every time.

It keeps access to the same variable.

---

# 5. Each Closure Has Its Own State

This is one of the most important closure concepts.

```javascript
function createCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1());
console.log(counter1());
console.log(counter2());
console.log(counter1());
```

Output:

```text
1
2
1
3
```

### Why?

`createCounter()` was called twice.

Therefore, JavaScript created two separate closure environments.

```text
counter1
  ↓
count = 0


counter2
  ↓
count = 0
```

They do not share the same `count`.

After calling `counter1()` twice:

```text
counter1 → count = 2
```

But `counter2` still has:

```text
counter2 → count = 0
```

So:

```javascript
counter2();
```

returns:

```text
1
```

### Important Rule

> Every time the outer function runs, a new closure environment can be created with its own preserved state.

---

# 6. Closures Do Not Make Variables Global

Consider:

```javascript
function createUser() {
    let name = "Aashish";

    return function () {
        console.log(name);
    };
}

const user = createUser();

user();
```

Output:

```text
Aashish
```

But this does not work:

```javascript
console.log(name);
```

It causes:

```text
ReferenceError: name is not defined
```

### Why?

`name` exists inside `createUser()`.

It is not a global variable.

The returned function can access it because of the closure.

```text
Global Scope
│
├── user
│
└── name ❌


createUser()
│
└── name = "Aashish"
       │
       └── returned function remembers name
```

### Important Rule

> A closure gives the inner function access to outer variables. It does not make those variables globally accessible.

---

# 7. Closures for Private Data

Closures can be used to keep data private.

Example:

```javascript
function createBankAccount() {
    let balance = 0;

    return {
        deposit(amount) {
            balance += amount;
        },

        getBalance() {
            return balance;
        }
    };
}
```

Usage:

```javascript
const account = createBankAccount();

account.deposit(100);
account.deposit(50);

console.log(account.getBalance());
```

Output:

```text
150
```

But:

```javascript
console.log(account.balance);
```

returns:

```text
undefined
```

### Why?

`balance` is not directly exposed as a property.

It exists inside the closure.

The returned methods can access it:

```text
createBankAccount()
│
├── balance = 0
│
├── deposit()
│      │
│      └── remembers balance
│
└── getBalance()
       │
       └── remembers balance
```

This allows JavaScript to create a form of **private state**.

---

# 8. Counter Using Private State

Another example:

```javascript
function createCounter() {
    let count = 0;

    return {
        increment() {
            count++;
        },

        decrement() {
            count--;
        },

        getCount() {
            return count;
        }
    };
}
```

Usage:

```javascript
const counter = createCounter();

counter.increment();
counter.increment();

console.log(counter.getCount());
```

Output:

```text
2
```

Then:

```javascript
counter.decrement();

console.log(counter.getCount());
```

Output:

```text
1
```

The `count` variable cannot be directly accessed from outside.

The returned methods control access to it.

---

# 9. Closures and Callbacks

Closures are commonly used together with callbacks.

Example:

```javascript
function greetLater() {
    let name = "Aashish";

    setTimeout(() => {
        console.log(name);
    }, 2000);
}

greetLater();
```

After two seconds:

```text
Aashish
```

### Execution Flow

```text
greetLater()
     ↓
name = "Aashish"
     ↓
setTimeout stores callback
     ↓
greetLater() finishes
     ↓
2 seconds pass
     ↓
callback executes
     ↓
callback accesses name
     ↓
Aashish
```

The callback remembers `name` through a closure.

---

# 10. Closures and Loops

Closures are also important when working with loops and asynchronous callbacks.

Example:

```javascript
for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}
```

Output:

```text
0
1
2
```

Because `let` creates a separate binding for each loop iteration, each callback can access the appropriate `i`.

This is an important difference when compared with older `var` loop patterns.

---

# 11. Closures and Lexical Scope

Closures are closely related to **lexical scope**.

Lexical scope means that where a function is **created in the code** determines which surrounding variables it can access.

Example:

```javascript
function outer() {
    let message = "Hello";

    return function () {
        console.log(message);
    };
}

const fn = outer();

fn();
```

Output:

```text
Hello
```

The returned function remembers the lexical environment where it was created.

---

# 12. Closure Mental Model

The easiest way to understand a closure is:

```text
Outer Function
│
├── Local Variables
│
└── Inner Function
       │
       └── remembers outer variables
                │
                ↓
       Outer function finishes
                │
                ↓
       Inner function still works
```

Another way:

```text
createCounter()
       ↓
count = 0
       ↓
return function
       ↓
outer function finishes
       ↓
returned function still remembers count
       ↓
count changes between calls
```

---

# 13. Closure Does Not Copy the Variable

Consider:

```javascript
function createCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}
```

The closure does not simply make a copy like:

```text
count = 0
```

Instead, the returned function maintains access to the variable/binding in its surrounding lexical environment.

Therefore:

```text
count
 ↓
0
 ↓
1
 ↓
2
 ↓
3
```

The same preserved variable can be updated between calls.

---

# 14. Closure vs Normal Function Execution

### Normal local variable

```javascript
function test() {
    let value = 10;
}

test();
```

After the function finishes, nothing outside can access `value`.

```javascript
console.log(value);
```

This produces a `ReferenceError`.

---

### Closure

```javascript
function test() {
    let value = 10;

    return function () {
        console.log(value);
    };
}

const fn = test();

fn();
```

Output:

```text
10
```

The returned function still has access to `value`.

---

# 15. Why Are Closures Useful?

Closures are useful for:

* Preserving state
* Creating private variables
* Data encapsulation
* Creating counters
* Maintaining configuration
* Callbacks
* Timers
* Event handlers
* Factory functions
* Managing state without exposing it directly

---

# 16. Common Closure Pattern

The general pattern is:

```javascript
function outer() {

    let privateData = value;

    return function inner() {

        // Access privateData

    };
}
```

Usage:

```javascript
const fn = outer();

fn();
```

The returned function forms a closure over `privateData`.

---

# 17. Interview Definition

If an interviewer asks:

### "What is a closure?"

A strong answer:

> A closure is created when a function remembers and can access variables from its lexical scope even after the outer function has finished executing.

---

# 18. Interview Example

```javascript
function outer() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const counter = outer();

console.log(counter());
console.log(counter());
```

Output:

```text
1
2
```

### Explanation

The returned function forms a closure over `count`.

Even after `outer()` finishes, the returned function can still access and modify `count`.

---

# 19. Important Concepts Learned

## Closure

A function remembers variables from its surrounding lexical scope.

## Lexical Scope

A function's surrounding scope is determined by where the function is written.

## Preserved State

Closures can maintain state between function calls.

## Private State

Closures can keep variables inaccessible directly from outside code.

## Independent Closures

Separate calls to the outer function create separate closure environments.

## Callback + Closure

Callbacks can remember variables from the scope where they were created.

---

# 20. Common Mistakes

### Mistake 1: Thinking closure makes variables global

Incorrect:

```javascript
function outer() {
    let name = "Aashish";

    return function () {
        console.log(name);
    };
}

outer();

console.log(name);
```

`name` is not global.

---

### Mistake 2: Thinking every function automatically shares the same closure

Separate calls create separate environments:

```javascript
const counter1 = createCounter();
const counter2 = createCounter();
```

They have separate state.

---

### Mistake 3: Thinking the closure stores only a copy of the value

The closure maintains access to the surrounding lexical environment, allowing the variable to change.

---

# 21. Final Closure Example

```javascript
function createCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());
```

Output:

```text
1
2
3
```

### Flow

```text
createCounter()
      ↓
count = 0
      ↓
return inner function
      ↓
outer function finishes
      ↓
counter stores returned function
      ↓
counter()
      ↓
count = 1
      ↓
counter()
      ↓
count = 2
      ↓
counter()
      ↓
count = 3
```

---

# 22. Closure Checklist

* [x] What is a closure?
* [x] Closure definition
* [x] Inner function accessing outer variables
* [x] Outer function finishing execution
* [x] Preserved state
* [x] Independent closure instances
* [x] Closure and lexical scope
* [x] Closure and private variables
* [x] Counter pattern
* [x] Bank account pattern
* [x] Closure with callbacks
* [x] Closure with `setTimeout()`
* [x] Closure inside loops
* [x] `let` and loop behavior
* [x] Closure mental model
* [x] Closure interview explanation

---

# 23. Quick Revision

Remember these three things:

### 1. Function remembers outer variables

```javascript
function outer() {
    let x = 10;

    return function () {
        console.log(x);
    };
}
```

### 2. Outer function can finish

```javascript
const fn = outer();
```

`outer()` has finished executing.

### 3. Returned function still accesses `x`

```javascript
fn();
```

Output:

```text
10
```

That is the essence of a closure.



---

# Conclusion

Closures are a natural result of JavaScript's lexical scoping.

The most important idea to remember is:

```text
Function
   ↓
remembers
   ↓
surrounding variables
   ↓
even after outer execution finishes
```

Once this mental model is clear, concepts such as callbacks, timers, private state, factory functions, and many React patterns become easier to understand.

**JavaScript Closures — Completed ✅**
