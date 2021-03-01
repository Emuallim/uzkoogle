import React from 'react'
import "./Pages.css";
import "./Help.css";
import Navbar from '../Navbar';

function Help() {
  // Variable to store the list of guesses
  let guesses = [];

  let textInput = React.createRef();
  let randomNumber = Math.floor(Math.random() * 101);


  const playGame = () => {
    let numberGuess = textInput.current.value;
    displayResult(numberGuess);
    saveGuessHistory(numberGuess);
    console.log(randomNumber);
  }

  const displayResult = (numberGuess) => {
    if (numberGuess > randomNumber) {
      showNumberAbove();
    } else if (numberGuess < randomNumber) {
      showNumberBelow();
    } else {
      showYouWon();
    }
  }

  const getDialog = (dialogType, text) => {
    let dialog;
    switch (dialogType) {
      case "too-high":
        dialog = "<div class='alert too-high' role='alert'>";
        break;
      case "too-low":
        dialog = "<div class='alert too-low' role='alert'>";
        break;
      case "success":
        dialog = "<div class='alert success' role='alert'>";
        break;
    }
    dialog += text;
    dialog += "</div>"
    return dialog;
  }

  const showNumberAbove = () => {
    const text = "Your guess is too high!";
    let dialog = getDialog("too-high", text);
    document.querySelector("#result").innerHTML = dialog;
  }

  const showNumberBelow = () => {
    const text = "Your guess is too low!";
    let dialog = getDialog("too-low", text);
    document.querySelector("#result").innerHTML = dialog;
  }

  const showYouWon = () => {
    const text = "Awesome job, you got it!";
    let dialog = getDialog("success", text);
    document.querySelector("#result").innerHTML = dialog;
  }

  const saveGuessHistory = (numberGuess) => {
    guesses.push(numberGuess);
    displayHistory(guesses);
  }

  const displayHistory = (guesses) => {
    let list = "<ul class='list'>"
    for (let i = 0; i < guesses.length; i++) {
      list = `<li class='list-item'>You guessed ${guesses}</li>`
      console.log(list);
    }
    list += "</ul> <br>";
    document.querySelector('#history').innerHTML = list;
  }

  return (
    <div className="wrapper">
      <div className="wrapper_navbar">
        <Navbar />
      </div>
      <div className="wrapper_body game-board">
        <h2>Guess the Number!</h2>
        <div>
          <input type="number" max='100' ref={textInput} />
          <button onClick={playGame}>Click</button>
        </div>
        <div id="result"></div>
        <div id="history"></div>
      </div>
    </div>
  )
}

export default Help
