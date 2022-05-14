import React from "react";
import ParksMap from './components/ParksMap/ParksMap';
import WelcomePage from './components/WelcomePage/WelcomePage';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from "./components/Header/Header";




const App = () => {
  return (
    <div className='app'>
      <Header />
        <Router>
          <Switch>
            <Route path='/welcome' exact component={WelcomePage} />
            <Route path="/" component={ParksMap} />
          </Switch>
        </Router>
    </div>
  );
};

export default App;