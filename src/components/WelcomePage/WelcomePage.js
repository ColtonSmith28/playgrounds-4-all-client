import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/playground-512.svg'
import './WelcomePage.scss'

const WelcomePage = () => {
  return (
    <div className="welcome">
      <h1 className="welcome__header">Welcome to Parks 4 Kids</h1>

      <p className="welcome__copy">We were inspired by an <a className="welcome__link" href="http://www.playgroundsforeveryone.com/">outdated NPR site</a> to put together a centralized database where the community could easily find access to parks.</p>

      <img className="welcome__logo" src={logo} alt="logo" />

      <NavLink to='/' className="welcome__link">
        <h2 className='welcome__app'>Start Here</h2>
      </NavLink>
    </div>
  );
};

export default WelcomePage;