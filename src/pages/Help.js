import React from 'react'
import "./Pages.css";
import "./Help.css";
import Navbar from '../Navbar';

function Help() {
  // Variable to store the list of guesses

  // Variable to store the correct random number


  let textInput = React.createRef();

  const showMsg = () => {
    document.querySelector('h1').innerHTML = textInput.current.value;
  }

  return (
    <div className="wrapper">
      <div className="wrapper_navbar">
        <Navbar />
      </div>
      <div className="wrapper_body guess-number">
        <h1></h1>
        <div>
          <input type="text" ref={textInput} />
          <button onClick={showMsg}>Click</button>
          {/* <button onClick={showMsg}>Restart</button> */}
        </div>
      </div>
    </div>
  )



}

export default Help
