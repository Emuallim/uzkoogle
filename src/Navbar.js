import React, { useState } from 'react';
import './Navbar.css';
import DehazeIcon from '@material-ui/icons/Dehaze';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { Link } from "react-router-dom";
import { SidebarData } from './SidebarData';

function Navbar() {
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)
  return (
    <div>
      <div className="navbar">
        <Link to="#" className='menu-bars'>
          <DehazeIcon style={{ fontSize: 28 }} onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items'>
          <li className='navbar-toggle'>
            <Link to='#' className='menu-bars'>
              <HighlightOffIcon />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
