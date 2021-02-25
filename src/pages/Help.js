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

  const getDialog = (dialogType, text) => {
    let dialog;
    switch (dialogType) {
      case "warning":
        dialog = "<div class='alert alert-warning' role='alert'>";
        break;
      case "won":
        dialog = "<div class='alert alert-success' role='alert'>";
        break;
    }
    dialog += text;
    dialog += "</div>"
    return dialog;
  }

  const showYouWon = (won) => {
    let dialog = getDialog(won);
    document.querySelector("#result").innerHTML = dialog;
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
        <div id="result"></div>
      </div>
    </div>
  )
}

export default Help
