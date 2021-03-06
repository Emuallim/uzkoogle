import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
import Search from './Search';

// we coud've used <a> but it refreshes the page
// but this does it without refresh

function Home() {
  return (
    <div className="home">
      <div className="home_header">
        <Link to='/gmail'>Gmail</Link>
        <Link to='/images'>Images</Link>
        <AppsIcon className="appsIcon" />
        <Avatar />
      </div>
      <div className="home_body">
        <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" />
        <div className="home_inputContainer">
          <Search />
        </div>
      </div>
    </div>
  )
}

export default Home;
