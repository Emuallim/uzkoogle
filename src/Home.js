import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
// we couda used <a> but it refreshes the page
// but this does it w/o refresh

function Home() {
  return (
    <div className="home">
      <div className="home_header">
        <div className="home_headerLeft">
          <Link to='/about'>About</Link>
          <Link to='/store'>Store</Link>
          {/* link */}
        </div>
        <div className="home_headerRight">
          <Link to='/gmail'>Gmail</Link>
          <Link to='/images'>Images</Link>
          <AppsIcon className="apps" />
          <Avatar />
          {/* Avatar */}
        </div>
      </div>
      <div className="home_body">home body here</div>
    </div>
  )
}

export default Home;
