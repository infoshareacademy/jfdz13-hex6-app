import React from 'react';
import SegmentExampleRaised from "./components/TripList/TripList.js";
import { BrowserRouter, NavLink, Switch, Route} from "react-router-dom";
import SignIn from './components/test/SignIn.js';


function App() {
  return (
   
    <div className="App">
      <header>
        <BrowserRouter>
          <nav>
            <ul>
              <li><NavLink exact to="/"><span role="img">🏠</span> Home</NavLink></li>
              <li><NavLink to="/components/TripList/TripList">Trip List</NavLink></li>
              <li><NavLink to="/components/test/SignIn">SignIn</NavLink></li>
            </ul>
          </nav>
        
        <div className="container">
          <Switch>
            <Route path="/components/TripList" component={SegmentExampleRaised} />
            <Route path="/components/test/SignIn" component={SignIn} />
          </Switch>
        </div>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;