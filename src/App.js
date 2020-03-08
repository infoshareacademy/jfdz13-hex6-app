import React from 'react';
import './App.css';
import { BrowserRouter, NavLink, Switch, Route} from "react-router-dom";
import Navigation from "./components/Navigation/Navigation"
import CenteredGrid from "./components/TripList/TripList"

function App() {
  return (
   
    <div className="App">
      <header>
        <BrowserRouter>
          <nav>
            <ul>
              <li><NavLink exact to="/"><span aria-label="home" role="img">🏠</span> Home</NavLink></li>
              <li><NavLink to="/components/Navigation/Navigation">Navigation</NavLink></li>
              <li><NavLink to="/components/TripList/TripList">Trip List</NavLink></li>
            </ul>
          </nav>
        
        <div className="container">
          <Switch>
            <Route path="/components/Navigation" component={Navigation} />
            <Route path="/components/TripList" component={CenteredGrid} />
          </Switch>
        </div>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;