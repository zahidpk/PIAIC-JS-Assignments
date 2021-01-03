/*
Java-script assignments chapter 9

- input a value from user for example firstName is "Ameen"
- input a second value from user for example lasName is "Alam"
- input a third value from user for example age is "20"
- print meassage in alert() Hello Ameen Alam, You are 20 years old
*/

let firstName = prompt('First Name');
let lastName = prompt('Last Name');
let age = prompt('Age');

let message =
  'Hello ' + firstName + ' ' + lastName + ', You are ' + age + ' years old.';

alert(message);

// Using backticks
console.log(`Hello ${firstName} ${lastName}, You are ${age} years old.`);
// Show content in html page
let content = document.getElementById('content');

content.innerHTML = `<h2>${message}</h2>`;
