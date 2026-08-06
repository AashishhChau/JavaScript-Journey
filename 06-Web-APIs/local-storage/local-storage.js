// ======================================================
// Local Storage in JavaScript
// ======================================================
//
// Local Storage stores data inside the browser.
// Data remains even after:
// - Refreshing the page
// - Closing the browser
// - Restarting the computer
//
// Local Storage stores ONLY strings.
// ======================================================

// ======================================================
// Example 1: Store and Retrieve a String
// ======================================================

console.log("========== Example 1 ==========");

localStorage.setItem("name", "Aashish");

const name = localStorage.getItem("name");

console.log(name);


// ======================================================
// Example 2: Store and Retrieve a Number
// ======================================================

console.log("========== Example 2 ==========");

localStorage.setItem("age", 25);

// Everything in Local Storage is stored as a string
const age = localStorage.getItem("age");

console.log(age);
console.log(typeof age);

// Convert string back into number
const numberAge = Number(age);

console.log(numberAge + 5);


// ======================================================
// Example 3: Store an Object
// ======================================================

console.log("========== Example 3 ==========");

const user = {
    name: "Aashish",
    age: 25,
    country: "Nepal"
};

// Convert object into JSON String
const userString = JSON.stringify(user);

// Store in Local Storage
localStorage.setItem("user", userString);


// ======================================================
// Example 4: Retrieve an Object
// ======================================================

console.log("========== Example 4 ==========");

// Read JSON String
const savedUserString = localStorage.getItem("user");

// Convert JSON String back into Object
const savedUser = JSON.parse(savedUserString);

console.log(savedUser);

console.log(savedUser.name);
console.log(savedUser.age);
console.log(savedUser.country);


// ======================================================
// Example 5: Remove One Item
// ======================================================

console.log("========== Example 5 ==========");

localStorage.setItem("theme", "dark");

console.log(localStorage.getItem("theme"));

localStorage.removeItem("theme");

console.log(localStorage.getItem("theme")); // null


// ======================================================
// Example 6: Clear Entire Local Storage
// ======================================================

console.log("========== Example 6 ==========");

localStorage.setItem("city", "Kathmandu");
localStorage.setItem("language", "English");

console.log(localStorage.getItem("city"));
console.log(localStorage.getItem("language"));

localStorage.clear();

console.log(localStorage.getItem("city"));      // null
console.log(localStorage.getItem("language"));  // null


// ======================================================
// Example 7: Check if Data Exists
// ======================================================

console.log("========== Example 7 ==========");

const theme = localStorage.getItem("theme");

if (theme === null) {
    console.log("Theme does not exist.");
} else {
    console.log(theme);
}


// ======================================================
// Example 8: Practice
// ======================================================

localStorage.setItem("framework", "React");

const framework = localStorage.getItem("framework");

console.log(framework);