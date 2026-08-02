// =========================
// 1. Filter Even Numbers
// =========================

const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter(number => number % 2 === 0);

console.log(evenNumbers);

// Output:
// [2, 4, 6]

// =========================
// 2. Filter Adults
// =========================

const ages = [12, 18, 25, 15, 30, 17];

const adultAges = ages.filter(age => age >= 18);

console.log(adultAges);

// Output:
// [18, 25, 30]

// =========================
// 3. Filter Students by Marks
// =========================

const students = [
    { name: "Ram", marks: 70 },
    { name: "Sita", marks: 85 },
    { name: "Hari", marks: 60 },
    { name: "Gita", marks: 90 }
];

const topStudents = students.filter(student => student.marks >= 80);

console.log(topStudents);

// Output:
// [
//   { name: "Sita", marks: 85 },
//   { name: "Gita", marks: 90 }
// ]

// =========================
// 4. Filter Published Courses
// =========================

const courses = [
    { title: "JavaScript", published: true },
    { title: "React", published: false },
    { title: "Node.js", published: true },
    { title: "MongoDB", published: false }
];

const publishedCourses = courses.filter(course => course.published);

console.log(publishedCourses);

// Output:
// [
//   { title: "JavaScript", published: true },
//   { title: "Node.js", published: true }
// ]

// =========================
// 5. Truthy & Falsy Values
// =========================

const values = [0, "", "Hello", null, 25, false];

const truthyValues = values.filter(Boolean);

console.log(truthyValues);

// Output:
// ["Hello", 25]

// =========================
// 6. Original Array Remains Unchanged
// =========================

const originalNumbers = [10, 15, 20, 25];

const filteredNumbers = originalNumbers.filter(number => number >= 20);

console.log(filteredNumbers);
// [20, 25]

console.log(originalNumbers);
// [10, 15, 20, 25]