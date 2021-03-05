import React from 'react'
import "./Pages.css";
import Navbar from '../Navbar';

function Feedback() {
  const addNumbers = (num1, num2) => {
    return num1 + num2;
  }

  const minuteToSecond = () => {
    let input = prompt('enter number');
    let result = input * 60;
    document.querySelector('h2').innerHTML = `${input} minute(s) = ${result} seconds`;
  }


  return (
    <div className="wrapper">
      <div className="wrapper_navbar">
        <Navbar />
      </div>
      <div className="wrapper_body">
        <h2 onClick={minuteToSecond}>Click Here!</h2>
      </div>
    </div>
  )
}

export default Feedback
