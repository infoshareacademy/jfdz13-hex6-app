import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ButtonAppBar from "./components/Navigation/Navigation";
import CenteredGrid from "./components/TripList/TripList";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import UserPanel from "./components/UserPanel/UserPanel";
import AddTripPanel from "./components/AddTrip/AddTripPanel";
import Register from "./components/Register/Register";
import FavouriteTripsMain from './components/FavouriteTripListPage/FavouriteTripsMain';

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
                <Route path="/sign-up">
                  <Login isSignUp />
                </Route>
                <Route path="/sign-in">
                  <Login />
                </Route>
                <Route path="/components/Register/" component={Register} />
                <Route path="/components/UserPanel" component={UserPanel} />
                <Route path="/components/AddTrip" component={AddTripPanel} />
                <Route path="/components/FavouriteTripListPage" component={FavouriteTripsMain} />
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
