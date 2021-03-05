import React from 'react'
import "./Pages.css";
import Navbar from '../Navbar';

function Feedback() {
  const addNumbers = (num1, num2) => {
    let result = num1 + num2;
    return result;
  }
  console.log(addNumbers(5, 2));
  return (
    <div className="wrapper">
      <div className="wrapper_navbar">
        <Navbar />
      </div>
      <div className="wrapper_body">
        <h2>Feedback Here!</h2>
      </div>
    </div>
  )
}

export default Feedback
