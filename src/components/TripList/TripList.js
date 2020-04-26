import React from 'react';
import styles from './TripList.module.css'

import TripListItem from "./TripListItem"
import firebase from "firebase";

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
      <div className={styles.tripList_container}>
        {this.state.tripList.map(item => (
          <TripListItem tripListData={item} key={item.id}/>
        ))}
      </div>
    )
  } 
}

export default TripList;