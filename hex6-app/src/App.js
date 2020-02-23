import React from 'react';

import './App.css';
import SegmentExampleRaised from "./components/TripList/TripList.js"

import { BrowserRouter, NavLink, Switch, Route} from "react-router-dom";


function App() {
  return (
   
    <div className="App">
      <header>
        <BrowserRouter>
          <nav>
            <ul>
              <li><NavLink exact to="/"><span role="img">🏠</span> Home</NavLink></li>
              <li><NavLink to="/components/TripList/TripList">Trip List</NavLink></li>
            </ul>
          </nav>
        
        <div className="container">
          <Switch>
            <Route path="/components/TripList" component={SegmentExampleRaised} />
          </Switch>
        </div>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
