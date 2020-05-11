import React from 'react';
import styles from './TripList.module.css'

import TripListItem from "./TripListItem"
import firebase from "firebase";
import UserProvider from "../providers/UserProvider";

class TripList extends React.Component {

state = {
  tripList: [],
};

componentDidMount() {
  this.fetchData();
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

render () {
    return (
      <UserProvider>
        {user => {
        return <div className={styles.tripList_container}>
          {tripList.map(item => (
            <TripListItem tripListData={item} key={item.id} user={user} />
          ))}
        </div>
        }}
      </UserProvider>
    )
  } 
}

export default TripList;