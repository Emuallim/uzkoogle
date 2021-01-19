import React from 'react';
import './SearchPage.css';
import { useStateValue } from "./StateProvider";
import useGoogleSearch from './useGoogleSearch';
import Response from "./response";
import { Link } from "react-router-dom";
import Search from "./Search";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";
// left off at 02:52:00

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
        <Link to="/">
          <img className="searchPage_logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" />
        </Link>
        <div className='searchPage_headerBody'>
          <Search hideButtons />
          <div className="searchPage_options">
            <div className="searchPage_optionsLeft">
              <div className="searchPage_option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage_option">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="searchPage_option">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>
              <div className="searchPage_option">
                <LocalOfferIcon />
                <Link to="/shopping">shopping</Link>
              </div>
              <div className="searchPage_option">
                <RoomIcon />
                <Link to="/maps">maps</Link>
              </div>
              <div className="searchPage_option">
                <MoreVertIcon />
                <Link to="/more">more</Link>
              </div>
            </div>


            <div className="searchPage_optionsRight">
              <div className="searchPage_option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchPage_option">
                <Link to="/tool">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {term && (
        // render the results ONLY if there is search term
        <div className='searchPage_results'>
          {/* asdfdasf */}
        </div>
      )}
    </div>
  )
}

export default SearchPage
