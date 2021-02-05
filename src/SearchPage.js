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
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
import { PlayCircleFilledWhite } from '@material-ui/icons';


// https://cse.google.com/cse/create/new

function SearchPage() {
  const [{ term = 'tesla' }, dispatch] = useStateValue();
  // Live GOOGLE API call which is INSANE!
  // const { data } = useGoogleSearch(term);

  const data = Response; //copied api call from response.js
  // uncomment useGoogleSearch once done with the page

  // console.log(data);
  return (
    <div className='searchPage'>
      {/* TOP THREE -------------------- */}
      <div className="searchPage_logoDiv">
        <Link to="/">
          <img className='searchPage_logoImg'
            src={process.env.PUBLIC_URL + '/googlemini.png'} />
        </Link>
      </div>
      <div className="searchPage_search">
        <Search hideButtons />
      </div>
      <div className='searchPage_login'>
        <AppsIcon className="appsIcon" />
        <Avatar />
      </div>


      {/* OPTIONS -------------------- */}
      <div className="searchPage_options">
        <div className="searchPage_optionsLeft">
          <div className="searchPage_option">
            <SearchIcon />
            <Link to="/all">All</Link>
          </div>
          <div className="searchPage_option">
            <ImageIcon />
            <Link to="/images">Images</Link>
          </div>
          <div className="searchPage_option">
            <DescriptionIcon />
            <Link to="/news">News</Link>
          </div>
          <div className="searchPage_option">
            <PlayCircleFilledWhite />
            <Link to="/videos">Videos</Link>
          </div>

          <div className="searchPage_option">
            <MoreVertIcon />
            <Link to="/more">More</Link>
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

      {/* RESULTS -------------------------- */}
      {term && (
        // render the results ONLY if there is search term
        <div className='searchPage_results'>
          <p className="searchPage_resultsCount">
            {/* About 3000000 results (0.3 seconds) for tesla */}
          About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>

          {data?.items.map(item => (
            <div className='searchPage_result'>
              <a href={item.link}>
                {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                  <img className="searchPage_resultImage"
                    src={
                      item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src
                    } alt="" />
                )}
                {item.displayLink}
              </a>
              <a className='searchPage_resultTitle'
                href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className='searchPage_resultSnippet'>
                {item.snippet}
              </p>
            </div>
          ))}
        </div>
      )}

      <div className="searchPage_footer">
        <h1>Footer</h1>
      </div>
    </div>
  )
}

export default SearchPage
