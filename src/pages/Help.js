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
    console.log(randomNumber);
  }

  const displayResult = (numberGuess) => {
    if (numberGuess > randomNumber) {
      document.querySelector('#result').innerHTML = "Your guess is too high";
    } else if (numberGuess < randomNumber) {
      document.querySelector('#result').innerHTML = "Your guess is too low";
    } else {
      document.querySelector('#result').innerHTML = "Awesome sauce! You got it!";
    }
  }

  return (
    <div className="wrapper">
      <div className="wrapper_navbar">
        <Navbar />
      </div>
      <div className="wrapper_body game-board">
        <h2>Guess the Number!</h2>
        <div>
          <input type="number" max='100' ref={textInput} placeholder='Numbers from 1 to 100' />
          <button onClick={playGame}>Click</button>
        </div>
        <div id="result"></div>
      </div>
    </div>
  )
}

export default Help
