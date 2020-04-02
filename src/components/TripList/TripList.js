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
  fetch('/tripListData.json')
    .then(results => results)
    .then(results => results.json())
    .then(tripList => this.setState({tripList}))
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