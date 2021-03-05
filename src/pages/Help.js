import React from 'react'
import "./Pages.css";
import "./Help.css";
import Navbar from '../Navbar';

function Help() {
  const correctNumber = () => {
    let random = Math.floor(Math.random() * 101);
    return random;
  }

  let randomNumber = correctNumber();
  let guesses = [];// to store the list of guesses
  let textInput = React.createRef();

  const playGame = (e) => {
    let numberGuess = textInput.current.value;
    if (e.key === "Enter") {
      if (numberGuess == "") {
        alert('Please enter a number');
      } else {
        textInput.current.value = "";
        displayResult(numberGuess);
        saveGuessHistory(numberGuess);
        // console.log("the secret number is " + randomNumber);
      }
    }
  }

  const restart = () => {
    guesses = [];
    document.querySelector('#history').innerHTML = "";
    document.querySelector('#result').innerHTML = "";
    randomNumber = correctNumber();
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
      list += `<li class='list-item'>You guessed ${guesses[i]}</li>`
    }
    list += "</ul>";
    document.querySelector('#history').innerHTML = list;
  }

  return (
    <div className="wrapper">
      <div className="wrapper_navbar">
        <Navbar />
      </div>
      <div className="wrapper_body game-board">
        <h2>Guess the Number!</h2>
        <div className='input_container'>
          <input type="number" ref={textInput} placeholder="press enter" onKeyPress={playGame} />
          <button onClick={restart}>Restart</button>
        </div>
        <div id="result"></div>
        <div id="history"></div>
      </div>
    </div>
  )
}

export default Help
