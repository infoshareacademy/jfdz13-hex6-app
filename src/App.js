import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import ButtonAppBar from "./components/Navigation/Navigation";
import CenteredGrid from "./components/TripList/TripList"
import Login from "./components/Login/Login"
import UserPanel from "./components/UserPanel/UserPanel"


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
                <Route path="/"/>  
                <Route path="/components/TripList" component={CenteredGrid} />
                <Route path="/components/UserPanel" component={UserPanel} />

              </Switch>
            </div>
          </ButtonAppBar>
        </BrowserRouter>
      </header>
    </div>
  );
}
export default App;