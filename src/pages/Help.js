import React from 'react'
import "./Pages.css";
import "./Help.css";
import Navbar from '../Navbar';

function Help() {
  // Variable to store the list of guesses

  // Variable to store the correct random number

  let textInput = React.createRef();

  const playGame = () => {
    let numberGuess = textInput.current.value;
    document.querySelector('h1').innerHTML = numberGuess;
  }

  const getRandomNumber = () => {
    let randomNumber = Math.floor(Math.random() * 101);
    document.querySelector('h2').innerHTML = randomNumber;
    return randomNumber;
  }

  return (
    <div className="wrapper">
      <div className="wrapper_navbar">
        <Navbar />
      </div>
      <div className="wrapper_body game-board">
        <h1></h1><h2></h2>
        <div>
          <input type="text" ref={textInput} />
          <button onClick={playGame}>Click</button>
          <button onClick={getRandomNumber}>Random</button>
        </div>
      </div>
    </div>
  )



}

export default Help
