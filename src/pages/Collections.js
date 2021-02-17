import React from 'react';
import "./Pages.css";
import Navbar from '../Navbar';

function Collections() {
  return (
    <div className="wrapper">
      <div className="wrapper_navbar">
        <Navbar />
      </div>
      <div className="wrapper_body">
        <h1>Collections</h1>
      </div>
    </div>
  )
}

export default Collections
