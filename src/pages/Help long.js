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
      document.querySelector('h1').innerHTML = "too high";
      showNumberAbove();
    } else if (numberGuess < randomNumber) {
      document.querySelector('h1').innerHTML = "too low";
      showNumberBelow();
    } else {
      document.querySelector('h1').innerHTML = "correct";
      showYouWon();
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

  const showNumberAbove = () => {
    const text = "Your guess is too high!";
    let dialog = getDialog("warning", text);
    document.querySelector("#result").innerHTML = dialog;
  }

  const showNumberBelow = () => {
    const text = "Your guess is too low!";
    let dialog = getDialog("warning", text);
    document.querySelector("#result").innerHTML = dialog;
  }

  const showYouWon = () => {
    const text = "Awesome job, you got it!";
    let dialog = getDialog("won", text);
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
