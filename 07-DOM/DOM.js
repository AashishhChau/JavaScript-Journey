/*****************************************************************
                JAVASCRIPT DOM
******************************************************************/

/*****************************************************************
1. Selecting Elements
******************************************************************/

// getElementById()

const heading = document.getElementById("title");
console.log(heading);


// querySelector()

const firstHeading = document.querySelector("h1");
console.log(firstHeading);


// querySelector() using id

const headingById = document.querySelector("#title");
console.log(headingById);


// querySelector() using class

const card = document.querySelector(".card");
console.log(card);


// querySelectorAll()

const list = document.querySelectorAll("li");
console.log(list);


// Accessing individual elements

console.log(list[0]);
console.log(list[1]);


// Loop through NodeList

list.forEach(function(item){
    console.log(item.textContent);
});


/*****************************************************************
2. textContent
******************************************************************/

const title = document.getElementById("title");

console.log(title.textContent);

title.textContent = "Learning DOM";


/*****************************************************************
3. innerHTML
******************************************************************/

const box = document.querySelector("#box");

box.innerHTML = "<h2>Hello DOM</h2>";

box.innerHTML += "<p>Learning innerHTML</p>";


// Difference

box.textContent = "<h1>Hello</h1>";

// Output:
// <h1>Hello</h1>

box.innerHTML = "<h1>Hello</h1>";

// Output:
// Hello


/*****************************************************************
4. value
******************************************************************/

const input = document.querySelector("#name");

console.log(input.value);


// Reading input while typing

input.addEventListener("input", () => {

    console.log(input.value);

});


// Input values are strings

const ageInput = document.querySelector("#age");

console.log(typeof ageInput.value);

// Convert to number

const age = Number(ageInput.value);

console.log(age + 5);


/*****************************************************************
5. Styling Elements
******************************************************************/

const headingStyle = document.getElementById("title");

headingStyle.style.color = "green";

headingStyle.style.backgroundColor = "black";

headingStyle.style.fontSize = "40px";


const paragraph = document.querySelector("p");

paragraph.style.display = "none";


/*****************************************************************
6. classList
******************************************************************/

const classHeading = document.querySelector("#title");


// Add class

classHeading.classList.add("active");


// Remove class

classHeading.classList.remove("active");


// Toggle class

classHeading.classList.toggle("active");


// Check class

console.log(classHeading.classList.contains("active"));


/*****************************************************************
7. Events
******************************************************************/

const button = document.querySelector("#btn");


// Click Event

button.addEventListener("click", () => {

    console.log("Button Clicked");

});


// Another example

button.addEventListener("click", () => {

    console.log("Hello Aashish");

});


/*****************************************************************
8. Function Reference vs Function Call
******************************************************************/

function greet(){

    console.log("Hello");

}


// Correct

button.addEventListener("click", greet);


// Wrong

// button.addEventListener("click", greet());



/*****************************************************************
9. Input Event
******************************************************************/

const username = document.querySelector("#name");

username.addEventListener("input", () => {

    console.log(username.value);

});


/*****************************************************************
10. Form Submit
******************************************************************/

const form = document.querySelector("#form");

form.addEventListener("submit", (e)=>{

    e.preventDefault();

    console.log("Form Submitted");

});


/*****************************************************************
11. Event Object
******************************************************************/

button.addEventListener("click",(e)=>{

    console.log(e);

});


button.addEventListener("click",(e)=>{

    console.log(e.target);

});


button.addEventListener("click",(e)=>{

    console.log(e.target.textContent);

});


button.addEventListener("click",(e)=>{

    console.log(e.type);

});

/*****************************************************************
12. createElement()
******************************************************************/

// Create a new element

const newHeading = document.createElement("h2");

newHeading.textContent = "Welcome Aashish";

console.log(newHeading);

// The element exists in memory only.
// It is NOT visible until appended to the DOM.



/*****************************************************************
13. appendChild()
******************************************************************/

const container = document.querySelector("#container");

const paragraph = document.createElement("p");

paragraph.textContent = "Learning appendChild";

container.appendChild(paragraph);



/*****************************************************************
14. append()
******************************************************************/

const anotherHeading = document.createElement("h2");

anotherHeading.textContent = "Learning append()";

container.append(anotherHeading);

// append() can also add text

container.append("This is plain text");



/*****************************************************************
15. remove()
******************************************************************/

const removeParagraph = document.querySelector("#remove");

removeParagraph.remove();



/*****************************************************************
16. setAttribute()
******************************************************************/

const image = document.querySelector("#image");

image.setAttribute("src","cat.jpg");

image.setAttribute("alt","Cute Cat");

image.setAttribute("width","300");



/*****************************************************************
17. getAttribute()
******************************************************************/

console.log(image.getAttribute("src"));

console.log(image.getAttribute("alt"));

console.log(image.getAttribute("width"));



/*****************************************************************
18. parentElement
******************************************************************/

const child = document.querySelector("#text");

console.log(child.parentElement);



/*****************************************************************
19. children
******************************************************************/

const box = document.querySelector("#box");

console.log(box.children);

console.log(box.children[0]);

console.log(box.children[1]);



/*****************************************************************
20. nextElementSibling
******************************************************************/

const first = document.querySelector("#first");

console.log(first.nextElementSibling);



/*****************************************************************
21. previousElementSibling
******************************************************************/

const second = document.querySelector("#second");

console.log(second.previousElementSibling);



/*****************************************************************
22. Complete DOM Challenge
******************************************************************/

const buttonChallenge = document.querySelector("#btn");

const containerChallenge = document.querySelector("#container");

buttonChallenge.addEventListener("click", () => {

    const newParagraph = document.createElement("p");

    newParagraph.textContent = "JavaScript DOM is Awesome";

    containerChallenge.appendChild(newParagraph);

});



/*****************************************************************
23. Practice Examples
******************************************************************/

// Change text

document.querySelector("#title").textContent = "Learning JavaScript DOM";


// Change styles

const headingStyle = document.querySelector("#title");

headingStyle.style.color = "red";

headingStyle.style.backgroundColor = "black";

headingStyle.style.fontSize = "50px";


// Toggle class

headingStyle.classList.toggle("active");


// Read input

const username = document.querySelector("#username");

username.addEventListener("input", () => {

    console.log(username.value);

});


// Event Target

const saveButton = document.querySelector("#save");

saveButton.addEventListener("click",(e)=>{

    console.log(e.target.textContent);

    console.log(e.type);

});



/*****************************************************************
24. Quick Reference
******************************************************************/

// Selecting
document.getElementById();
document.querySelector();
document.querySelectorAll();

// Content
element.textContent;
element.innerHTML;
input.value;

// Style
element.style.color = "";
element.style.backgroundColor = "";
element.style.display = "";

// Classes
element.classList.add();
element.classList.remove();
element.classList.toggle();
element.classList.contains();

// Events
element.addEventListener();

// Event Object
event.target;
event.type;
event.preventDefault();

// Creating Elements
document.createElement();
element.appendChild();
element.append();
element.remove();

// Attributes
element.setAttribute();
element.getAttribute();

// Traversing
element.parentElement;
element.children;
element.nextElementSibling;
element.previousElementSibling;



/*****************************************************************
END OF DOM MODULE
******************************************************************/

console.log("🎉 JavaScript DOM Module Completed!");