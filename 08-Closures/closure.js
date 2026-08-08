```javascript
/*****************************************************************
                    JAVASCRIPT CLOSURES
******************************************************************/

/*
    A closure is created when a function remembers and can access
    variables from its surrounding lexical scope even after the
    outer function has finished executing.
*/


/*****************************************************************
1. BASIC CLOSURE
******************************************************************/

function outer() {
    let name = "Aashish";

    function inner() {
        console.log(name);
    }

    inner();
}

outer();

// Output:
// Aashish


/*****************************************************************
2. REAL CLOSURE — OUTER FUNCTION RETURNS INNER FUNCTION
******************************************************************/

function createCounter() {
    let count = 0;

    function inner() {
        count++;
        console.log(count);
    }

    return inner;
}

const counter = createCounter();

counter(); // 1
counter(); // 2
counter(); // 3


/*****************************************************************
3. CLOSURE PRESERVES STATE
******************************************************************/

function makeCounter() {
    let count = 0;

    return function () {
        count++;

        return count;
    };
}

const count = makeCounter();

console.log(count()); // 1
console.log(count()); // 2
console.log(count()); // 3


/*****************************************************************
4. EACH CLOSURE HAS ITS OWN STATE
******************************************************************/

function createNewCounter() {
    let count = 0;

    return function () {
        count++;

        return count;
    };
}

const counter1 = createNewCounter();
const counter2 = createNewCounter();

console.log(counter1()); // 1
console.log(counter1()); // 2

console.log(counter2()); // 1

console.log(counter1()); // 3


/*
    counter1 and counter2 have separate count variables.

    counter1
        ↓
    count = 0 → 1 → 2 → 3

    counter2
        ↓
    count = 0 → 1
*/


/*****************************************************************
5. CLOSURE DOES NOT MAKE VARIABLES GLOBAL
******************************************************************/

function createUser() {
    let name = "Aashish";

    return function () {
        console.log(name);
    };
}

const user = createUser();

user(); // Aashish


/*
    This would cause:

    ReferenceError: name is not defined

    because name exists only inside createUser().

    console.log(name);
*/


/*****************************************************************
6. CLOSURE FOR PRIVATE DATA
******************************************************************/

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

const account = createBankAccount();

account.deposit(100);
account.deposit(50);

console.log(account.getBalance()); // 150


/*
    balance is private.

    This:

        console.log(account.balance);

    returns:

        undefined

    because balance is not directly exposed.
*/


/*****************************************************************
7. COUNTER WITH PRIVATE STATE
******************************************************************/

function createPrivateCounter() {
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

const privateCounter = createPrivateCounter();

privateCounter.increment();
privateCounter.increment();

console.log(privateCounter.getCount()); // 2

privateCounter.decrement();

console.log(privateCounter.getCount()); // 1


/*****************************************************************
8. CLOSURE + CALLBACK
******************************************************************/

function greetLater() {
    let name = "Aashish";

    setTimeout(() => {
        console.log(name);
    }, 2000);
}

greetLater();


/*
    Execution flow:

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
    callback still remembers name
        ↓
    Aashish
*/


/*****************************************************************
9. CLOSURE INSIDE A LOOP
******************************************************************/

for (let i = 0; i < 3; i++) {

    setTimeout(() => {

        console.log(i);

    }, 1000);

}

/*
    Output:

    0
    1
    2

    let creates a separate binding for each iteration.
*/


/*****************************************************************
10. LEXICAL SCOPE + CLOSURE
******************************************************************/

function showMessage() {
    let message = "Hello";

    return function () {
        console.log(message);
    };
}

const show = showMessage();

show();

// Output:
// Hello


/*****************************************************************
11. CLOSURE WITH MODIFIED STATE
******************************************************************/

function createScore() {
    let score = 0;

    return function () {

        score += 10;

        return score;
    };
}

const score = createScore();

console.log(score()); // 10
console.log(score()); // 20
console.log(score()); // 30


/*****************************************************************
12. MULTIPLE INDEPENDENT CLOSURES
******************************************************************/

function createUserCounter() {
    let count = 0;

    return function () {

        count++;

        return count;
    };
}

const userCounter1 = createUserCounter();
const userCounter2 = createUserCounter();

console.log(userCounter1()); // 1
console.log(userCounter1()); // 2

console.log(userCounter2()); // 1

console.log(userCounter2()); // 2

console.log(userCounter1()); // 3


/*****************************************************************
13. FINAL CLOSURE EXAMPLE
******************************************************************/

function finalCounter() {

    let count = 0;

    return function () {

        count++;

        return count;
    };
}

const finalCount = finalCounter();

console.log(finalCount()); // 1
console.log(finalCount()); // 2
console.log(finalCount()); // 3


/*****************************************************************
14. CLOSURE MENTAL MODEL
******************************************************************/

/*

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


    Example:

    createCounter()
          ↓
    count = 0
          ↓
    return inner function
          ↓
    outer function finishes
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

*/


/*****************************************************************
15. QUICK REVISION
******************************************************************/

/*
    Closure:

    A function remembers variables from its surrounding
    lexical scope even after the outer function has finished.

    Important concepts:

    1. Lexical scope
    2. Inner function
    3. Outer variables
    4. Preserved state
    5. Independent closures
    6. Private data
    7. Callbacks
    8. setTimeout()
    9. Loops
*/


/*****************************************************************
                    CLOSURES COMPLETED
******************************************************************/

console.log("JavaScript Closures Completed!");
```
