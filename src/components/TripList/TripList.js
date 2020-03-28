import React, {Component} from 'react';
// import tripListData from './TripListData.js'


import TripListItem from "./TripListItem"

class TripList extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         tripList: [],
    //         favouriteList: []
    //     };
    // }
    //
    // componentDidMount() {
    //     fetch('/tripListData.json')
    //         .then(results => results)
    //         .then(results => results.json())
    //         .then(tripList => this.setState({tripList}))
    // }
    //
    // handleAddToFavourites = trip => {
    //     const {favouriteList} = this.state;
    //
    //     if (!favouriteList.some(favouriteTrip => favouriteTrip.id === trip.id)) {
    //         this.setState({
    //             ...this.state,
    //             favouriteList: [...this.state.favouriteList, trip]
    //         })
    //     }
    // }

    render() {
        const {tripList} = this.props;
        console.log('tripList: ', tripList);
        return (
            <>
                {tripList.map(item => (
                    <TripListItem tripListData={item} key={item.id} handleAddToFavourites={this.props.handleAddToFavourites} />
                ))}
            </>
        )
    }
}

export default TripList;