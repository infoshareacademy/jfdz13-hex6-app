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

componentDidMount () {
  fetch('/tripListData.json')
    .then(results => results)
    .then(results => results.json())
    .then(tripList => this.setState({tripList}))
};

render () {
  const { tripList } = this.state;
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