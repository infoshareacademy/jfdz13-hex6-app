import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, NavLink, Switch, Route} from "react-router-dom";
import Navigation from "./components/Navigation/Navigation"
import TripList from "./components/TripList/TripList"
import FavouriteTripList from './components/FavouriteTripListPage/FavouriteTrips'

class App extends Component {


    state = {
        tripList: [],
        favouriteList: []
    };

    componentDidMount() {
        fetch('/tripListData.json')
            .then(results => results)
            .then(results => results.json())
            .then(tripList => this.setState({tripList}))
    }

    handleAddToFavourites = trip => {
        const {favouriteList} = this.state;

        if (!favouriteList.some(favouriteTrip => favouriteTrip.id === trip.id)) {
            this.setState({
                ...this.state,
                favouriteList: [...this.state.favouriteList, trip]
            })
        }
    }

    render() {
        return (
            <div className="App">
                <header>
                    <BrowserRouter>
                        <nav>
                            <ul>
                                <li><NavLink exact to="/"><span aria-label="home" role="img">🏠</span> Home</NavLink>
                                </li>
                                <li><NavLink to="/components/Navigation/Navigation">Navigation</NavLink></li>
                                <li><NavLink to="/components/TripList/TripList">Trip List</NavLink></li>
                                <li><NavLink to="/components/FavouriteTripListPage/FavouriteTrips">Favourite Trips
                                    List</NavLink></li>
                            </ul>
                        </nav>

                        <div className="container">
                            <Switch>
                                <Route path="/components/Navigation" component={Navigation}/>
                                <Route
                                    path="/components/TripList"
                                    component={() =>
                                        <TripList
                                            tripList={this.state.tripList}
                                            handleAddToFavourites={this.handleAddToFavourites}
                                        />
                                    }
                                />
                                <Route
                                    path="/components/FavouriteTripListPage/FavouriteTrips"
                                    component={() =>
                                        <FavouriteTripList
                                            favouriteTripList={this.state.favouriteList}
                                            handleAddToFavourites={this.handleAddToFavourites}
                                        />
                                    }
                                />
                            </Switch>
                        </div>
                    </BrowserRouter>
                </header>
            </div>
        )
    };
}

export default App;