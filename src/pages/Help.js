import React from 'react'
import "./Pages.css";
import Navbar from '../Navbar';

function Help() {
  const showMsg = () => {
    document.querySelector('h1').innerHTML = "Hello";
  }

  return (
    <div className="wrapper">
      <div className="wrapper_navbar">
        <Navbar />
      </div>
      <div className="wrapper_body">
        <h1></h1>
        <input type="text" /><button onClick={showMsg}>Click</button>
      </div>
    </div>
  )
}

export default Help
