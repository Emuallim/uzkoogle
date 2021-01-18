import React from 'react';
import './SearchPage.css';
import { useStateValue } from "./StateProvider";

// https://developers.google.com/custom-search/v1/using_rest
// my custom api: AIzaSyCrFCbux3DyPs2lj9h_ir9YHTIUwWrREWI
// free limit of 100 searches a day

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
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
