import React from "react";
import ParksMap from './components/ParksMap/ParksMap';
import WelcomePage from './components/WelcomePage/WelcomePage';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';




const App = () => {
  return (
    <div className='app'>
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