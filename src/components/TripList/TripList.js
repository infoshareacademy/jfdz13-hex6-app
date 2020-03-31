import React, { Component } from 'react';
// import tripListData from './TripListData.js'


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
      <>
        {tripList.map(item => (
          <TripListItem tripListData={item} key={item.id}/>
        ))}
      </>
    )
  } 
}

export default TripList;