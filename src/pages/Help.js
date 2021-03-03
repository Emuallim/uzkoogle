import React from 'react'
import "./Pages.css";
import "./Help.css";
import Navbar from '../Navbar';

function Help() {
  let guesses = [];// to store the list of guesses

  let textInput = React.createRef();
  let randomNumber = Math.floor(Math.random() * 101);

  const playGame = e => {
    e.preventDefault();
    let numberGuess = textInput.current.value;
    displayResult(numberGuess);
    saveGuessHistory(numberGuess);
    console.log(randomNumber);
  }

  const restart = () => {
    document.querySelector('#history').innerHTML = "";
  }

  const displayResult = (numberGuess) => {
    if (numberGuess == "") {
      alert('Please enter valid number');
    } else if (numberGuess > randomNumber) {
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
    if (numberGuess == "") {
      alert('Please enter valid number');
    } else {
      guesses.push(numberGuess);
      displayHistory(guesses);
    }
  }

  const displayHistory = (guesses) => {
    let list = "<ul class='list'>"
    for (let i = 0; i < guesses.length; i++) {
      list += `<li class='list-item'>You guessed ${guesses[i]}</li>`
    }
    list += "</ul>";
    document.querySelector('#history').innerHTML = list;
  }

  return (
    <form className="wrapper">
      <div className="wrapper_navbar">
        <Navbar />
      </div>
      <div className="wrapper_body game-board">
        <h2>Guess the Number!</h2>
        <div className='input_container'>
          <input type="number" max='100' ref={textInput} placeholder="press enter" />
          <button onClick={playGame} hidden>Restart</button>
          <button onClick={restart}>Restart</button>
        </div>
        <div id="result"></div>
        <div id="history"></div>
      </div>
    </form>
  )
}

export default Help
