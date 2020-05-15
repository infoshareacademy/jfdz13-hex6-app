import React from 'react';
import styles from '../TripList/TripList.module.css'

import FavouriteTrips from "./FavouriteTripsItem"
import UserProvider from "../providers/UserProvider";

class FavouriteTripsMain extends React.Component {
  constructor () {
    super ();
    this.state = {
      tripList: [],
    };
}

fetchData = () => {
  fetch('https://hex6-app.firebaseio.com/TripList.json')
      .then(resp => resp.json())
      .then(objectTripList => {
          const keys = Object.keys(objectTripList);
          const arrayTripList = keys.map(key => {
              return {
                  id: key,
                  ...objectTripList[key]
              }
          });

          this.setState({
            tripList: arrayTripList
          })
      })
};

componentDidMount() {
  this.fetchData();
}

render () {
    return (
      <UserProvider>
        {user => {
        return <div className={styles.tripList_container}>
          {this.state.tripList.map(item => (
            <FavouriteTrips tripListData={item} key={item.id} user={user} />
          ))}
        </div>
        }}
      </UserProvider>
    )
  } 
}

export default FavouriteTripsMain;