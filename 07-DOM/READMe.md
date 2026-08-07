# JavaScript DOM (Document Object Model)

---

# 📖 What is DOM?

The **DOM (Document Object Model)** is a programming interface created by the browser for HTML documents.

It converts an HTML page into a **tree-like structure of objects**, allowing JavaScript to:

- Access HTML elements
- Read content
- Modify content
- Change styles
- Handle user events
- Create new elements
- Remove elements dynamically

Without the DOM, JavaScript would not be able to interact with a webpage.

---

# How DOM Works

When the browser loads an HTML page:

```
HTML File

↓

Browser Reads HTML

↓

Creates DOM Tree

↓

JavaScript Can Access Every Element
```

Example:

```html
<body>

<h1>Hello</h1>

<p>Learning DOM</p>

<button>Click</button>

</body>
```

DOM Tree

```
Document
│
└── html
     │
     └── body
          │
          ├── h1
          ├── p
          └── button
```

Every HTML tag becomes a JavaScript object.

---

# document Object

The browser automatically creates a global object called:

```javascript
document
```

Everything in the DOM starts from:

```javascript
document
```

Examples

```javascript
document.getElementById()

document.querySelector()

document.querySelectorAll()
```

---

# Selecting Elements

JavaScript first needs to find an element before changing it.

---

## getElementById()

Selects an element by its ID.

### HTML

```html
<h1 id="title">Hello DOM</h1>
```

### JavaScript

```javascript
const heading = document.getElementById("title");
```

Returns

```
<h1 id="title">
```

---

## querySelector()

Returns the **first matching element**.

Uses CSS selectors.

### By Tag

```javascript
document.querySelector("h1");
```

### By ID

```javascript
document.querySelector("#title");
```

### By Class

```javascript
document.querySelector(".card");
```

---

## querySelectorAll()

Returns **all matching elements**.

HTML

```html
<li>HTML</li>
<li>CSS</li>
<li>JavaScript</li>
```

JavaScript

```javascript
const list = document.querySelectorAll("li");
```

Returns

```
NodeList(3)
```

Access items

```javascript
console.log(list[0]);
```

Loop through all elements

```javascript
list.forEach(function(item) {
    console.log(item.textContent);
});
```

---

# Changing Content

---

## textContent

Used to get or change plain text.

HTML

```html
<h1 id="title">Hello DOM</h1>
```

JavaScript

```javascript
const heading = document.getElementById("title");

heading.textContent = "Learning DOM";
```

Output

```
Learning DOM
```

### Reading text

```javascript
console.log(heading.textContent);
```

---

## innerHTML

Used to read or write HTML.

Example

```javascript
const box = document.querySelector("#box");

box.innerHTML = "<h2>Hello DOM</h2>";
```

Result

```html
<div id="box">

<h2>Hello DOM</h2>

</div>
```

Appending HTML

```javascript
box.innerHTML += "<p>Learning innerHTML</p>";
```

---

## Difference

### textContent

```javascript
box.textContent = "<h1>Hello</h1>";
```

Output

```
<h1>Hello</h1>
```

Tags are treated as text.

---

### innerHTML

```javascript
box.innerHTML = "<h1>Hello</h1>";
```

Output

```
Hello
```

The browser renders the HTML.

---

## Security Note

Never insert untrusted user input using:

```javascript
element.innerHTML = userInput;
```

This can lead to **Cross-Site Scripting (XSS)** attacks.

Use

```javascript
textContent
```

for user-generated content.

---

# value

Used with form elements.

HTML

```html
<input id="name">
```

JavaScript

```javascript
const input = document.querySelector("#name");

console.log(input.value);
```

Initially

```
""
```

(empty string)

When the user types

```
Aashish
```

Then

```javascript
console.log(input.value);
```

Output

```
Aashish
```

---

## Important

Input values are always strings.

Example

```html
<input value="25">
```

```javascript
console.log(typeof input.value);
```

Output

```
string
```

Convert to number

```javascript
const age = Number(input.value);
```

---

# Styling Elements

Use the style property.

```javascript
heading.style.color = "green";

heading.style.backgroundColor = "black";

heading.style.fontSize = "40px";
```

Hide element

```javascript
paragraph.style.display = "none";
```

Show again

```javascript
paragraph.style.display = "block";
```

---

# Checklist

- ✅ What is DOM
- ✅ DOM Tree
- ✅ document
- ✅ getElementById()
- ✅ querySelector()
- ✅ querySelectorAll()
- ✅ textContent
- ✅ innerHTML
- ✅ value
- ✅ style
---

# classList

The **classList** property is used to add, remove, toggle, and check CSS classes on an element.

Instead of modifying the entire `class` attribute manually, JavaScript provides useful methods.

---

## HTML

```html
<h1 id="title">JavaScript DOM</h1>
```

CSS

```css
.active{
    color:white;
    background:black;
    padding:20px;
}
```

---

# classList.add()

Adds a class.

```javascript
const heading = document.querySelector("#title");

heading.classList.add("active");
```

Result

```html
<h1 id="title" class="active">
```

---

# classList.remove()

Removes a class.

```javascript
heading.classList.remove("active");
```

Result

```html
<h1 id="title">
```

---

# classList.toggle()

Adds the class if it doesn't exist.

Removes it if it already exists.

```javascript
heading.classList.toggle("active");
```

Example

Click 1

```
No class

↓

active
```

Click 2

```
active

↓

No class
```

Used for

- Dark Mode
- Mobile Menu
- Accordions
- Dropdowns

---

# classList.contains()

Checks whether a class exists.

```javascript
heading.classList.contains("active");
```

Returns

```javascript
true
```

or

```javascript
false
```

---

# Summary

| Method | Purpose |
|---------|---------|
| add() | Add class |
| remove() | Remove class |
| toggle() | Add/Remove automatically |
| contains() | Check class |

---

# Events

JavaScript becomes interactive using events.

An **event** is an action performed by the user or browser.

Examples

- Click
- Typing
- Form Submit
- Mouse Move
- Key Press

---

# addEventListener()

Used to listen for an event.

Syntax

```javascript
element.addEventListener("event", callbackFunction);
```

Example

```javascript
button.addEventListener("click", function(){

});
```

Meaning

```
Wait for the click

↓

Run this function
```

---

# click Event

HTML

```html
<button id="btn">
Click Me
</button>
```

JavaScript

```javascript
const button = document.querySelector("#btn");

button.addEventListener("click", () => {

    console.log("Button Clicked");

});
```

Output

```
Button Clicked
```

every time the button is clicked.

---

# Important Concept

Incorrect

```javascript
button.addEventListener("click", greet());
```

This executes immediately.

Correct

```javascript
button.addEventListener("click", greet);
```

This passes the function reference.

---

# Function Reference vs Function Call

Reference

```javascript
greet
```

Means

```
Run later
```

Function Call

```javascript
greet()
```

Means

```
Run immediately
```

This is one of the most important JavaScript interview concepts.

---

# input Event

Runs every time the user types.

HTML

```html
<input id="name">
```

JavaScript

```javascript
const input = document.querySelector("#name");

input.addEventListener("input", () => {

    console.log(input.value);

});
```

Typing

```
A

Aa

Aas

Aash

Aashi

Aashish
```

Console

```
A

Aa

Aas

Aash

Aashi

Aashish
```

---

# submit Event

Used with forms.

HTML

```html
<form id="form">

<input>

<button>

Submit

</button>

</form>
```

JavaScript

```javascript
const form = document.querySelector("#form");

form.addEventListener("submit",(e)=>{

    console.log("Submitted");

});
```

---

# preventDefault()

Normally a form reloads the page.

```javascript
form.addEventListener("submit",(e)=>{

    e.preventDefault();

});
```

Now

```
Submit

↓

Stay on page

↓

Run JavaScript
```

This is heavily used in React and MERN projects.

---

# Event Object

Every event automatically creates an Event Object.

```javascript
button.addEventListener("click",(event)=>{

});
```

or

```javascript
button.addEventListener("click",(e)=>{

});
```

Both are identical.

---

# event.target

Returns the element that triggered the event.

```javascript
button.addEventListener("click",(e)=>{

    console.log(e.target);

});
```

Output

```html
<button id="btn">

Click Me

</button>
```

---

# event.target.textContent

```javascript
button.addEventListener("click",(e)=>{

    console.log(e.target.textContent);

});
```

Output

```
Click Me
```

---

# event.type

Returns the event name.

```javascript
button.addEventListener("click",(e)=>{

    console.log(e.type);

});
```

Output

```
click
```

---

# Summary

| Property | Description |
|-----------|-------------|
| event.target | Element that triggered event |
| event.type | Event Name |
| preventDefault() | Stop default browser action |

---

# Checklist

- ✅ classList.add()
- ✅ classList.remove()
- ✅ classList.toggle()
- ✅ classList.contains()
- ✅ Events
- ✅ addEventListener()
- ✅ click
- ✅ input
- ✅ submit
- ✅ preventDefault()
- ✅ Event Object
- ✅ event.target
- ✅ event.target.textContent
- ✅ event.type


---

# Creating Elements

JavaScript can create new HTML elements dynamically.

Instead of writing HTML manually, we can generate elements using JavaScript.

---

# createElement()

Creates a new HTML element.

Syntax

```javascript
const element = document.createElement("tagName");
```

Example

```javascript
const heading = document.createElement("h2");
```

At this stage:

```
The element exists only in memory.

It is NOT visible on the webpage.
```

---

# Setting Content

```javascript
const heading = document.createElement("h2");

heading.textContent = "Welcome Aashish";
```

Now

```
<h2>Welcome Aashish</h2>
```

still exists only in memory.

---

# appendChild()

Adds an element into the DOM.

HTML

```html
<div id="container"></div>
```

JavaScript

```javascript
const container = document.querySelector("#container");

const heading = document.createElement("h2");

heading.textContent = "Welcome Aashish";

container.appendChild(heading);
```

Result

```html
<div id="container">

<h2>Welcome Aashish</h2>

</div>
```

---

# Flow

```
createElement()

↓

Create Element

↓

textContent

↓

Add Content

↓

appendChild()

↓

Display On Webpage
```

---

# append()

Modern version of appendChild()

```javascript
container.append(heading);
```

Difference

| appendChild() | append() |
|---------------|----------|
| Older | Modern |
| Adds one node | Adds multiple nodes or text |

Example

```javascript
container.append("Hello");
```

This works.

---

# remove()

Removes an element.

```javascript
heading.remove();
```

Before

```html
<h2>Hello</h2>
```

After

Nothing.

---

# setAttribute()

Used to create or change HTML attributes.

HTML

```html
<img id="image">
```

JavaScript

```javascript
const image = document.querySelector("#image");

image.setAttribute("src","cat.jpg");

image.setAttribute("alt","Cat Image");
```

Result

```html
<img src="cat.jpg" alt="Cat Image">
```

---

# getAttribute()

Reads an attribute.

```javascript
console.log(image.getAttribute("src"));
```

Output

```
cat.jpg
```

---

# Traversing the DOM

DOM elements have relationships.

---

# parentElement

Returns the parent element.

HTML

```html
<div>

<p id="text">

Hello

</p>

</div>
```

JavaScript

```javascript
const text = document.querySelector("#text");

console.log(text.parentElement);
```

Returns

```html
<div>

<p>Hello</p>

</div>
```

---

# children

Returns all direct child elements.

HTML

```html
<div id="box">

<h1></h1>

<p></p>

<button></button>

</div>
```

JavaScript

```javascript
const box = document.querySelector("#box");

console.log(box.children);
```

Returns

```
HTMLCollection(3)
```

---

# nextElementSibling

Returns the next sibling.

HTML

```html
<h1 id="one">One</h1>

<p>Two</p>
```

JavaScript

```javascript
const one = document.querySelector("#one");

console.log(one.nextElementSibling);
```

Returns

```html
<p>Two</p>
```

---

# previousElementSibling

Returns previous sibling.

HTML

```html
<h1>One</h1>

<p id="two">Two</p>
```

JavaScript

```javascript
const two = document.querySelector("#two");

console.log(two.previousElementSibling);
```

Returns

```html
<h1>One</h1>
```

---

# DOM Best Practices

✅ Prefer

```javascript
textContent
```

instead of

```javascript
innerHTML
```

for user data.

---

✅ Keep CSS inside CSS files.

Use

```javascript
classList.add()
```

instead of writing many

```javascript
style.color

style.fontSize

style.backgroundColor
```

---

✅ Use

```javascript
addEventListener()
```

instead of inline HTML events.

Avoid

```html
<button onclick="hello()">
```

Prefer

```javascript
button.addEventListener("click",hello);
```

---

# Common Mistakes

❌

```javascript
button.addEventListener("click",hello());
```

✅

```javascript
button.addEventListener("click",hello);
```

---

❌

```javascript
input.textContent
```

✅

```javascript
input.value
```

---

❌

```javascript
querySelector("title")
```

for ID.

✅

```javascript
querySelector("#title")
```

---

❌

```javascript
innerHTML = userInput
```

Can cause XSS.

Prefer

```javascript
textContent
```

---

# DOM Interview Questions

### What is DOM?

DOM is a programming interface that represents HTML as objects so JavaScript can manipulate webpages.

---

### Difference between

getElementById()

and

querySelector()

Answer

getElementById()

- Only IDs

querySelector()

- Uses CSS Selectors
- Returns first matching element

---

### Difference between

textContent

and

innerHTML

textContent

- Plain text

innerHTML

- HTML content

---

### Difference between

appendChild()

and

append()

appendChild()

- Older
- One node

append()

- Modern
- Multiple nodes
- Text supported

---

### Difference between

event.target

and

event.type

event.target

Returns the clicked element.

event.type

Returns event name.

---

### Difference between

Function Reference

and

Function Call

Reference

```javascript
hello
```

Call

```javascript
hello()
```

---

# DOM Summary

We learned

✅ DOM

✅ DOM Tree

✅ document

✅ getElementById()

✅ querySelector()

✅ querySelectorAll()

✅ textContent

✅ innerHTML

✅ value

✅ style

✅ classList

- add
- remove
- toggle
- contains

✅ addEventListener()

✅ click

✅ input

✅ submit

✅ preventDefault()

✅ Event Object

- target
- type

✅ createElement()

✅ appendChild()

✅ append()

✅ remove()

✅ getAttribute()

✅ setAttribute()

✅ parentElement

✅ children

✅ nextElementSibling

✅ previousElementSibling

---
