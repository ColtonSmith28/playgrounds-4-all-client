import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/playground-512.svg'
import './WelcomePage.scss'
import ParkStats from "../ParkStats/ParkStats";
import Credits from "../Credits/Credits";
import Quote from "../Quote/Quote";

const WelcomePage = () => {
  return (
    <div className="welcome">
      <h1 className="welcome__header">Welcome to Parks 4 Kids</h1>
      <Quote />
      <img className="welcome__logo" src={logo} alt="logo" />
      <NavLink to='/' className="welcome__link">
        <h2 className='welcome__app'>Start Here</h2>
      </NavLink>
      <ParkStats />
      <Credits />
    </div>

  );
};

export default WelcomePage;