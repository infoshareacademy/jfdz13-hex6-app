import React, { Component } from 'react';
// import tripListData from './TripListData.js'


import ComplexGrid from "./TripListGridContainer"

class CenteredGrid extends Component {
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
}

render () {
  const { tripList } = this.state;
  return (
    <>
      {tripList.map(item => (
        <ComplexGrid tripListData={item} key={item.id}/>
      ))}
    </>
  )
} }

export default CenteredGrid;