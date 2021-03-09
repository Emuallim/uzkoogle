import React, { forwardRef } from 'react'
import "./Pages.css";
import Navbar from '../Navbar';

function Feedback() {
  const addNumbers = (num1, num2) => {
    return num1 + num2;
  }


  const testFunction = () => {
    // const input = prompt('enter a number');
    const output = document.querySelector('h3');
    let numbers = [5, 3, 8, 4, 7, 2, 9];
    // goodOrBadMovie(output, input);
    // convert(output, input);
    // isEmptyString(input, output);
    findMin(output, numbers);
    // pushIntoArray();
  }

  const convert = (output, input) => {
    let months = input * 12;
    let weeks = input * 52;
    let days = input * 365;
    let hours = input * 8760;
    let minutes = input * 525000;
    let seconds = input * 31536000;
    output.innerHTML = `You are only ${months} months, ${weeks} weeks, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds old! Sooo young!`;
  }

  let fruit = "banana,apple,orange,strawberry";
  let fruits = ['banana', 'apple', 'orange', 'strawberry'];

  const firstItem = () => {
    console.log(fruits[0]);
    console.log(fruit.slice(0, 6));
    console.log(fruit.split(','));
    return fruits[0];
  }

  const goodOrBadMovie = (output, input) => {
    if (input < 7) {
      output.innerHTML = "It's a bad movie";
    } else {
      output.innerHTML = 'its a good movie!';
    }
  }

  const isEmptyString = (input, output) => {
    if (input == "") {
      output.innerText = true;
    } else {
      output.innerText = false;
    }
  }

  const pushIntoArray = () => {
    let emptyArray = [];
    for (let i = 0; i < 10; i++) { emptyArray.push(i) }
    console.log(emptyArray);
  }


  const findMin = (output, numbers) => {
    // let numbers = [5, 3, 8, 4, 7, 2, 9];
    // find highest number
    let max = -Infinity;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > max) { max = numbers[i] }
    }
    // find lowest number
    let min = Infinity;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] < min) { min = numbers[i] }
    }
    // SHORT SOLUTION BELOW
    // output.innerHTML = Math.max(...numbers);
    // output.innerHTML = Math.min(...numbers);
    output.innerHTML = `Min number: ${min} Max number: ${max}`;
  }


  return (
    <div className="wrapper">
      <div className="wrapper_navbar">
        <Navbar />
      </div>
      <div className="wrapper_body">
        <h3 onClick={testFunction}>Click Here!</h3>
      </div>
    </div>
  )
}

export default Feedback
