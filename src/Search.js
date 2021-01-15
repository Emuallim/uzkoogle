import React, { useState } from 'react';
import './Search.css';
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function Search({ hideButtons = false }) {
  // state = variables in react
  const [input, setInput] = useState('');
  const history = useHistory();
  // whatever you type in the search, goes into "input"
  const search = e => {
    e.preventDefault(); //stops page refresh
    // how to trigger the "Google Search" key when you hit enter
    console.log("You Entered >>", input);
    // do something with input... come back and fix
    history.push('/search');
  }

  // my looong solution which doesn't work in react
  // document.addEventListener("keyup", (e) => {
  //   if (e.keyCode == 13) {
  //     console.log("you hit Enter");
  //   }
  // })

  // Soony's TRICK: change the "search" div to form and set the google search btn type to "submit"

  return (
    <form className="search">
      <div className="search_input">
        <SearchIcon className="search_inputIcon" />
        <input value={input} onChange={e => setInput(e.target.value)} />
        {/* whatever you type in is captured in the state above */}
        <MicIcon />
      </div>
      {!hideButtons ? (
        <div className="search_btns">
          <Button type='submit' onClick={search} variant="outlined">Google Search</Button>
          <Button onClick={search} variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
          <div className="search_btns">
            <Button className="search_btnsHidden" type='submit' onClick={search} variant="outlined">Google Search</Button>
            <Button className="search_btnsHidden" onClick={search} variant="outlined">I'm Feeling Lucky</Button>
          </div>
        )}

    </form>
  )
}

export default Search;
