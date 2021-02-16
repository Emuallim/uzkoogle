import React, { useState } from 'react';
import './Navbar.css';
import DehazeIcon from '@material-ui/icons/Dehaze';
import { Link } from "react-router-dom";
import { SidebarData } from './SidebarData';
// import HighlightOffIcon from '@material-ui/icons/HighlightOff';

function Navbar() {
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)

  const newPage = () => { window.open("/") }

  return (
    <div>
      <div className="navbar">
        <Link to="#" className='menu-bars'>
          <DehazeIcon style={{ fontSize: 28 }} onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
          <li className='navbar-toggle'>
            <Link to="#" className='menu-bars'>
              <img src={process.env.PUBLIC_URL + '/googlemini.png'} />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName} >
                <Link to={item.path} target='_blank' >
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div >
  )
}

export default Navbar
