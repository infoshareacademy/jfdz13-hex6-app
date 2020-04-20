import React from 'react';
import styles from './TripList.module.css'

import TripListItem from "./TripListItem"

class TripList extends React.Component {
  constructor () {
    super ();
    this.state = {
      tripList: [],
    };
}

componentDidMount () {
  fetch('https://hex6-app.firebaseio.com/TripList.json')
    .then(results => results)
    .then(results => results.json())
    .then(tripList => this.setState({tripList}))
    .then(console.log(this.state))
};

render () {
  const { tripList } = this.state;
    return (
      <div className={styles.tripList_container}>
        {tripList.map(item => (
          <TripListItem tripListData={item} key={item.id}/>
        ))}
      </div>
    )
  } 
}

export default TripList;