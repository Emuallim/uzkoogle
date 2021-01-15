import React, { useState } from 'react';
import './Search.css';
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";

function Search() {
  // state = variables in react
  const [input, setInput] = useState('');
  // whatever you type in the search, goes into "input"
  const search = e => {
    e.preventDefault(); //stops page refresh
    // how to trigger the "Google Search" key when you hit enter
    console.log("You Entered >>", input);
  }

  // document.addEventListener("keyup", (e) => {
  //   if (e.keyCode == 13) {
  //     console.log("you hit Enter");
  //   }
  // })

  return (
    <form className="search">
      <div className="search_input">
        <SearchIcon className="search_inputIcon" />
        <input value={input} onChange={e => setInput(e.target.value)} />
        {/* whatever you type in is captured in the state above */}
        <MicIcon />
      </div>
      <div className="search_btns">
        <Button type='submit' onClick={search} variant="outlined">Google Search</Button>
        <Button onClick={search} variant="outlined">I'm Feeling Lucky</Button>
      </div>
    </form>
  )
}

export default Search;
