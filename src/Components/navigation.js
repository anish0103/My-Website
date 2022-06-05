import { React } from "react";
import { NavLink } from "react-router-dom";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import DraftsRoundedIcon from '@mui/icons-material/DraftsRounded';

import './CSS/navigation.css'

const Navigation = () => {
  return (
    <div className="navigation-maincontainer">
      <NavLink exact activeClassName="navigationactive" to="/">
        <HomeRoundedIcon />
        <h2 className="navigation-title">Home</h2>
      </NavLink>
      <NavLink activeClassName="navigationactive" to="/about">
        <AccountBoxRoundedIcon />
        <h2 className="navigation-title">About</h2>
      </NavLink>
      <NavLink activeClassName="navigationactive" to="/work">
        <WorkRoundedIcon />
        <h2 className="navigation-title">Portfolio</h2>
      </NavLink>
      <NavLink activeClassName="navigationactive" to="/contact">
        <DraftsRoundedIcon />
        <h2 className="navigation-title">Contact</h2>
      </NavLink>
    </div>
  );
}

export default Navigation;
