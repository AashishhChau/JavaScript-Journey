// =========================
// 1. for Loop
// =========================

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Output:
// 1 2 3 4 5

// =========================
// 2. while Loop
// =========================

let count = 1;

while (count <= 5) {
    console.log(count);
    count++;
}

// Output:
// 1 2 3 4 5

// =========================
// 3. do...while Loop
// =========================

let number = 6;

do {
    console.log(number);
    number++;
} while (number <= 5);

// Output:
// 6

// =========================
// 4. for...of Loop
// =========================

const fruits = ["Apple", "Banana", "Mango"];

for (const fruit of fruits) {
    console.log(fruit);
}

// Output:
// Apple
// Banana
// Mango

// =========================
// 5. for...in Loop
// =========================

const user = {
    name: "Aashish",
    age: 25
};

for (const key in user) {
    console.log(key, user[key]);
}

// Output:
// name Aashish
// age 25

// =========================
// 6. break
// =========================

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break;
    }

    console.log(i);
}

// Output:
// 1
// 2

// =========================
// 7. continue
// =========================

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }

    console.log(i);
}

// Output:
// 1
// 2
// 4
// 5