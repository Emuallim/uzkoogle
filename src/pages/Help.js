import React from 'react'
import "./Pages.css";
import "./Help.css";
import Navbar from '../Navbar';

function Help() {
  /*
   * Guess the Number 
   * TODO: Get user value from input and save it to variable numberGuess
   * TODO: Generate a random number 1 to 100 and save it to variable correctNumber
   * TODO: Console whether the guess is too high/low or is correct inside playGame
   * TODO: Create a function called displayResult to move the logic for if the guess
   * TODO: Complete the showYouWon, showNumAbove, showNumBelow functions
   * TODO: Use the showYouWon... functions within displayResult
   * TODO: Save the guess history in a variable called guuess
   * TODO: Display the guess history using displayHistory() function
   * TODO: Use the initGame() function to restart the game
   */
  // Variable to store the list of guesses
  let guesses = [];

  // Variable to store the correct random number
  let correctNumber = [];

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
          <button onClick={showMsg}>Restart</button>
        </div>
      </div>
    </div>
  )



}

export default Help
