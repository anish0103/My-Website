import {React, useEffect, useState} from "react";
import { NavLink } from "react-router-dom";
import AOS from 'aos';

import './CSS/navigation.css'
import "aos/dist/aos.css";
import NavigationButton from '../Pages/images/navigationbutton.png';
import CloseButton from '../Pages/images/closebutton.png'

const Navigation = () => {

  const[show, setshow] = useState(false)

  useEffect(() => {
    AOS.init({
        offset: 210,
        delay: 300,
        duration: 1000,
    });
}, []);

const showhandler = () => {
  if(show===false) {
    setshow(true)
  } else {
    setshow(false)
  }
}

const closeslider = () => {
  setshow(false)
}

if(show===true) {
  return (
    <div className='phonenavigation'>
      <ul>
        <img onClick={showhandler} src={CloseButton} alt='close'/>
        <li><a><NavLink onClick={closeslider} activeClassName='active' to="/" exact>Home</NavLink></a></li>
        <li><a><NavLink onClick={closeslider} activeClassName='active' to="/About/" exact>About</NavLink></a></li>
        <li><a><NavLink onClick={closeslider} activeClassName='active' to="/Work/" exact>Work</NavLink></a></li>
        <li><a><NavLink onClick={closeslider} activeClassName='active' to="/Contact/" exact>Contact Me</NavLink></a></li>
      </ul>
    </div>
  );
}

  return (
    <div className='navigation'>
      <ul data-aos={"fade-left"}>
        <img onClick={showhandler} src={NavigationButton}/>
        <li><a><NavLink activeClassName='active' to="/" exact>Home</NavLink></a></li>
        <li><a><NavLink activeClassName='active' to="/About/" exact>About</NavLink></a></li>
        <li><a><NavLink activeClassName='active' to="/Work/" exact>Work</NavLink></a></li>
        <li><a><NavLink activeClassName='active' to="/Contact/" exact>Contact Me</NavLink></a></li>
      </ul>
    </div>
  );
}

export default Navigation;
