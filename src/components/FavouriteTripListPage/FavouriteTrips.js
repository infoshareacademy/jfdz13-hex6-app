import React from "react";
import ComplexGrid from '../TripList/TripListItem'

const FavouriteTripList = props => {

    console.log('favouriteTripList: ', props.favouriteTripList);
  return (
        <>
          {props.favouriteTripList.map(item => (
            <ComplexGrid tripListData={item} key={item.id}  handleAddToFavourites={props.handleAddToFavourites} />
          ))}
        </>
  )
};

export default FavouriteTripList;


