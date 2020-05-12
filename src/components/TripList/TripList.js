import React from 'react';
import styles from './TripList.module.css'

import TripListItem from "./TripListItem"
import UserProvider from "../providers/UserProvider";

class TripList extends React.Component {
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
            <TripListItem tripListData={item} key={item.id} user={user} />
          ))}
        </div>
        }}
      </UserProvider>
    )
  } 
}

export default TripList;