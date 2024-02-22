Sure, here's the content formatted as a README.md file for your GitHub repository:

```markdown
# JavaScript Fundamentals and Concepts

This repository covers fundamental concepts in JavaScript, providing explanations and code examples for beginners to understand key concepts in the language.

## Table of Contents
- [Words vs Keywords](#words-vs-keywords)
- [var, const, let](#var-const-let)
- [Hoisting](#hoisting)
- [Types in JavaScript](#types-in-javascript)
- [Conditionals: if, else, else-if](#conditionals-if-else-else-if)
- [Loops: for and while](#loops-for-and-while)
- [Functions](#functions)
- [Arrays](#arrays)
- [Objects](#objects)

## Words vs Keywords

Words in JavaScript are those that do not have any specific meaning in the language and can be used as variables. Keywords, on the other hand, have predefined functionality within the programming language.

```javascript
// Example:
// Words
var dulha = "rizwan";
var dulhan = "sara";

// Keywords
var a = 12;
```

## var, const, let

`var`, `const`, and `let` are used for variable declaration in JavaScript. 

```javascript
const dulha ="rizwan";
const dulhan ="sara";
var a = 12;
```

## Hoisting

In JavaScript, both variables and functions are hoisted, meaning their declarations are moved to the top of the code. This allows variables to be used before they are declared, although they will initially have an "undefined" value.

```javascript
console.log(a); // undefined
var a = 12;
```

## Types in JavaScript

JavaScript has primitive and reference types. Primitive types include numbers, strings, booleans, etc., while reference types include arrays, objects, and functions.

```javascript
// Primitive
var a = 12;
var b = 2 + a;

// Reference
var aa = [1, 2, 3, 4];
var bb = aa;
bb.pop();
```

## Conditionals: if, else, else-if

Conditional statements in JavaScript allow you to execute different code based on different conditions.

```javascript
if (12 > 10) {
    // Code to execute if the condition is true
} else {
    // Code to execute if the condition is false
}
```

## Loops: for and while

Loops are used to execute a block of code repeatedly. JavaScript supports `for` and `while` loops.

```javascript
// for loop
for (var i = 0; i < 11; i++) {
    console.log(i);
}

// while loop
var a = 12;
while (a < 20) {
    a++;
}
```

## Functions

Functions in JavaScript allow you to encapsulate a block of code for reuse and readability.

```javascript
function hellobolo() {
    console.log("hello world");
}

hellobolo();

function yooo(a, b, c) {
    console.log(a, b, c);
}

yooo(22, 33, 44);
```

## Arrays

Arrays are used to store multiple values in a single variable. JavaScript arrays have built-in methods like `push`, `pop`, `shift`, and `unshift` for manipulation.

```javascript
var arr = [1, 2, 3, 4, 5, 6, 7];
arr.push(8);
arr.pop();
// Other array manipulation methods...
```

## Objects

Objects in JavaScript are collections of key-value pairs, where each key is a string (or Symbol) and each value is any JavaScript value, including functions and other objects.

```javascript
var car = {
    color: "white",
    model: "maruti",
    digital: false,
    car_sound: function() {
        console.log("raaaaattaaaaratatatattttaaaaaaaaaa");
    }
};
```
```

