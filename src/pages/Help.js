import React from 'react'
import "./Pages.css";
import "./Help.css";
import Navbar from '../Navbar';

function Help() {
  // Variable to store the list of guesses

  let textInput = React.createRef();
  let randomNumber = Math.floor(Math.random() * 101);

  const playGame = () => {
    let numberGuess = textInput.current.value;
    displayResult(numberGuess);
  }

  const displayResult = (numberGuess) => {
    if (numberGuess > randomNumber) {
      document.querySelector('h1').innerHTML = "too high";
    } else if (numberGuess < randomNumber) {
      document.querySelector('h1').innerHTML = "too low";
    } else {
      document.querySelector('h1').innerHTML = "correct";
    }
  }

  return (
    <div className="wrapper">
      <div className="wrapper_navbar">
        <Navbar />
      </div>
      <div className="wrapper_body game-board">
        <h1></h1>
        <div>
          <input type="number" max='100' ref={textInput} />
          <button onClick={playGame}>Click</button>
        </div>
      </div>
    </div>
  )
}

export default Help
