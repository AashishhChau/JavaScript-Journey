// ===============================================
// JavaScript Promises
// ===============================================

// ===============================================
// Example 1: Creating a Promise
// ===============================================

const loginPromise = new Promise((resolve, reject) => {
    resolve("User Logged In");
});

loginPromise.then(result => {
    console.log(result);
});

// Output:
// User Logged In



// ===============================================
// Example 2: Rejected Promise
// ===============================================

const failedLogin = new Promise((resolve, reject) => {
    reject("Invalid Password");
});

failedLogin
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });

// Output:
// Invalid Password



// ===============================================
// Example 3: Passing Data with resolve()
// ===============================================

const numberPromise = new Promise((resolve) => {
    resolve(500);
});

numberPromise.then(value => {
    console.log(value * 2);
});

// Output:
// 1000



// ===============================================
// Example 4: Promise Chaining
// ===============================================

const chainPromise = new Promise((resolve) => {
    resolve(8);
});

chainPromise
    .then(value => {
        return value + 2;
    })
    .then(result => {
        return result * 3;
    })
    .then(finalResult => {
        console.log(finalResult);
    });

// Output:
// 30



// ===============================================
// Example 5: Chaining Strings
// ===============================================

const textPromise = new Promise((resolve) => {
    resolve("JavaScript");
});

textPromise
    .then(text => {
        return text.toUpperCase();
    })
    .then(text => {
        return text + " ES6";
    })
    .then(text => {
        console.log(text);
    });

// Output:
// JAVASCRIPT ES6



// ===============================================
// Example 6: Simulating an Asynchronous Task
// ===============================================

const downloadPromise = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("Download Complete");
    }, 2000);

});

downloadPromise.then(result => {
    console.log(result);
});

// Output (after 2 seconds)
// Download Complete