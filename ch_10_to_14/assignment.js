/*
Java-script assignments chapter 10 to 14

Make a Calculator
- input a value from user for example num1 is 7
- input a second value from user for example num2 is 3
- input a third value from user for example sign is "+" or "-" or "*" or "/" or "%"
- print operation in alert() 7-3 =4, or 7*3 =21, or 7/3 =2.3, or 7+3 =10 or 7%3 =1

Second Assignment - Make a Percentage Calculator

- Get the 5-course number from the userfor example course1 is 70 var totalMarks = 500
- Calculate the total percentage formula: obtainedMarks * 100/ totalMarks
- print output in alert.

*/

// First Assignment -  Make a Calculator

let getNum1 = prompt('Enter First Number');
let getNum2 = prompt('Enter Second Number');
let getSign = prompt('Please Enter One of Math Operators +, -, *, /, % ?');

// Convert strings into numbers
let num1 = Number(getNum1);
let num2 = Number(getNum2);

switch (getSign) {
  case '+':
    alert('The Result of ' + getSign + ' is ' + (num1 + num2));
    // console.log(num1 + num2);
    break;
  case '-':
    alert('The Result of ' + getSign + ' is ' + (num1 - num2));
    // console.log(num1 - num2);
    break;
  case '*':
    alert('The Result of ' + getSign + ' is ' + num1 * num2);
    // console.log(num1 * num2);
    break;
  case '/':
    alert('The Result of ' + getSign + ' is ' + num1 / num2);
    // console.log(num1 / num2);
    break;
  case '%':
    alert('The Result of ' + getSign + ' is ' + (num1 % num2));
    // console.log(num1 % num2);
    break;
  default:
    console.log('Wrong Operator');
    break;
}

// Second Assignment - Make a Percentage Calculator

let course1 = prompt('Enter Marks', 'Math');
let course2 = prompt('Enter Marks', 'Physics');
let course3 = prompt('Enter Marks', 'Chemistry');
let course4 = prompt('Enter Marks', 'English');
let course5 = prompt('Enter Marks', 'Urdu');

let totalMarks = 500;

let obtainedMarks =
  Number(course1) +
  Number(course2) +
  Number(course3) +
  Number(course4) +
  Number(course5);

console.log(obtainedMarks);

let marksPercentage = (obtainedMarks * 100) / totalMarks;
alert('Marks Percentage is ' + marksPercentage + '%');
//console.log(marksPercentage);

let content = document.getElementById('content');

content.innerHTML = `
                    <hr>
                    <h2>Total Marks: <em>${totalMarks}</em></h2>
                    <h3>Obtained Marks: ${obtainedMarks}</h3>
                    <h4>Marks Percentage: ${marksPercentage}%</h4>
                    <hr>`;
