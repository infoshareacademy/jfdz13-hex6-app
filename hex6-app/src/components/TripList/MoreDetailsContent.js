import React from 'react';

export default function MoreDetailsContent ({tripListData}) {
    return (
        <div> 
            <div>CITY: {tripListData.city}</div>
            <div>FOR: {tripListData.numberOfPeople}</div>
            <div>DURING: {tripListData.tripLengt}</div>
            <div>IN: {tripListData.seasonTime}</div>
            <div>FOR: {tripListData.price} PLN</div>
            <div>{tripListData.description}</div>
        </div>
    );
}
