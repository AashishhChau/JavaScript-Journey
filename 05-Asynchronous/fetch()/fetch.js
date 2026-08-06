// ======================================================
// Fetch API in JavaScript
// ======================================================

// -----------------------------------------
// Example 1: Fetch Users using Async/Await
// -----------------------------------------

async function getUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        // Check if request was successful
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        // Convert response into JavaScript object
        const users = await response.json();

        console.log("Users:");
        console.log(users);

    } catch (error) {
        console.log("Error:", error.message);
    }
}

getUsers();


// -----------------------------------------
// Example 2: Fetch Posts
// -----------------------------------------

async function getPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const posts = await response.json();

        console.log("Posts:");
        console.log(posts);

    } catch (error) {
        console.log("Error:", error.message);
    }
}

getPosts();


// -----------------------------------------
// Example 3: Fetch Todos
// -----------------------------------------

async function getTodos() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");

        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const todos = await response.json();

        console.log(`Total Todos: ${todos.length}`);
        console.log(`First Todo: ${todos[0].title}`);

    } catch (error) {
        console.log("Error:", error.message);
    }
}

getTodos();