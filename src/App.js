import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import ButtonAppBar from "./components/Navigation/Navigation";
import CenteredGrid from "./components/TripList/TripList"
import Login from "./components/Login/Login"
import Dashboard from "./components/Dashboard/Dashboard"


function App() {
  return (
   
    <div className="App">
      <header>
        <BrowserRouter>
          <ButtonAppBar>
            <div className="container">
              <Switch>
                <Route path="/components/TripList/" component={CenteredGrid} />
                <Route path="/components/Login/" component={Login} />
                <Route path="/" component={Dashboard} />  
              </Switch>
            </div>
          </ButtonAppBar>
        </BrowserRouter>
      </header>
    </div>
  );
}
export default App;