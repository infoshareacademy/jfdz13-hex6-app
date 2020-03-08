import React from 'react';
import { BrowserRouter, NavLink, Switch, Route} from "react-router-dom";
import Navigation from "./components/Navigation/Navigation"
import CenteredGrid from "./components/TripList/TripList"

function MyBrowserRouter() {
  return (
   
    <div className="MyBrowserRouter">
        <BrowserRouter>
          <nav>
            <ul>
              <li><NavLink exact to="/"><span aria-label="home" role="img">🏠</span> Home</NavLink></li>
              <li><NavLink to="/components/Navigation/Navigation">Navigation</NavLink></li>
              <li><NavLink to="/components/TripList/TripList">TripList</NavLink></li>
            </ul>
          </nav>
        
        <div className="container">
          <Switch>
            <Route path="/components/Navigation" component={Navigation} />
            <Route path="/components/TripList" component={CenteredGrid} />
          </Switch>
        </div>
        </BrowserRouter>
    </div>
  );
}

export default MyBrowserRouter;