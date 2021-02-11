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
import DehazeIcon from '@material-ui/icons/Dehaze';
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
      <div className='sideMenu'>
        <a href="#Product" class="nav-link">Product</a>
        <a href="#Basic_CSS" class="nav-link">Basic CSS</a>
        <a href="#Visual_Design" class="nav-link">Visual Design</a>
        <a href="#Accessibility" class="nav-link">Accessibility</a>
        <a href="#Web_Design" class="nav-link">Web Design</a>
        <a href="#CSS_Flexbox" class="nav-link">CSS Flexbox</a>
        <a href="#CSS_Grid" class="nav-link">CSS Grid</a>
        <a href="#WD_Projects" class="nav-link">WD Projects</a>
        <a href="#Tribute" class="nav-link">Tribute</a>
        <a href="#Survey" class="nav-link">Survey</a>
        <a href="#Product" class="nav-link">Product</a>
        <a href="#Tech_Doc" class="nav-link">Tech Doc</a>
        <a href="#Portfolio" class="nav-link">Portfolio</a>
      </div>


      {/* TOP THREE -------------------- */}
      <div className='burger'>
        <DehazeIcon style={{ fontSize: 28 }} />
      </div>
      <div className="searchPage_logoDiv">
        <Link to="/">
          <img className='searchPage_logoImg'
            src={process.env.PUBLIC_URL + '/googlemini.png'} />
        </Link>
      </div>
      <div className='searchPage_login'>
        <AppsIcon className="appsIcon" />
        <Avatar />
      </div>
      <div className="searchPage_search">
        <Search hideButtons />
      </div>



      {/* OPTIONS -------------------- */}
      <div className='searchPage_options-leftMargin'></div>
      <div className="searchPage_options">
        <div className="searchPage_optionsLeft">
          <div className="searchPage_option">
            <SearchIcon style={{ fontSize: 20 }} />
            <Link to="/all">All</Link>
          </div>
          <div className="searchPage_option">
            <ImageIcon style={{ fontSize: 20 }} />
            <Link to="/images">Images</Link>
          </div>
          <div className="searchPage_option">
            <DescriptionIcon style={{ fontSize: 20 }} />
            <Link to="/news">News</Link>
          </div>
          <div className="searchPage_option">
            <PlayCircleFilledWhite style={{ fontSize: 20 }} />
            <Link to="/videos">Videos</Link>
          </div>

          <div className="searchPage_option">
            <MoreVertIcon style={{ fontSize: 20 }} />
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
      <div className='searchPage_options-rightMargin'></div>


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
          <div className='searchPage_gooogle'>
            <img className='searchPage_gooogleImg' src={process.env.PUBLIC_URL + '/goooogle.jpg'} />
            <ul>
              <li><a href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">4</a></li>
              <li><a href="#">5</a></li>
              <li><a href="#">6</a></li>
              <li><a href="#">7</a></li>
              <li><a href="#">8</a></li>
              <li><a href="#">9</a></li>
              <li><a href="#">10</a></li>
              <li><a href="#">Next</a></li>
            </ul>
          </div>
        </div>
      )}

      <div className="searchPage_footBeg"></div>
      <div className="searchPage_footMid">
        <div className='searchPage_footMid-child'>
          <div>
            <span>Uzbekistan | </span>
            <span>Tashkent - From your Internet adress - Use precise location - </span>
            <a href='#'>Learn more</a>
          </div>
          <ul>
            <li><a href="#">Help</a></li>
            <li><a href="#">Send Feedback</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms</a></li>
          </ul>
        </div>
      </div>
      <div className="searchPage_footEnd"></div>
    </div>
  )
}

// function openNav() {
//   document.getElementsByClassName("navbar").style.width = "250px";
//   document.getElementsByClassName("main-doc").style.marginLeft = "250px";
//   // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
// }

// function closeNav() {
//   document.getElementById("navbar").style.width = "0";
//   document.getElementById("main-doc").style.marginLeft = "0";
//   document.body.style.backgroundColor = "white";
// }

export default SearchPage
