// ======================================================
// JavaScript Error Handling
// ======================================================

// ------------------------------------------------------
// Example 1: Basic try...catch
// ------------------------------------------------------

console.log("========== Example 1 ==========");

try {
    console.log(message); // message is not defined
} catch (error) {
    console.log("Error:", error.message);
}


// ------------------------------------------------------
// Example 2: ReferenceError
// ------------------------------------------------------

console.log("========== Example 2 ==========");

try {
    console.log(username);
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}


// ------------------------------------------------------
// Example 3: Custom Error using throw
// ------------------------------------------------------

console.log("========== Example 3 ==========");

const age = 15;

try {

    if (age < 18) {
        throw new Error("You must be at least 18 years old.");
    }

    console.log("Access Granted");

} catch (error) {

    console.log(error.message);

}


// ------------------------------------------------------
// Example 4: Successful Fetch Request
// ------------------------------------------------------

console.log("========== Example 4 ==========");

async function getUsers() {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const users = await response.json();

        console.log(users);

    } catch (error) {

        console.log("Error:", error.message);

    }

}

getUsers();


// ------------------------------------------------------
// Example 5: Network Error
// ------------------------------------------------------

console.log("========== Example 5 ==========");

async function getData() {

    try {

        const response = await fetch(
            "https://wrong-url.com/users"
        );

        const users = await response.json();

        console.log(users);

    } catch (error) {

        console.log("Network Error:", error.message);

    }

}

getData();


// ------------------------------------------------------
// Example 6: HTTP Error
// ------------------------------------------------------

console.log("========== Example 6 ==========");

async function getPosts() {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/999999"
        );

        if (!response.ok) {

            throw new Error(
                `HTTP Error! Status: ${response.status}`
            );

        }

        const post = await response.json();

        console.log(post);

    } catch (error) {

        console.log(error.message);

    }

}

getPosts();


// ------------------------------------------------------
// Example 7: finally
// ------------------------------------------------------

console.log("========== Example 7 ==========");

try {

    console.log("Program Started");

} catch (error) {

    console.log(error.message);

} finally {

    console.log("Program Finished");

}