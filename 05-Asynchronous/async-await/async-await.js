// ===============================================
// JavaScript Async / Await
// ===============================================

// ===============================================
// Example 1: Async Function
// ===============================================

async function greet() {
    return "Hello";
}

greet().then(result => {
    console.log(result);
});

// Output:
// Hello



// ===============================================
// Example 2: Async Function Returns Promise
// ===============================================

async function getAge() {
    return 25;
}

console.log(getAge());

// Output:
// Promise { 25 }



// ===============================================
// Example 3: Using await
// ===============================================

async function showAge() {
    const age = await getAge();
    console.log(age);
}

showAge();

// Output:
// 25



// ===============================================
// Example 4: Await with Promise
// ===============================================

function getUser() {
    return new Promise(resolve => {
        resolve("Aashish");
    });
}

async function showUser() {
    const user = await getUser();
    console.log(user);
}

showUser();

// Output:
// Aashish



// ===============================================
// Example 5: Simulating API Delay
// ===============================================

function downloadFile() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Download Complete");
        }, 2000);
    });
}

async function startDownload() {
    console.log("Downloading...");

    const result = await downloadFile();

    console.log(result);
}

startDownload();

// Output:
// Downloading...
// (after 2 seconds)
// Download Complete



// ===============================================
// Example 6: Await Multiple Promises
// ===============================================

async function calculate() {

    const num1 = await Promise.resolve(10);
    const num2 = await Promise.resolve(20);

    console.log(num1 + num2);

}

calculate();

// Output:
// 30