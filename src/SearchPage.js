import React from 'react';
import './SearchPage.css';
import { useStateValue } from "./StateProvider";
import useGoogleSearch from './useGoogleSearch';
import Response from "./response";
// left off at 02:33:00

// https://cse.google.com/cse/create/new

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();

  // LIVE GOOGLE API CALL which is INSANE!
  // const { data } = useGoogleSearch(term);
  const data = Response; //copied api call from response.js
  // uncomment useGoogleSearch once done with the page

  console.log(data);
  return (
    <div className='searchPage'>

      <div className='searchPage_header'>
        <h1>{term}</h1>
      </div>
      <div className='searchPage_results'>results</div>
    </div>
  )
}

export default SearchPage
